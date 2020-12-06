const cars = ['Gol', 'Horse', 5, 10]

for (let i = 0; i < cars.length;) {
    if (typeof cars[i] === 'string') {
        cars.splice(cars[i]);
    }
}

console.log(cars);