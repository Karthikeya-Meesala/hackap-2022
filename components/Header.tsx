import Link from 'next/link';

const Header = () => {
    return (


        <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 pt-5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="" className="flex items-center">
            <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white"> <span className='text-blue-800'>E</span>mployee <span className='text-blue-800'>E</span>ngagement</span>
        </a>
        <div className="flex md:order-2">

            <div className='grid grid-rows-2 pt-8 items-center'> 
            <button type="button" className="text-white self-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <Link legacyBehavior href={'https://www.notion.so/6e345d3e2be648559efcdd8582172165?v=123cd9db01c84a73b058857d93a90b8c'}> Add employees </Link></button>
            <a href="" className="flex items-center">
            <span className="self-center text-xs col-span-2	text-center px-5 font-bold whitespace-nowrap dark:text-white">*for employers only</span>
            </a>
            </div>

            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white text-lg" aria-current="page">Home</a>
            </li>
            <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>

     
    )
}


export default Header;