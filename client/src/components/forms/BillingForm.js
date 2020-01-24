import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class BillingForm extends Component {

  render() {

    const{value: {toggleCategoryItem}} = this.props

  return(
      <div align='center'>
        <h3><p>Billing & eCommerce</p></h3>
        <Fab variant="extended" onClick={() => toggleCategoryItem('billing', 'subscription_plan')}>
          Subscription Plans
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('billing', 'payment_processing')}>
          Payment Processing
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('billing', 'shopping_cart')}>
          Shopping Cart
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('billing', 'user_marketplace')}>
          User Marketplace
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('billing', 'product_management')}>
          Product Management
        </Fab>
      </div>
    )
  }
}

export default class ConnectedBillingForm extends React.Component {
  render() {
    return (
      <ProjectConsumer>
        { value => <BillingForm {...this.props} value={value}/>}
      </ProjectConsumer>
    )
  }
}
