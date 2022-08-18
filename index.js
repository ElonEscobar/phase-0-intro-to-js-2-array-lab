// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    const catsUpdated = [...cats , name];
    return catsUpdated;
}

function prependCat(name){
    const catsUpdated = [name , ...cats];
    return catsUpdated;
}

function removeLastCat(){
    const catsUpdated = cats.slice(0,cats.length - 1);
    return catsUpdated;
}

function  removeFirstCat(){
    const catsUpdated = cats.slice(1);
    return catsUpdated;
}