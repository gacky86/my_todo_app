# spec/requests/users_spec.rb
require 'rails_helper'

RSpec.describe "Tasks API", type: :request do
  describe "GET /api/v1/tasks" do
    it "can get all tasks" do
      get "/api/v1/tasks/test"
      expect(response).to have_http_status(:ok)
      expect(response.content_type).to eq("application/json; charset=utf-8")
    end
  end
end
