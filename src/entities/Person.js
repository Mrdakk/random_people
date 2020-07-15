export class Person {
    constructor(email, picture, gender, firstName, lastName, birth, id) {
        this.email = email;
        this.picture = picture;
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birth = birth;
        this.id = id
    }

    fullName() {
        return this.firstName + " " + this.lastName
    }
    hideEmail() {
        let lastPart = this.email.slice(-15);
        let firstPart = this.email.slice(0, 3)
        let fullEmail = firstPart + "..." + lastPart
        return fullEmail;
    }
    modefiedDate() {
        let datePart = new Date(this.birth);
        let modefiedDate = `${datePart.getDate()}-${datePart.getMonth() + 1}-${datePart.getFullYear()}`;
        return modefiedDate;
    }
    isFemale() {
        return this.gender === 'female'
    }
}