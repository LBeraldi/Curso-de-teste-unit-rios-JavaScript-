describe("Teste do fail", function () {
    it('Deve demonstrar o uso do fail ', () => {
        var operacao = function (executar, callback) {
            if (executar){
                callback()
            }
        }
        operacao(false, function () {
            fail("não deve executar função de callback")
        })
    });
})