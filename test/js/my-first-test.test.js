test('The sum of 2 and 3 should be 5', function() {
    expect(2+3).toEqual(5);

})

test('the product of 2 and 3 should be 6', function() {
    expect(2*3).toEqual(6)
})

describe('String operations', function(){
    test('expect myString to be `hello world`' , function() {
        const myString= 'hello world'
        expect(myString).toBe('hello world')
    })
})