import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'

/**
 * 
 * 	  animation: type .5s alternate infinite;
}

@keyframes type{
	  from{box-shadow: inset -3px 0px 0px #888;}
	  to{box-shadow: inset -3px 0px 0px transparent;}
}
 */

export default function ErrorPage ()
{
  return (
    <div className="flex items-center flex-col gap-5">
      <img src={ logo } className='w-[200px]' alt="" />
      <h1 className="text-6xl font-bold pe-2 animate-[type_.5s_alternate_infinite]">404</h1>
      <p className="text-lg text-[#E47911]">Looking for something?</p>
      <p className="text-lg">We&#96;re sorry. The Web address you entered is not a functioning page on our site</p>
      <p className="text-lg"> Go to amazon.eg&#96;s <Link className='text-blue-600 underline' to="/">Home</Link> Page</p>
    </div>
  );
}