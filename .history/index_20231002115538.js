let users=['Aytac',"Aysel", "Orxan"]
let userName=prompt('Adi daxil edin')
for (let index = 0; index < users.length; index++) {
  if(users[index]==userName){
    console.log('movcuddur');
   break
  }  
  else{
    console.log('movcud deyil');
  }
}