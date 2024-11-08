const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"];

marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);


const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)


// spread operator
const allNewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes)



const newlyArray = [1,2,3,[2,3],4,5,[7,8,9],1,2]
const realAnotherArray = newlyArray.flat(Infinity)
console.log(realAnotherArray)

