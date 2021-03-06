import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

  function HeaderBar(props) {
    const { items } = props;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Codersx</NavbarBrand>
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              {
                items.map((item, index) => {
                  return (
                    <NavItem key={index}>
                      <NavLink href={item.url}>{item.title}</NavLink>
                    </NavItem>
                  );
                })
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
HeaderBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
}

export default HeaderBar;