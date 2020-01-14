class CreateAnalytics < ActiveRecord::Migration[6.0]
  def change
    create_table :analytics do |t|
      t.boolean :cms
      t.boolean :admin
      t.boolean :moderation
      t.boolean :intercom
      t.boolean :usage
      t.boolean :crash_report
      t.boolean :performance
      t.boolean :multilingual
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
