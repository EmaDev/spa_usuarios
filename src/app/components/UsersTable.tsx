import { Table, TableHeader, TableColumn, TableBody, TableRow, Pagination, TableCell, useDisclosure } from "@nextui-org/react";
import { useTable } from "../hooks/useTable";
import { Usuario } from "../../interfaces/Usuario";
import { UserTableCell } from "./UserTableCell";
import { UserModal } from "./UserModal";
import { useState } from "react";
import { Action } from "../../interfaces/Action";

export type ColumsKeys = "Nombre" | "Rol" | "Acciones" | "Email";

interface Props {
  columsKeys: ColumsKeys[];
  rowsPerPage: number;
  usuarios: Usuario[];
  refreshTable: () => void;
}

export const UsersTable = ({ usuarios, columsKeys, rowsPerPage, refreshTable }: Props) => {

  const [activeUser, setActiveUser] = useState<Usuario>();
  const [action, setAction] = useState<Action>("view");
  const { items, page, pages, setPage } = useTable({ data: usuarios, rowsPerPage });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleOpenModal = (user: Usuario, action: Action) => {
    setActiveUser(user);
    setAction(action);
    onOpen();
  }

  return (
    <>
      <Table
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="default"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        isStriped
        classNames={{
          wrapper: "min-h-[440px] bg-secondary",
        }}
      >
        <TableHeader>
          {
            columsKeys.map((col) => (<TableColumn key={col} className="bg-accent text-white text-xl font-bold">{col}</TableColumn>))
          }
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.nombre}>
              {columsKeys.map((col) => (<TableCell key={item.nombre + col} >
                <UserTableCell
                  openModal={handleOpenModal}
                  refreshTable={refreshTable}
                  columKey={col} user={item} 
                  />
              </TableCell>))}
            </TableRow>
          )}
        </TableBody>

      </Table>
      <UserModal
        user={activeUser as Usuario}
        action={action}
        isOpen={isOpen} onOpenChange={onOpenChange}
      />
    </>
  );
}

