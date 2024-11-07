
# Technical Specification for Hotel Management System

## 1. Project Objective
The primary goal of this project is to automate and manage hotel reservations by handling guest check-ins, room assignments, and income tracking using TypeScript. This project simulates a hotel reservation system, where users can add guests, assign rooms, manage reservations, and calculate income from completed stays.

## 2. Project Scope
This automation framework will support the following functionalities:
- **Room Management**: Define rooms with different types and rates.
- **Guest Management**: Create guest profiles with unique identifiers.
- **Reservation System**: Handle room assignments, active reservations, and calculate total income.

## 3. Technical Requirements

### Technologies
- **TypeScript**: Primary programming language to ensure type safety and improve maintainability.
- **Node.js**: Runtime environment for executing TypeScript code.
- **Git**: Version control for collaboration and history tracking.

## 4. Classes and Interface Design

### Interfaces
These interfaces define the structure for different objects in the system:

- **RoomType**: Enumeration defining types of rooms (e.g., `single`, `double`, `suite`).
- **IRoom**: Describes room properties, such as room number, type, and rate.
- **IGuest**: Describes guest properties, including name and unique ID.
- **IReservation**: Describes reservation details such as guest, room, check-in/check-out dates.
- **IHotel**: Defines the methods for managing the hotel, including adding rooms, making reservations, and calculating income.

### Class Structure

#### 1. Room Class
- **Purpose**: Represents an individual hotel room.
- **Properties**:
  - `roomNumber`: Unique identifier for each room.
  - `roomType`: Type of room (single, double, suite).
  - `rate`: Price per night.
- **Methods**:
  - `getRoomInfo()`: Returns details about the room, such as type and rate.

#### 2. Guest Class
- **Purpose**: Represents a hotel guest.
- **Properties**:
  - `name`: Guest's full name.
  - `id`: Unique identifier for the guest.

#### 3. Reservation Class
- **Purpose**: Manages reservation details.
- **Properties**:
  - `guest`: The guest associated with the reservation.
  - `room`: The room assigned to the guest.
  - `isActive`: Status of the reservation (active or completed).
- **Methods**:
  - Provides methods for tracking reservation details, such as check-in and check-out dates.

#### 4. Hotel Class
- **Purpose**: Manages the hotel's operations, including rooms, reservations, and income tracking.
- **Properties**:
  - `rooms`: Array of available rooms.
  - `reservations`: List of all active reservations.
- **Methods**:
  - `addRoom(room: Room)`: Adds a room to the hotel.
  - `findAvailableRoom(roomType: RoomType)`: Searches for an available room of a specific type.
  - `reserve(guest: Guest, room: Room)`: Reserves a specified room for a guest.
  - `getActiveReservations()`: Lists all active reservations.
  - `calculateTotalIncome()`: Computes the total income from completed reservations.

## 5. Execution Instructions

Fetch dependencies

```
npm install
```

Build typescript

```
./node_modules/.bin/tsc
```

Run program

```
node src/hotels.js 
```