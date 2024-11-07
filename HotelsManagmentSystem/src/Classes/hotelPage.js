"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
const reservationPage_1 = require("./reservationPage");
class Hotel {
    constructor() {
        this.rooms = [];
        this.reservations = [];
    }
    addRoom(rooms) {
        this.rooms.push(rooms);
    }
    findAvailableRoom(type) {
        for (const room of this.rooms) {
            if (room.isAvailable && room.type === type) {
                return room;
            }
        }
        return null;
    }
    reserve(guest, room) {
        if (!room.isAvailable) {
            throw new Error("Room is not available for reservation.");
        }
        const reservationId = this.generateRandomString(32);
        const checkInDate = new Date();
        const reservation = new reservationPage_1.Reservation(reservationId, room, guest, checkInDate);
        this.reservations.push(reservation);
        guest.makeReservation(reservation);
        return reservation;
    }
    getActiveReservations() {
        const activeReservations = [];
        for (let i = 0; i < this.reservations.length; i++) {
            if (this.reservations[i].isActive) {
                activeReservations.push(this.reservations[i]);
            }
        }
        return activeReservations;
    }
    calculateTotalIncome() {
        let totalIncome = 0;
        for (const reservation of this.reservations) {
            if (reservation.isActive) {
                totalIncome += reservation.calculateTotal();
            }
        }
        return totalIncome;
    }
    generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
}
exports.Hotel = Hotel;
