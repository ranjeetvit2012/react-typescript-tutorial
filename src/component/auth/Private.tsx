import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
  isLoggedIn: boolean
  Component: React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name='ranjeet' email='rankeet@gmail.com' age={25} />
  } else {
    return <Login />
  }
}
