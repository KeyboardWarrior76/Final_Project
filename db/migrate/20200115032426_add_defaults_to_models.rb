class AddDefaultsToModels < ActiveRecord::Migration[6.0]
  def change
    change_column_default :accounts, :email_pass, from: nil, to: false
    change_column_default :accounts, :facebook, from: nil, to: false
    change_column_default :accounts, :twitter, from: nil, to: false
    change_column_default :accounts, :google, from: nil, to: false
    change_column_default :accounts, :linkedin, from: nil, to: false
    change_column_default :accounts, :github, from: nil, to: false
    change_column_default :accounts, :invitation, from: nil, to: false
    change_column_default :accounts, :multi_account, from: nil, to: false
    change_column_default :accounts, :subdomain, from: nil, to: false
    change_column_default :accounts, :custom, from: nil, to: false
    change_column_default :date_locations, :calendar, from: nil, to: false
    change_column_default :date_locations, :display, from: nil, to: false
    change_column_default :date_locations, :map_display, from: nil, to: false
    change_column_default :date_locations, :booking, from: nil, to: false
    change_column_default :integrations, :third_party, from: nil, to: false
    change_column_default :integrations, :messaging, from: nil, to: false
    change_column_default :integrations, :api_integrate, from: nil, to: false
    change_column_default :integrations, :phone_number, from: nil, to: false
    change_column_default :securities, :certificate, from: nil, to: false
    change_column_default :securities, :factor_authentication, from: nil, to: false
    change_column_default :user_contents, :dashboard, from: nil, to: false
    change_column_default :user_contents, :activity_feed, from: nil, to: false
    change_column_default :user_contents, :uploading, from: nil, to: false
    change_column_default :user_contents, :profile, from: nil, to: false
    change_column_default :user_contents, :transactional_email, from: nil, to: false
    change_column_default :user_contents, :tags, from: nil, to: false
    change_column_default :user_contents, :rating, from: nil, to: false
    change_column_default :user_contents, :audio_video, from: nil, to: false
    change_column_default :user_contents, :searching, from: nil, to: false
  end
end
