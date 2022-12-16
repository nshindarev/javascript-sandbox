const add = require('./../../sandbox/math');

test('can add numbers', () => {
    //given
    const num1 = 1;
    const num2 = 2;
    const expected = 3;

    //when
    const actual = add(num1,num2);

    //then
    expect(actual).toBe(expected);
});