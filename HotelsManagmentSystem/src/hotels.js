"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfacesPage_1 = require("./Interfaces/interfacesPage");
const roomPage_1 = require("./Classes/roomPage");
const hotelPage_1 = require("./Classes/hotelPage");
const guestPage_1 = require("./Classes/guestPage");
// Create hotel rooms of different types
const room1 = new roomPage_1.Room("101", interfacesPage_1.RoomType.single, 100);
const room2 = new roomPage_1.Room("102", interfacesPage_1.RoomType.double, 150);
const room3 = new roomPage_1.Room("103", interfacesPage_1.RoomType.suite, 300);
// Create a hotel instance
const hotel = new hotelPage_1.Hotel();
// Add rooms to the hotel
hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);
// Create a guest
const guest1 = new guestPage_1.Guest("Alice Smith", "G001");
// Find an available room of type 'double'
const availableRoom = hotel.findAvailableRoom(interfacesPage_1.RoomType.double);
if (availableRoom) {
    // Reserve the available room for the guest
    const reservation = hotel.reserve(guest1, availableRoom);
    console.log("Reservation created:", reservation);
    console.log("Room info:", availableRoom.getRoomInfo());
}
const guest2 = new guestPage_1.Guest("John Smith ", "G002");
const availableRoom2 = hotel.findAvailableRoom(interfacesPage_1.RoomType.suite);
if (availableRoom2) {
    const reservation = hotel.reserve(guest2, availableRoom2);
}
// Check active reservations
const activeReservations = hotel.getActiveReservations();
console.log("Active reservations:", activeReservations);
// Calculate total income from all completed reservations
const totalIncome = hotel.calculateTotalIncome();
console.log("Total income:", totalIncome);
