let HomePage = require('../pageObjects/homePage.js')

xdescribe('Note creation', function () {
    let homePage = new HomePage();
    
    it('with title only should be sucessful', function () {
        homePage.navigateToURL();
        homePage.createNote({title: 'Some nice title', text: ''});

        expect(homePage.notes().count()).toBe(1, 'Only one note should be created')
        expect(homePage.notes().first().getTitle()).toBe('Some nice title', 'title must be what was used')
        expect(homePage.notes().first().getText()).toBe('', 'text must be what was used')
    })

    it('with text only should be sucessful', function () {
        homePage.createNote({title: '', text: 'Some Nice Text'});

        expect(homePage.notes().count()).toBe(1, 'Only one note should be created')
        expect(homePage.notes().first().getTitle()).toBe('', 'title must be what was used')
        expect(homePage.notes().first().getText()).toBe('Some Nice Text', 'text must be what was used')
    })

    it('with empty text and title is impossible', function () {
        homePage.createNote({title: '', text: ''});

        expect(homePage.notes().count()).toBe(0, 'No notes should be created')
    })


})