import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input, Badge, DropdownToggle, Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
const SearchInput = () => {
  const [inputState, changeInput] = useState('');

  return (
    <Form inline className="cr-search-form" onSubmit={e => e.preventDefault()}>
      <MdSearch
        size="20"
        className="cr-search-form__icon-search text-secondary"
      />
      <Dropdown style={{ width: "fit-content", margin: "0 auto" }} isOpen={inputState} toggle={() => changeInput('')}>
        <DropdownToggle className="p-0"><Input
          onChange={(e) => changeInput(e.target.value)}
          type="search"
          className="cr-search-form__input p-2"
          placeholder="Search..."
        /></DropdownToggle>
        <DropdownMenu>
          <DropdownItem><NavLink to={{ pathname: "/search", searchExecuted: false, searchStrings: { companySearchString: inputState } }}>{inputState} <Badge color="dark">Search Company Filings</Badge></NavLink></DropdownItem>
          <DropdownItem><NavLink to={{ pathname: "/search", searchExecuted: false, searchStrings: { formTypeSearchString: inputState } }}>{inputState} <Badge color="dark">Search FormType Filings</Badge></NavLink></DropdownItem>
          <DropdownItem><NavLink to={{ pathname: "/companysearch", searchExecuted: false, searchStrings: { companySearchString: inputState } }}>{inputState} <Badge color="dark">Search Companies</Badge></NavLink></DropdownItem>
          <DropdownItem><NavLink to={{ pathname: "/formtypesearch", searchExecuted: false, searchStrings: { formTypeSearchString: inputState } }}>{inputState} <Badge color="dark">Search FormTypes</Badge></NavLink></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Form>
  );
};

export default SearchInput;
