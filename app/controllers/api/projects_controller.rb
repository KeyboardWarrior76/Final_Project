class Api::ProjectsController < ApplicationController

  def index
    render json: Project.all
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project
    else
      render json: {errors: @project.errors}, status: :unproccessable_entity
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render json: @project
    else
      render json: {errors: @project.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    Project.find(params[:id]).destroy
    render json: {message: 'project has been wrecked, bro'}
  end

  private

  def project_params
    params.require(:project).permit(:name, :total, :days)
  end
end
