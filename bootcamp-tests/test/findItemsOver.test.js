describe('findItemsOver function', function(){
    it('Should find Items over the threshold that is 20', function(){  
        assert.deepEqual(findItemsOver([
                {'name' : 'apples', 'qty' : 10},
                {'name' : 'pears', 'qty' : 37},
                {'name': 'bananas', 'qty' : 27},
                {'name': 'apples', 'qty' : 3}
            ], 20),

            [{'name': 'pears', 'qty' : 37},
            {'name' : 'bananas', 'qty' : 27}
            ])
    })
})
