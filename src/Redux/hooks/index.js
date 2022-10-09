import { useDispatch, useSelector } from "react-redux"
import { getProduct, setProducts } from "../Slice/productSlice";
import { getUi, setUi, getCategories, setCategories } from "../Slice/UiSlice";

export const useProductSlice = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.product)
    const actions = {
        getProduct,
        setProducts
    }
    return [data, actions, dispatch]
}

export const useUiSlice = () => {
    const dispatch = useDispatch();
    
    const data = useSelector(state => state.ui)
    const actions = {
        getUi,
        setUi,
        getCategories,
        setCategories
    }
    return [data, actions, dispatch]
}