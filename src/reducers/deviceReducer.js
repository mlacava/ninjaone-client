import { types } from "../types/types";

const initialState = {
    devices: [],
    activeDevice: null,
    filters: [],
    sortBy: null
}

export const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.devicesLoad:
            return {
                ...state,
                devices: [...action.payload]
            };
        case types.devicesEdit:
            return {
                ...state,
                devices: state.devices.map(
                    device => device.id === action.payload.deviceId
                        ? action.payload.device
                        : device
                )
            };
        case types.devicesDelete:
            return {
                ...state,
                devices: [...state.devices.filter(d => d.id !== action.payload.deviceId)]
            };
        case types.deviceActive:
            return {
                ...state,
                activeDevice: { ...action.payload }
            };
        case types.deviceFilters:
            return {
                ...state,
                filters: [...action.payload]
            };
        case types.deviceSortBy:
            return {
                ...state,
                sortBy: { ...action.payload }
            };
        default:
            return state;
    }
}