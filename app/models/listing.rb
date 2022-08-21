# == Schema Information
#
# Table name: listings
#
#  id              :bigint           not null, primary key
#  host_id         :integer          not null
#  title           :string           not null
#  description     :text             not null
#  latitude        :float            not null
#  longitude       :float            not null
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
  validates :host_id, :title, :description, :latitude, :longitude, :street, :city, :state, :country, :zip_code, :price, :additional_fees, :property_type, :num_guest, :num_beds, :num_baths, presence: true

  before_validation :default, :on => :create

  def default
    self.price_currency ||= 'USD'
    self.price_per_night ||= 'per night'
    self.additional_fees ||= '0'
  end

  belongs_to :host,
    foreign_key: :host_id,
    class_name: 'User'

    has_many :reservations
    
    has_many :users,
    through: :reservations,
    source: :user
    
    has_many :reviews
    
    # Active Storage Associaiton (AWS S3)
    has_many_attached :photos, dependent: :destroy

    has_one :host_photo,
      through: :host,
      source: :photo_attachment

  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:latitude])
      .where("latitude > ?", bounds[:southWest][:latitude])
      .where("longitude > ?", bounds[:southWest][:longitude])
      .where("longitude < ?", bounds[:northEast][:longitude])
  end

  def avg_rating
    reviews.average(:rating)
  end

end



