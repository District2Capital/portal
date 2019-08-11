import React, { useState, useEffect } from 'react';
import { Badge, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { Filings } from 'components/Card';
import { filings } from 'config';

const SECFeedPage = () => {
  const [data, changeData] = useState({});
  const [filter, changeFilter] = useState([]);
  const [numberItems, changeNumberItems] = useState("All");
  const [availableFormTypes, changeAvailableFormTypes] = useState([]);
  const [formdropdownOpen, changeFormDropDownOpen] = useState(false);
  const [numberdropdownOpen, changeNumberDropDownOpen] = useState(false);
  const [showLoader, changeShowLoader] = useState(true);
  var numberFilter = ["All", 5, 10, 25, 50, 100];
  // constructor(props) {
  //   super(props);
  //   this._isMounted = false;
  // }

  useEffect(() => {
    getDataFromDb();
    //setInterval(getDataFromDb(), 10000);
  }, []);

  const getDataFromDb = async () => {
    await axios.get('/api/sec/getData/?cik=&type=&company=').then(res => {
      if (!filter.length) {
        changeData(res.data);
        changeShowLoader(false);
        changeAvailableFormTypes([...new Set(res.data.items.map(a => a.formType))]);
        changeFilter([...new Set(res.data.items.map(a => a.formType))]);
      }
    });
  };

  const toggleFormType = () => {
    changeFormDropDownOpen(!formdropdownOpen);
  }

  const toggleNumber = () => {
    changeNumberDropDownOpen(!numberdropdownOpen);
  }

  const handleFilterClick = (clickedFormType) => {
    changeFilter(clickedFormType);
  }

  const handleNumberFilterClick = (clickedFormType) => {
    changeNumberItems(clickedFormType);
  }

  return (
    <div className="px-3 h-100 d-flex overflow-hidden flex-column">
      <div className="py-3 d-flex flex-row">
        <h1 className="mr-auto">SEC Recent Filings</h1>
        <div className="d-flex flex-wrap justify-content-end">
          <Dropdown className="p-2" style={{ width: "120px" }} isOpen={numberdropdownOpen} toggle={toggleNumber}>
            <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Number</DropdownToggle>
            <DropdownMenu>
              {numberFilter.map((number, index) => {
                if (!index) {
                  return (<DropdownItem key={index} onClick={() => handleNumberFilterClick(number)}>{number}</DropdownItem>);
                }
                return (<DropdownItem key={index} onClick={() => handleNumberFilterClick(number)}>{"<"} {number}</DropdownItem>);
              })}
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="p-2" style={{ width: "120px" }} isOpen={formdropdownOpen} toggle={toggleFormType}>
            <DropdownToggle outline className="w-100" style={{ boxShadow: "none" }} caret>Type</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => handleFilterClick(availableFormTypes)}>All</DropdownItem>
              {availableFormTypes.map(formType => {
                var badgeColor = "primary";
                var values = filings ? Object.values(filings) : {};
                for (var key = 0; key < values.length; key++) {
                  for (var filing = 0; filing < values[key].filingArray.length; filing++) {
                    if (formType === values[key].filingArray[filing]) {
                      badgeColor = values[key].color;
                    }
                  }
                }
                return (<DropdownItem key={formType} onClick={() => handleFilterClick([formType])}>
                  {formType} <Badge color={badgeColor}>{formType}</Badge>
                </DropdownItem>);
              })}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <Row className="d-flex justify-content-center flex-grow-1">
        <Filings data={data.items} showLoader={showLoader} filter={filter} number={numberItems} apiRoute={'sec'} />
      </Row>
    </div>
  );
};

export default SECFeedPage;