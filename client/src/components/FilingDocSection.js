import React, { Component } from 'react';
import { Badge, Button, Row } from 'reactstrap';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import FilingDocFollowButton from './FilingDocFollowButton';

class FilingDocSection extends Component {
    state = {
        saved: false,
        isHidden: false
    }

    handleSectionSize() {
        this.setState({ isHidden: !this.state.isHidden })
    }

    render() {
        const { isHidden } = this.state;
        const { keys, value, valueindex } = this.props;
        return (
            <div>
                <Row>
                    <Button onClick={() => this.handleSectionSize()} style={{ boxShadow: "none", padding: "2px", margin: "10px" }} outline color="secondary">{(isHidden) ? (<MdExpandMore />) : (<MdExpandLess />)}</Button>
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
}

export default FilingDocSection;