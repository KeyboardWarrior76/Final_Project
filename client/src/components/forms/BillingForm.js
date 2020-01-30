import React, {Component} from 'react';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class BillingForm extends Component {

  state = { button: {
    one: 'estimatorButton', two: 'estimatorButton', three: 'estimatorButton',
    four: 'estimatorButton', five: 'estimatorButton'
    }
  }

  toggle = (unique, item) => {
    const{ button } = this.state
    if (unique === 'estimatorButton') {
      this.setState({ button: {...button, [item]: 'selectedButton'} })
    }
    else if (unique === 'selectedButton') {
      this.setState({ button: {...button, [item]: 'estimatorButton'} })
    }
  }

  render() {

    const{value: {toggleCategoryItem}} = this.props
    const { button: {one, two, three, four, five} } = this.state

  return(
      <>
        <h1 id="ecommerce" style={{paddingTop: '60px'}}>Billing & eCommerce</h1>
        <div align='center' className='grid-container'>

          <fieldset>
            <legend>Subscription Plans</legend>
            <button className={one} onClick={() => {toggleCategoryItem('billing', 'subscription'); this.toggle(one, 'one');}}>

            </button>
          </fieldset>

          <fieldset>
            <legend>Payment Processing</legend>
            <button className={two} onClick={() => {toggleCategoryItem('billing', 'payment_processing'); this.toggle(two, 'two');}}>

            </button>
          </fieldset>

          <fieldset>
            <legend>Shopping Cart</legend>
            <button className={three} onClick={() => {toggleCategoryItem('billing', 'shopping_cart'); this.toggle(three, 'three');}}>

            </button>
          </fieldset>

          <fieldset>
            <legend>User Marketplace</legend>
            <button className={four} onClick={() => {toggleCategoryItem('billing', 'user_marketplace'); this.toggle(four, 'four');}}>

            </button>
          </fieldset>

          <fieldset>
            <legend>Product Management</legend>
            <button className={five} onClick={() => {toggleCategoryItem('billing', 'product_management'); this.toggle(five, 'five');}}>

            </button>
          </fieldset>

        </div>
      </>
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
