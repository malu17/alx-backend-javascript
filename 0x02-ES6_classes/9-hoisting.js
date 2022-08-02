export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const student1 = new StudentHolberton('malu', 'lalu', class2020);
const student2 = new StudentHolberton('sarina', 'ela', class2020);
const student3 = new StudentHolberton('meles', 'mengestu', class2019);
const student4 = new StudentHolberton('esayas', 'farmajo', class2019);
const student5 = new StudentHolberton('zemene', 'jawar', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];
