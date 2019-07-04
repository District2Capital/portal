import d2clogo from 'assets/logo.png';
import SourceLink from 'components/SourceLink';
import React from 'react';
import {
  MdRssFeed,
  //MdShowChart,
  MdDashboard,
  MdDescription,
  MdHistory,
  MdSearch,
  MdList,
  //MdFindInPage,
  MdKeyboardArrowDown,
  MdBook,
  MdSettings
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
  { to: '/spreadsheet', name: 'Filings Spreadsheet', exact: false, Icon: MdList },
  { to: '/search', name: 'Filing Search', exact: false, Icon: MdSearch },
  //{ to: '/filingreader', name: 'Filing Reader', exact: false, Icon: MdFindInPage },
  { to: '/secfilings', name: 'SEC Recent', exact: false, Icon: MdRssFeed },
  { to: '/sechistorical', name: 'SEC Historical', exact: false, Icon: MdRssFeed },
  { to: '/settings', name: 'Settings', exact: false, Icon: MdSettings }
  //{ to: '/stock', name: 'Stock Analysis', exact: false, Icon: MdShowChart }
];

const XBRL = [
  { to: '/xbrlfilings', name: 'XBRL Filings', exact: false, Icon: MdRssFeed },
  { to: '/xbrlhistorical', name: 'XBRL Historical', exact: false, Icon: MdHistory }
];

const referenceDocs = [
  { to: '/filingDocs', name: 'Filing Docs', exact: false, Icon: MdDescription }
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenReferenceDocs: false,
    isOpenXBRL: false
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

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('XBRL')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdBook className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">XBRL (OUTDATED)</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenXBRL
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenXBRL}>
              {XBRL.map(({ to, name, exact, Icon }, index) => (
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
