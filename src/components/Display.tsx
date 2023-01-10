import './Display.css'
export default function Display(props:any){
    const {content} = props
    return(
        <div className="display">
            <div className='content'>{content}</div>
        </div>
    )
}