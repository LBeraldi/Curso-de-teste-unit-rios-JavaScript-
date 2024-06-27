describe("Comparador toBeNull", function () {
    it('Deve validar o uso do comparador toBeNull', () => {
        //Realiza uma comparação com um objeto como sendo Null
        var n1 = null
        var n2 = undefined
        var n3
        var n4 = NaN
        var n5 = "teste"

        expect(n1).toBeNull()

    });
})