//swich... case
// 1-masala
// function oy() {
//   let a = +prompt("foydalanuvci kiritadigan oy raqami");
// switch (a) {
//   case 1:
//     console.log("qish faslining" + " yanvar oyi");
//     break;

//   case 2:
//     console.log("qish faslining" + " fevral oyi");
//     break;

//   case 3:
//     console.log("bahor faslining" + " mart oyi");
//     break;

//   case 4:
//     console.log("bahor faslining" + " aprel oyi");
//     break;

//   case 5:
//     console.log("bahor faslining" + " may oyi");
//     break;

//   case 6:
//     console.log("yoz faslining" + " iyun oyi");
//     break;

//   case 7:
//     console.log("yoz faslining" + " iyul oyi");
//     break;

//     case 8:
//     console.log("yoz faslining" + " avgust oyi");
//     break;

//   case 9:
//     console.log("kuz faslining" + " sentyabr oyi");
//     break;

//   case 10:
//     console.log("kuz faslining" + " oktyabr oyi");
//     break;

//   case 11:
//     console.log("kuz faslining" + " noyabr oyi");
//     break;

//   case 12:
//     console.log("qish faslining" + " dekabr oyi");
//     break;

//   default:
//     console.log("bundan oy kuni mavjud emas");
//     break;
// }

// return a;
// }

// console.log(oy());

// 2-masala
// let ball = +prompt("foydalanuvhci kiritadigan ball");
// switch (ball) {
//   case (ball >= 90 && ball <= 100):
//     console.log("A");
//     break;

//   default:
//     console.log("bunday ball mavjud emas");
//     break;
// }

// function baholash(ball) {
//   switch (true) {
//     case ball >= 90 && ball <= 100:
//       console.log("A");
//       break;

//     case ball >= 80 && ball < 90:
//       console.log("B");
//       break;

//     case ball >= 70 && ball < 80:
//       console.log("C");
//       break;

//     case ball >= 60 && ball < 70:
//       console.log("D");
//       break;

//     case ball >= 0 && ball < 60:
//       console.log("F");
//       break;

//     default:
//       console.log("bunday ball mavjud emas");
//       break;
//   }

//   return ball;
// }

// let ball = +prompt("foydalanuvchi kirirtadigan ball");

// console.log(baholash(ball));

// 3-masala
// function vaqt() {
//   let vaqt = +prompt("vaqt kiritilsin");
// switch (true) {
//   case vaqt >= 5 && vaqt <= 12:
//     console.log("xayrli tong");
//     break;

//   case vaqt > 12 && vaqt <= 17:
//     console.log("xayrli kun");
//     break;

//   case vaqt > 17 && vaqt <= 21:
//     console.log("xayrli kech");
//     break;

//   case vaqt >= 0 && vaqt < 5 && vaqt > 21 && vaqt <= 23:
//     console.log("xayrli tun");
//     break;
//   default:
//     console.log("bunday vaqt mavjud emas");
//     break;
// }

//  return vaqt;
// }

// console.log(vaqt());

// while && do...while.

// 4-masala
// function raqam_k() {
//   while(true) {
//     let raqam = prompt('raqam kiritilsin');
//     if (isNaN(raqam) && raqam !== "") {
//       alert(`kiritilgan raqam: ${raqam} `);
//       break;
//     } else {
//       alert('faqat raqam kiriting. siz raqam kiritmadingiz');
//     }
//   }
// }

// alert(raqam_k());


// 5-masala
// while orqali
// function juft() {
//   let i = 0;
//   while (i <= 20) {
//     if (i % 2 == 0 && i != 0) {
//       console.log(i);
//     }

//     i++;
//   }

//   return i;
// }
// console.log(juft());

// do...while orqali
// function juft(params) {
//   let i = 0;
//   do {
//     if (i % 2 == 0 && i != 0) {
//       console.log(i);
//     }
//     i++;
//   } while (i <= 20);

//   return i;
// }
// console.log(juft());

// 6-masala
// while (i == "stop") {
//   if (i === "stop") {
//     console.log(i);
//   }
// let i = prompt('soz kiritilsin');
// }

// do {

//   if(i == 'stop') {
//     console.log(i);
//   }
//   let i = +prompt('sox kiritilsin');

// } while(i == "stop");

// 7-masala
// while orqali
// function ortAr() {
//   let n = +prompt("n soni kiritilsin");
//   let i = 1;
//   let counter = 0;
//   let summ = 0;
//   while (i <= n) {
//     counter = counter + 1;
//     summ = summ + i;

//     i++;
//   }

//   let result = summ / counter;

//   return result;
// }

// alert(ortAr());


// Qo'shimcha
// 1-masala
// let a = +prompt('hafta kunini raqami kiritilsin');
// switch (a) {
//     case 1:
//         console.log("dushanba");
//         break;

//         case 2:
//         console.log("seshanba");
//         break;

//         case 3:
//         console.log("chorshanba");
//         break;

//         case 4:
//         console.log("payshanba");
//         break;

//         case 5:
//         console.log("juma");
//         break;

//         case 6:
//         console.log("shanba");
//         break;

//         case 7:
//         console.log("yakshanba");
//         break;

//     default: console.log('bunday hafta kuni yoq');
//         break;
// }

// 2-masala
// let n = +prompt("oyning raqami kiritilsin");
// switch (n) {
//   case 1:
//     case 2:
//         case 12:
//     console.log("Qish");
//     break;
//   case 3:
//     case 4:
//         case 5:
//     console.log("bahor");
//     break;
//   case 6:
//     case 7:
//         case 8:
//     console.log("yoz");
//     break;
//   case 9:
//     case 10:
//         case 11:
//     console.log("kuz");
//     break;
//   default:
//     console.log('bunday oy mavjud emas');
//     break;
// }

// 3-masala
// let i = 1;
// let S = 1;
// while (i <= 30) {
//     S = S * i
//     i++;
// }

// console.log(S);

// 4-masala
// a dan b gacha 3 ga hamda 5 ga karralilarining yigindisini ekranga chiqaring
// let a = +prompt('a soni kiritilsin');
// let b = +prompt('b soni kiritilsin');
// let summ = 0;
// while(a <= b) {
//     if (a % 3 == 0 && a % 5 == 0) {
//         summ += a;
//     }
//     a++;
// }
// console.log(summ);

// 5-masala
// ixtioriy sonning necha xonali ekanini
// let n = +prompt("ixtioriy son kiritilsin");
// let counter = 0;
// let result;
// while (n >= 1) {
//   counter = counter + 1;
//   n = (n - (n % 10))/10;
// }

// console.log(`${counter} xonali son`);



