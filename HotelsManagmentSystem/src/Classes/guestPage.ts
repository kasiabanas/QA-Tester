import { IGuest, IReservation } from "./../Interfaces/interfacesPage";

export class Guest implements IGuest {
    name: string;
    guestId: string;
    reservations: IReservation[];

    constructor(name: string, guestID: string) {
        this.name = name;
        this.guestId = guestID;
        this.reservations = [];
    }

    makeReservation(reservation: IReservation): void {
        this.reservations.push(reservation);
    }
    
}