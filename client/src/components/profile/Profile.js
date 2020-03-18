import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import './style.css';
class Profile extends Component {
	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
	};
	render() {
		const { user } = this.props.auth;
		return (
			<div style={{ height: '75vh' }} className="">
				<div className="row">
					<div class="navbar-fixed">
						<div
							id="sideNav"
							className="col s12 m4 l3 z-depth-1 hoverable full-width side-bar valign-wrapper"
						>
							<div className="container">
								<h5 className="blue-text sidenav">Links</h5>
								<ul>
									<a className="grey-text text-lighten-3">
										<Link to="/dashboard">Dashboard</Link>
									</a>
									<a className="grey-text text-lighten-3">
										<Link to="/profile">Profile</Link>
									</a>
								</ul>
								<button
									onClick={this.onLogoutClick}
									className="btn btn-large waves-effect waves-light hoverable blue accent-3"
								>
									Logout
								</button>
							</div>
						</div>
					</div>
					<div className="right col s12 m8 l9">
						<h4>
							<b>Hey there,</b> {user.name.split(' ')[0]}
							<p className="flow-text grey-text text-darken-1">
								You are logged into You're GMSS Profile{' '}
								<span style={{ fontFamily: 'monospace' }}>MERN</span> app 👏
							</p>
						</h4>
					</div>
				</div>
			</div>
		);
	}
}
Profile.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Profile);
