import React, {
  Component
} from "react";
import {
  Link
} from "react-router-dom";
class Navbar extends Component {
  render() {
    return ( <
      div className = "navbar-fixed" >
      <
      nav >
      <
      div className = "nav-wrapper" >
      <
      a href = "#!"
      className = "brand-logo" > < /a> <
      ul className = "right hide-on-med-and-down" >
      <
      li >
      <
      a className = "waves-effect waves-light btn" >
      <
      Link to = "/"
      style = {
        {
          fontFamily: "monospace"
        }
      }
      className = "col s5 brand-logo center black-text" > < i className = "material-icons" > code < /i>GMSS</Link >
      <
      /a> <
      /li> <
      li > < a className = "waves-effect waves-light btn" > Button < i className = "material-icons right" > cloud < /i></a > < /li> <
      li > < a className = "waves-effect waves-light btn-large" > Large Button < /a></li >
      <
      /ul> <
      /div> <
      /nav> <
      /div>
    );
  }
}
export default Navbar;