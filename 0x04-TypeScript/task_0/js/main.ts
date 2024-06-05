interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 25,
  location: 'Zion',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 27,
  location: 'Shiganshina',
};

const studentsList: Array<Student> = [student1, student2];

const myStudents = (studentsList: Array<Student>) => {
  const table = document.createElement('table');

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  const headers = ['First Name', 'Location'];
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  studentsList.forEach(student => {
    const row = document.createElement('tr');

    const nameTD = document.createElement('td');
    nameTD.textContent = student.firstName;
    row.appendChild(nameTD);

    const locationTD = document.createElement('td');
    locationTD.textContent = student.location;
    row.appendChild(locationTD);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
};

myStudents(studentsList);
