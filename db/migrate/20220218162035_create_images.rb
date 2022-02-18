class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.string :name
      t.text :description
      t.string :image_url, null: false
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :public

      t.timestamps
    end
  end
end
