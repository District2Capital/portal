import React from 'react';
import { FilingDropdownModalBody } from 'components/Card';
import LoadingSpinner from '../../LoadingSpinner';

const FilingViewModalBody = ({ data, ...props }) => {
    if (data) {
        return (
            <div>
                {data.map((each, index) => {
                    return (
                        <FilingDropdownModalBody key={index} index={index} data={each} />
                    );
                })}
            </div>
        );
    }
    else {
        return (<LoadingSpinner />);
    }
}

export default FilingViewModalBody;