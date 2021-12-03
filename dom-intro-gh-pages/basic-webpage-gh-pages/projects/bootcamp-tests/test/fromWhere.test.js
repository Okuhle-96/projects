describe("fromWhere function", function(){
    
    it("Should return the name of a town it regNo starts with CY", function(){
        assert.equal(fromWhere("CY"), "Bellville")
    })
    it("Should return the name of a town it regNo starts with CJ", function(){
        assert.equal(fromWhere("CJ"), 'Paarl')
    })
    it("Should return the name of a town it regNo starts with CA", function(){
        assert.equal(fromWhere("CA"), 'Cape Town')
    })

})