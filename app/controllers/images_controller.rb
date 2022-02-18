class ImagesController < ApplicationController 
    protect_from_forgery with: :null_session

    def index
        if !params[:public] 
            render json: { error: "Specify 'public' in query parameters" }, status: 422
            return
        end

        if params[:public] == "true"
            images = Image.where(public: true)
        elsif !params[:user_id]
            render json: { error: "Specify 'user_id' in query parameters for private images" }, status: 422
            return
        else
            images = Image.where(public: false, user_id: params[:user_id])
        end

        render json: ImageSerializer.new(images, options).serialized_json
    end

    def create
        if !params[:name] || !params[:image_url] || !params[:public] || !params[:user_id]
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
        if !params[:id]
            render json: { error: "Specify image 'id' in query parameters" }, status: 422
            return
        end

        image = Image.find(params[:id])

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
end