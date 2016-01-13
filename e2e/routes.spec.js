describe('route test', function(){
    
    
    it("should be able to navigate to thing", function(){
        
        browser.get('#/thing/car');
        
        expect(browser.getCurrentUrl()).toContain('car')
        
    })   
    
})