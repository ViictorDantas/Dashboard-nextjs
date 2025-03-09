import ChartOverview from '@/components/chart';
import Sales from '@/components/sales';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeDollarSign, DollarSign, ShoppingBag, User } from 'lucide-react';

export default function Home() {
  return (
  <main className='sm:ml-14 p-4'>
    <section className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
      <Card>
        <CardHeader>
          <div className='flex justify-center items-center'>
          <CardTitle className='text-lg sm:text-xl text-gray-600 select-none'>
            Total Vendas 
          </CardTitle>
          <DollarSign className='ml-auto w-4 h-4 text-gray-600'/>
          </div>
        <CardDescription>
          Total de vendas realizadas no mês
        </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-base sm:text-lg font-bold'>R$ 40.000</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className='flex justify-center items-center'>
          <CardTitle className='text-lg sm:text-xl text-gray-600 select-none'>
            Novos Clientes
          </CardTitle>
          <User className='ml-auto w-4 h-4 text-gray-600'/>
          </div>
        <CardDescription>
          Novos clientes cadastrados no mês
        </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-base sm:text-lg font-bold'>23 Clientes</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className='flex justify-center items-center'>
          <CardTitle className='text-lg sm:text-xl text-gray-600 select-none'>
            Pedidos Hoje
          </CardTitle>
          <ShoppingBag className='ml-auto w-4 h-4 text-gray-600'/>
          </div>
        <CardDescription>
          Total de pedidos hoje
        </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-base sm:text-lg font-bold'>42 Pedidos</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className='flex justify-center items-center'>
          <CardTitle className='text-lg sm:text-xl text-gray-600 select-none'>
            Total Pedidos
          </CardTitle>
          <BadgeDollarSign className='ml-auto w-4 h-4 text-gray-600'/>
          </div>
        <CardDescription>
          Total de pedidos em 30 dias
        </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-base sm:text-lg font-bold'>3212 Pedidos</p>
        </CardContent>
      </Card>
    </section>

    <section className='mt-4 flex flex-col gap-4 md:flex-row'>
      <ChartOverview/>
      <Sales/>
    </section>
  </main>
  );
}
