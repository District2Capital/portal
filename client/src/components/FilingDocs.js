import React from 'react';
import { filings } from '../config';
import FilingDocSection from './FilingDocSection';

const FilingDocs = () => {
    var values = Object.values(filings);
    var keys = Object.keys(filings);
    return (
        <div>
            {values.map((value, valueindex) => {
                return (
                    <div key={valueindex}>
                        <FilingDocSection keys={keys} value={value} valueindex={valueindex} />
                    </div>
                );
            })}
        </div>
    );
}

export default FilingDocs;