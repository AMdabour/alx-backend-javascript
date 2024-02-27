const fs = require('fs');

// function countStudents(filepath) {
//   if (!fs.existsSync(filepath)) {
//     throw new Error('Cannot load the database');
//   }
//   if (!fs.statSync(filepath).isFile()) {
//     throw new Error('Cannot load the database');
//   }
//   const filelines = fs
//     .readFileSync(filepath, 'utf8')
//     .trim()
//     .split('\n');
//   const studentGroups = {}; // key is group name and value is an array
//   const fieldNames = filelines[0].split(',');
//   const studPropNames = fieldNames.slice(0, fieldNames.length - 1);
//   for (const line of filelines.slice(1)) {
//     const studRecord = line.split(',');
//     const field = studRecord[studRecord.length - 1];
//     const studPropValues = studRecord.slice(0, studRecord.length - 1);
//     if (!Object.keys(studentGroups).includes(field)) {
//       studentGroups[field] = [];
//     }
//     const studEntries = studPropNames
//       .map((propName, idx) => [propName, studPropValues[idx]]);
//     studentGroups[field].push(Object.fromEntries(studEntries));
//   }
//   const totalStuds = Object.values(studentGroups)
//     .reduce((acc, val) => acc.length + val.length, 0);
//   console.log(`Number of students: ${totalStuds}`);
//   for (const [field, group] of Object.entries(studentGroups)) {
//     const studentNames = group
//       .map((student) => student.firstname).join(', ');
//     console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
//   }
// }
function countStudents(path) {
  try {
    let data = fs.readFileSync(path, 'utf8').toString().split('\n');
    data = data.slice(1, data.length - 1);
    console.log(`Number of students: ${data.length}`);
    const obj = {};
    data.forEach((el) => {
      const student = el.split(',');
      if (!obj[student[3]]) obj[student[3]] = [];
      obj[student[3]].push(student[0]);
    });
    for (const cls in obj) {
      if (cls) console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
