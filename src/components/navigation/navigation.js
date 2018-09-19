import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

//COMPONENTS
import SearchBox from '../searchBox/SearchBox';
import Languages from '../languages/languages';

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
          <SearchBox />
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

