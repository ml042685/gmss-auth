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
      div className = "nav-wrapper blue lighten-3" >
      <
      a href = "#!"
      className = "brand-logo" > < /a> <
      Link to = "/"
      style = {
        {
          fontFamily: "monospace"
        }
      }
      className = "col s5 brand-logo waves-effect waves-lightcenter black-text" > < i className = "material-icons" > code < /i>GMSS</Link >
      <
      /div> <
      /nav> <
      /div>
    );
  }
}
export default Navbar;