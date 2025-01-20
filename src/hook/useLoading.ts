// import { RootState } from './../stores/store'
import { RootState } from '../stores/store'
import { useSelector, useDispatch } from "react-redux"
import { setLoading } from '../stores/slice/loadingSlice'
// import { setLoading } from '../stores/slice/loadingSlice'
export default function useLoading() {
  const storeLoading = useSelector((state: RootState) => state.loading.loading)
  const dispatch = useDispatch()
  return {
    loading: storeLoading,
    setLoading: (loading: boolean) => dispatch(setLoading(loading))
  }
}