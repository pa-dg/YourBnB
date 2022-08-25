import { connect } from 'react-redux';
import { fetchReservations } from '../../actions/reservation_actions';
import ReservationIndex from './reservation_index';

const mapStateToProps = (state) => {
  return {
    reservations: state.entities.reservations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReservations: () => dispatch(fetchReservations()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationIndex);