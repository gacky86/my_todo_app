class Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController

  private

  def sign_up_params
    #name,email,password,password_confirmationのみをキーとして許可する
    params.permit(:name, :email, :password, :password_confirmation)
  end
end
