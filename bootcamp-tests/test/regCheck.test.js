describe("regCheck function", function(){
    it("Should return true if regNo ends with GP", function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'), true)
    })
    it("Should return FALSE if regNo ends with MP", function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'), false)
    })
    it("Should return FALSE if regNo ends with GP", function(){
        assert.equal(regCheck('CY189-012', 'CY', 'MP'), false)
    })
    it("Should return FALSE if regNo ends with ND", function(){
        assert.equal(regCheck('CY189-012', 'ND'), false)
    })


})