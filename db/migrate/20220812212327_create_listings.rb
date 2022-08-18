class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false, index: true
      t.string :title, null: false, index: true
      t.text :description, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :street, null: false, index: true
      t.string :city, null: false, index: true
      t.string :state, null: false, index: true
      t.string :country, null: false, index: true
      t.integer :zip_code, null: false, index: true
      t.float :price, null: false
      t.string :price_currency, null: false, default: 'USD'
      t.string :price_per_night, null: false, default: 'per night'
      t.float :additional_fees, null: false, default: 0
      t.string :property_type, null: false
      t.integer :num_guest, null: false
      t.integer :num_beds, null: false
      t.integer :num_baths, null: false
      
      t.timestamps
    end
  end
end
