
let sidemenu =document.querySelector('.nav-bar');
function openmenu(){
sidemenu.style.top="43px"
}
function closemenu(){
sidemenu.style.top="-150px"
}


   

 //search choclets 
 let Search=()=>{
  let searchBox =document.querySelector('.searchBox').value.toUpperCase();
  let chocolates =document.querySelector('#chocolates');
  let chocolatesItms =document.querySelectorAll('.chocolate-item');
  let Cname =document.getElementsByTagName('p');
  for(let i=0;i<=Cname.length;i++){
   let match =chocolatesItms[i].getElementsByTagName('p')[0];
   if(match){
    let textValue =match.textContent||match.innerHTML;
    if(textValue.toUpperCase().indexOf(searchBox )>-1){
        chocolatesItms[i].style.display="";
    }
    else{
        chocolatesItms[i].style.display="none"; 
    }
   }
  }
 }