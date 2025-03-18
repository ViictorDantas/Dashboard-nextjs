"use client"

import { Input } from "@/components/ui/input"
import { useState } from "react"
import TablePedidos from "@/components/pedidos/TablePedidos"
import { UserRoundPlus } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"

const funcionarios = [
  { nome: "Carlos Silva", cargo: "Gerente", email: "carlos.silva@email.com", status: "Ativo" },
  { nome: "Ana Souza", cargo: "Analista", email: "ana.souza@email.com", status: "Inativo" },
  { nome: "Bruno Almeida", cargo: "Desenvolvedor", email: "bruno.almeida@email.com", status: "Ativo" },
  { nome: "Mariana Costa", cargo: "Designer", email: "mariana.costa@email.com", status: "Ativo" },
  { nome: "Rodrigo Mendes", cargo: "Suporte", email: "rodrigo.mendes@email.com", status: "Inativo" },
  { nome: "Fernanda Lima", cargo: "Gerente de Projetos", email: "fernanda.lima@email.com", status: "Ativo" },
  { nome: "Eduardo Rocha", cargo: "Analista de Dados", email: "eduardo.rocha@email.com", status: "Ativo" },
  { nome: "Patrícia Nunes", cargo: "RH", email: "patricia.nunes@email.com", status: "Inativo" },
  { nome: "Gustavo Ferreira", cargo: "Marketing", email: "gustavo.ferreira@email.com", status: "Ativo" },
  { nome: "Juliana Martins", cargo: "Financeiro", email: "juliana.martins@email.com", status: "Ativo" },
  { nome: "Felipe Oliveira", cargo: "Estagiário", email: "felipe.oliveira@email.com", status: "Inativo" },
  { nome: "Camila Rezende", cargo: "Gerente Comercial", email: "camila.rezende@email.com", status: "Ativo" },
  { nome: "Ricardo Moreira", cargo: "TI", email: "ricardo.moreira@email.com", status: "Ativo" },
  { nome: "Natália Fonseca", cargo: "Analista de Sistemas", email: "natalia.fonseca@email.com", status: "Inativo" },
  { nome: "Fernando Braga", cargo: "Administrador", email: "fernando.braga@email.com", status: "Ativo" },
];

export default function Colaboradores() {
  const [open, setOpen] = useState(false);

  return (
    <main className="sm:ml-40 p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-600">Colaboradores</h1>
          <p className="text-gray-500">Uma lista dos seus colaboradores.</p>
        </div>
        <div>
        <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <button className='flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-colors'>
                        <UserRoundPlus className='h-5 w-5' />
                        <span className='text-sm font-medium'>Adicionar Colaborador</span>
                        </button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Adicionar Colaborador</DialogTitle>
                          <DialogDescription>
                              Insira todas as informações corretamente.
                          </DialogDescription>
                          <div className="flex flex-col gap-4">
                              <Input type="text" placeholder='Nome do Colaborador' />
                              <Select>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Cargo Colaborador" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Gerente">Gerente</SelectItem>
                                  <SelectItem value="Professor">Professor</SelectItem>
                                </SelectContent>
                              </Select>
                              <Input type="email" placeholder='Email do Colaborador' />
                          </div>
                        </DialogHeader>
                          <div className="flex justify-end gap-2">
                          <button 
                              onClick={() => setOpen(false)}
                              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
                          >
                              Cancelar
                          </button>
                          <Link
                              href='/' 
                              className="px-4 py-2 rounded-lg bg-green-400 text-white hover:bg-green-700 transition-colors"
                          >
                              Salvar
                          </Link>
                          </div>
                    </DialogContent>
                </Dialog>
        </div>
      </div>
      <div>
      <TablePedidos data={funcionarios} itemsPerPage={20} />
      </div>
    </main>
  )
}