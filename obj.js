let person = {
    "name": "Dera",
    "skin color" : "Dark",
    "age" : 21,
    "smart": true,
     "Occupation": "Developer"
}


console.log( person.name);
console.log( person.age);
console.log( person.smart);


person['skill'] = "Mechanic";
person['NoOfchildren'] = 3;
console.log(person);



let car = { 
    brand: 'Toyota',
     model: 'Corolla', 
     year: 2021
 };

 console.log(car);
delete car.year;
console.log(car);  // { brand: 'Toyota', model: 'Corolla' }
car['year'] = "2022";
console.log(car);






