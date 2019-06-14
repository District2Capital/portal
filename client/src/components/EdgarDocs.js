import React from 'react';
import { filings } from '../config';
import { Badge } from 'reactstrap';

const EdgarDocs = () => {
    var values = Object.values(filings);
    var keys = Object.keys(filings);
    return (
        <div>
            {values.map((value, valueindex) => {
                return (
                    <div key={value + valueindex}>
                        <h4>{keys[valueindex]}</h4>
                        {value.filingArray.map((filing, filingindex) => {
                            return (<p key={filing + filingindex}>
                                <Badge color={value.color || "primary"}>{filing}</Badge> - {filing} {value.descriptionArray[filingindex]}
                            </p>);
                        })}
                    </div>);
            })}
        </div>
    );      
}
 
export default EdgarDocs;