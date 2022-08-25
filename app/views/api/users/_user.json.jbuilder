json.extract! user, :id, :first_name, :last_name, :email

json.reservationIds user.reservations.pluck(:id)
