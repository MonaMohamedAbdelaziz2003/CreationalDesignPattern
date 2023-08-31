//  this class is interface between client and classes
import { paycach } from "./paycach";
import { paycredit } from "./paycredit";
import { paydepit } from "./paydepit";
export class tempalte{
    getclass(objectName:string) {
        if (objectName === "paycahe") return new paycach();
        else if(objectName === "paydepit") return new paydepit();
        else if(objectName === "paycredit") return new paycredit();
    }
}