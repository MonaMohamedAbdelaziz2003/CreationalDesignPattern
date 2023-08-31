import { payment } from "./payment";
import { tempalte } from "./template";
const temp:tempalte   = new tempalte();
const ca:payment|undefined = temp.getclass("paycredit") ;
ca?.pay();