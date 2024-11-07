import { IRoom, RoomType } from "../Interfaces/interfacesPage";

export class Room implements IRoom {
    roomNumber: string;
    type: RoomType;
    pricePerNight: number;
    isAvailable: boolean = true;
    
    constructor(roomNumber:string, type: RoomType, pricePerNight: number, ) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.pricePerNight = pricePerNight;
    }

    getRoomInfo(): string { 
        return `Room number ${this.roomNumber}, type ${this.type}, price ${this.pricePerNight}`;
    }
  
    markAsReserved(): void {
        this.isAvailable = false;
    }

    markAsAvailable(): void {
        this.isAvailable = true;
    }
}