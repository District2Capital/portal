import React, { useState } from 'react';
import { Badge, Button, Row } from 'reactstrap';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { FilingDocFollowButton } from 'components/FilingDocs';

const FilingDocSection = ({ keys, value, valueindex }) => {
    const [saved, changeSaved] = useState(false);
    const [isHidden, changeIsHidden] = useState(false);

    const handleSectionSize = () => {
        changeIsHidden(!isHidden);
    }

    return (
        <div>
            <Row>
                <Button className="px-2 py-1" onClick={() => handleSectionSize()} style={{ boxShadow: "none", margin: "10px" }} outline color="secondary">{(isHidden) ? (<MdExpandMore />) : (<MdExpandLess />)}</Button>
                <h4 style={{ margin: "auto 0px" }}>{keys[valueindex]}</h4>
            </Row>
            {value.filingArray.map((filing, filingindex) => {
                if (!isHidden) {
                    return (
                        <Row style={{ flexWrap: "nowrap" }}>
                            <FilingDocFollowButton FormType={filing} BadgeColor={value.color} />
                            <p style={{ margin: "auto 0px" }} key={filing + filingindex}>
                                <Badge color={value.color || "primary"}>{filing}</Badge> - {filing} - {value.descriptionArray[filingindex]}
                            </p>
                        </Row>
                    );
                }
                return ('');
            })}
        </div>
    );
}

export default FilingDocSection;