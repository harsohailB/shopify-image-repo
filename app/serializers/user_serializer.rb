class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :auth_token, :token_expiry
end
