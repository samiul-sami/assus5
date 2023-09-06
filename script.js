let total=0
let discount=0

function hendelclick(target) {
  const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.childNodes[3].childNodes[3].innerText;
  
  const li = document.createElement('li');
  li.innerHTML = itemName;
  
  selectedItemContainer.appendChild(li);
  const price=target.childNodes[3].childNodes[5].childNodes[0].innerText.split(".")[0];
  total =parseInt(total)+parseInt(price);
  if (total>=0) {
    document.getElementById('purchase').removeAttribute('disabled');
    
  }
  if (total>=200) {
    document.getElementById('apply-btn').removeAttribute('disabled');
    
  }
  total=total-(discount*total)
  document.getElementById("total").innerText=(total);
}

const apply=()=>{
 console.log('apply');
  const coupon=
  document.getElementById('coupon-code').value;
  if ('SELS200'===coupon) {
    console.log('yeas')
    discount=0.2;
    total=total-(discount*total)
    document.getElementById("total").innerText=(total);
    
  }else{
    console.log('No')
  }
  
}

