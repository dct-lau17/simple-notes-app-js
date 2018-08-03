describe("Note", function() {
  var note


  beforeEach(function() {
    note = new Note("this is a note")
  });

  it('shows a note', function(){
    expect(note.showText()).toEqual("this is a note")
  });


});
