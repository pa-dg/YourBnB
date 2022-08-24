json.partial! "api/users/user", user: @user
json.reservations do
  @user.reservations.each do |reservation|
    json.set! reservation.id do 
      json.partial! 'api/reservations/reservation', reservation: reservation
    end
  end
end