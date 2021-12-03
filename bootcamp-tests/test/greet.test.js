describe('Greet function', function(){
    it('I should greet Okuhle', function(){
        assert.equal('Hello, Okuhle', greet('Okuhle'))
    })
    it("Should greet a number when its passed as an argument", function(){
        assert.equal('Hello, 78', greet(78))
    })
    it('Should greet even when its written in CAPSLOCK', function(){
        assert.equal('Hello, JABULANI', greet('JABULANI'))
    })
})