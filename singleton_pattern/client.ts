import { counter } from "./counter";


    const x = counter.getInstance();
    x.AddOne()
    console.log(x.count)
    
    const y = counter.getInstance();
    y.AddOne()
    console.log(x.count)
    console.log(y.count)
    
