// membuat struktur
const mySet = new Set();

mySet.add("nasi goreng")
mySet.add("pecel lele")
mySet.add("bakso malang")

// versi looping
for(let row of mySet){
    console.log(row)
}

// memeriksan apakah data ada di dalam set
console.log(mySet.has("nasi goreng"))
console.log(mySet.has("roti canai"))

// menghapus data
mySet.delete("pecel lele")
console.log(mySet)

// chalange 
const setKu = new Set();

setKu.add("Pica Pica No mi")
setKu.add("Gomu Gomu no Mi")
setKu.add("Magu Magu No mi")
console.log(setKu)

console.log(setKu.has("Magu Magu No mi"))
console.log(setKu.has("Gura gura no mi"))

setKu.delete("Magu Magu No mi")
console.log(setKu)

// kalkulator

const calculator = new Set();
calculator.add(2+3);
calculator.add(4-2);
calculator.add(6*7);
calculator.add(10/5);
calculator.add(4%6);
console.log(calculator)

console.log(calculator.has(5));
console.log(calculator.has(0))

calculator.delete(2+3)
console.log(calculator)
