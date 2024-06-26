describe("Comparador ToBe", function () {
    it('Deve validar o uso do ToBe', () => {
        // ToBe valida o Objeto em si
        var obj1 = {valor : true};
        var obj2 = {valor : true};

        expect(true).toBe(true);
        expect("Teste").toBe("Teste")

        expect(obj1).toBe(obj1)
    });
})