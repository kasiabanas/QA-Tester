import { IReservation } from "./../Interfaces/interfacesPage";
import { Guest } from "./guestPage";
import { Room } from "./roomPage";

export class Reservation implements IReservation {
    reservationId: string;
    room: Room;
    guest: Guest;
    checkInDate: Date;
    isActive: boolean;

    constructor(reservationId: string, room: Room, guest: Guest, checkInDate: Date) {
        this.reservationId = reservationId;
        this.room = room;
        this.guest = guest;
        this.checkInDate = checkInDate;
        this.isActive = true;
        this.room.markAsReserved();
    }
    
    calculateTotal(): number {
        return this.room.pricePerNight * 1;
    }
   
    cancelReservation(): void {
        this.isActive = false;
        this.room.markAsAvailable();
    }
}