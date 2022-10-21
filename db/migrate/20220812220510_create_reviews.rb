class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :reviewer_id, null: false, index: true
      t.integer :listing_id, null: false, index: true
      t.text :message, null: false
      t.integer :cleanliness, null: false
      t.integer :accuracy, null: false
      t.integer :communication, null: false
      t.integer :check_in, null: false
      t.integer :value, null: false
      t.integer :location, null: false

      t.timestamps
    end
  end
end
