describe("Teste do beforeAll", function () {
    var contador = 0

    beforeAll(function () {
        contador = 10
    })
    beforeEach(function () {
        coantador++
    })
    it('Deve garantir valor 11 para o contador', () => {
        expect(contador).toEqual(11)
        pending("Pendente")

    });
    it('Deve garantir valor 12 para o contador', () => {
        expect(contador).toEqual(12)
        pending("Pendente")
    });
})