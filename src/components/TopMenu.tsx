export function TopMenu() {
    return <div className="flex h-16 border-b-2  items-center pl-8 justify-between">
        <div className="flex items-center">
            <label className="text-slate-900 text-xl font-medium">Payouts</label>
            <svg className="text-sm ml-4 text-slate-600" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z">
                </path>
            </svg>
            <label className="text-xs text-slate-600 ml-2">How it works</label>
        </div>
        <div >
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" className="block border border-zinc-300 p-2.5 ps-10 text-sm text-gray-500 shadow-sm rounded-md bg-gray-100  dark:text-white sm: w-32 md:w-60 lg:w-96" placeholder="Search features, tutorials etc." required />
            </div>
        </div>
        <div className="flex justify-center items-center">
            <img className="bg-gray-200 p-3 rounded-full mr-2 hover:cursor-pointer" src="../src/assets/speaker.webp" alt="" />
            <div className="p-3  bg-gray-200 rounded-full mr-6  hover:cursor-pointer">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
            </div>
        </div>
    </div>
}