import { useEffect, useState } from 'react';
import { Header } from '../components/Header'
import { UsersTable } from '../components/UsersTable'
import { Usuario } from '../../interfaces/Usuario';
import { getListUsers } from '../../api/firebase/users';
import { Loading } from '../../ui/components/Loading';

export const Home = () => {

  const [isLaoding, setIsLoading] = useState<boolean>(false);
  const [userList, setUserList] = useState<Usuario[]>([]);

  useEffect(() => {
    intialLoad();
  }, [])

  const intialLoad = async () => {
    setIsLoading(true);
    setUserList((await getListUsers()).data);
    setIsLoading(false)
  }
  return (
    <>
      <Header />
      <div className='md:w-3/4 m-auto flex flex-col md:flex-row justify-center gap-6 mb-6'>
        <div className='h-16 md:w-48 bg-hover rounded-xl shadow-xl hover:bg-accent transtion-all duration-300 cursor-pointer flex items-center justify-center'>
          <p className='text-2xl text-white text-center font-bold'>Prepaga</p>
        </div>
        <div className='h-16 md:w-48 bg-hover rounded-xl shadow-xl hover:bg-accent transtion-all duration-300 cursor-pointer flex items-center justify-center'>
          <p className='text-2xl text-white text-center font-bold'>ART</p>
        </div>
        <div className='h-16 md:w-48 bg-hover rounded-xl shadow-xl hover:bg-accent transtion-all duration-300 cursor-pointer flex items-center justify-center'>
          <p className='text-2xl text-white text-center font-bold'>Asistencia</p>
        </div>
        <div className='h-16 md:w-48 bg-hover rounded-xl shadow-xl hover:bg-accent transtion-all duration-300 cursor-pointer flex items-center justify-center'>
          <p className='text-2xl text-white text-center font-bold'>Trasporte</p>
        </div>
      </div>
      {isLaoding ? <Loading /> : <UsersTable usuarios={userList} columsKeys={["Nombre", "Email", "Rol"]} rowsPerPage={6} refreshTable={intialLoad} />}
    </>

  )
}
