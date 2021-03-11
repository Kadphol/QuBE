import { createContext } from 'react';
import { Iuser } from '../type.modal'

interface IuserContext {
  user: Iuser,
  setUser: React.Dispatch<React.SetStateAction<Iuser>>
}

const userContext = createContext({} as IuserContext)

export {
  userContext
};