class Api::UsercontentsController < ApplicationController
  
    before_action :set_project
    before_action :set_usercontents
  
    def index
      render json: @project.usercontents
    end
  
    def create
      @usercontent = @project.usercontents.new(usercontent_params)
      if @usercontent.save
        render json: @usercontent
      else
        render json: {errors: @usercontent.errors}, status: :unproccessable_entity
      end
    end
  
    def update
      @usercontent = @project.usercontents.find(params[:id])
      if @usercontent.update(usercontent_params)
        render json: @usercontent
      else
        render json: {errors: @usercontent.errors}, status: :unproccessable_entity
      end
    end
  
    def destroy
      @project.usercontents.find(params[:id]).destroy
      render json: {message: 'usercontent has been destroyed'}
    end
  
    private
  
    def set_project
      @project = Project.find(params[:project_id])
    end
  
    def set_usercontent
      params.require(:usercontent).permit(:acitivty_feed, :uploading, :profiles, :transactional_email, :tags, :rating,:audio_video, :searching)
    end
  end
  
end
