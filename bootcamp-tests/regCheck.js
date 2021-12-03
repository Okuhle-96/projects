function regCheck(num, reg)
{
  return num.endsWith(reg);
  
}
console.log(regCheck('DV 23 NB GP', 'GP'));
console.log(regCheck('DV 23 LP GP', 'MP'));
console.log(regCheck('CY189-012', 'CY'));
console.log(regCheck('CY189-012', 'ND'));