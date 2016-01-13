'use strict';

describe('The main view', function () {

    function MainPage() {
        this.title = element(by.model('main.newThing.title'));
        this.price = element(by.model('main.newThing.price'));
        this.date = element(by.model('main.newThing.creationDate'));
        this.submit = element(by.css('input[type=submit]'));
        this.listOfThings = element.all(by.repeater('thing in main.coolThings'))
    }
    
    var page;

    beforeEach(function () {
        browser.get('/')
        page = new MainPage();
    })

    it("should include a list of 3 things", function () {
        expect(page.listOfThings.count()).toBe(3)
    })

    it('should be able to add a new thing', function () {

        page.title.sendKeys('test title');
        page.price.sendKeys('12.3')
        page.date.sendKeys('12/12/12');

        browser.debugger();

        page.submit.click();
        expect(page.listOfThings.count()).toBe(4)
    })

});


































// function MainPage() {
//         var repeater = by.repeater('thing in main.coolThings');
//         this.title = element(by.model('main.newThing.title'))
//         this.date = element(by.model('main.newThing.creationDate'))
//         this.price = element(by.model('main.newThing.title'))
//         this.submit = element(by.css('input[type="submit"]'))
//         this.listOfThings = element.all(repeater)
//         this.getRow = function(index){
//             return element(repeater.row(index))
//         }
//     }
// 
//     var page = new MainPage();
// 
//     beforeEach(function () {
//         browser.get('/');
//     });
// 
//     it('should include a list of 3 things', function () {
//         expect(page.listOfThings.count()).toBe(3);
//     });
// 
//     it('should be able to submit a new thing', function () {
//         expect(page.listOfThings.count()).toBe(3);
// 
//         page.title.sendKeys('test title');
//         page.date.sendKeys('12/12/12');
//         page.price.sendKeys('12.3')
// 
//         expect(page.submit.isEnabled()).toBe(true)
//         browser.debugger();
//         page.submit.click();
// 
//         expect(page.listOfThings.count()).toBe(4);
//         expect(page.getRow(3).getInnerHtml()).toContain('test title')        
// 
//     });