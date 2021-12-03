function findItemsOver20(items)
{
  var expensiveItems = [];
	for (var i = 0; i < items.length; i++)
    { if(items[i].qty > 20){
      expensiveItems.push(items[i]);
    }
    }
return  expensiveItems;
}