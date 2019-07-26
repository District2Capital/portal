import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

class FilingDropdownModalBody extends Component {
    constructor(props) {
        super(props);
        if (props.index === 0) {
            this.state = { collapse: true }
        }
        else {
            this.state = { collapse: false }
        }
    }

    toggle(newCollapse) {
        this.setState({ collapse: !newCollapse });
    }

    viewExternally = async (dataLink) => {
        window.open(dataLink);
    }

    render() {
        const { data } = this.props;
        const { collapse } = this.state;
        return (
            <div>
                <div className="d-flex">
                    <Button outline color="secondary" onClick={() => this.toggle(collapse)} style={{ margin: '0.5rem', width: "-webkit-fill-available" }}>
                        {(collapse) ? (<MdExpandLess size={30} style={{ float: "left" }} />) : (<MdExpandMore size={30} style={{ float: "left" }} />)}
                        <h5>{data.title}</h5>
                    </Button>
                    <Button outline color="primary" onClick={() => this.viewExternally(data.docLink)} style={{ margin: '0.5rem' }}>View</Button>
                </div>
                <Collapse isOpen={collapse}>
                    <div style={{ maxHeight: "50rem", overflowY: "scroll", border: "1px solid #36454f", borderRadius: "5px", margin: "0.5rem" }}>
                        <div style={{ margin: "10px" }} dangerouslySetInnerHTML={{ __html: data.data }}></div>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default FilingDropdownModalBody;