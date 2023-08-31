import { payment } from "./payment";
export class paydepit implements payment{
    pay(): void {
        console.log("i am paydepit")
    }
}