export function LeftMenu() {
    return <div className="hidden md:flex flex-col justify-between h-screen bg-slate-800 w-56 text-slate-200 text-sm font-medium pt-4 ">
        <div className="flex flex-col pl-3 ">
            <div className="flex mb-8 justify-between items-center pr-2 pl-2">
                <div className="flex ">
                    <img className="w-10 h-10 rounded-lg" src="../src/assets/logo.svg" alt="this is uimage" />
                    <div className="flex flex-col ml-3">
                        <strong className="text-base">Nishyan</strong>
                        <span className="underline font-thin hover:cursor-pointer">Visit Store</span>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

            <div className="flex flex-col mr-2">
                <div className="flex p-2 pl-4 rounded-sm hover:bg-slate-700 hover:cursor-pointer">
                    <img className="w-5 h-5" src="../src/assets/home.webp" alt="this is image" />
                    <span className="pl-3">Home</span>
                </div>
                <div className="flex p-2 pl-4 rounded-sm hover:bg-slate-700 hover:cursor-pointer">
                    <img className="w-4 h-4" src="../src/assets/orders.webp" alt="this is image" />
                    <span className="pl-3">Orders</span>
                </div>
                <div className="flex p-2 pl-4 rounded-sm hover:bg-slate-700 hover:cursor-pointer">
                    <img className="w-4 h-4" src="../src/assets/products.webp" alt="this is image" />
                    <span className="pl-3">Products</span>
                </div>
                <div className="flex p-2 pl-4 rounded-sm hover:bg-slate-700 hover:cursor-pointer">
                    <img className="w-4 h-4" src="../src/assets/delivery.webp" alt="this is image" />
                    <span className="pl-3">Delivery</span>
                </div>
                <div className="flex p-2 pl-4 rounded-sm hover:bg-slate-700 hover:cursor-pointer">
                    <img className="w-4 h-4" src="../src/assets/marketing.webp" alt="this is image" />
                    <span className="pl-3">Marketing</span>
                </div>
                <div className="flex p-2 pl-4 rounded-sm hover:bg-slate-700 hover:cursor-pointer">
                    <img className="w-4 h-4" src="../src/assets/analytics.webp" alt="this is image" />
                    <span className="pl-3">Analytics</span>
                </div>
                <div className="flex p-2 pl-4 rounded-sm hover:bg-slate-700 hover:cursor-pointer">
                    <img className="w-4 h-4" src="../src/assets/payouts.webp" alt="this is image" />
                    <span className="pl-3">Payouts</span>
                </div>
                <div className="flex p-2 pl-4 rounded-sm hover:bg-slate-700 hover:cursor-pointer">
                    <img className="w-4 h-4" src="../src/assets/discounts.webp" alt="this is image" />
                    <span className="pl-3">Discounts</span>
                </div>
                <div className="flex p-2 pl-4 rounded-sm hover:bg-slate-700 hover:cursor-pointer">
                    <img className="w-4 h-4" src="../src/assets/audience.webp" alt="this is image" />
                    <span className="pl-3">Audience</span>
                </div>
                <div className="flex p-2 pl-4 rounded-sm hover:bg-slate-700 hover:cursor-pointer">
                    <img className="w-4 h-4" src="../src/assets/appearence.webp" alt="this is image" />
                    <span className="pl-3">Appearence</span>
                </div>
                <div className="flex p-2 pl-4 rounded-sm hover:bg-slate-700 hover:cursor-pointer">
                    <img className="w-4 h-4" src="../src/assets/plugins.webp" alt="this is image" />
                    <span className="pl-3 ">Plugins</span>
                </div>
            </div>


        </div>
        <div className="flex bg-slate-700 m-4 p-2 rounded-sm" >
            <img className="w-9 h-9 bg-slate-600 p-1.5 rounded-sm" src="../src/assets/wallet.svg" alt="this is image" />
            <div className="flex flex-col pl-1.5">
                <label className="pl-2 text-sm font-light">Available Credits</label>
                <label className="pl-2 text-base">224.10</label>
            </div>
        </div>
    </div>
}