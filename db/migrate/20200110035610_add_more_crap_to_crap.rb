class AddMoreCrapToCrap < ActiveRecord::Migration[6.0]
  def change
    add_column :securities, :dos_protection, :boolean
  end
end
