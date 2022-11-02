# json.reservations do
  @reservations.each do |reservation|
    json.set! reservation.id do
      json.partial! 'reservation', reservation: reservation
    end
  end
# end

# json.listings do
#   @reservations.each do |reservation|
#     listing = reservation.listing
#     json.set! listing.id do
#       json.partial! 'api/listings/listing', listing: listing
#     end
#   end
# end


# @reservations.each do |reservation|
#   host = reservation.host
#   listing = reservation.listing
  
#   json.set! reservation.id do
#     json.partial! 'reservation', reservation: reservation
#       json.host_name host.first_name
#   end
# end
