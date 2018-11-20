function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);
myCircle.draw(); // draw

// Creating private variables in factory function via closure
const createDog = () => {
    const sound = 'woof';
    return {
        talk: () => console.log(sound)
    }
};

const sniffles = createDog();
sniffles.talk();  // 'woof'

