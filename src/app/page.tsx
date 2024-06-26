import Image from "next/image";
import { FaFacebook,FaLinkedinIn,FaGoogle, FaRegEnvelope,FaLock } from 'react-icons/fa';
import{MdLockOutline} from 'react-icons/md';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray" >
        <head>
          <title>Login app</title>
        </head>
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl" >

      {/* sign in section */}
        <div className="w-3/5 p-5" >
          <div className="text-left font-bold">
                 <span className="text-blue-500">Company</span>Name
          </div>
          <div className="py-10 ">
              <h2 className="text-3xl font-bold text-blue-500 mb-2 text-center ">
                Sign in to Account
              </h2>
              <div className="border-2 w-50 border-blue-500 contain-inline-size mb-2"></div>
              {/* social login section */}
              <div className="flex justify-center my-2"> 
                      <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                        <FaFacebook />
                      </a>
                      <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                        <FaGoogle />
                      </a>
                      <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                        <FaLinkedinIn />
                      </a>
              </div>
              <p className="text-gray-500 my-3 text-center">or use your email account</p>
              <div className="flex flex-col items-center m-2">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope />
                  <input className="bg-gray-100 outline-none text-sm flex-1 " 
                  type="email" name="email" placeholder="Email"/>
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <MdLockOutline />
                  <input className="bg-gray-100 outline-none text-sm flex-1 " 
                  type="password" name="paswrd" placeholder="Password"/>
                </div>
                <div className="flex w-64 mb-5 mt-3 justify-between" >
                    <label className="flex items-center text-xs"><input type="checkbox" name="Remember"
                    className="mr-1" />Remember Me
                    </label>
                    <a href="#" className="text-xs" >Forgot Password</a>
                </div>
                <a href="a" className=" text-blue-500 border-2 border-blue-500 rounded-full px-12py-2 inline-block font-semibold
                   hover:bg-blue-500 hover:text-white ">Sign In</a>
              </div>   
          </div>
        </div>

        {/* sign up section */}
        <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 inline-block"> 
         <h2 className="text-3xl font-bold mb-2 text-center">Hello , Freind</h2>
         <div className="border-2 w-49 border-white mb-2"></div>
         <p className="mb-10 flex ">Fill Up Personal Information and Start Your Journey With Us.</p>
        <div className="flex justify-center">
          <a href="a" className="border-2 border-white rounded-full px-12py-2 inline-block font-semibold
         hover:bg-white hover:text-blue-500 ">Sign up</a>
         </div>
         
        </div>
      </div>
    </main>
   
  );
}
