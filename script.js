const students = [
    { name: 'Aarav Sharma', rollNumber: '001', contact: '9876543210', marks: { Math: 90, Science: 85, English: 88 } },
    { name: 'Vivaan Patel', rollNumber: '002', contact: '9876543211', marks: { Math: 80, Science: 75, English: 78 } },
    { name: 'Aditya Gupta', rollNumber: '003', contact: '9876543212', marks: { Math: 85, Science: 88, English: 90 } },
    { name: 'Vihaan Rao', rollNumber: '004', contact: '9876543213', marks: { Math: 78, Science: 80, English: 82 } },
    { name: 'Arjun Singh', rollNumber: '005', contact: '9876543214', marks: { Math: 92, Science: 87, English: 85 } },
    { name: 'Reyansh Kumar', rollNumber: '006', contact: '9876543215', marks: { Math: 76, Science: 72, English: 78 } },
    { name: 'Ayaan Mehta', rollNumber: '007', contact: '9876543216', marks: { Math: 88, Science: 84, English: 80 } },
    { name: 'Kabir Yadav', rollNumber: '008', contact: '9876543217', marks: { Math: 82, Science: 79, English: 86 } },
    { name: 'Ishaan Verma', rollNumber: '009', contact: '9876543218', marks: { Math: 90, Science: 91, English: 89 } },
    { name: 'Arnav Sharma', rollNumber: '010', contact: '9876543219', marks: { Math: 87, Science: 83, English: 84 } },
    { name: 'Sai Prasad', rollNumber: '011', contact: '9876543220', marks: { Math: 80, Science: 77, English: 82 } },
    { name: 'Rohan Joshi', rollNumber: '012', contact: '9876543221', marks: { Math: 89, Science: 86, English: 90 } },
    { name: 'Saanvi Gupta', rollNumber: '013', contact: '9876543222', marks: { Math: 78, Science: 80, English: 75 } },
    { name: 'Ananya Reddy', rollNumber: '014', contact: '9876543223', marks: { Math: 92, Science: 89, English: 84 } },
    { name: 'Kavya Patel', rollNumber: '015', contact: '9876543224', marks: { Math: 83, Science: 81, English: 79 } },
    { name: 'Mira Verma', rollNumber: '016', contact: '9876543225', marks: { Math: 76, Science: 78, English: 80 } },
    { name: 'Nia Agarwal', rollNumber: '017', contact: '9876543226', marks: { Math: 88, Science: 90, English: 85 } },
    { name: 'Diya Sharma', rollNumber: '018', contact: '9876543227', marks: { Math: 81, Science: 82, English: 78 } },
    { name: 'Sanya Rao', rollNumber: '019', contact: '9876543228', marks: { Math: 85, Science: 87, English: 84 } },
    { name: 'Isha Joshi', rollNumber: '020', contact: '9876543229', marks: { Math: 90, Science: 88, English: 87 } },
    { name: 'Pooja Yadav', rollNumber: '021', contact: '9876543230', marks: { Math: 80, Science: 79, English: 85 } },
    { name: 'Ritika Mehta', rollNumber: '022', contact: '9876543231', marks: { Math: 77, Science: 76, English: 79 } },
    { name: 'Shruti Kumar', rollNumber: '023', contact: '9876543232', marks: { Math: 84, Science: 82, English: 80 } },
    { name: 'Riya Verma', rollNumber: '024', contact: '9876543233', marks: { Math: 88, Science: 85, English: 89 } },
    { name: 'Alia Patel', rollNumber: '025', contact: '9876543234', marks: { Math: 79, Science: 77, English: 82 } },
    { name: 'Tanvi Sharma', rollNumber: '026', contact: '9876543235', marks: { Math: 92, Science: 90, English: 88 } },
    { name: 'Nikita Agarwal', rollNumber: '027', contact: '9876543236', marks: { Math: 81, Science: 78, English: 79 } },
    { name: 'Jhanvi Joshi', rollNumber: '028', contact: '9876543237', marks: { Math: 86, Science: 82, English: 83 } },
    { name: 'Siddhi Rao', rollNumber: '029', contact: '9876543238', marks: { Math: 90, Science: 85, English: 88 } },
    { name: 'Simran Yadav', rollNumber: '030', contact: '9876543239', marks: { Math: 77, Science: 74, English: 80 } },
];


function displayStudents(students) {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');

        const studentInfo = `
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Roll Number:</strong> ${student.rollNumber}</p>
            <p><strong>Contact:</strong> ${student.contact}</p>
            <p><strong>Marks:</strong></p>
            <ul>
                ${Object.entries(student.marks).map(([subject, mark]) => `<li>${subject}: ${mark}</li>`).join('')}
            </ul>
        `;

        studentDiv.innerHTML = studentInfo;
        studentList.appendChild(studentDiv);
    });
}

document.getElementById('searchBox').addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchValue));
    displayStudents(filteredStudents);
});

// Initial display of all students
displayStudents(students);
