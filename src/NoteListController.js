(function(exports){

  function NoteController(element, notelist, notelistview){
    this.element = element
    this.notelist = notelist
    this.noteListView = notelistview
    
  }

  NoteController.prototype.getHTML = function() {
    var view = new this.noteListView (this.notelist)
    return this.element.innerHTML = view.toHTML();
  }

 // NoteController.prototype.setEventListeners = function(){
 //   document.addEventListener('load', this.getHTML)
 //  }
  



   exports.NoteController = NoteController;
})(this);