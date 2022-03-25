import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm'
import { deviceType } from '../helpers/deviceTypesAndFields';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Messages } from './Messages';
import { addDevices, editDevices, setDevice } from '../actions/devices';
import { useNavigate } from 'react-router-dom';
import { postDevice, putDevice } from '../helpers/deviceHelper';


export const DeviceDetails = () => {

    const initialSate = {
        id: '',
        systemName: '',
        type: '',
        hddCapacity: 0
    };

    const { activeDevice } = useSelector(state => state.devices);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    setDevice(initialSate);

    if (Object.keys(activeDevice).length !== 0) {
        initialSate.id = activeDevice.id;
        initialSate.systemName = activeDevice.system_name;
        initialSate.type = activeDevice.type;
        initialSate.hddCapacity = activeDevice.hdd_capacity;
    }

    const [formValues, handleInputChange] = useForm(initialSate);

    const { systemName, type, hddCapacity } = formValues;

    const [error, setError] = useState('');


    const deviceTypesList = deviceType().map(({ id, name }) => {
        return (
            <option key={id} value={id}>{name}</option>
        );
    });

    const handleCancel = () => {
        navigate('/', { replace: true })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            if (!formValues.id)
                postDevice(formValues).then(response => {
                    dispatch(addDevices(response));
                });
            else
                putDevice(formValues.id, formValues).then(response => {
                    dispatch(editDevices(formValues.id, response));
                });
            navigate('/', { replace: true });
        }
    }

    const isFormValid = () => {
        if (systemName.trim().length === 0) {
            setError('System Name is required');
            return false;
        } else if (type.trim().length === 0) {
            setError('Select Type');
            return false;
        } else if (hddCapacity === 0) {
            setError('HDD Capacity must be more than 0 GB');
            return false;
        }
        setError('');
        return true;
    }

    return (
        <div>
            <h1>{formValues.id ? "Edit Device" : "New Device"}</h1>
            <hr />
            <Messages errorMessage={error} />
            <form onSubmit={handleSubmit} className="form-group">
                <input
                    className='form-control mb-2'
                    type='text'
                    placeholder='System Name'
                    name='systemName'
                    value={systemName}
                    onChange={handleInputChange}
                />
                <select
                    className='form-select mb-2'
                    name='type'
                    value={type}
                    onChange={handleInputChange}>
                    {deviceTypesList}
                </select>
                <input
                    className='form-control mb-2'
                    type='number'
                    name='hddCapacity'
                    placeholder='HDD Capacity'
                    value={hddCapacity}
                    onChange={handleInputChange}
                />
                <button
                    className='btn btn-success'
                    type='submit'
                >
                    <FontAwesomeIcon icon={faFloppyDisk} /> Save
                </button>
                <button
                    type='button'
                    className='btn btn-primary btn-back'
                    onClick={handleCancel}
                >
                    <FontAwesomeIcon icon={faBackward} /> Cancel
                </button>
            </form>
        </div>
    )
}