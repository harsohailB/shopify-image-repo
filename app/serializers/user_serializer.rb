class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email

  def initialize(user)
    @user=user
  end

  def to_serialized_json(*additional_fields)
    options ={
      only: [:username, :email, *additional_fields]
    }

    @user.to_json(options)
  end
end
