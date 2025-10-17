import { useEffect, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { getUser, getUserLibrary } from '../../services/dataServices';
import { LibraryItem } from './components/LibraryItem';
import { UserInformation } from './components/UserInformation';

export const Profile = () => {

  useTitle("Profile");

  const [library, setLibrary] = useState([] as any);
  const [userData, setUserData] = useState({name: "", email: "", image: ""} as any);

  const fetchUserProfile = async () => {
    const data = await getUser();
    setUserData({
      name: data.name,
      email: data.email,
      image: data.image,
    });
  }

  const fetchUserLibrary = async () => {
    const data = await getUserLibrary();
    setLibrary(data);
  }

  useEffect(() => {
    fetchUserProfile();
    fetchUserLibrary();
  }, []);

  return (
    <main>
        <section className="bg">
          <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6">
            <h1 className="text-slate-900 dark:text-white text-2xl md:text-2xl font-bold mb-2">Profile</h1>
          </div>
        </section>
        <section className="bg">
          <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-4">
            <UserInformation userData={userData} />
          </div>
        </section>
        <section className="bg">
          <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-4">
            <h2 className="text-slate-900 dark:text-white text-xl md:text-xl font-bold mb-2">Library</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {library.length === 0 ? (
                <p className="text-gray-700 dark:text-gray-300">No items in your library.</p>
              ) : (
                library.map((item: any) => (
                  <LibraryItem key={item.id} product={item} />
                ))
              )}
            </div>
          </div>
        </section>
    </main>
  )
}
