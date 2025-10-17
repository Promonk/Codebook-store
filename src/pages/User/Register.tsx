import { FormEvent, useRef } from 'react'
import { register } from '../../services/authServices';
import { useTitle } from '../../hooks/useTitle';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { BsFillPersonVcardFill } from 'react-icons/bs';

export const Register = () => {

  const navigate = useNavigate();

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  
  const handleRegister = async(e: FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    const authDetails = {
      name: name.current?.value as string,
      email: email.current?.value as string, 
      password: password.current?.value as string
    };

    const data = await register(authDetails);
    data.accessToken ? navigate("/profile") : toast.error(data);

  }

  useTitle("Register");

  return (
    <main className=" bg">
      <div className="flex flex-col-reverse md:flex-row py-4 px-4 mx-auto max-w-screen-xl lg:py-6">
        <div className="flex-1">
          <section>
              <h1 className="text-slate-900 dark:text-white text-2xl md:text-2xl font-bold mb-2">Register</h1>
          </section>
          <section>
              <form onSubmit={handleRegister}>
              <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                    <input ref={name} type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required autoComplete="off" />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input ref={email} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required autoComplete="off" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input ref={password} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required  />
                </div>
                <button type="submit" className="large-button">Register</button>
              </form>
          </section>
        </div>
        <div className="flex-1">
          <div className="flex items-center h-full">
            <BsFillPersonVcardFill className="text-green-600 text-9xl mb-5 mx-auto align-middle" />
          </div>
        </div>
      </div>
    </main>
  )
}