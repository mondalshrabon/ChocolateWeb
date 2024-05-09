let bagLoads= document.querySelector('#bag-count');
let displayItem = document.querySelector('.contents-Dairy') ;
//let bagLoads = document.querySelector('#bag-count');

let newHtml1='';


let bagItems;
//let singleOrders=[];
onLord();
function onLord(){

    let DairyObj= localStorage.getItem('DairyItem');
    if(DairyObj!=undefined){
        bagItems =JSON.parse(DairyObj);
    }
    else{
        bagItems=[]; 
    }

 



    displayItems();
  
    bagLoad();



   
  
}



function BagItem(ItemId){
    
    bagItems.push(ItemId);
    console.log(bagItems);
    localStorage.setItem('DairyItem',JSON.stringify(bagItems));
    bagLoad();
   


}


function bagLoad(){
    if(bagItems.length>0){
     bagLoads.style.visibility='visible';
    }
    else{
     bagLoads.style.visibility='hidden';
    
    }
 
 }



function displayItems(){
if(displayItem==null){
    return true;
}    

   dairymilkItems.forEach(item => {
    if(item.Id>='11'&&item.Id<='15'){
    newHtml1 +=`

    <div class="item-content">
   
        <img src="${item.dairy_image}" height="120px" width="45px">
        <div class="item-company">${item.dairy_company}</div>
        <div class="item-name">${item. dairy_Name}</div>
        <div class="reating-item">${item.item_reating.Reating}⭐|${item.item_reating.views}k</div>
        <div class="item-price">
            <span class="discount-price">Rs${item.dairy_discount}</span>
            <span class="c-price" >Rs ${item. dairy_crrunt_price}</span>
            <span class="price-Offer">(${item.dairy_Offer}% OFF)</span>
        </div>
        <div class="button">
        <button class="add-button" onclick="BagItem(${item.Id})">Add To Card</button>
       <button class="order-button" onclick="BagItem(${item.Id}); SingleOrder();">
       <a href="OrderChocolate.html"> Bay Now</a></button>
        </div>
      </div>
   `;
    }
     
});

    

   displayItem.innerHTML=newHtml1;
   

}








//search bar working 
let searchBar=()=>{
    let searchBox =document.querySelector('.Search').value.toUpperCase();
    let ProductList =document.querySelector('#contents-Dairy');
    let product =document.querySelectorAll('.item-content');
    let productName =document.querySelectorAll('.item-name');
    for(let i=0;i<=productName.length;i++){
        let match =product[i].querySelectorAll('.item-name')[0];
          if(match){
          let textValue =  match.textContent||match.innerHTML;


          if(textValue.toUpperCase().indexOf(searchBox)>-1){
             product[i].style.display ="";
          }
          else{
            product[i].style.display ="none";
          }
          }
    }
}