describe("NoteList", function() {
  var noteListView, noteListMock, mockNote1, mockNote2, mockNoteArray

  beforeEach(function() {
    // mockNote1 = jasmine.createSpyObj('note', ['showText']);
    // mockNote2 = jasmine.createSpyObj('note', ['showText']);
    
    mockNote1 = {
        showText: function() {
            return 'hello';
        }
    };
    mockNote2 = {
        showText: function() {
            return 'note2';
        }
    };

    mockNoteArray = [mockNote1, mockNote2]

    NoteListMock = function(array){
      this.mockNoteArray = array
    }

    NoteListMock.prototype.all = function(){
      return this.mockNoteArray
    }

    noteListMock = new NoteListMock(mockNoteArray)
    noteListView = new NoteListView(noteListMock)
  });


  it('it returns an html string', function(){
    // mockNote1.showText.and.return('hello')
    // mockNote2.showText.and.return('note2')
    expect(noteListView.toHTML()).toEqual('<div><ul><li>hello</li><li>note2</li></ul></div>');
  });



});
