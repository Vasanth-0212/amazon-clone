



const Footer = () => {
    return (
        <div>
            <div className="h-44 w-screen border border-gray-300 rounded-md flex flex-col items-center justify-center space-y-2">
                <p className="font-bold text-2xl">See personalized recommendations</p>
                <button className="bg-yellow-400 text-white w-64 px-5 py-2 rounded-3xl mt-2">Sign in</button>
                <p className="text-sm">New customer? <a className="text-blue-600 underline">Start here</a></p>
            </div>
            <div>
                <button className="h-24 w-full flex items-center justify-center text-white bg-[rgb(34,34,61)]">
                    <img src="/footerLogo.png" alt="amazon" width={150} height={50} />
                </button>
                <div className="h-72 w-full bg-[rgb(34,34,61)] flex justify-center items-center text-white px-32 pl-32">
                    <div className="flex flex-row space-x-12">
                        <div className="hover:cursor-pointer space-y-2">
                            <p className="font-semibold text-xl">Get to Know Us</p>
                            <ul>
                                <li>About Amazon</li>
                                <li>Careers</li>
                                <li>Press Releases</li>
                                <li>Amazon Science</li>
                            </ul>
                        </div>
                        <div className="hover:cursor-pointer space-y-2">
                            <p className="font-semibold text-xl">Connect with Us</p>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div className="hover:cursor-pointer space-y-2">
                            <p className="font-semibold text-xl">Make Money with Us</p>
                            <ul>
                                <li>Sell on Amazon</li>
                                <li>Sell under Amazon Accelerator</li>
                                <li>Protect and Build Your Brand</li>
                                <li>Amazon Global Selling</li>
                                <li>Supply to Amazon</li>
                                <li>Become an Affiliate</li>
                                <li>Fulfilment by Amazon</li>
                                <li>Advertise Your Products</li>
                                <li>Amazon Pay on Merchants</li>
                            </ul>
                        </div>
                        <div className="hover:cursor-pointer space-y-2">
                            <p className="font-semibold text-xl">Let Us Help You</p>
                            <ul>
                                <li>Your Account</li>
                                <li>Returns Centre</li>
                                <li>Recalls and Product Safety Alerts</li>
                                <li>100% Purchase Protection</li>
                                <li>Amazon App Download</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;