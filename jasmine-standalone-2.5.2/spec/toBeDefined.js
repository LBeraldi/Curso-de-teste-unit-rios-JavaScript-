describe("Comparador toBeDefined", function () {
    it('Deve validar o uso do toBeDefined ', () => {
        // Realiza a comparação de um objeto como não sendo "undefined"
        var n1 = 10
        var n2
        var n3 = undefined

        expect(n1).toBeDefined(10)
        expect(null).toBeDefined()
        expect(NaN).toBeDefined()

        // !expect(n1).toBeUndefined()
    });
})