/*et sequency = [1,12,5,9,78]

console.log(sequency)

sequency.push(15)

console.log(sequency.shift())
console.log(sequency.shift())
console.log(sequency.shift())

console.log(sequency)*/


const person = {
    name: "Pedro",
    age: 26,
    sleep: function(age) {
        if(age > 25){
            return "You're getting old!"
        }else{
            return "You're still young."
        }
    }
}
let personJson = JSON.stringify(person)
console.log(personJson)