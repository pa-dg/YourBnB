import { connect } from 'react-redux';
import { fetchReservations } from '../../actions/reservation_actions';
import { fetchListing } from "../../actions/listing_actions";
import ReservationIndex from './reservation_index';

const mapStateToProps = (state) => {
  return {
    reservations: state.entities.reservations,
    listings: state.entities.listings,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReservations: () => dispatch(fetchReservations()),
    fetchListing: (id) => dispatch(fetchListing(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationIndex);