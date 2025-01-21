import BaseButton from "@common/BaseButton/BaseButton"
import Star from "../Star/Star"
import { CategoryTypes } from "../../types/Category.type"
interface SideBarProps {
  category: CategoryTypes[] 
}
const SideBar = (props: SideBarProps) => {
  const { category } = props
  return (
    <div className="">
      <div className="">
        <h2 className="font-bold uppercase">≡  All Categories</h2>
        <hr/>
        
        <ul className="transition-all duration-300 ease-in-out mt-2">
          {
            category.length && category.map((item) => {
              return (
                <li className="p-2 hover:bg-gray-200 cursor-pointer" key={item._id}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>

      <div className="mt-3">
        <h2 className="font-bold uppercase">≡  Filter</h2>
        <hr/>
        <div className="flex items-center gap-3 mt-2">
          <input type="text" placeholder="from" className="w-[80px] h-[40px] border-2 border-gray-400 rounded-sm outline-none"/>
          -
          <input type="text" placeholder="to" className="w-[80px] h-[40px] border-2 border-gray-400 rounded-sm outline-none" />
        </div>
        <BaseButton style={'bg-mainOrange mt-2'}>Apply</BaseButton>
      </div>

      <div className="rating mt-3">
        <h2 className="font-bold uppercase">≡   Rating</h2>
        <hr/>
        <div className="mt-5">
          <Star />
        </div>
      </div>
    </div>
  )
}

export default SideBar