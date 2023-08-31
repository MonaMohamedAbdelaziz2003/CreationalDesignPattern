import { Mutex } from "async-mutex";

export class counter{
    count: number = 0;
    private static instance: counter|any =null;//Lazy initialization 
    private static obj: Object = new Object();
    private static lock: Mutex = new Mutex();
    private constructor() {}
    static getInstance(): counter {
        if (this.instance == null) {
            this.lock.acquire();
            if (this.instance == null) {
                this.instance = new counter()
            }
            this.lock.release();
        }
        return this.instance;
    }
    AddOne() {this.count++;}
}