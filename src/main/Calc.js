import React, { Component } from 'react'
import './Calc.css'
import Display from '../componentes/Display/Display'
import Button from '../componentes/Button/Button'

class Calculator extends Component {

    state = {
        displayValue: '0',
        // displayValue: ['0','-', '5'],
        num1: 0,
        num2: 0,
        operacao: null,
        result: 0
    }

    clearMemory = () => {
        this.setState({displayValue: 0})
    }

    setOperation = (operation) => {
        this.setState({displayValue: operation})
        this.setState({operacao: operation})

        if ( this.state.operacao == '=')
        this.setState({displayValue: this.state.result})
        console.log(this.state.result)


        if (this.state.operacao == '+'){
            this.state.result = this.state.num2 + this.state.num1
            console.log(this.result)
        } else if (this.state.operacao == '-'){
            this.state.result = this.state.num2 - this.state.num1
            console.log(this.result)
        } else if (this.state.operacao == '*'){
            this.state.result = this.state.num2 * this.state.num1
            console.log(this.result)
        } else if (this.state.operacao == '/'){
            this.state.result = this.state.num2 / this.state.num1
            console.log(this.result)
        }
    }


    
    addDigit = (digit) => {
        this.setState({displayValue: digit})

        if (this.state.operacao != null){
            this.setState({num2: digit})
        } else {
            this.setState({num1: digit})
        }

    }



    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" triple clear={this.clearMemory} />
                <Button label="/" operation click={this.setOperation} />
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" double click={this.addDigit}/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
            </div>
        )
    }
}

export default Calculator