function mostProfitableDepartment(sale)
{
  const profitMap = {};
  for (var i = 0; i<sale.length; i++){
    
  const profit = sale[i];
  profitMap[profit.department] = 0;
}
  
  for (var i = 0; i<sale.length; i++){ 
  const  profit = sale[i];
    
  var profits = profitMap[profit.department];
  profits += profit.sales;
  profitMap[profit.department] = profits;
}
  var currentMaxSales = 0;
  var currentDepartment = "";
  for( const saleDepartment in profitMap)
  { 
    const currentValue = profitMap[saleDepartment];
    if(currentValue > currentMaxSales)
    {
      currentMaxSales = currentValue;
      currentDepartment = saleDepartment;
    }  
  } 
    return currentDepartment;
    
} 
