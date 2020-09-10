const index = require('../src/index')

describe('index', () => {
    test('test duplicates', () => {
        const enteros = [3, 4, 5, 2, 2, 4, 5]
        const res = index.obtenerDuplicado(enteros)
        expect(res).toMatchSnapshot()
    });

    test('test palindrome', () => {
        const palabra = 'arepera'
        const res = index.isPalindrome(palabra)
        expect(res).toBe(true)
    });

    test('test palindrome falsecase', () => {
        const palabra = 'arbol'
        const res = index.isPalindrome(palabra)
        expect(res).toBe(false)
    });
});