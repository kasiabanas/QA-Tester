"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
class Reservation {
    constructor(reservationId, room, guest, checkInDate) {
        this.reservationId = reservationId;
        this.room = room;
        this.guest = guest;
        this.checkInDate = checkInDate;
        this.isActive = true;
        this.room.markAsReserved();
    }
    calculateTotal() {
        return this.room.pricePerNight * 1;
    }
    cancelReservation() {
        this.isActive = false;
        this.room.markAsAvailable();
    }
}
exports.Reservation = Reservation;
