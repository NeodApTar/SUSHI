import { createContext } from "react"
import { food__list } from "../assets/assets"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const contextValue = {
        food__list
    }
    return (
        <StoreContext.Provider value={contextValue}>
            
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider