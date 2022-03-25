# NinjaOne Client App

## Installation

You need to use this server app in order to run the project, please download or clone it.
https://github.com/NinjaMSP/devicesTask_serverAp

Open a Terminal, Windows Command or PowerShell window go to the server app directory and run these commands.

```bash
  npm install
  npm start
```

Once the serve app is running, uncompress the project file and install it with the next command.

In another Terminal, Windows Command or PowerShell window go to the app directory and run these command.

```bash
  npm install
  npm start
```

If ask's you to run in other port than 3000 because is used by the server app, write yes.

## Screeshot

![App Screenshot](https://github.com/mlacava/SharedImages/blob/main/Img1.jpeg?raw=true)

## Features

- List of devices.
- Multiple filters and sort devices.
- Add new device.
- Edit device.
- Delete device.
- Api calls to a local server app.

## Development Features

- React.
- React Redux.
- Redux Thunk "Middleware".
- Functional Components.
- React Router Dom Components.
- Custom Hooks.
- Controlled Fileds.
- Fontawesome Components.
- Bootstrap.
- Animate.css.

## The App

When the app finishes starting, in the web browser, it will show us the device list screen.

![App Screenshot](https://github.com/mlacava/SharedImages/blob/main/Img2.jpeg?raw=true)

Where we have in the header the number of devices in the list and a button to add a new device.

![App Screenshot](https://github.com/mlacava/SharedImages/blob/main/Img3.jpeg?raw=true)

Then we have the filters and ordering section, where we can select one or more types of devices to filter and order them.

![App Screenshot](https://github.com/mlacava/SharedImages/blob/main/Img4.jpeg?raw=true)

Below the filtering and sorting section, we have the list of devices.

![App Screenshot](https://github.com/mlacava/SharedImages/blob/main/Img5.jpeg?raw=true)

## Add new device

On this screen we can create new devices, all the fields are required and it does not let us save if we do not fill them out or we can click the Cancel button to return to the list screen.

![App Screenshot](https://github.com/mlacava/SharedImages/blob/main/Img6.jpeg?raw=true)

On each of the devices we have two buttons to edit and delete.

![App Screenshot](https://github.com/mlacava/SharedImages/blob/main/Img8.jpeg?raw=true)

If we click the Edit button it takes us to the edition screen, as in the Add screen, all fields are required.

![App Screenshot](https://github.com/mlacava/SharedImages/blob/main/Img7.jpeg?raw=true)

If we click the Delete button a modal popup will show asking we to confir to delete the device.

![App Screenshot](https://github.com/mlacava/SharedImages/blob/main/Img9.jpeg?raw=true)

## API Reference

The API callas that uses the app are the following.

#### Get all devices

```http
  GET http://localhost:3000/devices
```

#### Get device

```http
  GET http://localhost:3000/devices/${id}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `string` | **Required**. Id of device to fetch |

#### Add new device

```http
  POST http://localhost:3000/devices/
  Content-Type: application/json
  {
    "system_name": "my-server-name",
    "type": "my-server-type",
    "hdd_capacity": "my-server-hdd-capacity"
  }
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `string` | **Required**. Id of device to fetch |

#### Edit a device

```http
  PUT http://localhost:3000/devices/${id}
  Content-Type: application/json
  {
    "system_name": "my-server-name",
    "type": "my-server-type",
    "hdd_capacity": "my-server-hdd-capacity"
  }
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `string` | **Required**. Id of device to fetch |

#### Delete device

```http
  DELETE http://localhost:3000/devices/${id}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `string` | **Required**. Id of device to fetch |

## Unit Tests

Are not implemented.
