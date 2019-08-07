import d2clogo from 'assets/logo.png';
import SourceLink from 'components/SourceLink';
import React, { useState, useContext } from 'react';
import {
  MdRssFeed,
  //MdShowChart,
  MdDashboard,
  MdDescription,
  MdHistory,
  MdSearch,
  MdList,
  //MdFindInPage,
  MdFavoriteBorder,
  MdAccountCircle,
  MdMoreHoriz,
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
import GlobalContext from '../../context/global-context';

const navItems = [
  { to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard },
  { to: '/mainfeed', name: 'Main Feed', exact: false, Icon: MdRssFeed },
  { to: '/listfeeds', name: 'List Feeds', exact: false, Icon: MdRssFeed },
  { to: '/secfilings', name: 'SEC Feed', exact: false, Icon: MdRssFeed }
];

//{ to: '/filingreader', name: 'Filing Reader', exact: false, Icon: MdFindInPage },
//{ to: '/stock', name: 'Stock Analysis', exact: false, Icon: MdShowChart }

const Search = [
  { to: '/search', name: 'Filing Search', exact: false, Icon: MdSearch },
  { to: '/companysearch', name: 'Company Search', exact: false, Icon: MdSearch },
  { to: '/formtypesearch', name: 'FormType Search', exact: false, Icon: MdSearch }
];

const Personal = [
  { to: '/mycompanies', name: 'My Companies', exact: false, Icon: MdFavoriteBorder },
  { to: '/myformtypes', name: 'My FormTypes', exact: false, Icon: MdFavoriteBorder },
  { to: '/savedfilings', name: 'Saved Filings', exact: false, Icon: MdFavoriteBorder },
  { to: '/viewedfilings', name: 'Viewed Filings', exact: false, Icon: MdRemoveRedEye },
  { to: '/searchhistory', name: 'Search History', exact: false, Icon: MdHistory }
];

const referenceDocs = [
  { to: '/filingDocs', name: 'Filing Docs', exact: false, Icon: MdDescription }
];

const Others = [
  { to: '/spreadsheet', name: 'Filings Spreadsheet', exact: false, Icon: MdList },
  { to: '/sechistorical', name: 'SEC Historical', exact: false, Icon: MdRssFeed },
  { to: '/xbrlfilings', name: 'XBRL Filings', exact: false, Icon: MdRssFeed },
  { to: '/xbrlhistorical', name: 'XBRL Historical', exact: false, Icon: MdHistory }
];

const Settings = { to: '/settings', name: 'Settings', exact: false, Icon: MdSettings };

const bem = bn.create('sidebar');

const Sidebar = () => {
  const [isOpenReferenceDocs, changeOpenReferenceDocs] = useState(false);
  const [isOpenOthers, changeOpenOthers] = useState(false);
  const [isOpenPersonal, changeOpenPersonal] = useState(false);
  const [isOpenSearch, changeOpenSearch] = useState(false);
  const [isOpenLists, changeOpenLists] = useState(false);

  const value = useContext(GlobalContext);

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
                <Icon color="tomato" className={bem.e('nav-item-icon')} />
                <span className="">{name}</span>
              </BSNavLink>
            </NavItem>
          ))}

          <NavItem
            className={bem.e('nav-item')}
            onClick={() => changeOpenLists(!isOpenLists)}
          >
            <BSNavLink className={bem.e('nav-item-collapse')}>
              <div className="d-flex">
                <MdList color="yellow" className={bem.e('nav-item-icon')} />
                <span className=" align-self-start">LISTS</span>
              </div>
              <MdKeyboardArrowDown
                className={bem.e('nav-item-icon')}
                style={{
                  padding: 0,
                  transform: isOpenLists
                    ? 'rotate(0deg)'
                    : 'rotate(-90deg)',
                  transitionDuration: '0.3s',
                  transitionProperty: 'transform',
                }}
              />
            </BSNavLink>
          </NavItem>
          <Collapse isOpen={isOpenLists}>
            {value.lists.lists.map((listName, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${listName}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={`${listName}List`}
                  activeClassName="active"
                  exact={false}
                >
                  <MdList color="yellow" className={bem.e('nav-item-icon')} />
                  <span className="">{listName}</span>
                </BSNavLink>
              </NavItem>
            ))}
            <NavItem className={bem.e('nav-item')}>
              <BSNavLink
                id={`navItem-createnew`}
                className="text-uppercase"
                tag={NavLink}
                to={`createnewList`}
                activeClassName="active"
                exact={false}
              >
                <MdList color="yellow" className={bem.e('nav-item-icon')} />
                <span className="">Create New</span>
              </BSNavLink>
            </NavItem>
          </Collapse>

          <NavItem
            className={bem.e('nav-item')}
            onClick={() => changeOpenSearch(!isOpenSearch)}
          >
            <BSNavLink className={bem.e('nav-item-collapse')}>
              <div className="d-flex">
                <MdSearch color="mediumseagreen" className={bem.e('nav-item-icon')} />
                <span className=" align-self-start">SEARCH</span>
              </div>
              <MdKeyboardArrowDown
                className={bem.e('nav-item-icon')}
                style={{
                  padding: 0,
                  transform: isOpenSearch
                    ? 'rotate(0deg)'
                    : 'rotate(-90deg)',
                  transitionDuration: '0.3s',
                  transitionProperty: 'transform',
                }}
              />
            </BSNavLink>
          </NavItem>
          <Collapse isOpen={isOpenSearch}>
            {Search.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon color="mediumseagreen" className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Collapse>

          <NavItem
            className={bem.e('nav-item')}
            onClick={() => changeOpenPersonal(!isOpenPersonal)}
          >
            <BSNavLink className={bem.e('nav-item-collapse')}>
              <div className="d-flex">
                <MdAccountCircle color="lightseagreen" className={bem.e('nav-item-icon')} />
                <span className=" align-self-start">PERSONAL</span>
              </div>
              <MdKeyboardArrowDown
                className={bem.e('nav-item-icon')}
                style={{
                  padding: 0,
                  transform: isOpenPersonal
                    ? 'rotate(0deg)'
                    : 'rotate(-90deg)',
                  transitionDuration: '0.3s',
                  transitionProperty: 'transform',
                }}
              />
            </BSNavLink>
          </NavItem>
          <Collapse isOpen={isOpenPersonal}>
            {Personal.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon color="lightseagreen" className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Collapse>

          <NavItem
            className={bem.e('nav-item')}
            onClick={() => changeOpenReferenceDocs(!isOpenReferenceDocs)}
          >
            <BSNavLink className={bem.e('nav-item-collapse')}>
              <div className="d-flex">
                <MdBook color="olive" className={bem.e('nav-item-icon')} />
                <span className=" align-self-start">DOCS</span>
              </div>
              <MdKeyboardArrowDown
                className={bem.e('nav-item-icon')}
                style={{
                  padding: 0,
                  transform: isOpenReferenceDocs
                    ? 'rotate(0deg)'
                    : 'rotate(-90deg)',
                  transitionDuration: '0.3s',
                  transitionProperty: 'transform',
                }}
              />
            </BSNavLink>
          </NavItem>
          <Collapse isOpen={isOpenReferenceDocs}>
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
                  <Icon color="olive" className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Collapse>

          <NavItem
            className={bem.e('nav-item')}
            onClick={() => changeOpenOthers(!isOpenOthers)}
          >
            <BSNavLink className={bem.e('nav-item-collapse')}>
              <div className="d-flex">
                <MdMoreHoriz color="orange" className={bem.e('nav-item-icon')} />
                <span className=" align-self-start">Others</span>
              </div>
              <MdKeyboardArrowDown
                className={bem.e('nav-item-icon')}
                style={{
                  padding: 0,
                  transform: isOpenOthers
                    ? 'rotate(0deg)'
                    : 'rotate(-90deg)',
                  transitionDuration: '0.3s',
                  transitionProperty: 'transform',
                }}
              />
            </BSNavLink>
          </NavItem>
          <Collapse isOpen={isOpenOthers}>
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
                  <Icon color="orange" className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Collapse>

          <NavItem key='Settings' className={bem.e('nav-item')}>
            <BSNavLink
              id={`navItem-${Settings.name}-Settings`}
              className="text-uppercase"
              tag={NavLink}
              to={Settings.to}
              activeClassName="active"
              exact={Settings.exact}
            >
              <Settings.Icon color="lightslategrey" className={bem.e('nav-item-icon')} />
              <span className="">{Settings.name}</span>
            </BSNavLink>
          </NavItem>
        </Nav>
      </div>
    </aside>
  );
}

export default Sidebar;
