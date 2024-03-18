export function Dashboard() {
    return <div className=" p-8 bg-zinc-50 ">
        <div className="flex justify-between">
            <label className="text-slate-900 text-xl font-medium"> Overview</label>
            <button className="flex border items-center text-gray-600 font-light bg-white rounded-md p-2">This Month
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 ml-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>

        <div className="grid grid-rows-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
            <div className="row-span-4 ">
                <div className="rounded-t-lg row-span-3 bg-sky-600 text-white p-5 hover:bg-sky-800">
                    <div className="flex items-center">
                        <span className="text-base font-normal"> Next Payout</span>
                        <svg className="text-sm ml-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z">
                            </path>
                        </svg>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="pt-2 pb-2 text-slate-50 text-3xl font-medium"><span>&#8377;</span>2,312.23</span>
                        <span className="text-slate-50  underline text-base">23 Orders</span>
                    </div>
                </div>
                <div className="grid row-span-1 text-sm bg-sky-800 rounded-b-lg">
                    <div className="flex justify-between items-center">
                        <span className="pl-5 pt-2 pb-2 text-slate-50 ">Next Payment Date:</span>
                        <span className="pr-5 text-slate-50">Today, 4:00PM</span>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg row-span-3 p-5">
                <div className="flex items-center">
                    <span className="text-base font-normal"> Amount Pending</span>
                    <svg className="text-sm ml-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z">
                        </path>
                    </svg>
                </div>
                <div className="flex justify-between items-center">
                    <span className="pt-2 pb-2 text-3xl font-medium"><span>&#8377;</span>92,312.20</span>
                    <div className="flex items-center">
                        <span className="text-sky-700  underline text-base">13 Orders
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-sm text-sky-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg></div>
                </div>

            </div>
            <div className="bg-white rounded-lg row-span-3 p-5 md:col-span-full lg:col-span-1">
                <div className="flex items-center">
                    <span className="text-base font-normal"> Amount Processed</span>
                    <svg className="text-sm ml-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z">
                        </path>
                    </svg>
                </div>
                <div className="flex justify-between items-center">
                    <span className="pt-2 pb-2  text-3xl font-medium"><span>&#8377;</span>23,92,312.19</span>
                </div>
            </div>
        </div>

        <div className="text-black text-xl font-medium mt-6 mb-6">
            Transactions | This Month
        </div>

        <div className="flex mb-6">
            <button className="bg-zinc-200 rounded-3xl pt-1.5 pb-1.5 pl-5 pr-5 text-zinc-500">Payouts (22)</button>
            <button className="bg-sky-700 rounded-3xl pt-1.5 pb-1.5 pl-5 pr-5 ml-3 text-slate-100">Refunds (6)</button>
        </div>
        <div className="bg-white">
            <div className="flex justify-between items-center p-3">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="border block p-1.5 ps-10 text-sm text-gray-500 shadow-sm rounded-md  dark:text-white w-72 " placeholder="Order ID or transactions ID" required />
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 pl-1.5 pr-1.5 pt-1 pb-1 rounded-md border text-gray-700">Sort<img className=" hover:cursor-pointer" src="../src/assets/updown.webp" alt="" />
                    </button>
                    <button className="rounded-md pl-2 pr-2 pt-1.5 pb-1.5 border ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </button>
                </div>
            </div>


            <div className="relative overflow-x-auto">
                <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-zinc-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                PRODUCT NAME
                            </th>

                            <th scope="col" className="px-6 py-3">
                                COLOR
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CATEGORY
                            </th>
                            <th scope="col" className="px-6 py-3">
                                PRICE
                            </th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <div className=" flex justify-center items-center mt-10 text-zinc-500">
            Made with ❤️ by 
            <a href="https://www.linkedin.com/in/shahzad-ahamad-80b36662" className="ml-2 underline text-zinc-600 font-semibold">Shahzad Ahamad</a>
        </div>
    </div>
}