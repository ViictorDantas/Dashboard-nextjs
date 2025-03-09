import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Pedido {
  invoice: string
  paymentStatus: string
  totalAmount: string
  paymentMethod: string
}

interface TablePedidosProps {
  pedidos: Pedido[]
  itemsPerPage?: number
}

export default function TablePedidos({ pedidos, itemsPerPage = 5 }: TablePedidosProps) {
  const [currentPage, setCurrentPage] = useState(1)

  // Calcula total de páginas
  const totalPages = Math.ceil(pedidos.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentPedidos = pedidos.slice(startIndex, startIndex + itemsPerPage)

  // Soma total dos pedidos exibidos na página atual
  const totalAmount = currentPedidos.reduce((acc, pedido) => {
    return acc + parseFloat(pedido.totalAmount.replace("$", ""))
  }, 0)

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentPedidos.map((pedido) => (
            <TableRow key={pedido.invoice}>
              <TableCell className="font-medium">{pedido.invoice}</TableCell>
              <TableCell>{pedido.paymentStatus}</TableCell>
              <TableCell>{pedido.paymentMethod}</TableCell>
              <TableCell className="text-right">{pedido.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">${totalAmount.toFixed(2)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* Paginação */}
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </Button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Próxima
        </Button>
      </div>
    </div>
  )
}
