import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input, Badge, DropdownToggle, Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink, Redirect, withRouter } from 'react-router-dom';

const SearchInput = (props) => {
  const [dropdownToggled, changeToggle] = useState(false);
  const [inputState, changeInput] = useState('');
  const [redirect, initiateRedirect] = useState(false);

  //useEffect(() => { changeToggle(false) }, );

  const toggleDropDown = () => {
    if (inputState.length) {
      changeToggle(true);
    }
  }

  const handleKeyChange = (e) => {
    changeToggle(false);
    e.preventDefault();
    if ((props && props.location) && props.location.pathname === '/search') {
      props.location.searchExecuted = false;
      props.location.searchStrings = { companySearchString: inputState };
      initiateRedirect(true);
    } else {
      initiateRedirect(true);
    }
  }

  let content = redirect ? (<Redirect to={{ pathname: '/search', searchExecuted: false, searchStrings: { companySearchString: inputState } }} />) : '';
  return (
    <React.Fragment>
      <Form inline className="cr-search-form" onSubmit={(e) => handleKeyChange(e)}>
        <MdSearch
          size="20"
          className="cr-search-form__icon-search text-secondary"
        />
        <Dropdown style={{ width: "fit-content", margin: "0 auto" }} isOpen={dropdownToggled} toggle={toggleDropDown}>
          <DropdownToggle className="p-0"><Input
            onChange={(e) => { changeInput(e.target.value); toggleDropDown(); }}
            type="search"
            placeholder="Search..."
          /></DropdownToggle>
          <DropdownMenu>
            <DropdownItem><NavLink onClick={(e) => { e.stopPropagation(); changeToggle(false); }} to={{ pathname: "/search", searchExecuted: false, searchStrings: { companySearchString: inputState } }}><div>{inputState} <Badge color="dark">Search Company Filings</Badge></div></NavLink></DropdownItem>
            <DropdownItem><NavLink onClick={(e) => { e.stopPropagation(); changeToggle(false); }} to={{ pathname: "/search", searchExecuted: false, searchStrings: { formTypeSearchString: inputState } }}><div>{inputState} <Badge color="dark">Search FormType Filings</Badge></div></NavLink></DropdownItem>
            <DropdownItem><NavLink onClick={(e) => { e.stopPropagation(); changeToggle(false); }} to={{ pathname: "/companysearch", searchExecuted: false, searchStrings: { companySearchString: inputState } }}><div>{inputState} <Badge color="dark">Search Companies</Badge></div></NavLink></DropdownItem>
            <DropdownItem><NavLink onClick={(e) => { e.stopPropagation(); changeToggle(false); }} to={{ pathname: "/formtypesearch", searchExecuted: false, searchStrings: { formTypeSearchString: inputState } }}><div>{inputState} <Badge color="dark">Search FormTypes</Badge></div></NavLink></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Form>
      {content}
    </React.Fragment>
  );

};

export default withRouter(SearchInput);
