class Analytics < ActiveRecord::Migration[6.0]
  def change
    change_column_default :analytics, :cms, from: nil, to: false
    change_column_default :analytics, :admin, from: nil, to: false
    change_column_default :analytics, :moderation, from: nil, to: false
    change_column_default :analytics, :intercom, from: nil, to: false
    change_column_default :analytics, :usage, from: nil, to: false
    change_column_default :analytics, :crash_report, from: nil, to: false
    change_column_default :analytics, :performance, from: nil, to: false
    change_column_default :analytics, :multilingual, from: nil, to: false
  end
end
