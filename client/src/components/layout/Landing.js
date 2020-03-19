import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
class Landing extends Component {
	render() {
		return (
			<div style={{ height: '75vh' }} className="container valign-wrapper" id="landing">
				<div className="row">
					<div className="col s12 center-align">
						<h4 className="-text">
							<b>Welcome to Give Me Some Space</b>
						</h4>
						<br />
						<p className="flow-text white-text text-darken-2">The search for your new pad starts here!</p>
						<br />
						<div className="col s6">
							<Link
								to="/register"
								style={{
									width: '140px',
									borderRadius: '3px',
									letterSpacing: '1.5px'
								}}
								className="btn btn-large waves-effect waves-light hoverable blue accent-3"
							>
								Register
							</Link>
						</div>
						<div className="col s6">
							<Link
								to="/login"
								style={{
									width: '140px',
									borderRadius: '3px',
									letterSpacing: '1.5px'
								}}
								className="btn btn-large btn-flat waves-effect white black-text"
							>
								Log In
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Landing;
