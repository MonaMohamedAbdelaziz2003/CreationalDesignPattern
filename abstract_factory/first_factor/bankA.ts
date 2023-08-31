import { ibank } from "../interface/Ibank";
export class bankA implements ibank{
    withdrow(): void {
        console.log("bank a")
    }
}