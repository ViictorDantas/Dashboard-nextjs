import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface TableDinamicaProps {
  data: Record<string, any>[] // Aceita qualquer lista de objetos
  itemsPerPage?: number
}

export default function TableDinamica({ data, itemsPerPage = 5 }: TableDinamicaProps) {
  const [currentPage, setCurrentPage] = useState(1)

  if (data.length === 0) return <p>Nenhum dado disponível</p>

  const keys = Object.keys(data[0])
  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentData = data.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="max-h-[calc(100vh-20rem)]">
      <Table>
        <TableHeader>
          <TableRow>
            {keys.map((key) => (
              <TableHead key={key}>{key}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((item, index) => (
            <TableRow key={index}>
              {keys.map((key) => (
                <TableCell key={key}>{item[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Paginação */}
      <div className="flex justify-between items-center mt-4">
        <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Anterior
        </Button>
        <span>Página {currentPage} de {totalPages}</span>
        <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Próxima
        </Button>
      </div>
    </div>
  )
}
