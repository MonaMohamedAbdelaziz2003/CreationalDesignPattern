import {abstractFactory} from "./abstractFactory";
import {ibank} from "./interface/Ibank";
import {abstract} from "./interface/abstract";
//////////////////////-----------///////////////////////
const abstract: abstractFactory = new abstractFactory();
const factory: abstract | any = abstract.getfactory("card");
const bank: ibank | any = factory.geth("visa");
bank?.withdrow()