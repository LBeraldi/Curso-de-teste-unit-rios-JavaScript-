describe("Teste do beforeEach", function () {
    var contador = 0
    beforeEach(function () {
        contador++
    })
    it('Deve incrementar o contador para 1', () => {
        expect(contador).toEqual(1)
    });
    it('Deve incrementar o contador para 2', () => {
        expect(contador).toEqual(2)
    });
})