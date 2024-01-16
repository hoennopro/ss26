// console.log("hello");

// tao ra 1 danh sach cac hoc sinh o trong lop

// let student1 = "huyen";
// let student2 = "minh";
// let student3 = "quan";

// let studentList = new Array(student1, student2, student3);

// let  numberList = [10, 20, 30, 40, 50];

// let randomList = [true, false, 10, 20, "hello"];

// console.log(studentList);

// console.log(numberList);

// console.log(randomList);

// let numbers = [10,20,30,40,50];
// Index       0  1  2  3  4

// Thuoc tinh length
// numbers.length;

// console.log("do dai cua mang numbers = ", numbers.length);

// console.log ("numbers[2]=", numbers[2]); //30
// console.log ("numbers[0]=", numbers[0]); //10
// console.log("numbers[4]=", numbers[numbers.length - 1]);

// for (let i = 0; i < numbers.length; i++) {

//     console.log(`numbers[${i}]=`, numbers[i]);
// }

// for (let number of numbers){
//  console.log("tung phan tu", number);
// }

// for (let index in numbers){
//     console.log(`numbers[${index}]=`, numbers[index]);
// }

let students = ["huyen", "hung", "dung", "hoang"];

console.log("danh sach sv hien tai:", students);

//create

// 1. them dau (unshift)
// students.unshift("nam son");

// console.log("danh sach sv sau khi them vao dau:", students);

// 2.them cuoi
// students.push("minh");

// console.log("danh sach sv sau khi them vao cuoi:", students);

// 3. them vao vi tri bat ki

// students.splice(2, 0, "quang anh");
// console.log("danh sach sv sau khi them vao vi tri 2:", students);

// update

// console.log("danh sach students thoi diem hien tai la", students);

// students[2] = "dung lao cong";

// students.splice(2, 1, "dung lao cong");

// console.log("danh sach students sau khi duoc cap nhat", students);

// delete
console.log("danh sach students truoc khi bi xoa", students);

// 1. xoa dau (shift)
students.shift();
console.log("danh sach students sau khi bi xoa dau", students);

// 2. xoa cuoi (pop)
students.pop();
console.log("danh sach students sau khi bi xoa cuoi", students);

// 3. xoa tai vi tri bat ki (splice)
students.splice(1, 1);

console.log("danh sach students sau khi bi xoa phan tu index = 1", students);
