describe("Teste de afterEach", function () {
    var contador = 0
    
    beforeEach(function () {
        contador++
    })
    
    afterEach(function () {
        contador = 0
    })

    it('Deve garantir o valor 1 para o contador', () => {
        expect(contador).toEqual(1)
    });
    it('Deve ainda garantir  o contador com valor 1', () => {
        expect(contador).toEqual(1)
    });
})