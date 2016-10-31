let BasePage = require('./basePage.js')
let Note = require('./fragments/notesFragments.js').Note
let Notes = require('./fragments/notesFragments.js').Notes


class HomePage extends BasePage {
    constructor() {
        super();
        this.urlRoute = 'notes'
        this.noteCreator = new NoteCreatorFragment();
        this.notes_ = new Notes();
    }

    createNote(noteObject= {title: ``, text: ``}) {
        this.noteCreator.create(noteObject);
    }

    notes() {
        return this.notes_;
    }
} 

class NoteCreatorFragment {
    constructor() {
        this.noteCreatorElement = $('.panel.note-editor')
        this.titleField = this.noteCreatorElement.$(`input[placeholder='Title']`)
        this.textField = this.noteCreatorElement.$(`textarea[placeholder='Write a note']`)
    }

    initialize() {
        this.textField.click();
    }

    create(noteObject) {
        this.initialize();
        this.titleField.sendKeys(noteObject.title)
        this.textField.sendKeys(noteObject.text) 
        element(by.buttonText('Save')).click();
    }
}

module.exports = HomePage;