class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.boolean :email_pass
      t.boolean :facebook
      t.boolean :twitter
      t.boolean :google
      t.boolean :linkedin
      t.boolean :github
      t.boolean :invitation
      t.boolean :multi_account
      t.boolean :subdomain
      t.boolean :custom
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
