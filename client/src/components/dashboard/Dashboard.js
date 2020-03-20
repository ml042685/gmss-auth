import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import './style.css';
class Dashboard extends Component {
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
								<h5 className="white-text sidenav">Links</h5>
								<ul>
									<a className="grey-text text-lighten-3">
										<Link to="/dashboard">Dashboard</Link>
									</a>
									<a className="grey-text text-lighten-3">
										<Link to="/profile">Profile</Link>
									</a>
									<a className="grey-text text-lighten-3">
										<Link to="/newhouse">Add house</Link>
									</a>
									<a className="grey-text text-lighten-3">
										<Link to="/props">Props</Link>
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
					<div className="right col s12 m8 l9 main-content">
						<div className="row content-header">
							<h4>
								<b>Hey there,</b> {user.name.split(' ')[0]}
								<p className="flow-text grey-text text-darken-1">Welcome to Give Me Sum Space!</p>
							</h4>
						</div>
						<div className="row main-content">
							<div className="col s12 m6">
								<div className="card">
									<div className="card-image">
										<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-living-room-windows-1582223933.jpg?crop=0.670xw:1.00xh;0.170xw,0&resize=640:*" />
										<span className="card-title">Profile Homes</span>
										<Link
											to="/profile"
											className="btn-floating halfway-fab waves-effect waves-light blue"
										>
											<i className="material-icons left">home</i>
										</Link>
									</div>
								</div>
							</div>

							<div className="col s12 m6">
								<div className="card">
									<div className="card-image">
										<img src="https://specials-images.forbesimg.com/imageserve/5d5c404e95808800097d661b/960x0.jpg?fit=scale" />
										<span className="card-title">Find a Home!</span>
										<Link to="/" className="btn-floating halfway-fab waves-effect waves-light blue">
											<i className="material-icons left">home</i>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
