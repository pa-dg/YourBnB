# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  reviewer_id   :integer          not null
#  listing_id    :integer          not null
#  message       :text             not null
#  cleanliness   :integer          not null
#  accuracy      :integer          not null
#  communication :integer          not null
#  check_in      :integer          not null
#  value         :integer          not null
#  location      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
  validates :reviewer_id, :listing_id, :message, presence: true

  validates :cleanliness, :accuracy, :communication, :check_in, :value, :location, presence: true, inclusion: { in: (1..5) }

  belongs_to :reviewer,
    foreign_key: :reviewer_id,
    class_name: :User

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing
end
