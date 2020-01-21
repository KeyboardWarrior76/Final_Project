import React, { Component } from 'react';
import axios from 'axios';

const ProjectContext = React.createContext();
export const ProjectConsumer = ProjectContext.Consumer;

export default class ProjectProvider extends Component {

  state = { project: {}, estimate: 0, isNew: true,
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
        ui_level: '', size: ''
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
      project: {
        name: '', days: false, total: false
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

  estimateTotal = () => {

  }

  createProjectAndCategories = (id) => {
    axios.post(`/api/users/${id}/projects`, this.state.project)
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

    }

  initExistingProject = () => {

  }

  updateProject = (category, property) => {

  }

  calculate = (category, item) => {
    const {estimate, categories} = this.state
    const newitem = categories[category][item]
    if (newitem === false)
      this.setState({ estimate: (estimate + 1) })
    else this.setState({ estimate: (estimate - 1) })
  }

  toggleCategoryItem = (category, item) => {
    const{ categories } = this.state
    const newitem = !categories[category][item]
    this.calculate(category, item)
    this.setState({
      categories: {
        ...categories,
        [category]: {
          ...categories[category],
          [item]: newitem,
        }
      }
    })
  }

  render(){
    return(
      <ProjectContext.Provider value={{
        ...this.state,
        toggleCategoryItem: this.toggleCategoryItem,
        createProjectAndCategories: this.createProjectAndCategories,
      }}>
        { this.props.children }
      </ProjectContext.Provider>
    )
  }
}
