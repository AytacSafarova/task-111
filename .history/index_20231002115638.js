let users=['Aytac',"Aysel", "Orxan"]
let userName=prompt('Adi daxil edin')
let userExist=false
for (let index = 0; index < users.length; index++) {
  if(users[index]==userName){
    console.log('movcuddur');
    userExist=true
   break
  }  
  else{
    userExist=false
    console.log('movcud deyil');
  }
}

console.log(userExist);