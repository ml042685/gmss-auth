import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import './style.css';
import homes from '../../homes.json';
import HouseCard from '../housecard/Housecard';
class Props extends Component {
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
					<div className="right col push-s3 s12 m8 l9" id="homeCards">
						<HouseCard
							name={homes[4].name}
							image={homes[4].image}
							description={homes[4].description}
							rooms={homes[4].rooms}
							price={homes[4].price}
						/>
						<HouseCard
							name={homes[5].name}
							image={homes[5].image}
							rooms={homes[5].rooms}
							description={homes[5].description}
							price={homes[5].price}
						/>
					</div>
				</div>
			</div>
		);
	}
}
Props.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Props);
