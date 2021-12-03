describe("totalPhoneBill function", function(){
    it("Should return the total Bill of R7.45", function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), "R" + 7.45)
    })
})