var todolist = todolist || {};

todolist.todoItem = (function() {  
  // private
  var id = localStorage.getItem('length')-1;
  var increaseID = function () { 
    id += 1;
  }
  //public
  var Item = function(text) {  
    this.state = "UNFINISHED";
    this.text = text;
    increaseID();
    this.id=id;
    this.getID = function(){
      return this.id;
    }
    localStorage.setItem('length',id+1);
  }
  
  return {
    item:Item
  };
})();