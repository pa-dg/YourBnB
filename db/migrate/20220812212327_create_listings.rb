class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false, index: true
      t.string :title, null: false
      t.text :description, null: false
      t.string :city, null: false, index: true
      t.string :state, null: false, index: true
      t.string :country, null: false, index: true
      t.integer :zip_code, null: false
      t.float :price, null: false
      t.integer :num_beds, null: false
      t.integer :num_baths, null: false
      
      t.timestamps
    end
  end
end
