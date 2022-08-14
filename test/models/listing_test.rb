# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  host_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  city        :string           not null
#  state       :string           not null
#  country     :string           not null
#  zip_code    :integer          not null
#  price       :float            not null
#  num_beds    :integer          not null
#  num_baths   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
