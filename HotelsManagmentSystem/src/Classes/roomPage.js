"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(roomNumber, type, pricePerNight) {
        this.isAvailable = true;
        this.roomNumber = roomNumber;
        this.type = type;
        this.pricePerNight = pricePerNight;
    }
    getRoomInfo() {
        return `Room number ${this.roomNumber}, type ${this.type}, price ${this.pricePerNight}`;
    }
    markAsReserved() {
        this.isAvailable = false;
    }
    markAsAvailable() {
        this.isAvailable = true;
    }
}
exports.Room = Room;
