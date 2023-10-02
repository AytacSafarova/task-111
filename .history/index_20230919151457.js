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
localStorage.setItem('user-parol', userName)
