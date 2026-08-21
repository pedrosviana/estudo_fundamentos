## Understanding and working with objects
- An object is a collection of relatable information;
> ####  It's used to represent real life: 
>> - ***Elements(properties):*** people, places or things;
>> <br>
>> - ***Actions(methods)***

``const person = {
    firstName: 'Jamie',
    lastName: 'Doe',
    age: 29,
    isMarried: false,
    email: 'jamie.doe@example.com'
}`` 

---
### When using method inside an object it's important to pay attention how to reference them:

``const person = {
    firstName: 'Jamie',
    lastName: 'Doe',
    presentation: function(){
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    }
}``
- The reason is that using 'this.' we can change the object name and the method will keep working.