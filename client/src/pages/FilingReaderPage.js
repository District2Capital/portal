import React, { Component } from 'react';

class FilingReaderPage extends Component {
    state = {
        xmlData: null
    }
    render() {
        if (!this.state.xmlData) {
            return (
                <div>
                    <h1>Filing Reader</h1>
                    <h1>No Document Selected</h1>
                </div>
            );
        }
        return (
            <h1>Filing Reader</h1>
        );
    }
}

export default FilingReaderPage;