class Api::ProjectsController < ApplicationController

  before_action :set_user

  def index
    render json: @user.projects
  end

  def create
    @project = @user.projects.new(project_params)
    if @project.save
      render json: @project
    else
      render json: {errors: @project.errors}, status: :unproccessable_entity
    end
  end

  def update
    @project = @user.projects.find(params[:id])
    if @project.update(project_params)
      render json: @project
    else
      render json: {errors: @project.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @user.projects.find(params[:id]).destroy
    render json: {message: 'project has been wrecked, bro'}
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def project_params
    params.require(:project).permit(:name, :total, :days)
  end
end
