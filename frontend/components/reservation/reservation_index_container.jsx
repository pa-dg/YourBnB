import { connect } from 'react-redux';
import { fetchReservations, deleteReservation } from '../../actions/reservation_actions';
import { fetchListing } from "../../actions/listing_actions";
import ReservationIndex from './reservation_index';

const mapStateToProps = state => {
  return {
    reservations: Object.values(state.entities.reservations)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReservations: () => dispatch(fetchReservations()),
    fetchListing: (id) => dispatch(fetchListing(id)),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationIndex);