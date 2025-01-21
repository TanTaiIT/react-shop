import SideBar from '../components/SideBar/SideBar'
import { useQuery } from '@tanstack/react-query'
import { getAllCatgegories } from './../apis/category.api'
const Home = () => {
  const { data: CategoryData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return getAllCatgegories()
    }
  })
  return (
    <div className="main-content flex items-center justify-between w-full">
      <div className="side-bar flex-basis-30 mt-5">
        <SideBar category={CategoryData?.data?.data || []}/>
      </div>

      <div className="product-list mt-5 flex-1">

      </div>
    </div>
  )
}

export default Home