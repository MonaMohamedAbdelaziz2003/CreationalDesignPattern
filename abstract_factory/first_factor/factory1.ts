import { abstract } from "../interface/abstract";
import { bankA } from "./bankA";
import { bankb } from "./bankB";

export class factory1 implements abstract {
    geth(bankcode: string) {
        switch (bankcode) {
            case "123": return new bankA(); 
            case "456": return new bankb();
        }
    }
  
}