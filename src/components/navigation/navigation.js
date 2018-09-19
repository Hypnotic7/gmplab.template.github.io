import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

//COMPONENTS
import SearchBox from '../searchBox/SearchBox';
import Languages from '../languages/languages';
import Logo from '../logo/logo';

import LogoImg from '../../images/LogoNoTitle.png'

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';


class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render() {
    return (
      <div>
        <Navbar className="navbar-dark" color="dark" light>
        <Languages /> 
        <img style={{ height: 50, width: 75 }} alt='logo' src={LogoImg}/>  
          {/* <SearchBox /> */}
          <NavbarToggler className="ml-2" onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Aktualności</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">O Nas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Oferta</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/components/">Technologie/Materialy</NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink href="/components/">Realizacja/Referencje</NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink href="/components/">Do pobrania</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/components/">Kontakt</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/components/">Kofigurator systemow wyciszen</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/components/">Wspolpraca Shim-Pol</NavLink>
              </NavItem>
            </Nav>
          </Collapse>                 
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

