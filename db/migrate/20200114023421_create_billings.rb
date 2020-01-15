class CreateBillings < ActiveRecord::Migration[6.0]
  def change
    create_table :billings do |t|
      t.boolean :subscription_plans
      t.boolean :payment_processing
      t.boolean :shopping_cart
      t.boolean :user_marketplace
      t.boolean :product_management
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
