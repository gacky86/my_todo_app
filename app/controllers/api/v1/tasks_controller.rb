class Api::V1::TasksController < ApplicationController

  def index
    render json: Task.order(updated_at: :desc)
  end

  def show
    render json: Task.find(params[:id])
  end

  private

  def tasks_params
    params.require(:task).permit(:title, :deadline, :memo, :category_id)
  end
end
