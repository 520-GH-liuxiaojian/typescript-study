// // Ts 中的类和 Js 中的类是相同的
// class Person {
//     name = 'xiao'
//
//     getName() {
//         return this.name;
//     }
// }
//
// class Teacher extends Person {
//     getTeacherName(): string {
//         return 'Teacher';
//     }
//
//     // 子类可以重写父类的方法
//     getName(): string {
//         // return 'jian';
//
//         // 通过 super 指向父类
//         return super.getName();
//     }
// }
//
// const teacher = new Teacher();
// console.log(teacher.getName());
// console.log(teacher.getTeacherName());
