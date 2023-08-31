import { ibank } from "../interface/Ibank";
export class mastercard implements ibank{
    withdrow(): void {
        console.log("mastercard")
    }
}