class CreateSecurities < ActiveRecord::Migration[6.0]
  def change
    create_table :securities do |t|
      t.boolean :certificate
      t.boolean :factor_authentication
      t.boolean :dos_protection
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
