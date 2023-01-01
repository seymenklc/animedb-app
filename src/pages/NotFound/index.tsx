import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '@/assets/lotties/not-found.json';

export default function NotFound() {
   return (
      <div>
         <h1 className="title text-center mt-12">Oooops... Looks like you're lost</h1>
         <Link to='/'>
            <p className="title text-lg text-center mt-6 hover:underline cursor-pointer text-slate-400">
               Click here to go back to homepage.
            </p>
         </Link>
         <Lottie
            className='mx-auto mt-12'
            style={{ height: 400 }}
            animationData={animationData}
         />
      </div>
   );
}