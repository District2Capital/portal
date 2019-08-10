import React, { Component } from 'react';
import FilingDropdownModalBody from './FilingDropdownModalBody';

class FilingViewModalBody extends Component {
    state = {}
    render() {
        const { data } = this.props;
        if (data) {
            return (
                <div>
                    {data.map((each, index) => {
                        return (
                            <FilingDropdownModalBody index={index} data={each} />
                        );
                    })}
                </div>
            );
        }
        else {
            return (
                <div className="d-flex align-items-center flex-grow-1 justify-content-center">
                    <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>);
        }
    }
}

export default FilingViewModalBody;