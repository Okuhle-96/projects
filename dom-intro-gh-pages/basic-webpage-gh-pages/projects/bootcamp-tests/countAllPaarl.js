function countAllPaarl(reg){
   var splitter = reg.split(', ');
   var paarl = [];
    for(var i=0; i<splitter.length; i++){
      var splitStr = splitter[i];
      if (splitStr.startsWith('CJ'))
      {
     
       paarl.push(splitStr);
      }
    }
     return paarl.length;
  }