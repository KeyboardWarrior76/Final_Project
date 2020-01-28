import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class BillingForm extends Component {

  state = { button: {
    one: 'default', two: 'default', three: 'default',
    four: 'default', five: 'default'
    }
  }

  toggle = (unique, item) => {
    const{ button } = this.state
    if (unique === 'default') {
      this.setState({ button: {...button, [item]: 'primary'} })
    }
    else if (unique === 'primary') {
      this.setState({ button: {...button, [item]: 'default'} })
    }
  }

  render() {

    const{value: {toggleCategoryItem}} = this.props
    const { button: {one, two, three, four, five} } = this.state

  return(
      <div id="ecommerce" align='center'>
        <h3><p>Billing & eCommerce</p></h3>
        <Fab variant="extended" color={one} onClick={() => {toggleCategoryItem('billing', 'subscription_plan'); this.toggle(one, 'one');}}>
          Subscription Plans
        </Fab>
        <Fab variant="extended" color={two} onClick={() => {toggleCategoryItem('billing', 'payment_processing'); this.toggle(two, 'two');}}>
          Payment Processing
        </Fab>
        <Fab variant="extended" color={three} onClick={() => {toggleCategoryItem('billing', 'shopping_cart'); this.toggle(three, 'three');}}>
          Shopping Cart
        </Fab>
        <Fab variant="extended" color={four} onClick={() => {toggleCategoryItem('billing', 'user_marketplace'); this.toggle(four, 'four');}}>
          User Marketplace
        </Fab>
        <Fab variant="extended" color={five} onClick={() => {toggleCategoryItem('billing', 'product_management'); this.toggle(five, 'five');}}>
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
