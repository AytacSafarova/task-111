// datanin atilmasi
localStorage.setItem('user-name', 'Aytac')
let userParol='A1234rfc'
localStorage.setItem('user-parol', userParol)

// datanin silinmesi
localStorage.removeItem("user-parol")

// datanin goturulmesi
let userName= localStorage.getItem('user-name')
console.log(userName);

userName='Aysel'
localStorage.setItem('user-name', userName)

// object atilmagi
const data = {"id":352, "type":"general", "setup":"Why didn\'t the number 4 get into the nightclub?", "punchline":"Because he is 2 square."}
let jsonData = JSON.stringify(data)
localStorage.setItem("user-data-new", jsonData)

// object goturulmesi


let jso
  
