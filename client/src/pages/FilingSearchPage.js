import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Col, CardBody, Badge, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { Filings } from '../components/Card';
import { filings } from '../config';
import SearchForm from '../components/SearchForm';
import CompanyCard from 'components/Card/CompanyCard';
import { getJwt } from 'services/auth';
import SmallRecentSearchCard from 'components/Card/SmallRecentSearchCard';

const FilingSearchPage = ({ ...props }) => {

  const [time, updateTime] = useState(Date.now());
  const [recentSearches, updateRecentSearch] = useState([]);
  const [data, updateData] = useState([]);
  const [filter, updateFilter] = useState([]);
  const [numberItems, updateNumberItems] = useState("All");
  const [availableFormTypes, updateAvailableFormTypes] = useState([]);
  const [formdropdownOpen, updateFormDropDownOpen] = useState(false);
  const [numberdropdownOpen, updateNumberDropDownOpen] = useState(false);
  const [cikQuery, updateCikQuery] = useState("");
  const [typeQuery, updateTypeQuery] = useState("");
  const [companyQuery, updateCompanyQuery] = useState("");
  const [showLoader, updateShowLoader] = useState(false);
  const [companiesBool, updateCompaniesBool] = useState(false);
  const [searchExecuted, updateSearchExecuted] = useState(false);
  const numberFilter = ["All", 5, 10, 25, 50, 100, 200];

  useEffect(() => {
    if (props.location.searchStrings && !props.location.searchExecuted) {
      props.location.searchExecuted = true;
      let companySearchString = props.location.searchStrings.companySearchString ? props.location.searchStrings.companySearchString : "";
      let cikSearchString = props.location.searchStrings.cikSearchString ? props.location.searchStrings.cikSearchString : "";
      let formTypeSearchString = props.location.searchStrings.formTypeSearchString ? props.location.searchStrings.formTypeSearchString : "";
      searchHandler(companySearchString, formTypeSearchString, cikSearchString);
    }
    else if (!props.location.searchExecuted) {
      getRecentSearchData();
    }
  }, [props]);

  const getDataFromDb = async () => {
    await updateRecentSearches();
    await getRecentSearchData();
    await axios.get(`/api/sec/getData/?cik=${cikQuery}&type=${typeQuery}&company=${companyQuery}`).then(res => {
      if (res.data.companiesBool) {
        updateData(res.data.data);
        updateCompaniesBool(res.data.companiesBool);
        updateShowLoader(false);
        updateSearchExecuted(true);
      }
      else {
        updateData(res.data);
        updateAvailableFormTypes([...new Set(res.data.items.map(a => a.formType))]);
        updateFilter([...new Set(res.data.items.map(a => a.formType))]);
        updateShowLoader(false);
        updateSearchExecuted(true);
      }
    });
  };

  const getRecentSearchData = async () => {
    var config = {
      params: { "x-auth-token": getJwt() }
    };
    await axios.get('/api/stats/getRecentSearchData', config).then(res => {
      let searches = res.data;
      if (searches && searches.data.length) {
        // Sort data by company
        updateRecentSearch(searches.data);
      }
    })
      .catch(error => {
        console.log('ERROR. Could not get recent searches.');
      });
  }

  const updateRecentSearches = async () => {
    // Save queried filing as a recent search
    var params = {
      "x-auth-token": getJwt(),
      companySearchString: companyQuery,
      cikSearchString: cikQuery,
      formTypeSearchString: typeQuery
    };
    await axios.post(`api/users/updateRecentSearches`, params);
  }

  const toggleFormType = () => {
    updateFormDropDownOpen(!formdropdownOpen);
  }

  const toggleNumber = () => {
    updateNumberDropDownOpen(!numberdropdownOpen);
  }

  const handleFilterClick = (clickedFormType) => {
    updateFilter(clickedFormType);
  }

  const handleNumberFilterClick = (clickedFormType) => {
    updateNumberItems(clickedFormType);
  }

  const searchHandler = async (company, type, cik) => {
    updateCompaniesBool(false);
    updateCompanyQuery(company);
    updateCikQuery(cik);
    updateTypeQuery(type);
    updateShowLoader(true);
    await getDataFromDb();
  }

  return (
    <div className="px-4 h-100 d-flex overflow-hidden flex-column">
      <div className="py-3 d-flex flex-row">
        <h1 className="mr-auto">Filing Search</h1>
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
                var values = Object.values(filings);
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
      <SearchForm searchHandler={(company, type, cik) => searchHandler(company, type, cik)} />
      {(recentSearches.length) ? (<Card className="mt-2">
        <CardHeader>Recent Searches</CardHeader>
        <CardBody style={{ margin: "10px", paddingTop: "0px", paddingBottom: "0px" }}>
          <Row style={{ overflowX: "scroll" }} className="flex-row d-flex flex-nowrap flex-grow-1">
            {recentSearches.map(({ companySearchString, cikSearchString, formTypeSearchString, dateSearched }, index) => {
              return (<SmallRecentSearchCard key={index} linkto="/companysearch" companySearchString={companySearchString} cikSearchString={cikSearchString} formTypeSearchString={formTypeSearchString} dateSearched={dateSearched} />);
            })}
          </Row>
        </CardBody>
      </Card>) : ("")}
      <Row className="d-flex justify-content-center flex-grow-1">
        {(companiesBool) ? (data.map((company, index) => {
          if (numberItems === "All" || index < numberItems) {
            return (
              <Col key={index} xl={3} lg={4} md={6} sm={8} xs={12} className="mb-3">
                <CompanyCard searchHandler={searchHandler} searchCard={true} company={company} />
              </Col>
            );
          }
          return (<div></div>);
        })) : (
            <Filings showLoader={showLoader} searchExecuted={searchExecuted} data={data.items} filter={filter} number={numberItems} />
          )}
      </Row>
    </div>
  );
};

export default FilingSearchPage;
