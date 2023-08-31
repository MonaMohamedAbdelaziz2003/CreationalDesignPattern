import { abstract } from "../interface/abstract";
import { mastercard } from "./mastercard";
import { visacard } from "./visacard";
export class factory2 implements abstract {
    geth(card:string) {
        switch (card) {
            case "visa": return new visacard();
            case "master": return new mastercard();
        }
    }
}