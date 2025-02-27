export type ProfileProps = {
    name: string,
    email: string
    age: number
  }
  
  export const Profile = ({ name ,email,age}: ProfileProps) => {
    return <div>Private Profile component. Name is {name} - {email} - {age}</div>
  }
  