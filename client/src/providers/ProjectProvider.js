import React, { Component } from 'react';
import axios from 'axios';

const ProjectContext = React.createContext();
export const ProjectConsumer = ProjectContext.Consumer;

export default class ProjectProvider extends Component {

  state = { project: {name: '', total: 0, ttt: 0, days: 0}, isNew: true, si: 1, ui: 1,
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
    }

  multiply = () => {
    const { project, si, ui, project: {ttt} } = this.state
    if ((si + ui) === 2) {
      this.setState({ project: {...project, total: ttt} })
    }
    else if ((si + ui) === 3) {
      this.setState({ project: {...project, total: (ttt * 1.5)} })
    }
    else if ((si + ui) === 4) {
      this.setState({ project: {...project, total: (ttt * 2)} })
    }
    else if ((si + ui) === 5) {
      this.setState({ project: {...project, total: (ttt * 2.5)} })
    }
    else if ((si + ui) === 6) {
      this.setState({ project: {...project, total: (ttt * 3)} })
    }
  }

  calculateEstimate = (category, item) => {
    const { project, categories } = this.state;
    if (categories[category][item] === true) {
      this.setState({ project: { ...project, ttt: (project.ttt + 635) } }, () => this.multiply())
    }
    else if (categories[category][item] === false) {
      this.setState({ project: { ...project, ttt: (project.ttt - 635) } }, () => this.multiply())
    }
  }

  toggleCategoryItem = (category, item) => {
    const{ categories } = this.state
    const newitem = !categories[category][item]
    this.setState({
      categories: {
        ...categories, [category]: { ...categories[category], [item]: newitem }
      }
    }, () => this.calculateEstimate(category, item))
  }

  sizeSet = (size) => {
    const { categories } = this.state;
    if (size === 'small') {
      this.setState({ si: 1, categories: { ...categories, app: { ...categories.app, size: 'small' } } })
    }
    else if (size === 'medium') {
      this.setState({ si: 2, categories: { ...categories, app: { ...categories.app, size: 'medium' } } })
    }
    else if (size === 'large') {
      this.setState({ si: 3, categories: { ...categories, app: { ...categories.app, size: 'large' } } })
    }
    setTimeout(() => {
      this.multiply()
    }, 50);
  }

  uiSet = (ui_level) => {
    const { categories } = this.state;
    if (ui_level === 'simple') {
      this.setState({ ui: 1, categories: { ...categories, app: { ...categories.app, ui_level: 'simple' } } })
    }
    else if (ui_level === 'detailed') {
      this.setState({ ui: 2, categories: { ...categories, app: { ...categories.app, ui_level: 'detailed' } } })
    }
    else if (ui_level === 'sophisticated') {
      this.setState({ ui: 3, categories: { ...categories, app: { ...categories.app, ui_level: 'sophisticated' } } })
    }
    setTimeout(() => {
      this.multiply()
    }, 50);
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
        emailSubmit: this.emailSubmit,
        calculateEstimate: this.calculateEstimate
      }}>
        { this.props.children }
      </ProjectContext.Provider>
    )
  }
}

export { ProjectContext };
