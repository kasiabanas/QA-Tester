import { RoomType, IRoom, IGuest, IReservation, IHotel } from './Interfaces/interfacesPage';
import { Room } from './Classes/roomPage'; 
import { Hotel } from './Classes/hotelPage';
import { Guest } from './Classes/guestPage';
import { Reservation } from './Classes/reservationPage';


// Create hotel rooms of different types
const room1 = new Room("101", RoomType.single, 100);
const room2 = new Room("102", RoomType.double, 150);
const room3 = new Room("103", RoomType.suite, 300);

// Create a hotel instance
const hotel = new Hotel();

// Add rooms to the hotel
hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);

// Create a guest
const guest1 = new Guest("Alice Smith", "G001");

// Find an available room of type 'double'
const availableRoom = hotel.findAvailableRoom(RoomType.double);
if (availableRoom) {
    // Reserve the available room for the guest
    const reservation = hotel.reserve(guest1, availableRoom);

    console.log("Reservation created:", reservation);
    console.log("Room info:", availableRoom.getRoomInfo());
}

const guest2 = new Guest("John Smith ", "G002");
const availableRoom2 = hotel.findAvailableRoom(RoomType.suite);
if (availableRoom2) {
    const reservation = hotel.reserve(guest2, availableRoom2);
}

// Check active reservations
const activeReservations = hotel.getActiveReservations();
console.log("Active reservations:", activeReservations);

// Calculate total income from all completed reservations
const totalIncome = hotel.calculateTotalIncome();
console.log("Total income:", totalIncome);


