class ImagesController < ApplicationController 
    protect_from_forgery with: :null_session

    before_action :check_auth
    skip_before_action :check_auth, only: [:index]

    def index
        images = Image.where(public: true)

        render json: ImageSerializer.new(images, options).serialized_json
    end

    def show
        images = Image.where(user_id: params[:user_id])

        render json: ImageSerializer.new(images, options).serialized_json
    end

    def create
        if !params[:name] || !params[:image_url] || !params[:user_id]
            render json: { error: "Incorrect body" }, status: 422
            return
        end

        existing_user = User.find_by(id: params[:user_id])

        if !existing_user
            render json: { error: "User doesn't exists" }, status: 422
            return
        end

        new_image = Image.new(image_params)

        if new_image.save
            render json: ImageSerializer.new(new_image, options).serialized_json
        else
            render json: { error: new_image.errors.messages }, status: 422
        end
    end

    def destroy
        if !params[:image_id]
            render json: { error: "Specify image 'image_id' in query parameters" }, status: 422
            return
        end

        image = Image.find(params[:image_id])

        if image.destroy
            head :no_content
        else
            render json: { error: image.errors.messages }, status: 422
        end
    end

    def options
        @options ||= { include: %i[user] }
    end

    def image_params
        params.require(:image).permit(:name, :description, :image_url, :public, :user_id)
    end

    private

    def check_auth
        if !params[:auth_token]
            render json: { error: 'Missing auth_token' }, status: 409
            return
        end

        if !params[:user_id]
            render json: { error: 'Missing user_id' }, status: 409
            return
        end

        user = User.find(params[:user_id])
        if user.auth_token != params[:auth_token]
            render json: { error: 'Incorrect auth token' }, status: 409
        end
    end

end