export const deviceType = () => {

    const deviceTypes = [
        {
            id: "",
            name: "Select Type",
        },
        {
            id: "WINDOWS_WORKSTATION",
            name: "Windows Workstation",
        },
        {
            id: "WINDOWS_SERVER",
            name: "Windows Server",
        },
        {
            id: "MAC",
            name: "Mac",
        }
    ];

    return deviceTypes;
}

export const deviceFilterType = () => {

    const deviceTypes = [
        {
            id: "WINDOWS_WORKSTATION",
            name: "Windows Workstation",
        },
        {
            id: "WINDOWS_SERVER",
            name: "Windows Server",
        },
        {
            id: "MAC",
            name: "Mac",
        }
    ];

    return deviceTypes;
}

export const deviceSortFileds = () => {

    const deviceSort = [
        {
            id: "system_name",
            name: "System Name"
        },
        {
            id: "type",
            name: "Type"
        },
        {
            id: "hdd_capacity",
            name: "HDD Capacity"
        }
    ];

    return deviceSort;
}