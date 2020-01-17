import React, { Component } from 'react';
import axios from 'axios';

const ProjectContext = React.createContext();
export const ProjectConsumer = ProjectContext.Consumer;

export default class ProjectProvider extends Component {

  state = { project: null, estimate: 0, isNew: true,
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

  componentDidMount() {
    axios.get('/api/projects')
      .then( res => {
        this.setState({ project: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  estimateTotal = () => {

  }

  createProject = (project) => {
    axios.post('/api/projects', project)
      .then( res => {
        // const { projects } = this.state
        // this.setState({ project: [...projects, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  createCategory = (category) => {
    axios.post(`/api/${category}s`, category)
      .then( res => {
        // const { categories } = this.state
        // this.setState({ categories: [...categories, res.data]})
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
        createProject: this.createProject,
        createCategory: this.createCategory
      }}>
        { this.props.children }
      </ProjectContext.Provider>
    )
  }
}
