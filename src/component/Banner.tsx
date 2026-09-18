 
import banner from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center container mx-auto my-10 px-6 gap-8">
             
            <div className="space-y-6 max-w-xl text-center lg:text-left">
              
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                    Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

            
                <p className="text-gray-600 text-base sm:text-lg">
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>

   
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
 
                    <button className="btn bg-gradient-to-r from-indigo-600 to-pink-600 text-white border-none hover:opacity-90 px-6 py-2 rounded-lg">
                        Explore Technologies
                    </button>

                  
                    <button className="btn btn-outline border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white  px-6 py-2 rounded-full ">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Content: Banner Image */}
            <div className="w-full max-w-md lg:max-w-lg flex justify-center">
                <img src={banner} alt="Banner Stack" className="w-full object-cover rounded-2xl " />
            </div>
        </div>
    );
};

export default Banner;