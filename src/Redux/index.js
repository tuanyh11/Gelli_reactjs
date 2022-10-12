import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "./Store/store"

const SotreProvider = ({children}) => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          {children}
        </PersistGate>
    </Provider>
  )
}

export default SotreProvider