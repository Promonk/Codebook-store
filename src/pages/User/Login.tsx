import { FormEvent, useRef } from 'react'
import { login } from '../../services';
import { AuthDetail } from '../../interfaces/authType';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTitle } from '../../hooks/useTitle';
import { BsKey } from 'react-icons/bs';

export const Login = () => {

  const navigate = useNavigate();

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    try{
      const authDetails = {
        email: email.current?.value as string,
        password: password.current?.value as string
      }
      const data = await login(authDetails as AuthDetail);
      data.accessToken ? navigate("/profile") : toast.error("ERROR: Unable to login");
    }catch(err){
      toast.error("ERROR: Unable to login");
    }
  }

  const handleLoginGuest = async () => {
    try{
      const authDetail = {
        email: process.env.REACT_APP_GUEST_LOGIN as string,
        password: process.env.REACT_APP_GUEST_PASSWORD as string
      }
      const data = await login(authDetail as AuthDetail);
      data.accessToken ? navigate("/products") : toast.error(data);
    } catch(err){
      toast.error("ERROR: Login as guest error");
    }

  }

  useTitle("Login");

  return (
    <main className=" bg">
      <div className="flex flex-col-reverse md:flex-row py-4 px-4 mx-auto max-w-screen-xl lg:py-6">
        <div className="flex-1">
          <section>
              <h2 className="text-slate-900 dark:text-white text-2xl md:text-2xl font-bold mb-2">Log in to your account</h2>
          </section>
          <section>
              <form onSubmit={handleLogin}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required autoComplete="off" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="large-button">Log In</button>
              </form>
              <button onClick={handleLoginGuest} className="mt-3 large-button">Log in As Guest</button>
          </section>
        </div>
        <div className="flex-1 ">
          <div className="flex items-center h-full">
            <BsKey className="text-green-600 text-9xl mb-5 mx-auto align-middle" />
          </div>
        </div>
      </div>
    </main>
  )
}