class Api::SocialsController < ApplicationController

  before_action :set_project

  def index
    render json: @project.socials
  end

  def create
    @social = @project.socials.new(social_params)
    if @social.save
      render json: @social
    else
      render json: {errors: @social.errors}, status: :unproccessable_entity
    end
  end

  def update
    @social = @project.socials.find(params[:id])
    if @social.update(social_params)
      render json: @social
    else
      render json: {errors: @social.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @project.socials.find(params[:id]).destroy
    render json: {message: 'social has been wrecked, bro'}
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end

  def social_params
    params.require(:social).permit(:email_pass, :facebook, :twitter, :google, :linkedin, :github, :invitation, :multi_social, :subdomain, :custom)
  end
end
