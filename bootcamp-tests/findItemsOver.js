function findItemsOver(item, threshold)
{
 var overThreshold = [];
 
	for (var i = 0; i < item.length; i++)
    { if(item[i].qty > threshold)
    {
      overThreshold.push(item[i]);
    }
    }
  return overThreshold;
}