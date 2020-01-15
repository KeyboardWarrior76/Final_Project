class UpdateApplicationColumns < ActiveRecord::Migration[6.0]
  def change
    remove_column :app, :ui_level
    remove_column :app, :size
    add_column :app, :small, :boolean, default: false
    add_column :app, :medium, :boolean, default: false
    add_column :app, :large, :boolean, default: false
    add_column :app, :simple_ui, :boolean, default: false
    add_column :app, :detailed_ui, :boolean, default: false
    add_column :app, :sophisticated_ui, :boolean, default: false
  end
end
