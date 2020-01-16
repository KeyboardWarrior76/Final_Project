class CreateApps < ActiveRecord::Migration[6.0]
  def change
    create_table :apps do |t|
      t.string :ui_level
      t.string :size
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
