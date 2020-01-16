class UpdateApplicationColumns < ActiveRecord::Migration[6.0]
  def change
    remove_column :apps, :ui_level
    remove_column :apps, :size
    add_column :apps, :small, :boolean, default: false
    add_column :apps, :medium, :boolean, default: false
    add_column :apps, :large, :boolean, default: false
    add_column :apps, :simple_ui, :boolean, default: false
    add_column :apps, :detailed_ui, :boolean, default: false
    add_column :apps, :sophisticated_ui, :boolean, default: false
  end
end
