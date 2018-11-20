const cat = {
    makeSound() {
        console.log(this.sound)
    }
}

// My implementation of Object.create()
function objectCreate(proto) {
    const obj = {};
    Object.setPrototypeOf(obj, proto);
    return obj;
}

const mark = objectCreate(cat)
mark.sound = 'mewuuUUF';
mark.makeSound();

const waffles = objectCreate(cat);
waffles.sound = 'mrrrrroooooow';
waffles.makeSound();

console.log('Is mark a cat?', cat.isPrototypeOf(mark)); //  Is mark a cat? true