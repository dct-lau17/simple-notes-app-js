describe("NoteListController", function() {
  var mockNoteList, element, noteController
  
  beforeEach(function() {
    

    element = {}
    mockNoteList = {}

    function MockNoteListView(){}
    
    MockNoteListView.prototype.toHTML = function() {
        return "<div>Hello</div>"
    };

    noteController = new NoteController(element, mockNoteList, MockNoteListView);
  });

 
  it('returns an HTML string', function(){
    expect(noteController.getHTML()).toEqual("<div>Hello</div>")
  });

 

  // it('it can create a note', function(){
  //   noteList.save("hello")
  //   expect(noteList.all()[0]).toBe instanceof mockNote
  // });


  // step 2

  // it('it returns an array of note models', function(){
  //   expect(noteList.all()).toContain(note);
  


});
