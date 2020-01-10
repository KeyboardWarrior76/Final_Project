class Project < ApplicationRecord
  belongs_to :user
  has_many :billings
  has_many :user_contents
  has_many :securities
end
