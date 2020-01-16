class Socials < ActiveRecord::Migration[6.0]
  def change
    change_column_default :socials, :messaging, from: nil, to: false
    change_column_default :socials, :forums, from: nil, to: false
    change_column_default :socials, :sharing, from: nil, to: false
    change_column_default :socials, :facebook_graph, from: nil, to: false
  end
end
