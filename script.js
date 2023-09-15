// Criando a classe da calculadora
class Calculator{
    constructor(){
        // Aqui é a propriedade/atributo que receberá os valores digitados.
        this.displayValue = " ";
    }
    // Esse método adiciona os valores à propriedade displayValue
    // Permitindo que o usuário veja os caracteres/valores na tela
    appendToDisplay(value) {
        this.displayValue += value;
        // Chamamos o método updateDisplay dentro do método
        // appendToDisplay para que quando o usuário digitar
        // alguma tecla da calculadora, o valor que foi
        // armazenado na propriedade displayValue seja exibida na tela 
        this.updateDisplay()
    }
    // Esse método atualiza o elemento input no HTML
    updateDisplay() {
        document.getElementById("displayContent").value = this.displayValue;
    }
    // Esse método limpa quem está armazenado em displayValue
    clearDisplay() {
        this.displayValue = " ";
        this.updateDisplay()
    }

    // O método Try Catch executa o cálculo da expressâo matemática contida
    // em DisplayValue. Esse método utilza a função eval() para avalizar a 
    // expressão, e, se for bem sucedida, atualiza o DisplayValue com o 
    // resultado e chama a função updateDisplay(). Se ocorrer um erro, ele atualiza
    // o disply value com a mensagem "Erro"
    calculate() {
        try{
        const result = eval(this.displayValue);
        this.displayValue = result.toString();
        this.updateDisplay();
        } catch (error) {
            this.displayValue = "Erro"
            this.updateDisplay();
        }
    }
}

// Criando ou instanciando a classe
// Objeto chamado calc
const calc = new Calculator()