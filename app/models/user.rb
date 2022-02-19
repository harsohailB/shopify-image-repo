class User < ApplicationRecord
    require 'securerandom'

    before_create :create_auth_token

    private

    def create_auth_token
        self.auth_token = SecureRandom.uuid
        self.token_expiry = DateTime.now + 1
    end
end
