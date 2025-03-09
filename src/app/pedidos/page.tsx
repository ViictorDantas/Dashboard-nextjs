"use client"

import TablePedidos from "@/components/pedidos/TablePedidos"

const pedidos = [
  { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
  { invoice: "INV005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
  { invoice: "INV006", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV007", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
  { invoice: "INV008", paymentStatus: "Paid", totalAmount: "$500.00", paymentMethod: "Credit Card" },
  { invoice: "INV009", paymentStatus: "Pending", totalAmount: "$220.00", paymentMethod: "PayPal" },
  { invoice: "INV010", paymentStatus: "Unpaid", totalAmount: "$320.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV011", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
  { invoice: "INV012", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV013", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
  { invoice: "INV014", paymentStatus: "Paid", totalAmount: "$500.00", paymentMethod: "Credit Card" },
  { invoice: "INV015", paymentStatus: "Pending", totalAmount: "$220.00", paymentMethod: "PayPal" },
  { invoice: "INV016", paymentStatus: "Unpaid", totalAmount: "$320.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV017", paymentStatus: "Unpaid", totalAmount: "$320.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV018", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
  { invoice: "INV019", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV020", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
  { invoice: "INV021", paymentStatus: "Paid", totalAmount: "$500.00", paymentMethod: "Credit Card" },
  { invoice: "INV022", paymentStatus: "Pending", totalAmount: "$220.00", paymentMethod: "PayPal" },
  { invoice: "INV023", paymentStatus: "Unpaid", totalAmount: "$320.00", paymentMethod: "Bank Transfer" },
]

export default function Pedidos() {
  return (
    <main className="sm:ml-14 p-4">
      <div>
        <h1 className="text-2xl font-semibold text-gray-600">Pedidos</h1>
        <p className="text-gray-500">Uma lista dos seus pedidos recentes.</p>

        <TablePedidos pedidos={pedidos} itemsPerPage={20} />
      </div>
    </main>
  )
}
