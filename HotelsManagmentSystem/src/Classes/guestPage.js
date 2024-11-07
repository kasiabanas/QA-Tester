"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest = void 0;
class Guest {
    constructor(name, guestID) {
        this.name = name;
        this.guestId = guestID;
        this.reservations = [];
    }
    makeReservation(reservation) {
        this.reservations.push(reservation);
    }
}
exports.Guest = Guest;
