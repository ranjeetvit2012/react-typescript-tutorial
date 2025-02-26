
export type Name = {
    first: string
    last: string
  }

export type PersonProps = {
    name: Name
  }

  
 export const Person = (props: PersonProps) => {
    return (
      <h1>{props.name.first} {props.name.last}</h1>
    )
  }