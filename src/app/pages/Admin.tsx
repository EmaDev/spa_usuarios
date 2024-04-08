import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { UsersTable } from "../components/UsersTable"
import { getListUsers } from "../../api/firebase/users"
import { Usuario } from "../../interfaces/Usuario"
import { Loading } from "../../ui/components/Loading"

export const Admin = () => {

  const [isLaoding, setIsLoading] = useState<boolean>(false);
  const [userList, setUserList] = useState<Usuario[]>([]);

  useEffect(() => {
    intialLoad();
  }, [])

  const intialLoad = async () => {
    setIsLoading(true);
    setUserList((await getListUsers()).data);
    setIsLoading(false);
  }

  return (
    <>
      <Header />
      {isLaoding ? <Loading /> : <UsersTable usuarios={userList} columsKeys={["Nombre", "Rol", "Acciones"]} rowsPerPage={6} refreshTable={intialLoad} />}
    </>
  )
}
