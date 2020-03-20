import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import './style.css';
import HouseCard from '../housecard/Housecard';
import homes from '../../homes.json';
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
						<div className="right col push-s3 s12 m8 l9" id="homeCards">
							<HouseCard
								name={homes[5].name}
								image={homes[5].image}
								description={homes[5].description}
								rooms={homes[5].rooms}
								price={homes[5].price}
							/>
							<HouseCard
								name={homes[6].name}
								image={homes[6].image}
								rooms={homes[6].rooms}
								description={homes[6].description}
								price={homes[6].price}
							/>
						</div>
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
