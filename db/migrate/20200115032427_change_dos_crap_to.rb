class ChangeDosCrapTo < ActiveRecord::Migration[6.0]
  def change
    remove_column :securities, :dos_protection, :string
    
  end
end
