 import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center container mx-auto px-4 py-3">
    
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-8 h-8 object-contain" />
          <span className="font-bold text-lg text-slate-800">Dev <span className="text-[#db2777]">Stack </span></span>
        </div>

        
        <ul className="hidden md:flex justify-center gap-6 text-[#475569] font-medium">
          <li><span className="text-[#db2777]">Home</span></li>
          <li className="hover:text-[#db2777] cursor-pointer">Technologies</li>
          <li className="hover:text-[#db2777] cursor-pointer">Projects</li>
          <li className="hover:text-[#db2777] cursor-pointer">About</li>
          <li className="hover:text-[#db2777] cursor-pointer">Contact</li>
        </ul>
 
        <div className="hidden md:flex justify-center gap-4 items-center">
          <button className="text-[#475569] hover:text-[#db2777] font-medium">
            Sign In
          </button>
          
          <button className="rounded-full bg-[#db2777] text-white px-5 py-2 font-medium hover:bg-pink-700">
            Sign Up
          </button>
        </div>

    
        <div className="flex md:hidden items-center gap-3">
          <button className="bg-[#db2777] text-white text-xs px-3 py-1.5 rounded-full">
            Sign Up
          </button>
          
          <button className="text-slate-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;