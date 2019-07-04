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
  MdRemoveRedEye,
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
  { to: '/myfeed', name: 'My Feed', exact: false, Icon: MdRssFeed },
  { to: '/secfilings', name: 'SEC Feed', exact: false, Icon: MdRssFeed },
  { to: '/search', name: 'Filing Search', exact: false, Icon: MdSearch },
  { to: '/viewedfilings', name: 'Viewed Filings', exact: false, Icon: MdRemoveRedEye },
  { to: '/searchhistory', name: 'Search History', exact: false, Icon: MdHistory },
  { to: '/settings', name: 'Settings', exact: false, Icon: MdSettings }
];

//{ to: '/filingreader', name: 'Filing Reader', exact: false, Icon: MdFindInPage },
//{ to: '/stock', name: 'Stock Analysis', exact: false, Icon: MdShowChart }

const Others = [
  { to: '/spreadsheet', name: 'Filings Spreadsheet', exact: false, Icon: MdList },
  { to: '/sechistorical', name: 'SEC Historical', exact: false, Icon: MdRssFeed },
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
    isOpenOthers: false
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
              onClick={this.handleClick('Others')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdBook className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Others</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenOthers
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenOthers}>
              {Others.map(({ to, name, exact, Icon }, index) => (
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
