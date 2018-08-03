(function(exports){
	function NoteList(notemodel) {
	  this._NoteList = [];
	  this.notemodel = notemodel
	}
	// step 1

	// function create(notemodel, text) {
	//   var note = new notemodel(text)
	//   return note;
	// };

	// NoteList.prototype.save= function(text) {
	//   return this._NoteList.push(create(this.notemodel, text));
	// };

	  


	// step 2

	NoteList.prototype.all= function() { 
	  return this._NoteList
	};


	NoteList.prototype.create= function(text) {
	 return save(new this.notemodel(text), this._NoteList)
	  
	};

	function save(noteModel, notelist) {
	  return notelist.push(noteModel);
	};

	exports.NoteList = NoteList;

})(this);

// new notemodel()
// a= new NoteList(Note)
// a.save("hello")

// a = new NoteList(Note)... a.create("hello")





