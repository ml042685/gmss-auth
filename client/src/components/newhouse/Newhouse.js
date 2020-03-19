import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import './style.css';
class Newhouse extends Component {
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
								<b>Lets add a new home to sale</b> {user.name.split(' ')[0]}
								<p className="flow-text grey-text text-darken-1">Add Home to Give Me Sum Space!</p>
							</h4>
						</div>
						<div className="row main-content container">
							<div class="row">
								<form class="col s12">
									<div class="row">
										<div class="input-field col s12">
											<textarea id="textarea1" class="materialize-textarea" />
											<label for="textarea1">Property Name</label>
										</div>
									</div>
								</form>
							</div>
							<div class="row">
								<form class="col s12">
									<div class="row">
										<div class="input-field col s12">
											<textarea id="textarea1" class="materialize-textarea" />
											<label for="textarea1">Rooms</label>
										</div>
									</div>
								</form>
							</div>
							<div class="row">
								<form class="col s12">
									<div class="row">
										<div class="input-field col s12">
											<textarea id="textarea1" class="materialize-textarea" />
											<label for="textarea1">Description</label>
										</div>
									</div>
								</form>
							</div>
							<div class="row">
								<form class="col s12">
									<div class="row">
										<div class="input-field col s12">
											<textarea id="textarea1" class="materialize-textarea" />
											<label for="textarea1">Price</label>
										</div>
									</div>
								</form>
							</div>
							<div class="row">
								<form class="col s12">
									<div class="row">
										<div class="input-field col s12">
											<textarea id="textarea1" class="materialize-textarea" />
											<label for="textarea1">Image</label>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
Newhouse.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Newhouse);
