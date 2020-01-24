class AddDefaultsToAppModel < ActiveRecord::Migration[6.0]
  def change
    change_column_default :apps, :size, from: '', to: 'small'
    change_column_default :apps, :ui_level, from: '', to: 'simple'

  end
end
