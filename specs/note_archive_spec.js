let HomePage = require('../pageObjects/homePage.js')

describe('Note archive', function () {
    let homePage = new HomePage();

    beforeEach(function () {
        homePage.navigateToURL();
        homePage.createNote({title: 'Some nice title', text: ''});
        expect(homePage.notes().count()).toBe(1, 'Note should be added to run arhive test')
    })

    it('note could be archived', function () {
        homePage.notes().first().archive();

        expect(homePage.notes().count()).toBe(0, 'Note should disapear')
    })

})