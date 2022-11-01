import { connect } from "react-redux";
import { updateUserPhoto } from '../../actions/userActions'
import UserAccount from "./UserAccount";

const mapStateToProps = state => {
  const userId = state.session.currentUserId
  
  return {
    currentUserId: userId,
    user: state.entities.users[userId]
  }
}

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    updateUserPhoto: (formData, currentUserId) => dispatch(updateUserPhoto(formData, currentUserId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);