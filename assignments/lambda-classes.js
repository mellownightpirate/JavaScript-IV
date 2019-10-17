// CODE here for your Lambda Classes

// CLASSES
class person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        console.log(
            `Hello, my name is ${this.name}, and I am from ${this.location}.`
        );
    }
}

class Instructor extends person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty,
        this.favLanguage = instructorAttributes.favLanguage,
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

 demo(string) {
     console.log(`Today, we are learning about ${string}.`);
 }

grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => console.log(element));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun the Sprint Challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        console.log(
            `${this.name} announces to ${channel} @Channel stand up time!`
        );
    }
    debugsCode(studentObject, subject) {
        console.log(
            `${this.name} debugs ${studentObject.name}'s code on ${subject}.`
        );
    }
}

// OBJECTS
// Person
const wilma = new person({
    name: "Wilma",
    age: 32,
    location: "Bedrock",
    gender: "Female"
});

wilma.speak();

const fred = new person ({
    name: "Fred",
    age: 37,
    location: "Bedrock",
    gender: "Male"
});

fred.speak();

//Instructor
const jean = new Instructor({
    name: "Jean",
    age: 31,
    location: "Paris",
    gender: "Male",
    specialty: "Front-end",
    favLanguage: "HTML",
    catchPhrase: "No pain, no gain!"
});

const jane = new Instructor({
    name: "Jane",
    age: 29,
    location: "New York",
    gender: "Female",
    specialty: "Back-end",
    favLanguage: "CSS",
    catchPhrase: "Code along please!"
});

jean.demo("Javascript");
jane.demo(wilma, "Advanced CSS");

// Student
const alex = new Student({
    name: "Alex",
    age: 32,
    location: "Berlin",
    previousBackground: "Finance",
    className: "WEBEU4",
    favSubjects: ["Javascript", "HTML", "CSS"]
});

const maryam = new Student({
    name: "Maryam",
    age: 31,
    location: "Madrid",
    gender: "Female",
    previousBackground: "Healthcare",
    className: "WEBEU4",
    favSubjects: ["Javascript", "HTML", "CSS"]
});

alex.speak();
alex.listsSubjects();
maryam.PRAssignment("Javascript IV");
maryam.sprintChallenge("JavaScript IV");

// Project Managers
const hasan = new ProjectManagers({
    name: "Hasan",
    age: 35,
    location: "Oslo",
    gender: "Male",
    specialty: "UX Design",
    favLanguage: "Ruby",
    catchPhrase: "You win some, you lose some",
    gradClassName: "WEBEU3",
    favInstructor: "Jean"
});

const tara = new ProjectManagers({
    name: "Tara",
    age: 29,
    location: removeEventListener,
    gender: "Female",
    specialty: "Data Science",
    favLanguage: "Python",
    catchPrhase: "Never give up!",
    gradClassName: "WEBEU3",
    favInstructor: "Jean"
});

hasan.speak();
hasan.demo("User Interface and Git");
tara.grade(alex, "Javascript IV");
tara.standUp("WEBEU4-Chinedu");
tara.debugsCode(maryam, "Responsive Design I");