$(document).ready(function() {
  //localStorage.clear();
  var itemList = todolist.storage.getItemList();
  //creat listItem DOM
  var createListItem = function(i){
  	var checkboxStatus="";
  	var labelClass = ""
    if (itemList[i].state == "DONE"){
      checkboxStatus =" checked disabled";
      labelClass = " list-group-item-success";
  	}
    var listGroupItem = 
      $('<li class="list-group-item'
      	+labelClass
      	+'"><label class="checkbox-inline"><input type="checkbox" id="item'
      	+itemList[i].id+'"'
      	+checkboxStatus+'>'
      	+itemList[i].text+'</label></li>');
    
    listGroupItem.appendTo($('#'+itemList[i].state));
  }
  //creat list-group DOM
  var createList = function(){
  	for (var i = 0; i < itemList.length; i++) {
  	  createListItem(i);
    }
  }

  createList();
  
  $('#add').click(function() {
  	var text = $('#todoItem').val();
  	if(text!=""){
      var item = new todolist.todoItem.item(text);
      $('#todoItem').val("");
      $('#newItem').modal('toggle');
      todolist.storage.storeItem(item);
      itemList.push(item);
      createListItem(item.id);
    }
  });

  $('#close').click(function() {
  	$('#todoItem').val("");
  });

  $('div.list-group').on('click', 'li label input[type=checkbox]', function(){
  	var id = $(this).attr('id').substring(4);
    itemList[id].state = "DONE";
    todolist.storage.storeItem(itemList[id]);
    $(this).parent().parent().remove();
    createListItem(id);
  });
});