function yearsAgo(years) 
{

  var currentYear = new Date().getFullYear();
  
  console.log(currentYear);
	
  return currentYear - years;
 
}