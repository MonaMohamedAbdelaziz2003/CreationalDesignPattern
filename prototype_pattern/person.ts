export class person{
    age: number = 0;
    birth: number = 0;
    name:string=''
    
    shallowCopy():person {
        return this;
    }
    deepCopy() {
        const person1 = new person();
        person1.age = this.age;
        person1.birth = this.birth;
        person1.name = this.name;
        return person1;
    }

}