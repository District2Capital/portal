import d2clogo from 'assets/logo.png';
import SourceLink from 'components/SourceLink';
import React from 'react';
import {
  MdRssFeed,
  MdShowChart,
  MdDashboard,
  MdDescription,
  MdHistory,
  MdSettings,
  MdKeyboardArrowDown,
  MdBook
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const navItems = [
  { to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard },
  { to: '/edgar', name: 'Edgar Filings', exact: false, Icon: MdRssFeed },
  { to: '/stock', name: 'Stock', exact: false, Icon: MdShowChart },
  { to: '/historical', name: 'Historical Filings', exact: false, Icon: MdHistory },
  { to: '/settings', name: 'Settings', exact: false, Icon: MdSettings },
];

const referenceDocs = [
  { to: '/edgarDocs', name: 'Edgar Docs', exact: false, Icon: MdDescription }
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenReferenceDocs: false
  }

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {

    return (
      <aside className={bem.b()}>
        <div className={bem.e('background')} />
        <div className={bem.e('content')}>
          <Navbar className="d-flex justify-content-center">
            <SourceLink className="mt-3">
              <img
                src={d2clogo}
                width="100"
                height="50"
                alt=""
              />
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('ReferenceDocs')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdBook className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">REFERENCE DOCS</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenReferenceDocs
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenReferenceDocs}>
              {referenceDocs.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
