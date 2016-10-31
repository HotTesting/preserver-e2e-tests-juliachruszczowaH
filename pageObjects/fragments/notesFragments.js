

class Note {
    constructor(noteElement) {
        this.noteElement = noteElement;
    }

    getTitle() {
        return this.noteElement.$('.my-note strong').getText().then(text=> text.trim());
    }

    getText() {
        return this.noteElement.$('.my-note p:nth-of-type(2)').getText().then(text=> text.trim());
    }

    delete() {
        throw Error('not implemented')
    }

    changeColor() {
        throw Error('not implemented')
    }

    archive() {
        this.noteElement.$(`a[title='Archive']`).click();
    }

}

class Notes {
    constructor() {
        this.notesElements = $$('.grid-container .grid-item')
    }

    first() {
        return new Note(this.notesElements.first())
    }

    get(number) {
        return new Note(this.notesElements.get(number))
    }

    count() {
        return this.notesElements.count();
    }
}

module.exports.Note = Note;
module.exports.Notes = Notes;