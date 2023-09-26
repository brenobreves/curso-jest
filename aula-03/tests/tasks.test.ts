import calculator from "calculator"

describe("Testes da calculadora",()=>{
    it("Retorna 4 como a soma de 2+2",()=>{
        const sum = calculator.sum(2,2)
        expect(sum).toEqual(4)
    })
    it("Retorna 0 como a sub de 2-2",()=>{
        const sub = calculator.sub(2,2)
        expect(sub).toEqual(0)
    })
    it("Retorna 4 como a mult de 2*2",()=>{
        const mul = calculator.mul(2,2)
        expect(mul).toEqual(4)
    })
    it("Retorna 1 como a divisão de 2/2",()=>{
        const div = calculator.div(2,2)
        expect(div).toEqual(1)
    })
})


