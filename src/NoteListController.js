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



   exports.NoteController = NoteController;
})(this);