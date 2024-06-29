import './MenuExplored.css'
import { menu_list } from '../../assets/frontend_assets/assets'
const MenuExplored = ({category,setCategory}) => {    
  return (
    
    <div className="explored-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your carvings and elevate your dining experience, one delicious meal at a time</p>
        <div className='explored-menu-list'>
            {   
                menu_list.map(item =>(
                    <div className='item-menu' onClick={()=>setCategory((pre)=>pre===item.menu_name?"All":item.menu_name)}>
                        <img src={item.menu_image} alt="" className={category===item.menu_name?"active":""}/>
                        <p>{item.menu_name}</p>
                    </div>
                ))
            }
        </div>
        <hr></hr>
    </div>
 )
}

export default MenuExplored