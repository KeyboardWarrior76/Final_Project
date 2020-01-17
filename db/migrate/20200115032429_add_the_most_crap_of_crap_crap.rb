class AddTheMostCrapOfCrapCrap < ActiveRecord::Migration[6.0]
  def change
    change_column_default :securities, :dos_protection, from: nil, to: false
  end
end
