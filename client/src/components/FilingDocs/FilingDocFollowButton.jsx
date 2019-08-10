import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getJwt } from 'services/auth';
import { Button } from 'reactstrap';

const FilingDocFollowButton = ({ FormType, BadgeColor }) => {
    const [saved, changeSaved] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        var config = {
            params: { "x-auth-token": getJwt() }
        };
        if (!saved) {
            await axios.get(`/api/users/verifySavedFormType/?FormType=${FormType}`, config).then(res => {
                changeSaved(res.data.savedFormType);
            });
        }
    }

    const saveFormType = async () => {
        var params = {
            "x-auth-token": getJwt(),
            FormType: FormType,
            BadgeColor: BadgeColor
        };
        await axios.post(`api/users/addSavedFormType`, params).then(res => {
            if (res.status === 200) {
                changeSaved(true);
            }
        });
    };

    const unsaveFormType = async () => {
        var params = {
            "x-auth-token": getJwt(),
            FormType: FormType,
            BadgeColor: BadgeColor
        };
        await axios.post(`api/users/removeSavedFormType`, params).then(res => {
            if (res.status === 200) {
                changeSaved(false);
            }
        });
    };

    if (saved) {
        return (<Button style={{ height: "min-content" }} className="m-2 p-1" outline onClick={() => unsaveFormType()}>UnFollow</Button>);
    }
    return (<Button style={{ height: "min-content" }} className="m-2 p-1" outline onClick={() => saveFormType()}>Follow</Button>);
}

export default FilingDocFollowButton;