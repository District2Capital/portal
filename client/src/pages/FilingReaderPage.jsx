import React, { useState } from 'react';

const FilingReaderPage = () => {
    const [xmlData, changeXmlData] = useState(null);
    if (!xmlData) {
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

export default FilingReaderPage;