import { factory1 } from "./first_factor/factory1";
import { factory2 } from "./second_factor/factory2";
export class abstractFactory {
    getfactory(factory: string) {
        switch (factory) {
            case "bank": return new factory1(); 
            case "card": return new factory2();
        }
    }
}