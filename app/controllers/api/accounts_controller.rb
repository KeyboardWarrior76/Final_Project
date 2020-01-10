class Api::AccountsController < ApplicationController

  before_action :set_project

  def index
    render json: @project.accounts
  end

  def create
    @account = @project.accounts.new(account_params)
    if @account.save
      render json: @account
    else
      render json: {errors: @account.errors}, status: :unproccessable_entity
    end
  end

  def update
    @account = @project.accounts.find(params[:id])
    if @account.update(account_params)
      render json: @account
    else
      render json: {errors: @account.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @project.accounts.find(params[:id]).destroy
    render json: {message: 'account has been wrecked, bro'}
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end

  def account_params
    params.require(:account).permit(:email_pass, :facebook, :twitter, :google, :linkedin, :github, :invitation, :multi_account, :subdomain, :custom)
  end
end
