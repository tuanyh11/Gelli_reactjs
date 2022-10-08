import { Provider } from "react-redux"
import store from "./Store/store"

const SotreProvider = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default SotreProvider