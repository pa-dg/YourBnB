# == Schema Information
#
# Table name: listings
#
#  id              :bigint           not null, primary key
#  host_id         :integer          not null
#  title           :string           not null
#  description     :text             not null
#  lat             :float            not null
#  lng             :float            not null
#  street          :string           not null
#  city            :string           not null
#  state           :string           not null
#  country         :string           not null
#  zip_code        :integer          not null
#  price           :float            not null
#  price_currency  :string           default("USD"), not null
#  price_per_night :string           default("per night"), not null
#  additional_fees :float            default(0.0), not null
#  property_type   :string           not null
#  num_guest       :integer          not null
#  num_beds        :integer          not null
#  num_baths       :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Listing < ApplicationRecord
  validates :host_id, :title, :description, :lat, :lng, :street, :city, :state, :country, :zip_code, :price, :additional_fees, :property_type, :num_guest, :num_beds, :num_baths, presence: true

  before_validation :default, :on => :create
  
  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  has_many :reservations,
    foreign_key: :listing_id,
    class_name: :Listing
    
  has_many :users,
    through: :reservations,
    source: :user
    
  has_many :reviews,
    foreign_key: :listing_id,
    class_name: :Review

  # Active Storage Associaiton (AWS S3)
  has_many_attached :photos, dependent: :destroy

  has_one :host_photo,
    through: :host,
    source: :photo_attachment

  def default
    self.price_currency ||= 'USD'
    self.additional_fees ||= '0'
  end
  
  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  def num_reviews
    reviews.count
  end
  
  def avg_rating

    return "New" if num_reviews == 0

    cleanliness = reviews.average(:cleanliness)
    accuracy = reviews.average(:accuracy)
    communication = reviews.average(:communication)
    check_in = reviews.average(:check_in)
    value = reviews.average(:value)
    location = reviews.average(:location)

    return avg = ((cleanliness + accuracy + communication + check_in + value + location) / 6).round(2)
  end

end



