class Api::BillingsController < ApplicationController
  before_action :set_project
  before_action :billing_params

  def index
    render json: @project.billings
  end

  def create
    @billing = @project.billings.new(billing_params)
    if @billing.save
      render json: @billing
    else
      render json: {errors: @billing.errors}, status: :unproccessable_entity
    end
  end

  def update
    @billing = @project.billings.find(params[:id])
    if @billing.update(billing_params)
      render json: @billing
    else
      render json: {errors: @billing.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @project.billings.find(params[:id]).destroy
    render json: {message: 'billing has been destroyed'}
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end

  def billing_params
    params.require(:billing).permit(:payment_processing, :shopping_cart, :user_marketplace, :product_managment)
  end
end
end
