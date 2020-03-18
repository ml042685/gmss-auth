import React, {
  Component
} from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
import {
  logoutUser
} from "../../actions/authActions";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const {
      user
    } = this.props.auth;
    return ( <
      div style = {
        {
          height: "75vh"
        }
      }
      className = "container" >
      <
      div className = "row" >
      <
      div className = "col push-s12 push-m4 push-l6 z-depth-1 hoverable left-align" >

      <
      button style = {
        {
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem"
        }
      }
      onClick = {
        this.onLogoutClick
      }
      className = "btn btn-large waves-effect waves-light hoverable blue accent-3" >
      Logout <
      /button> <
      /div>

      <
      div className = "col pull-s12 pull-m8 pull-l9" >
      <
      h4 >
      <
      b > Hey there, < /b> {user.name.split(" ")[0]} <
      p className = "flow-text grey-text text-darken-1" >
      You are logged into You 're GMSS Profile{" "} <
      span style = {
        {
          fontFamily: "monospace"
        }
      } > MERN < /span> app 👏 <
      /p> <
      /h4> <
      /div> <
      /div> <
      /div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps, {
    logoutUser
  }
)(Dashboard);