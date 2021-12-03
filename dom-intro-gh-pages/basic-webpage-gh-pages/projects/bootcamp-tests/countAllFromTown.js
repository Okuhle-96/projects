function countAllFromTown(reg, town){
    var splitter = reg.split(',');
    var towns = [];
    
      for(var i=0; i<splitter.length; i++){
        var splitStr = splitter[i].trim();
        if (splitStr.startsWith(town))
        {  
         towns.push(splitStr);
        }
      }
      return towns.length;
    }