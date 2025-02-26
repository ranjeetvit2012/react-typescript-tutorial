

// type ButtonProps = {
//     handleClick:()=>void;
//     name:string;
// }

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
    name:string;
}


 export const Button = (props:ButtonProps) => {
    return (
        <>
        <button onClick={(event)=>props.handleClick(event,1)}>{props.name}</button>
        </>
    )
}


  

// type InputProps = {
//     handleChange:(event:React.ChangeEvent<HTMLElement>)=>void;
//     placeholder:string;
//     value:string
// }


// export const Input =(props:InputProps)=>{
//     return(
//         <>
//         <input type="text" value={props.value} onChange={props.handleChange} placeholder={props.placeholder}/>
//         </>
//     )
// }