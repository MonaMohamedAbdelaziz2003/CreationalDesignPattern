import { ibank } from "../interface/Ibank";
export class visacard implements ibank{
    withdrow(): void {
       console.log("visacard")
    }
}