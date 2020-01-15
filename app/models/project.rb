class Project < ApplicationRecord
  belongs_to :user
  has_many :billings, dependent: :destroy
  has_many :user_contents, dependent: :destroy
  has_many :securities, dependent: :destroy
  has_many :socials, dependent: :destroy
  has_many :apps, dependent: :destroy
  has_many :analytics, dependent: :destroy
end
