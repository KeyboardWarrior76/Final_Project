class CreateIntegrations < ActiveRecord::Migration[6.0]
  def change
    create_table :integrations do |t|
      t.boolean :third_party
      t.boolean :api_integrate
      t.boolean :messaging
      t.boolean :phone_number
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
