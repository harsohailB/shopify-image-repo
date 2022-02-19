class ImageSerializer < ActiveModel::Serializer
  has_one :user
  attributes :id, :name, :description, :image_url, :public
end
