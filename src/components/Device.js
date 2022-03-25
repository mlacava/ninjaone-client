import { DeviceItem } from './DeviceItem';

export const Device = ({ devices = [] }) => {

    return (
        devices.map(device => (
            device &&
            <DeviceItem
                key={device.id}
                device={device}
            />
        ))
    )
}
