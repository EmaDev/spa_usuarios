import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import { GradientButton } from "../../ui/components/GradientButton";
import { UserForm } from "./UserForm";
import { Usuario } from "../../interfaces/Usuario";
import { Action } from "../../interfaces/Action";
import avatar from '../../assets/avatar.png';

interface Props {
  isOpen: boolean;
  onOpenChange:() => void;
  user:Usuario;
  action:Action; 
}

export const UserModal = ({ isOpen, onOpenChange, user, action}: Props) => {

  return (

    <div className="flex flex-col gap-2">
      <Modal
        isOpen={isOpen}
        placement={"center"}
        onOpenChange={onOpenChange}
        size="2xl"
      >
        <ModalContent className="bg-transparent border-0">
          {(onClose) => (
            <>
              <ModalBody className="p-0">
                <div className='w-full bg-secondary m-auto rounded-xl shadow-xl p-4'>
                  <div className='h-36 bg-accent m-auto rounded-xl relative'>
                    <div className='rounded-full w-36 h-36 bg-primary absolute left-0 right-0 -bottom-8 m-auto
                     shadow-lg border-4 border-secondary'>
                      <img alt={user.nombre + user.apellido} src={user.foto ? user.foto : avatar} className="w-full h-full rounded-full"/>
                    </div>
                  </div>
                  {action == "edit" ? <UserForm inititalUserState={user as Usuario} /> :
                    <>
                      <section className='mt-10'>
                        <h3 className='text-center font-bold text-3xl text-textPrimary'>{`${user.nombre} ${user.apellido}`}</h3>
                        <p className='text-center font-semibold text-xl text-textSecondary'>{user.rol}</p>

                        <div className='mt-6 m-auto text-textPrimary'>
                          <p className='text-center font-semibold text-lg'>Email: {user.email}</p>
                          <p className='text-center font-semibold text-lg'>Telefono: {user.telefono}</p>
                        </div>
                      </section>
                      <div className="mt-6 px-4">
                        <GradientButton onClick={onClose} text={"Cerrar"} align="end" />
                      </div>
                    </>
                  }

                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
