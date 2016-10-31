module.exports.config = {
    specs: './specs/*_spec.js',
    directConnect: true,
    baseUrl: 'http://www.hiteshbalar.com/preserver/',
    useAllAngular2AppRoots: true,

    onPrepare: function () {
        browser.manage().timeouts().implicitlyWait(5000);


    }
}