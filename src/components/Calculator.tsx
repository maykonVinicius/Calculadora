import { useState } from "react"
import Button from "./Button"
import "./Calculator.css"
import Display from "./Display"

export default function Calculator() {
const [value1, setValue1] = useState(0)
const [value2, setValue2] = useState(0)
const [operation, setOperation] = useState('')

const addNumber = (e:any) => { operation == '' ? setValue1(value1 == 0 && !value1.toString().includes('.') ? e : value1 + e): setValue2(value2 == 0 && !value2.toString().includes('.') ? e : value2 + e) }
const addDot = (e:any) => { operation == '' ? !value1.toString().includes('.')  ? setValue1(value1 + e) : '' : !value2.toString().includes('.')  ? setValue2(value2 + e) : ''}
const newOperation = (e:any) => {value2 === 0 ? setOperation(e): enter(), setOperation(e)}
const clear = () => {setValue1(0), setValue2(0), setOperation('')}
const enter = () => {operation !== '' && value2 !==0 ? (setValue1(eval(` ${value1} ${operation} ${value2}`)), setValue2(0), setOperation('')): ''}

    return(
        <div className="calculator">
            <Display content={value2 === 0 ? value1 + operation : value2 }/>
            <Button value='7' alterar={addNumber}/>
            <Button value='8' alterar={addNumber}/>
            <Button value='9' alterar={addNumber}/>
            <Button value='/' alterar={newOperation}/>
            <Button value='4' alterar={addNumber}/>
            <Button value='5' alterar={addNumber}/>
            <Button value='6' alterar={addNumber}/>
            <Button value='*' alterar={newOperation}/>
            <Button value='1' alterar={addNumber}/>
            <Button value='2' alterar={addNumber}/>
            <Button value='3' alterar={addNumber}/>
            <Button value='-' alterar={newOperation}/>  
            <Button value='0' alterar={addNumber}/>
            <Button value='.' alterar={addDot}/>
            <Button value='+' alterar={newOperation}/>  
            <Button value='AC' alterar={clear}/>  
            <Button value='ENTER' alterar={enter}/>  
        </div>
    )
}