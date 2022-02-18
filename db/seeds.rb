# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Generate fake 20 users
(1..20).each do |id|
    User.create!(
# each user is assigned an id from 1-20
        username: Faker::Internet.username,
        email: Faker::Internet.email,
# issue each user the same password
        password: "password", 
    )
end

(1..5).each do |id|
    Image.create!(
        name: Faker::Commerce.product_name,
        description: Faker::Lorem.sentence(word_count: 10),
        image_url: Faker::LoremFlickr.image,
        user_id: Faker::Number.between(from: 1, to: 20),
        public: Faker::Boolean.boolean(true_ratio: 0.5),
    )
end