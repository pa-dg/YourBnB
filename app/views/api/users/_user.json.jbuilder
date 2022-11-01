json.extract! user, :id, :first_name, :last_name, :email, :created_at

json.profilePhotoUrl url_for(user.profile_photo) if user.profile_photo.attached?
json.reservationIds user.reservations.pluck(:id)
json.listings user.listings