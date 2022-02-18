class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :image_url, :public
  has_one :user
end
