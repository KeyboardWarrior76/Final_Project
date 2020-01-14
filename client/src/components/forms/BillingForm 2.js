import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

export default class BillingForm extends Component {

  state = { subscription_plans: false, payment_processing: false, shopping_cart: false, user_marketplace: false, product_management: false }


  toggleSubscription = () => {
    this.setState({ subscription_plans: !this.state.subscription_plans })
  }

  togglePayment = () => {
    this.setState({ payment_processing: !this.state.payment_processing })
  }

  toggleShopping = () => {
    this.setState({ shopping_cart: !this.state.shopping_cart })
  }

  toggleUser = () => {
    this.setState({ user_marketplace: !this.state.user_marketplace })
  }

  toggleProduct = () => {
    this.setState({ product_management: !this.state.product_management })
  }

  render() {

  return(
      <div align='center'>
        <p>Billing</p>
        <Button onClick={this.toggleSubscription}><Avatar>Su</Avatar></Button>
        <Button onClick={this.togglePayment}><Avatar>Pa</Avatar></Button>
        <Button onClick={this.toggleShopping}><Avatar>Sh</Avatar></Button>
        <Button onClick={this.toggleUser}><Avatar>Us</Avatar></Button>
        <Button onClick={this.toggleProduct}><Avatar>Pr</Avatar></Button>
      </div>
    )
  }
}
