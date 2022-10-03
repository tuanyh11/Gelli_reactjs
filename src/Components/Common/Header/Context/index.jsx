import {createContext, useContext} from 'react'

export const HeaderContext = createContext();

export const useHeaderContext = () => {
    return useContext(HeaderContext)
}
