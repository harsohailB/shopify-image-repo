class UsersController < ApplicationController
    protect_from_forgery with: :null_session

    def index
        user = User.find_by(username: params[:username])

        if !user
            render json: { error: "User not found" }, status: 404
            return
        end

        if user.password == params[:password]
            user = update_auth(user)
            render json: UserSerializer.new(user).serialized_json
        else
            render json: { error: "Incorrect password" }, status: 401
        end
    end

    def create
        existing_user = User.find_by(username: params[:username])

        if existing_user
            render json: { error: "User already exists" }, status: 409
            return
        end

        new_user = User.new(user_params)

        if new_user.save
            render json: UserSerializer.new(new_user).serialized_json
        else
            render json: { error: new_user.errors.messages }, status: 422
        end
    end

    def user_params
        params.require(:user).permit!
    end

    private

    def update_auth(user)
        if user.token_expiry <= DateTime.now
            user.update(auth_token: SecureRandom.uuid, token_expiry: DateTime.now + 1)
        end

        return user
    end
end
