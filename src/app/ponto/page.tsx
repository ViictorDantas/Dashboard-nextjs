"use client"

import { Input } from "@/components/ui/input"
import { DatePickerDemo } from "@/components/dateInput"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function Ponto() {
    // Criando estados separados para cada input
  const [entradaManha, setEntradaManha] = useState("")
  const [saidaManha, setSaidaManha] = useState("")
  const [entradaTarde, setEntradaTarde] = useState("")
  const [saidaTarde, setSaidaTarde] = useState("")

    // Função genérica para formatar hora no formato HH:MM
  const formatarHora = (valor: string) => {
    let val = valor.replace(/\D/g, "") // Remove tudo que não for número
    if (val.length > 4) val = val.slice(0, 4)

    if (val.length > 2) val = val.slice(0, 2) + ":" + val.slice(2)

    return val
  }

    return (
        <main className="sm:ml-40 p-4">
            <h1 className="text-[28px] text-[#12577B] pt-20 font-bold text-center md:text-start">Folha de Ponto</h1>
            <div className="retangulo">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                
                    <DatePickerDemo />
                    <Input
                    type="text"
                    placeholder="Entrada - Manhã"
                    value={entradaManha}
                    onChange={(e) => setEntradaManha(formatarHora(e.target.value))}
                    maxLength={5}
                    className="min-w-[100px]"
                    />
                    <Input
                    type="text"
                    placeholder="Saída - Manhã"
                    value={saidaManha}
                    onChange={(e) => setSaidaManha(formatarHora(e.target.value))}
                    maxLength={5}
                    />
                    <Input
                    type="text"
                    placeholder="Entrada - Tarde"
                    value={entradaTarde}
                    onChange={(e) => setEntradaTarde(formatarHora(e.target.value))}
                    maxLength={5}
                    />
                    <Input
                    type="text"
                    placeholder="Saída - Tarde"
                    value={saidaTarde}
                    onChange={(e) => setSaidaTarde(formatarHora(e.target.value))}
                    maxLength={5}
                    />
                </div>
                <div  className="pt-4">
                    <label className="text-[1.2rem]">Descreva as atividades realizadas</label>
                    <Textarea placeholder="Ex: Atividade com Criança, Planejamento, Cartas, Atualizações, Eventos, Reuniões, Estudos, Cursos..." />
                </div>
            </div>
            <div>
                <div className="pt-4 flex justify-center gap-4">
                    <Link href='/'><Button className="bg-gray-400 text-white hover:bg-gray-500 px-6" >Voltar</Button></Link>
                    <Button className="bg-[#12577B] hover:bg-[#568ba8] px-6">Salvar</Button>
                </div>
            </div>
        </main>
    )
}