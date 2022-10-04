# == Schema Information
#
# Table name: reservations
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  listing_id     :integer          not null
#  check_in_date  :date             not null
#  check_out_date :date             not null
#  num_guests     :integer          not null
#  price          :float            not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Reservation < ApplicationRecord
  validates :user_id, :listing_id, :check_in_date, :check_out_date, :num_guests, :price, presence: true
  
  belongs_to :guest,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing

  has_one :host,
    through: :listing,
    source: :host
end
