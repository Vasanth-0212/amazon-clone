
import { Menu } from "lucide-react";

const MenuBar = () => {
    const menuItems = ["Fresh","MX Player", "Sell", "Best Sellers", "Today's Deals", "Mobiles", "Electronics", "Prime", "Customer Service", "Prime" , "Home & Kitchen"]
    return (
        <div className="w-screen h-10 bg-gray-800 text-white flex items-center justify-between font-medium px-5 pt-1">
            <div className="flex space-x-2 h-10 w-auto hover:cursor-pointer hover:border border-white rounded-sm p-1">
                <Menu />
                <span>All</span>
            </div>
            {menuItems.map((item : string) => {
                return(
                    <div className="flex space-x-2 h-10 w-auto hover:cursor-pointer hover:border border-white rounded-sm p-1">
                        {item}
                    </div>
                )
            })}
        </div>
    )
}

export default MenuBar;