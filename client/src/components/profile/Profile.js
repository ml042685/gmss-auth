import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import homes from '../../homes.json';
import HouseCard from '../housecard/Housecard';
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
							className="left col s12 m4 l3 z-depth-1 hoverable full-width side-bar valign-wrapper grey lighten-3"
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
									<a className="grey-text text-lighten-3">
										<Link to="/newhouse">Add house</Link>
									</a>
<<<<<<< HEAD
									<a className="grey-text text-lighten-3">
										<Link to="/props">Props</Link>
									</a>
=======
>>>>>>> c4caaaec3e2c83038b7b3218545e995ac9ef9b14
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
					<div className="right col push-s3 s12 m8 l9" id="homeCards">
						<HouseCard
							name={homes[0].name}
							image={homes[0].image}
							description={homes[0].description}
							rooms={homes[0].rooms}
							price={homes[0].price}
						/>
						<HouseCard
							name={homes[1].name}
							image={homes[1].image}
							rooms={homes[1].rooms}
							description={homes[1].description}
							price={homes[1].price}
						/>
						<HouseCard
							name={homes[2].name}
							image={homes[2].image}
							rooms={homes[2].rooms}
							description={homes[2].description}
							price={homes[2].price}
						/>
						<HouseCard
							name={homes[3].name}
							image={homes[3].image}
							rooms={homes[3].rooms}
							description={homes[3].description}
							price={homes[3].price}
						/>
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
