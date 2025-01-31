
import Image from "next/image";
import { Search , ShoppingCart} from "lucide-react";

const Navbar = () => {
    return (
        <div className="z-50 w-screen bg-gray-900 h-16 flex justify-between items-center px-4">
            <Image src="/logo.png" alt='amazon-logo' width={150} height={50}/>
            <div className="items-center flex">
                <input type="text" placeholder="Search Amazon.in" className="p-3 h-10 w-[500px] bg-white rounded-l-md" />
                <button className="bg-orange-300 h-10 w-10 p-2 rounded-r-md"><Search /></button>
            </div>
            <div className="flex items-center">
                <p className="text-white text-lg font-semibold hover:cursor-pointer">Accounts & Lists</p>
                <p className="text-white text-lg font-semibold ml-4 hover:cursor-pointer">Orders</p>
                <p className="text-white text-lg flex space-x-2 font-semibold ml-4 hover:cursor-pointer"><ShoppingCart /><span>Cart</span></p>
            </div>
        </div>
    )
}
export default Navbar;