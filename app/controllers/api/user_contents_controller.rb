class Api::UserContentsController < ApplicationController
  before_action :set_project
  before_action :user_content_params

  def index
    render json: @project.user_contents
  end

  def create
    @user_content = @project.user_contents.new(user_content_params)
    if @user_content.save
      render json: @user_content
    else
      render json: {errors: @user_content.errors}, status: :unproccessable_entity
    end
  end

  def update
    @user_content = @project.user_contents.find(params[:id])
    if @user_content.update(user_content_params)
      render json: @user_content
    else
      render json: {errors: @user_content.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @project.user_contents.find(params[:id]).destroy
    render json: {message: 'user_content has been destroyed'}
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end

  def user_content_params
    params.require(:user_content).permit(:acitivty_feed, :uploading, :profiles, :transactional_email, :tags, :rating,:audio_video, :searching)
  end
end

