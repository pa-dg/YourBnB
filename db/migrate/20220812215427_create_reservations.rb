class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false, index: true
      t.integer :listing_id, null: false, index: true
      t.datetime :check_in_date, null: false
      t.datetime :check_out_date, null: false
      t.integer :num_guests, null: false

      t.timestamps
    end
  end
end
