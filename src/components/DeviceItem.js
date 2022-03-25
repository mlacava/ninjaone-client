import React from 'react';
import { faPencilSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deviceType } from '../helpers/deviceTypesAndFields';
import { removeDevice, setDevice } from '../actions/devices';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { useDispatch } from 'react-redux';
import { deleteDevice } from '../helpers/deviceHelper';

import 'react-confirm-alert/src/react-confirm-alert.css'

export const DeviceItem = ({ device }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { id, system_name, type, hdd_capacity } = device;

    const deviceTypes = deviceType();

    const getTypeName = (type) => {
        return deviceTypes.find(d => d.id === type)?.name;
    }

    const animateMouseEnter = (id) => {
        const deviceItem = document.getElementById(id);
        deviceItem.className = 'animate__animated animate__fadeIn animate_faster ';
    }
    const animateMouseLeave = (id) => {
        const deviceItem = document.getElementById(id);
        deviceItem.className = '';
    }
    const handleDeviceEdit = () => {
        dispatch(setDevice(device));
        navigate('/edit', { replace: true });

    }
    const handleDelete = () => {
        deleteDevice(device.id).then(response => {
            if (response)
                dispatch(removeDevice(device.id));
        });
    }

    const handleDeviceDelete = () => {
        confirmAlert({
            title: 'Are you sure?',
            message: `You want to delete the ${device.system_name} device?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: handleDelete
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    return (
        <li
            id={id}
            className="animate__animated animate__fadeInDown"
            onMouseEnter={() => animateMouseEnter(id)}
            onMouseLeave={() => animateMouseLeave(id)}
        >
            <div className="list-group-item list-group-item-action ">
                <div className="device">
                    <div className="name">{system_name}</div>
                    <div className="type">{getTypeName(type)}</div>
                    <div className="image">
                        <img
                            src="./hdd.png"
                            alt=""
                        />
                        <span>{hdd_capacity} GB</span>
                    </div>

                </div>
                <div className="options">
                    <button
                        className='btn btn-outline-success'
                        onClick={handleDeviceEdit}
                        title='Edit Device'
                    >
                        <FontAwesomeIcon icon={faPencilSquare} />
                    </button>
                    <button
                        className='btn btn-outline-danger'
                        onClick={handleDeviceDelete}
                        title='Delete Device'
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </li >
    )
}
