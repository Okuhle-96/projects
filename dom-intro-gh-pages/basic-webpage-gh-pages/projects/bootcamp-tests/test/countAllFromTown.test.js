describe("countAllFromTown function", function(){
    
        it("Should return the total number of registrations that starts with CL", function(){
            assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CL"),3)
        })
        it("Should return the total number of registrations that starts with CJ", function(){
            assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CJ"),1)
        })
        it("Should return the total number of registrations that starts with CY", function(){
            assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CY"),1)
        })
        it("Should return the total number of registrations that starts with CF", function(){
            assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CF"),0)
        })
    
})