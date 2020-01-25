import React, { Component } from 'react';
import axios from 'axios';

const ProjectContext = React.createContext();
export const ProjectConsumer = ProjectContext.Consumer;

export default class ProjectProvider extends Component {

  state = { project: {name: '', total: 0, days: 0}, isNew: true, cat: {},
    categories: {
      account: {
        email_pass: false, facebook: false,
        twitter: false, google: false,
        linkedin: false, invitation: false,
        github: false, multi_account: false,
        subdomain: false, custom: false
      },
      analytic: {
        cms: false, admin: false,
        moderation: false, intercom: false,
        usage: false, crash_report: false,
        performance: false, multilingual: false
      },
      app: {
        size: 'small', ui_level: 'simple'
      },
      billing: {
        subscription_plan: false, payment_processing: false,
        shopping_cart: false, user_marketplace: false,
        product_management: false
      },
      date_location: {
        calendar: false, display: false,
        map_display: false, booking: false
      },
      integration: {
        third_party: false, api_integrate: false,
        messaging: false, phone_number: false
      },
      security: {
        certificate: false, factor_authentication: false,
        dos_protection: false
      },
      social: {
        facebook_graph: false, sharing: false,
        forums: false, messaging: false
      },
      user_content: {
        dashboard: false, activity_feed: false,
        uploading: false, profile: false,
        transactional_email: false, tags: false,
        rating: false, audio_video: false, searching: false
      }
    }
  }

  createProjectAndCategories = (id) => {
    axios.post(`/api/user/${id}/projects`, this.state.project)
      .then( res => {
        this.setState({ project: res.data })
        return axios.post(`/api/projects/${res.data.id}/categories`, this.state.categories)
      })
      .then(res => {
        this.setState({ categories: res.data })
      })
      .catch( err => {
        console.log(err)
      })
      this.calculateEstimate()
    }

  initExistingProject = () => {

  }

  updateProject = (category, property) => {

  }

  calculateEstimate = () => {
    const {project, categories, cat} = this.state;
    this.setState({ cat:
      {...categories.account, ...categories.analytic,
      ...categories.billing, ...categories.date_location,
      ...categories.integration, ...categories.security,
      ...categories.social, ...categories.user_content}
    })
    Object.keys(cat).map((value, index) => {
    if (value) {
      this.setState({ project: { ...project, total: (project.total + 1) } })
      }
    else if (value === false){
      return value
    }
    else
      return value
    })
  }

  toggleCategoryItem = (category, item) => {
    const{ categories } = this.state
    const newitem = !categories[category][item]
    this.setState({
      categories: {
        ...categories,
        [category]: {
          ...categories[category],
          [item]: newitem,
        }
      },
    })
    this.calculateEstimate()
  }

  sizeSet = (size) => {
    const{categories} = this.state
    this.setState({ categories: { ...categories, app: { ...categories.app, size: size } } })
  }
  uiSet = (ui_level) => {
    const{categories} = this.state
    this.setState({ categories: { ...categories, app: { ...categories.app, ui_level: ui_level } } })
  }

  emailSubmit = (email) => {
    const { project, categories } = this.state
    const params = {project, categories, email}
    axios.post('/api/project_senders', params)
    .then( res => {
      return res.data
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() {

    return(
      <ProjectContext.Provider value={{
        ...this.state,
        toggleCategoryItem: this.toggleCategoryItem,
        createProjectAndCategories: this.createProjectAndCategories,
        sizeSet: this.sizeSet,
        uiSet: this.uiSet,
        emailSubmit: this.emailSubmit
      }}>
        { this.props.children }
      </ProjectContext.Provider>
    )
  }
}

export { ProjectContext };
