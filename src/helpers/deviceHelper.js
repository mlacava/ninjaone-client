
export const getDevices = async () => {
    const url = 'http://localhost:3000/devices';
    const response = await fetch(url, {
        crossDomain: true
    });
    const data = await response.json();
    return data;
}


export const postDevice = async (newDevice) => {
    const url = 'http://localhost:3000/devices';
    const response = await fetch(url, {
        crossDomain: true,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            system_name: newDevice.systemName,
            type: newDevice.type,
            hdd_capacity: newDevice.hddCapacity
        })
    });
    const data = await response.json();
    return data;
};

export const putDevice = async (deviceId, updateDevice) => {
    const url = `http://localhost:3000/devices/${deviceId}`;
    const response = await fetch(url, {
        crossDomain: true,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            system_name: updateDevice.systemName,
            type: updateDevice.type,
            hdd_capacity: updateDevice.hddCapacity
        })
    });
    const data = await response.json();
    return data;
};

export const deleteDevice = async (deviceId) => {
    const url = `http://localhost:3000/devices/${deviceId}`;
    const response = await fetch(url, {
        crossDomain: true,
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
};