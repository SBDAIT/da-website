import React, { Component, Fragment } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';

import { Link } from "react-router-dom";

import '../Navbar.css';

class NavMenu extends Component {


    // onMenuClickHandler = () => {
    //   this.setState({
    //     hideDropdown: false
    //   })
    // }

    render () {
        return ( 
          <Fragment>
            <div className='dropdown group inline-block relative font-normal text-md'>
              <div className="
                flex flex-row
                px-2 py-1 mb-1 
                font-display 
                text-blue-primary font-normal text-base 
                group-hover:bg-mustard cursor-pointer"
              >
                <span className="group-hover:text-white">
                  {this.props.title}
                </span>
                <ChevronDown size={12} className="ml-1 mt-2 font-bold text-mustard group-hover:text-white"/>
              </div>
              <ul className="dropdown-menu group-hover:block rounded-none absolute hidden font-display text-sm p-0" style={{backgroundColor: 'rgba(250,250,250,1)', left: this.props.isMobile ? '-160px': 'auto', top: this.props.isMobile ? '0px': 'auto'}} >
                {
                  this.props.routes.map((route) => {
                    return <li className="" ><Link className="mt-0 hover:bg-mustard hover:text-white py-1 px-4 border-mustard block whitespace-no-wrap" to={route.route}>{route.title}</Link></li>;
                  })
                }
                
              </ul>
            </div>
          </Fragment>
        );
    }
}

export default NavMenu;