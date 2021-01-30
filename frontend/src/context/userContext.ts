import { createContext } from 'react';
import { Iuser } from '../type.modal'

interface userContext {
  user: Iuser,
  setUser: React.Dispatch<React.SetStateAction<Iuser>>
}

const userContext = createContext({} as userContext)

export {
  userContext
};