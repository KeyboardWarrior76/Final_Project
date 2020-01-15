class CreateDateLocations < ActiveRecord::Migration[6.0]
  def change
    
    create_table :date_locations do |t|
      t.boolean :calendar
      t.boolean :display
      t.boolean :map_display
      t.boolean :booking
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
