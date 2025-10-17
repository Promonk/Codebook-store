import React, { useEffect, useState } from 'react'

export const UserInformation = (userData: any) => {

  const [name, setName] = useState("" as any);
  const [email, setEmail] = useState("" as any);
  const [image, setImage] = useState("" as any);
  const [editImage, setEditImage] = useState(true);

  useEffect(() => {
    const data = userData.userData;
    setName(data.name);
    setEmail(data.email);
    setImage(data.image);
    if(data.image){
        setEditImage(false);
    }
  }, [userData]);

  const handleEditImage = () => {
    console.log("Edit Profile Image");
    setEditImage(true);
  }

  return (
    <div className="flex flex-col md:flex-row">
        <div className="flex flex-row flex-1 mb-4">
            <div className="max-w-[200px] flex-1 md:mr-4">
                <div className=" w-full p-2">
                    {!editImage ? (
                    <div className="text-center relative">
                        <img onClick={handleEditImage} className="cursor-pointer w-full h-auto rounded-full mx-auto mb-4" src={image} alt="User Avatar" />
                    </div>
                    ) : (
                    <div>
                        <form className="max-w-lg mx-auto">
                            <label className="block mb-2 text-sm font-medium mText" htmlFor="user_avatar">Upload file</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
                        </form>
                        {image && (
                        <button onClick={() => setEditImage(false)} className="my-2 ml-1 inline-flex justify-center items-center py-1 px-2.5 text-sm font-medium text-center rounded-lg text-gray-900 focus:outline-none bg-slate-50 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            cancel
                        </button>
                        )
                        }
                    </div>
                    )
                    }
                </div>
            </div>
            <div className="flex-1">
                <h2 className="text-slate-900 dark:text-white text-xl md:text-xl font-bold mb-2">Account Details</h2>
                <p className="text-gray-700 dark:text-gray-300">Name: {name}</p>
                <p className="text-gray-700 dark:text-gray-300">Email: {email}</p>
            </div>
        </div>
        <div className="md:max-w-[350px] flex-1 mb-4">
            <h2 className="text-slate-900 dark:text-white text-xl md:text-xl font-bold mb-2">Account Settings</h2>
            <button className="large-button">Edit Profile</button>
            <button className="mt-3 md:mt-0 md:ml-4 large-button-red">Change Password</button>
        </div>
    </div>
  )
}