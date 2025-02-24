class HomeController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    render json: {message: "This is root page"}
  end
end
