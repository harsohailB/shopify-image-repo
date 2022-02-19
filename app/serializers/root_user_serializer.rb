class RootUserSerializer < ActiveModel::Serializer
    attributes :id, :username, :email, :auth_token, :token_expiry
  end
  