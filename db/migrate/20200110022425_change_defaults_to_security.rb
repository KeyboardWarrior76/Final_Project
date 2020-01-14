class ChangeDefaultsToSecurity < ActiveRecord::Migration[6.0]
  def change
    
    change_column_default :billings, :subscription_plan, from: nil, to: false
    change_column_default :billings, :payment_processing, from: nil, to: false
    change_column_default :billings, :shopping_cart, from: nil, to: false
    change_column_default :billings, :user_marketplace, from: nil, to: false
    change_column_default :billings, :product_managment, from: nil, to: false
   

  end
end
