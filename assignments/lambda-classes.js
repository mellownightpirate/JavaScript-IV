// CODE here for your Lambda Classes

//Classes
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
        this.catchPhrase = attr.catchPhrase;
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
        this.favInstructor = pmAttribues.favInstructor;
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

// Objects
// Person

const chris = new person({
    name: "Chris",
    age: 32,
    location: "London",
    gender: "Male"
});

