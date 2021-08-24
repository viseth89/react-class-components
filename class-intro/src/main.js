class Student {
    constructor(fname){
        this.fname = fname
    }

    static greet() {
        console.log(this.fname)
    }

    sayName(){
        console.log(this.fname)
    }
}
let justin = new Student("Justin")
let austin = new Student("Austin")

console.log(justin, austin)

class EFAStudent extends Student{
    constructor(fname, badge){
        super(fname)
        this.badge = badge
    }
}

let dustin = newEFAStudent('dustin', 'red')