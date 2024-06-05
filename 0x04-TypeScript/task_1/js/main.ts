export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: any]: any;
};

export interface Directors extends Teacher {
  numberOfReports: number;
};

export interface printTeacherFunction {
  firstName: string;
  lastName: string;
};

export interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
};

export function printTeacher<printTeacherFunction>(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}

export class StudentClass implements StudentClassInterface {
  constructor(
    public firstName: string,
    public lastName: string
  ){}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};
