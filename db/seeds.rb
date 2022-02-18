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