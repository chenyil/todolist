var todolist = todolist || {};

todolist.storage = (function() {  
  // private
  var load = function(){ 
    if(typeof(Storage) !== "undefined") {
      return true;
    }else {
      alert("Your browser doesn't support storage, your todo-list will not be stored after closing the browser.");
      return false;
    }
  }
  var itemList = [];
  //initialize the itemlist according to localstorage
  var listItem = function(){
  	if(load()){
  	  var number = localStorage.getItem("length");
  	  for (var i = 0; i < number; i++) {
  	  	var localData = JSON.parse(localStorage.getItem(i));
        itemList.push(localData);
  	  };
  	}
  };

  var getItemList = function(){
  	listItem();
  	return itemList;
  }

  var storeItem = function(item){
    var data = JSON.stringify(item);
    localStorage.setItem(item.id,data);
  }
  //public
  return {
    getItemList : getItemList,
    storeItem :storeItem
  };
})();

