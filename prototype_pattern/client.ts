import { person } from "./person";

const per = new person();
let p1 = new person();
let p2 = new person();
let p3 = new person();
per.age = 12
per.birth = 18
per.name="mona"
p1 = per.deepCopy()
p2 = per.shallowCopy()
p3 = per;
// 
per.age=2
console.log("per is",per)
console.log("p1 is",p1)
console.log("p2 is",p2)
console.log("p3 is",p3)