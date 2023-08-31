import { house } from "./house";
export class houseBuilder{
    address: string;
    floornumber: number=0;
    color: string='';
    constructor(address: string) {
        this.address = address;
    }
    setFloor(floor:number) {
        this.floornumber = floor
        return this;
    }
    setColor(color:string) {
        this.color = color
        return this;
    }
    getFloor() {
        return this.floornumber;
    }
    getColor() {
        return this.color;
    }
    builder() {
        return new house(this);
    }
}