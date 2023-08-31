import { houseBuilder } from "./houseBuilder";

export class house{
    address: string;
    floornumber: number;
    color: string;
    constructor( builder:houseBuilder) {
        this.address = builder.address;
        this.color = builder.color;
        this.floornumber=builder.floornumber
    }
   
}