import './App.scss'
import useRouteElement from './useRouteElement'
import Layer from './components/Layer/Layer'
import Loading from './components/common/Loading/Loading'
import { useSelector } from 'react-redux'
import { RootState } from './stores/store'
function App() {
  const loading = useSelector((state: RootState) => state.loading.loading)
  const Loadings = Layer(Loading, { loading: loading})
  const routeElement = useRouteElement()
  return (
    <>
      {
        loading && <Loadings />
      }
      {routeElement}
    </>
  )
}

export default App
