describe("Comparador toBeUndefined", function () {
    it('Deve validar o uso do toBeUndefined', () => {
        // Realiza a comparação de um objeto como sendo "undefined"
        var n1
        var n2 = undefined
        var n3 = true

        expect(n1).toBeUndefined()
        expect(n2).toBeUndefined()

    });
})