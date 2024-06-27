describe("Comparador ToMatch", function () {
    it('Deve validar o uso do ToMatch', () => {
        // verifica se uma string corresponde a uma expressão regular específica
        var texto = "Teste com jasmine"

        expect(texto).toMatch("jasmine")
        expect(texto).toMatch(/jasmine/i)

    });
})