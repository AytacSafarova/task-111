// // // datanin atilmasi
// // localStorage.setItem('user-name', 'Aytac')
// // let userParol='A1234rfc'
// // localStorage.setItem('user-parol', userParol)

// // // datanin silinmesi
// // localStorage.removeItem("user-parol")

// // // datanin goturulmesi
// // let userName= localStorage.getItem('user-name')
// // console.log(userName);

// // userName='Aysel'
// // localStorage.setItem('user-name', userName)

// // // object atilmagi
// // const data = {"id":352, "type":"general", "setup":"Why didn\'t the number 4 get into the nightclub?", "punchline":"Because he is 2 square."}
// // type, setup deyismek
// // let jsonData = JSON.stringify(data)
// // localStorage.setItem("user-data-new", jsonData)

// // // object goturulmesi

// // let userData = localStorage.getItem('user-data-new')
// // let json2= JSON.parse(userData)
// // console.log(json2.id);
// // json2.id= 500
// // localStorage.setItem('user-data-new', JSON.stringify(json2))
// let num =prompt("daxil edin")
// if (num==4 || num%2==0) {
//  console.log('eded  4-dur ve ikiye bolunur');
//   }
// else{
//     console.log('bu eded duzgun deyil');
// }
// 'Aytac'
// "12345"

// let num = prompt('Enter the number:');

// while (num > 0) {
//   num--;
//  console.log(num);}

// console.log('Dovr bitdi')

// eded: 5 4 3 2 1 0
// console: 4 3 2 1 0

// let ilkinEded = 10
// while(ilkinEded>2){
//   ilkinEded --
//   console.log(ilkinEded);
// }
// ilkinEded: 10 9 8 7   3 2
// console: 9 8 7 0 2

// 1-5 arasi ededler
// let ilkinEded= 1
// let sonEded =5
// while(ilkinEded<sonEded){
// ilkinEded++;
// console.log(ilkinEded);

// }
// // // 2 3 4  5
// let a =10
// let sum =0
// while (a<100) {
// sum=sum+a
//   a ++
// }
// console.log(sum);
// // eded 10 11 12
// // cem 0 10 21 33

// let i = 0;
// while (i < 5) {
//   	   i++;
//     	console.log('Sayğac dəyəri:' + i);}

// let i = prompt("deyer daxil edin")

// while(i>0){
//   console.log('Salam');
//   i --
// }
// console.log(i);

// let input =document.querySelector('input')
// console.log(input.checked);
// let eded =100
// while(eded<1000){
// if(eded%10==0){
// console.log(eded);
// }
// eded++
// }

// let result = "";
// let i = 0;
// while (i < 5) {
//   {
//     i = i + 1;
//     result = result + i;
//   }
// }

// console.log(result);
// '12345'

// let result = '';
// // let i = 5;
// do {
//   i = i + 1;
//   result = result + i;}
//  while (i < 5);

// console.log(result);
// '12345'

// let eded =5

// while(eded<5){
//     console.log(eded)
//     eded++;
// }

// do{
//     console.log(eded)
//     eded++;
// }
// while(eded<5)

// let i = 1;
// let userName = prompt("Ad daxil edin");
// if (userName == "Aytac") {
//   console.log("bizim iscidir");
// } else if (userName == "Aysel") {
//   console.log("bizim iscidir");
// } else if (userName == "Fidan") {
//   console.log("bizim iscidir");
// } else {
//   console.log("bizim isci deyil");
// }

// switch (userName) {
//   case "Aytac":
//     console.log("bizim iscidir");
//     break;

//   case "Aysel":
//     console.log("bizim iscidir");
//     break;
//   case "Fidan":
//     console.log("bizim iscidir");
//     break;
//   default:
//     console.log("bizim isci deyil");
//     break;
// }

// let month = prompt("Ayi daxil edin");
// switch (month) {
//   case "1":
//     console.log("yanvar");
//     break;
//   case "2":
//     console.log("fevral");
//     break;
//   case "7":
//     console.log("Iyul");
//     break;
//   default:
//     console.log("Bu ay movcud deyil");
//     break;
// }

const str = 'Hello';
// 5
// 4
// for(let addim= str.length-1 ;addim>=0;  addim-- ){
// console.log(str[addim]);
// }

// let a= 'hello . dunya'
// for(let index=0; index<a.length; index++){
//   if(a[index]=='.'){
//     continue
//     }
//   console.log(a[index]);

// }
let a=8
// let result
// if(a>0){
// result= 'musbet'
// }
// else{
//   result='menfi'
// }

// let result = a>0 ? 'musbet': "menfi"
// console.log(result);
// let usersGender=prompt('cinsivi daxil ele')
// let gender= usersGender=='M'?"Male":"Female"
// console.log(gender);
let eded =5
while(eded<15){
  if(eded%3==0 && eded%5==0){
    console.log(eded);
  }
  eded++
}

// console-1 2 3 5
// eded- 1 2 3 4
// let saygac=2
// while(saygac<7){
//   console.log('hello')
//   saygac++
// }
// 3 4 5 6 7
let eded=10
