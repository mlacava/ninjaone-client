import React from 'react'
import { deviceFilterType, deviceSortFileds } from '../helpers/deviceTypesAndFields';
import Multiselect from 'multiselect-react-dropdown';
import { loadFilteredAndSortedDevices, setFilters, setSortBy } from '../actions/devices';
import { useDispatch, useSelector } from 'react-redux';

export const FiltersAndSort = () => {

    const deviceTypesList = deviceFilterType();
    const deviceSort = deviceSortFileds();
    const dispatch = useDispatch();

    const { filters, sortBy } = useSelector(state => state.devices);

    const handleOnFilterChange = (selectedItems) => {
        dispatch(setFilters(selectedItems));
        dispatch(loadFilteredAndSortedDevices());
    }
    const handleOnSortChange = (selectedItem) => {
        dispatch(setSortBy(selectedItem));
        dispatch(loadFilteredAndSortedDevices());
    }

    const selectedFilters = filters;
    const selectedSortBy = sortBy;

    return (
        <div className='row'>
            <div className='col-6'>
                Device Type: <Multiselect
                    selectedValues={selectedFilters}
                    options={deviceTypesList}
                    onSelect={handleOnFilterChange}
                    onRemove={handleOnFilterChange}
                    displayValue="name"
                />
            </div>
            <div className='col-6'>
                Sort By: <Multiselect
                    selectedValues={selectedSortBy}
                    options={deviceSort}
                    onSelect={handleOnSortChange}
                    singleSelect={true}
                    displayValue="name"
                />
            </div>
        </div>
    )
}

