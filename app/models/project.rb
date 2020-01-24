class Project < ApplicationRecord
  belongs_to :user
  has_many :billings, dependent: :destroy
  has_many :user_contents, dependent: :destroy
  has_many :securities, dependent: :destroy
  has_many :socials, dependent: :destroy
  has_many :apps, dependent: :destroy
  has_many :analytics, dependent: :destroy
  has_many :integrations, dependent: :destroy
  has_many :accounts, dependent: :destroy
  has_many :date_locations, dependent: :destroy

  def create_categories(params)
    categories = {}

    puts params

    integration = self.integrations.create(params.require(:integration).permit(
      :third_party, :messaging, :api_integrate, :phone_number
      ))
    analytic = self.analytics.create(params.require(:analytic).permit(
      :cms, :admin, :moderation, :intercom, :crash_report, :performance, :multilingual, :usage
      ))
    billing = self.billings.create(params.require(:billing).permit(
      :subscription_plan, :payment_processing, :shopping_cart, :user_marketplace, :product_management
      ))
    account = self.accounts.create(params.require(:account).permit(
      :email_pass, :facebook, :twitter, :google, :linkedin, :github, :invitation, :multi_account, :subdomain, :custom
      ))
    app = self.apps.create(params.require(:app).permit(
      :ui_level, :size
      ))
    user_content = self.user_contents.create(params.require(:user_content).permit(
      :dashboard, :activity_feed, :uploading, :profile, :transactional_email, :tags, :rating,:audio_video, :searching
      ))
    date_location = self.date_locations.create(params.require(:date_location).permit(
      :calendar, :display, :map_display, :booking
      ))
    social = self.socials.create(params.require(:social).permit(
      :facebook_graph, :sharing, :forums, :messaging
      ))
    security = self.securities.create(params.require(:security).permit(
      :certificate, :factor_authentication, :dos_protection
      ))

    # store categories in hash
    categories[:integration] = integration
    categories[:analytic] = analytic
    categories[:billing] = billing
    categories[:account] = account
    categories[:app] = app
    categories[:user_content] = user_content
    categories[:date_location] = date_location
    categories[:social] = social
    categories[:security] = security

    # check if categories are valid
    is_valid = (
      integration.valid? &&
      analytic.valid? &&
      billing.valid? &&
      account.valid? &&
      app.valid? &&
      user_content.valid? &&
      date_location.valid? &&
      social.valid? &&
      security.valid?
    )

    if is_valid
      return categories
    else
      return false
    end
  end

  def get_categories
    categories = {}

    # create category instances
    integration = self.integrations
    analytic = self.analytics
    billing = self.billings
    account = self.accounts
    app = self.apps
    user_content = self.user_contents
    date_location = self.date_locations
    social = self.socials
    security = self.securities

    # store categories in hash
    categories[:integration] = integration
    categories[:analytic] = analytic
    categories[:billing] = billing
    categories[:account] = account
    categories[:app] = app
    categories[:user_content] = user_content
    categories[:date_location] = date_location
    categories[:social] = social
    categories[:security] = security

    return categories
  end
end
