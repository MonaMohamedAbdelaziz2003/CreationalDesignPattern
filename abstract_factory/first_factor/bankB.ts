import { ibank } from "../interface/Ibank";
export class bankb implements ibank{
    withdrow(): void {
        console.log("bank b")
    }
}