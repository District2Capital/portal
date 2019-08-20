import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input, Badge, DropdownToggle, Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink, Redirect, withRouter } from 'react-router-dom';

const SearchInput = (props) => {
  const [dropdownToggled, changeToggle] = useState(false);
  const [inputState, changeInput] = useState('');
  const [redirect, initiateRedirect] = useState(false);

  const toggleDropDown = (input) => {
    if (input.length) {
      changeToggle(true);
    }
    else {
      changeToggle(false);
    }
  }

  const handleSubmit = (e) => {
    changeToggle(false);
    e.preventDefault();
    e.stopPropagation();
    if (e.target.value) changeInput(e.target.value);
    var input = inputState === e.target.value ? inputState : e.target.value;
    if ((props && props.location) && props.location.pathname === '/search') {
      console.log(props.location.searchExecuted);
      props.location.searchExecuted = !props.location.searchExecuted;
      props.location.searchStrings = { companySearchString: input };
      initiateRedirect(true);
    } else {
      initiateRedirect(true);
    }
    changeInput('');
  }

  let content = redirect ? (<Redirect to={{ pathname: '/search', searchExecuted: false, searchStrings: { companySearchString: inputState } }} />) : '';
  return (
    <React.Fragment>
      <Form inline className="cr-search-form" onSubmit={(e) => handleSubmit(e)}>
        <MdSearch
          size="20"
          className="cr-search-form__icon-search text-secondary"
        />
        <Dropdown style={{ width: "fit-content", margin: "0 auto" }} isOpen={dropdownToggled} toggle={toggleDropDown}>
          <DropdownToggle className="p-0"><Input
            onEmptied={() => changeInput('')}
            className="clearable"
            value={inputState}
            onChange={(e) => { changeInput(e.target.value); toggleDropDown(e.target.value); }}
            type="search"
            placeholder="Search..."
          /></DropdownToggle>
          <DropdownMenu>
            <DropdownItem><NavLink className="text-decoration-none" onClick={(e) => { e.stopPropagation(); changeInput(''); changeToggle(false); }} to={{ pathname: "/search", searchExecuted: false, searchStrings: { companySearchString: inputState } }}><div>{inputState} <Badge color="dark">Search Filings by Company</Badge></div></NavLink></DropdownItem>
            <DropdownItem><NavLink className="text-decoration-none" onClick={(e) => { e.stopPropagation(); changeInput(''); changeToggle(false); }} to={{ pathname: "/search", searchExecuted: false, searchStrings: { cikSearchString: inputState } }}><div>{inputState} <Badge color="dark">Search Filings by Ticker</Badge></div></NavLink></DropdownItem>
            <DropdownItem><NavLink className="text-decoration-none" onClick={(e) => { e.stopPropagation(); changeInput(''); changeToggle(false); }} to={{ pathname: "/search", searchExecuted: false, searchStrings: { formTypeSearchString: inputState } }}><div>{inputState} <Badge color="dark">Search Filings by Form Type</Badge></div></NavLink></DropdownItem>
            <DropdownItem><NavLink className="text-decoration-none" onClick={(e) => { e.stopPropagation(); changeInput(''); changeToggle(false); }} to={{ pathname: "/companysearch", searchExecuted: false, searchStrings: { companySearchString: inputState } }}><div>{inputState} <Badge color="dark">Search Companies by Name</Badge></div></NavLink></DropdownItem>
            <DropdownItem><NavLink className="text-decoration-none" onClick={(e) => { e.stopPropagation(); changeInput(''); changeToggle(false); }} to={{ pathname: "/companysearch", searchExecuted: false, searchStrings: { cikSearchString: inputState } }}><div>{inputState} <Badge color="dark">Search Companies by Ticker</Badge></div></NavLink></DropdownItem>
            <DropdownItem><NavLink className="text-decoration-none" onClick={(e) => { e.stopPropagation(); changeInput(''); changeToggle(false); }} to={{ pathname: "/formtypesearch", searchExecuted: false, searchStrings: { formTypeSearchString: inputState } }}><div>{inputState} <Badge color="dark">Search Form Types</Badge></div></NavLink></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Form>
      {content}
    </React.Fragment>
  );

};

export default withRouter(SearchInput);
