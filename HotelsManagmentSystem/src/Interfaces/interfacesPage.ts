export enum RoomType {
    single, //Represents a single room suitable for one guest.
    double, //Represents a double room suitable for two
    suite//Represents a premium suite for guests requiring additional amenities.
}


export interface IRoom {
    roomNumber: string;
    type: RoomType;
    pricePerNight: number;
    isAvailable: boolean;

    getRoomInfo(): string;
    markAsReserved(): void;
    markAsAvailable(): void;
}

export interface IGuest {
    name: string;
    guestId: string;
    reservations: IReservation[];

    makeReservation(reservation: IReservation): void;
}

export interface IReservation {
    reservationId: string;
    room: IRoom;
    guest: IGuest;
    checkInDate: Date;
    isActive: boolean;

    calculateTotal(): number;
    cancelReservation(): void;
}

export interface IHotel {
    rooms: IRoom[];
    reservations: IReservation[];

    addRoom(room: IRoom): void;
    findAvailableRoom(type: RoomType): IRoom | null;
    reserve(guest: IGuest, room: IRoom): IReservation;
    getActiveReservations(): IReservation[];
    calculateTotalIncome(): number;
}