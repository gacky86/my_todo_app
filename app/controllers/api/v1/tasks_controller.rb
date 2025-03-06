class Api::V1::TasksController < ApplicationController
  # skip_before_action :authenticate_user!
  def index
    render json: Task.order(updated_at: :desc)
  end

  def show
    render json: Task.find(params[:id])
  end

  def create
    task = Task.new(task_params)
    if task.save
      render json: task
    else
      render json: { errors: task.errors }, status: :unprocessable_entity
    end
  end

  def update
    task = Task.find(params[:id])
    if task.update(task_params)
      render json: task
    else
      render json: { errors: task.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    render json: { message: 'This task was successfuly deleted!' }, status: :ok
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Task was not found' }, status: :not_found
  rescue StandardError => e
    render json: { error: e.errors }, status: :unprocessable_entity
  end

  def destroy_all
    if Task.destroy_all
      head :no_content
    else
      render json: { errors: 'Failed to destroy' }, status: :unprocessable_entity
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :deadline, :status, :memo, :category_id, :user_id)
  end
end
