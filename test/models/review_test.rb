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
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
