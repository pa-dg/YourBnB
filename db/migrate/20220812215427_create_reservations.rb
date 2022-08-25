class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false, index: true
      t.integer :listing_id, null: false, index: true
      t.string :check_in_date, null: false
      t.string :check_out_date, null: false
      t.integer :num_guests, null: false
      # t.float :payment, null: false
      t.float :price, null: false
      t.integer :adults, null: false
      t.integer :children

      t.timestamps
    end
  end
end
