let BagItemObjs;
amountItem();



function amountItem(){
 
    let amountItem = document.querySelector('.totals');
    if(amountItem==null ){
      return true;
    }
    let subTotal =0;
    let delivery=5;
    let total=0;
    BagItemObj.forEach(Items=>{
      subTotal +=Items.dairy_discount;
    total=subTotal+delivery;
  
      
  
  
  
    });

    
    
    
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
              
     
     `
  }
    