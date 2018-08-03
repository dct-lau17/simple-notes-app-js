describe("NoteList", function() {
  var noteList, MockNote

  beforeEach(function() {

  //   MockNote = function(){}
  //   noteList = new NoteList(MockNote);
  // });

    MockNote = jasmine.createSpy();
    noteList = new NoteList(MockNote);

  });


  it('has an empty notes array', function(){
    expect(noteList.all()).toEqual([]);
  });

  it('it can create a note', function(){
    noteList.create("hello");
    expect(noteList.all()[0]).toEqual(jasmine.any(MockNote));
  });

   it('calls Note model', function(){
    noteList.create("hello");
    expect(MockNote).toHaveBeenCalledWith("hello");
  });

  // it('it can create a note', function(){
  //   noteList.save("hello")
  //   expect(noteList.all()[0]).toBe instanceof mockNote
  // });


  // step 2

  // it('it returns an array of note models', function(){
  //   expect(noteList.all()).toContain(note);



});
