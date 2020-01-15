import React, { Component } from 'react';
import axios from 'axios';

const ProjectContext = React.createContext();
export const ProjectConsumer = AuthContext.Consumer;
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
      },
    }
  }

  estimateTotal = () => {

  }

  createProject = () => {

  }

  createCategory = () => {

  }

  initExistingProject = () => {

  }

  updateProject = () => {

  }

  toggleCategoryItem = () => {

  }

  render(){
    return(
      <ProjectContext.Provider value={{
        ...this.state,
      }}>
        { this.props.children }
      </ProjectContext.Provider>
    )
  }
}
