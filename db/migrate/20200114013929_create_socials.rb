class CreateSocials < ActiveRecord::Migration[6.0]
  def change
    create_table :socials do |t|
      t.boolean :facebook_graph
      t.boolean :sharing
      t.boolean :forums
      t.boolean :messaging
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
