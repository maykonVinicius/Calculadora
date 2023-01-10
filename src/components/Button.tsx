import './Button.css'

export default function Button (props:any){
    const {value, alterar} = props
    
    return(
        <button onClick={() => {alterar(value)}}>{value}</button>
    )
}