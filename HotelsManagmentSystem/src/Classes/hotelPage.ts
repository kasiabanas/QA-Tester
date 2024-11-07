import { Reservation } from './reservationPage';
import { IHotel, IRoom, IReservation, RoomType, IGuest } from "./../Interfaces/interfacesPage";

export class Hotel implements IHotel {
    rooms: IRoom[] = [];
    reservations: IReservation[] = [];
    

    addRoom(rooms: IRoom): void {
        this.rooms.push(rooms);
    }
    
    findAvailableRoom(type: RoomType): IRoom | null {
        for (const room of this.rooms) {
            if (room.isAvailable && room.type === type) {
                return room; 
            }
        }
        return null;
    }

    reserve(guest: IGuest, room: IRoom): IReservation {
        if (!room.isAvailable) {
            throw new Error("Room is not available for reservation.");
        }
        const reservationId = this.generateRandomString(32);
        const checkInDate = new Date();
        const reservation = new Reservation(reservationId, room, guest, checkInDate);
        this.reservations.push(reservation);
        guest.makeReservation(reservation);
        return reservation; 
    }

    getActiveReservations(): IReservation[] {
        const activeReservations: IReservation[] = [];

        for (let i = 0; i < this.reservations.length; i++) {
            if (this.reservations[i].isActive) {
                activeReservations.push(this.reservations[i]);
            }
        }
        return activeReservations;
    }

    calculateTotalIncome(): number {
        let totalIncome = 0;
        for (const reservation of this.reservations) {
            if (reservation.isActive) { 
                totalIncome += reservation.calculateTotal();
            }
        }
        return totalIncome;
    }

    private generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
    
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
}