import Avatar from 'components/Avatar';
import { UserCard } from 'components/Card';
import SearchInput from 'components/SearchInput';
import defaultUser from 'assets/defaultUser.png';
import React from 'react';
import {
  MdClearAll,
  MdExitToApp,
  MdPersonPin
} from 'react-icons/md';
import {
  Button,
  ListGroup,
  ListGroupItem,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Modal,
  ModalBody,
} from 'reactstrap';
import bn from 'utils/bemnames';

const bem = bn.create('header');

class Header extends React.Component {
  state = {
    isOpenUserModal: false
  };

  toggleUserModal = () => {
    this.setState({
      isOpenUserModal: !this.state.isOpenUserModal,
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  render() {
    const { isOpenUserModal } = this.state;
    return (
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className="mr-2">
          <Button outline onClick={this.handleSidebarControlButton} className="shadow-none">
            <MdClearAll size={25} />
          </Button>
        </Nav>
        <Nav navbar>
          <SearchInput />
        </Nav>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink id="Popover2">
              <Avatar
                onClick={this.toggleUserModal}
                src={defaultUser}
                className="can-click"
              />
            </NavLink>
            <Modal
              className="m-0"
              id="userCardModal"
              isOpen={isOpenUserModal}
              toggle={this.toggleUserModal}
              style={{ minWidth: 250, top: "5rem", right: "1rem", position: "absolute" }}>
              <UserCard
                title=""
                subtitle=""
                text=""
                avatar={defaultUser}
                className="border-light"
              >
                <ListGroup flush>
                  <ListGroupItem tag="button" action onClick={() => { window.location = "/settings"; }} className="border-light">
                    <MdPersonPin /> Settings
                    </ListGroupItem>
                  <ListGroupItem tag="button" action onClick={() => { localStorage.removeItem(process.env.REACT_APP_API_LOGIN_TOKEN_NAME); window.location = "/"; }} className="border-light">
                    <MdExitToApp /> Signout
                    </ListGroupItem>
                </ListGroup>
              </UserCard>
            </Modal>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
