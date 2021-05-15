"use strict;"

//EventListener: Enter key will run the function

var input = document.getElementById("enterAmount");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});

// Algorithm

var myAccountBalance = parseInt((document.getElementById("myAccountBalance").innerText).value);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 5000 || myAccountBalance < 0) {
      alert("Balance Insufficient for Transaction!")
   } 
   
 
   else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`₹${enterAmount} is sent to recepient with Email-id ${enterName}@gmail.com.`)

      // transaction history 

      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`₹${enterAmount} is sent to recepient with Email-id ${enterName}@gmail.com on ${Date()}..................: `);
	  var textNode1 = document.createTextNode(`Available Balance:  ₹${myAccountBalance}`);
	  createPTag.appendChild(textNode);
      createPTag.appendChild(textNode1);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
	  formReset();
   }
}

// Download Mini Statement
	window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
				
            const invoice = this.document.getElementById("transaction-history-body");		
            console.log(invoice);
            var opt = {
                margin: 1,
                filename: 'Mini Statement.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
			console.log(window);
			window.print();	
        })
		
}





// Download Balance
//window.onload = function () {
    //document.getElementById("balance_download")
       // .addEventListener("click", () => {			
		//	window.print();		
        //})
	//}



// Reset form details
function formReset() {
	
  document.getElementById("myform").reset();
}
