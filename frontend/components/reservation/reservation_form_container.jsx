// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import { createReservation } from "../../actions/reservation_actions";
// import ReservationForm from './reservation_form';

// const mapStateToProps = (state, ownProps) => {
//   const listingId = ownProps.match.params.listingId;
//   const selectedListing = state.entities.listings[parseInt(listingId)];

//   return {
//     userId: state.session.id,
//     listingId,
//     selectedListing
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     createReservation: reservation => dispatch(createReservation(reservation)),
//     fetchListing: listingId => dispatch(fetchListing(listingId))
//   }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationForm));