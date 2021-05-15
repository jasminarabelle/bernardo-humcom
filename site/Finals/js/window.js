let studentName = 'Jasmin';
let name;
name='Jaja';
const idnumber='20209367';
console.log(idnumber);
let num=null;
let numA=0;
let numB=undefined;
let numX;

document.write("<br>");
document.write('I am ' + studentName);

let studentNames=['Ramona', 'Amor', 'Divine'];
let sampArray=[1, 'a', true, 'Dora', 12.5];

console.log(studentNames[0]);
console.table(studentNames);
console.table(sampArray);

let toDoList=[['8am', 'Market'], ['10am', 'Gym'], ['12nn', 'Lunch Date'], ['1pm', 'Shopping'], ['3pm', 'Nap']];
console.table(toDoList);

toDoList.push(['4pm', 'Computer Games'], ['5pm', 'Cook Dinner'], ['6pm', 'Dinner']);
console.table(toDoList);
toDoList.splice(2,0,['11am', 'Shower']);
console.table(toDoList);

toDoList.pop();
console.table(toDoList);
document.write("<br>");
document.write(studentNames[2] + ' went to the ' + toDoList[0][1] + ' at ' + toDoList[0][0]);
document.getElementById('arraySamp').innerHTML= studentNames[2] + ' went to the ' + toDoList[0][1] + ' at ' + toDoList[0][0];

let student1={
    idnum: "20209367",
    fname: "Naruto",
    lname: "Bangbangin",
    age: 18
}
//display on console
console.log(student1);
console.log(student1.idnum);

//display on web
document.getElementById('student').innerHTML='ID Number: ' + student1.idnum + "<br> Student Name: " +student1.fname+" " +student1.lname+ "<br> Age: " +student1.age;

//example 2
let contactDet1={
    firstN: 'Ryujin',
    lastN: 'Domingo',
    email: 'itzynadal@cutie.com',
    mobNum: '(+63)922-123-2021',
    address:{
            bldgNum: '10',
            Street: 'Fighter',
            City: 'Makati',
            Province: 'Itchy',
            Country: 'Philippines'
    }
}

console.log(contactDet1);
console.log('Street: ' + contactDet1.address.Street);

document.getElementById('contact').innerHTML='Name: ' +contactDet1.firstN+ " " +contactDet1.lastN+ "<br>Email: " +contactDet1.email+ '<br>Address: ' +contactDet1.address.bldgNum+' '+contactDet1.address.Street+', '+contactDet1.address.City+', '+contactDet1.address.Province+', '+contactDet1.address.Country;

document.table(toDoList);