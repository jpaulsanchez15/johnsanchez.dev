import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-2 sm:px-4 py-2.5 rounded sticky top-0 z-50 backdrop-blur-sm w-full">
      <div className="flex flex-row items-center text-center justify-center">
        {/* <div className=" w-full md:block md:w-auto"> */}
        <ul className="flex flex-row p-4 mt-4 rounded-lg items-center md:flex-row md:space-x-8 md:mt-0 text-xl md:font-medium md:border-0  ">
          <li>
            <Link
              href="#home"
              className="block py-2 pl-3 pr-4 text-white  rounded  hover:bg-gray-800"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="block py-2 pl-3 pr-4 text-white  rounded  hover:bg-gray-800"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="block py-2 pl-3 pr-4 text-white  rounded  hover:bg-gray-800"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
