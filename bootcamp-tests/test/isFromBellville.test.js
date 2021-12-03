describe("isFromBellville function", function(){
    
    it("Should return true if regNo starts with CY", function(){
        assert.equal(isFromBellville("CY"), true)
    })
    it("Should return false if regNo starts with CJ", function(){
        assert.equal(isFromBellville("CJ"), false)
    })
})