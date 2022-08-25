@reservations.each do |reservation|
  host = reservation.host
  listing = reservation.listing
  
  json.set! reservation.id do
    json.partial! 'reservation', reservation: reservation
      json.host_name host.first_name
  end
end
