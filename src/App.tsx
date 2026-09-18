import  { Suspense } from 'react';
import Nav from './component/Nav';
import Banner from './component/Banner';
import TechCard from './component/Techcard/TechCard';
import type { Icard } from './types/CardType';
import Footer from './component/Footer';

const cardFetch= async():Promise<Icard[]>=>{
const res = await fetch('/data.json')
const data= await res.json()
return data;
}

const App = () => {
  const cardPromise= cardFetch()
 
  return (
    <div className='min-h-screen bg-white text-slate-800'>
     
 <Nav/>
 <Banner/>
<Suspense fallback = {<h2>loading......</h2>}>  <TechCard cardPromise={cardPromise} /></Suspense>
<Footer/>
      
    </div>
  );
};

export default App;