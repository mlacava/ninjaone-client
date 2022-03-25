import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FiltersAndSort } from '../FiltersAndSort';
import { Device } from '../Device';
import { loadFilteredAndSortedDevices, setDevice, } from '../../actions/devices';
import { Link } from 'react-router-dom';

export const HomeScreen = () => {

    const dispatch = useDispatch();
    const { devices } = useSelector(state => state.devices);

    useEffect(() => {
        dispatch(loadFilteredAndSortedDevices());
    }, [dispatch]);

    const handleNew = () => {
        dispatch(setDevice({}));
    }

    return (
        <div>
            <h1>NinjaOne Client</h1>
            <hr />
            <div className='header'>
                <h3>Devices ({devices.length})</h3>
                <Link
                    to={'/new'}
                    className='btn btn-success add-new'
                    onClick={handleNew}
                >
                    <FontAwesomeIcon icon={faPlus} /> Add Device
                </Link>
            </div>
            <div className='row'>
                <div className='col-12 filters'>
                    <FiltersAndSort />
                </div>
                <div className='col-12'>
                    <Device devices={devices} />
                </div>
            </div>
        </div >
    )
}
