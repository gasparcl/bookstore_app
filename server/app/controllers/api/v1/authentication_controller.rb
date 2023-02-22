class Api::V1::AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST auth/login
  def login
    @user_by_email = User.find_by_email(params[:email])
    # @user_by_username = User.find_by_username!(params[:username])
    if @user_by_email&.authenticate(params[:password]) # || @user_by_username&.authenticate(params[:password])
      if @user_by_email
        @user = @user_by_email
        # else
        #   @user = @user_by_email
      end

      token = JsonWebToken.encode(user_id: @user.id)
      exp_time = Time.now + 24.hours.to_i

      render json: {
               token: token,
               user: {
                 username: @user.username,
                 name: @user.name,
                 email: @user.email,
                 exp: exp_time.strftime("%d-%m-%Y - %H:%M"),
               },

             }, status: :ok
    else
      render json: { error: "unauthorized" }, status: :unauthorized
    end
  end

  private

  def login_params
    params.permit(:email, :password) #,:username)
  end
end
