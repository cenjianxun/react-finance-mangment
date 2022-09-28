import MENULIST from "../../menu-list"
 
import { Menu, Icon } from 'antd'

const MenuItems = () => {
    return (
        <div> 
            <h2>this is menu item</h2> 
            {MENULIST.map( (item) => {
                if (item) {
                    return (
                        <Menu.Item key={item.key} >
                            {item.icon && <Icon type={item.icon} /> }
                            <span>
                                { item.label ? item.label : ''}
                            </span>
                        </Menu.Item>
                    )
                }
            })}
        </div>
    )
}

export default MenuItems