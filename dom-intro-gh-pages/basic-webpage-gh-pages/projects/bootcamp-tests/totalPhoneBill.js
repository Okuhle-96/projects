
function totalPhoneBill(bill) {
	var phoneBill = bill.split(', ');
	var totalBill = 0; 
  
  	for(var i = 0; i < phoneBill.length; i++) {
      	if (phoneBill[i] == "call") {
        	totalBill = totalBill + 2.75;  
        } else if (phoneBill[i] == "sms") {
        	totalBill = totalBill + 0.65;
        }
    }
  
	return "R" + totalBill.toFixed(2);
}