(function(exports){
	function NoteListView(notelist) {
	  this.notelist = notelist
	}
	

	NoteListView.prototype.toHTML= function() {
	  return noteListToHtml(this.notelist)
	};


	function noteListToHtml(notelist){
    return [
      "<div>",
        "<ul>",
          notelist.all().map(noteToHtml).join(""),
        "</ul>",
      "</div>"
    ].join("")
  }

  function noteToHtml(noteInstance){
    return [ 
      "<li>",
      noteInstance.showText(),
      "</li>"
    ].join("");
  };

 

	exports.NoteListView = NoteListView;

})(this);