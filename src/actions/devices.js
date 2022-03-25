import { getDevices } from "../helpers/deviceHelper";
import { types } from "../types/types";

export const loadFilteredAndSortedDevices = () => {
    return (dispatch, getState) => {
        getDevices().then(responseDevices => {
            const { filters, sortBy } = getState().devices;
            const filtered = filterDevices(responseDevices, filters, sortBy);
            dispatch(setDevices(filtered));
        });
    };
};

export const addNewDevice = (newDevice) => {
    return (dispatch) => {
        dispatch(addDevices(newDevice));
    };
}

export const editDevice = (id, device) => {
    return (dispatch) => {
        dispatch(editDevices(id, device));
    };
}

export const removeDevice = (deviceId) => {
    return (dispatch) => {
        dispatch(deleteDevices(deviceId));
    };
}

export const setActiveDevice = (device) => {
    return (dispatch) => {
        dispatch(setDevice(device));
    };
}

export const setDeviceFilters = (filters) => {
    return (dispatch) => {
        dispatch(setFilters(filters));
    }
}

export const setDeviceSortBy = (sortBy) => {
    return (dispatch) => {
        dispatch(setSortBy(sortBy));
    }
}

export const setDevice = (device) => ({
    type: types.deviceActive,
    payload: device
});

export const setFilters = (filters) => ({
    type: types.deviceFilters,
    payload: filters
});

export const setSortBy = (sortBy) => ({
    type: types.deviceSortBy,
    payload: sortBy
});

export const setDevices = (devices) => ({
    type: types.devicesLoad,
    payload: devices
});

export const addDevices = (device) => ({
    type: types.devicesAddNew,
    payload: device
});

export const editDevices = (id, device) => ({
    type: types.devicesEdit,
    payload: {
        deviceId: id,
        device: device
    }
});

export const deleteDevices = (id) => ({
    type: types.devicesDelete,
    payload: {
        deviceId: id
    }
});

const filterDevices = (devices, filters, sortBy) => {
    if (Object.keys(filters).length === 0) return sortDevices(devices, sortBy);
    const filterIds = filters.map(filter => filter.id);
    let filteredDevices = [];

    devices.forEach(device => {
        if (filterIds.includes(device.type))
            filteredDevices.push(device);
    });

    filteredDevices = sortDevices(filteredDevices, sortBy);
    return filteredDevices;
};

const sortDevices = (devices, sortBy) => {
    if (!sortBy) return devices;
    const result = devices.sort((device1, device2) => {
        if (sortBy[0].id === "system_name" && device1.system_name < device2.system_name) return -1;
        if (sortBy[0].id === "system_name" && device1.system_name > device2.system_name) return 1;
        if (sortBy[0].id === "type" && device1.type < device2.type) return -1;
        if (sortBy[0].id === "type" && device1.type > device2.type) return 1;
        if (sortBy[0].id === "hdd_capacity" && parseInt(device1.hdd_capacity) < parseInt(device2.hdd_capacity)) return -1;
        if (sortBy[0].id === "hdd_capacity" && parseInt(device1.hdd_capacity) > parseInt(device2.hdd_capacity)) return 1;
        return 0;
    })
    return result;
}