import { Tooltip } from '@nextui-org/react';
import { Usuario } from '../../interfaces/Usuario';
import { EditIcon } from '../../ui/icons/EditIcon';
import { EyeIcon } from '../../ui/icons/EyeIcon';
import { DeleteIcon } from '../../ui/icons/DeleteIcon';
import { ColumsKeys } from './UsersTable';
import { Action } from '../../interfaces/Action';
import avatar from '../../assets/avatar.png';
import { useAuthStore } from '../../store/authStore';
import { deleteUser } from '../../api/firebase/users';
import { useAlert } from '../../ui/hooks/useAlert';

interface Props {
    user: Usuario;
    columKey: ColumsKeys;
    openModal: (user: Usuario, action: Action) => void;
    refreshTable: () => void;
}

export const UserTableCell = ({ user, columKey, openModal, refreshTable }: Props) => {

    const getRol = useAuthStore((store) => store.getRol);
    const { showAlert } = useAlert();

    const handleDeleteUser = async () => {
        const { ok, msg } = await deleteUser(user.uid);

        if (ok) {
            showAlert("Usuario eliminado", msg, 'success', refreshTable)
        }
    }

    const renderCell = () => {
        switch (columKey) {
            case "Nombre":
                return (
                    <div className='flex items-center gap-4'>
                        <div className='h-10 w-10 rounded-full bg-primary shadow'>
                            <img
                                className='h-full w-full rounded-full'
                                alt={user.nombre + user.apellido} src={user.foto ? user.foto : avatar} />
                        </div>
                        <span>{`${user.nombre} ${user.apellido}`}</span>
                    </div>
                );
            case "Email":
                return (
                    <span>{user.email}</span>
                );
            case "Rol":
                return (
                    <p>{user.rol}</p>
                );
            case "Acciones":
                return (
                    <div className="relative flex items-center gap-2 justify-center">
                        <Tooltip color='primary' content="Detalles">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon onClick={() => openModal(user, "view")} />
                            </span>
                        </Tooltip>
                        {
                            (getRol() === "Gerente" || getRol() === "Admin") &&
                            <>
                                <Tooltip color='primary' content="Editar Usuario">
                                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                        <EditIcon onClick={() => openModal(user, "edit")} />
                                    </span>
                                </Tooltip>
                                <Tooltip color="danger" content="Eliminar Usuario">
                                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                        <DeleteIcon onClick={handleDeleteUser} />

                                    </span>
                                </Tooltip>
                            </>
                        }
                    </div>
                );
            default: return (<></>);
        }
    }

    return (
        <div className=''>
            {renderCell()}
        </div>
    )
}
