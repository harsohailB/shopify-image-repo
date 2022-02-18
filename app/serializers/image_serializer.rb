class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :image_url
  has_one :user
end
