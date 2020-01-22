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

    # logging for test purposes
    puts params

    # create category instances
    integration = self.integrations.create(params[:integration])
    analytic = self.analytics.create(params[:analytic])
    billing = self.billings.create(params[:billing])
    account = self.accounts.create(params[:account])
    app = self.apps.create(params[:app])
    user_content = self.user_contents.create(params[:user_content])
    date_location = self.date_locations.create(params[:date_location])
    social = self.socials.create(params[:social])
    security = self.securities.create(params[:security])

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
