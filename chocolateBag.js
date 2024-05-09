let BagItemObj;
onload();
function onload(){
  displayBagSearch();
  bagItemdisplay();
  amountItem();
 

}
function amountItem(){
 
  let amountItem = document.querySelector('.totals');
  if(amountItem==null ){
    return true;
  }
  let subTotal =0;
  let delivery=5;
  let total=0;
  let discount=0
  BagItemObj.forEach(Items=>{
    subTotal +=Items.dairy_discount;
  total=subTotal+delivery;

    



  })
  


  
   amountItem.innerHTML=`
     
   <div class="totals-sub">
            <span>subtotal</span>
            <span>$${subTotal}</span>
            </div>
            <div class="totali-delavery">
                <span>Delivery Fee</span>
                <span>$${delivery}</span>
            </div>
            <div class="totale-item">
                <span>Total</span>
                <span>$${total}</span>
            </div>
           <button class="Place-Order">
            <a href="OrderChocolate.html">Place Order</a></button>
   `
}
  
function displayBagSearch(){
 BagItemObj =bagItems.map(items =>{
  for(let i=0;i<=dairymilkItems.length;i++){
    if(items ==dairymilkItems[i].Id){
      return dairymilkItems[i];
    }
  }
 })
}
function bagItemdisplay(){
  let displayBagItem =document.querySelector('.items-prices');
  let newHtml='';
  BagItemObj.forEach(items => {
    newHtml +=displayItemBag(items)
  });
  displayBagItem.innerHTML =newHtml;

}

function RemoveItem(ItemId){
  bagItems = bagItems.filter(BagItem=>BagItem!=ItemId);
  localStorage.clear('DairyItem');
  localStorage.setItem('DairyItem',JSON.stringify(bagItems));


  displayBagSearch();
  bagLoad();
  bagItemdisplay();
  amountItem();


}

  
  function displayItemBag(item){
    let discountPrice =item.dairy_crrunt_price-item.dairy_discount;
  
    return`
    <div class="item-content">
                <div class="item-img">
                    <img src="${item.dairy_image}" height="120" width="90">
                </div>
                <div class="item-title">${item. dairy_Name}</div>
                <div class="item-price">${item.dairy_discount}</div>
                <div class="total-price">${discountPrice}</div>
                <div class="remove-x" onclick="RemoveItem(${item.Id});">X</div>
            </div>
            `
    
    };



