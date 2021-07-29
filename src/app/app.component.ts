import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayValue = '0'
  first_value = 0
  secund_value = 0
  op_atual = '';
  current_value = 0
  clearDisplay = true
  resetCalculator() {
    this.displayValue = '0'
    this.first_value = 0
    this.secund_value = 0
    this.current_value = 0
    this.clearDisplay = true
    this.op_atual = '';

  }
  setOperation(op: string) {
    if (this.current_value === 0) {
      if (op !== '=') {
        this.op_atual = op
        this.first_value = parseFloat(this.displayValue)
        this.displayValue = '0'
        this.current_value = 1
      } else {

      }

    } else {
      this.secund_value = parseFloat(this.displayValue)
      var op_set;
      this.op_atual !== '' && op === '=' ? op_set = this.op_atual : op_set = op ;
      this.calcResult(op_set, this.first_value, this.secund_value)
    }
  }
  calcResult(op: string, firstNumber: number, secundNumber: number) {
    switch (op) {
      case "+":
        var result = `${firstNumber + secundNumber}`
        this.displayValue = result
        this.first_value = parseFloat(result)
        this.secund_value = 0
        this.clearDisplay = true
        this.op_atual = op
        break;
      case "-":
        var result = `${firstNumber - secundNumber}`
        this.displayValue = result
        this.first_value = parseFloat(result)
        this.secund_value = 0
        this.clearDisplay = true
        this.op_atual = op

        break;
      case "x":
        var result = `${firstNumber * secundNumber}`
        this.displayValue = result
        this.first_value = parseFloat(result)
        this.secund_value = 0
        this.clearDisplay = true
        this.op_atual = op

        break;
      case "div":
        var result = `${firstNumber / secundNumber}`
        this.displayValue = result
        this.first_value = parseFloat(result)
        this.secund_value = 0
        this.clearDisplay = true
        this.op_atual = op

        break;
      default:
        break;
    }
  }


  addDigit(number: string) {
    if (!this.clearDisplay) {
      if (this.displayValue === '0' && number !== '0' && number !== '.') {
        this.displayValue = ''
        this.displayValue += number
      } else if (number === '.' && this.displayValue.includes('.')) { } else {
        this.displayValue += number
      }
    } else {
      this.displayValue = ''
      this.clearDisplay = false
      if (this.displayValue === '0' && number !== '0' && number !== '.') {
        this.displayValue += number
      } else if (number === '.' && this.displayValue.includes('.')) { } else {
        this.displayValue += number
      }
    }

  }

}
