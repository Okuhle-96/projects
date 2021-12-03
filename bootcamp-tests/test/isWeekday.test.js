describe("isWeekday function", function(){
    
    it("Should return true if the DAY starts with Mon", function(){
        assert.equal(isWeekday("Mon"), true)
    })
    it("Should return false if the DAY starts with Sat", function(){
        assert.equal(isWeekday("Sat"), false)
    })
})