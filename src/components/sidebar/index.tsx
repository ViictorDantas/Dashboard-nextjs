"use client";

import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '../ui/button';
import { Home, LogOut, Package, PanelBottom, Settings2, ShoppingBag, User } from 'lucide-react';
import Link from "next/link";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function Sidebar() {
    const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col bg-muted/40">

        <aside className='fixed inset-y-0 left-0 z-10 hidden w-40 border-r
        bg-background sm:flex flex-col'>

            <nav className='flex flex-col items-start gap-4 px-2 py-5'>
                
                    <Link href='#'
                    className='flex h-9 w-9 shrink-0 items-center justify-center bg-primary
                    text-primary-foreground rounded-full'
                    >
                    
                    <Package className='h-4 w-4'/>
                    <span className='sr-only'>Dashboard Avatar</span>
                    </Link>
                    <Link
                        href='/'
                        className='flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-colors'
                        >
                        <Home className='h-5 w-5' />
                        <span className='text-sm font-medium'>Inicio</span>
                    </Link>
                    <Link
                        href='/pedidos'
                        className='flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-colors'
                        >
                        <ShoppingBag className='h-5 w-5' />
                        <span className='text-sm font-medium'>Relatório</span>
                    </Link>
                    <Link
                        href='/ponto'
                        className='flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-colors'
                        >
                        <Package className='h-5 w-5' />
                        <span className='text-sm font-medium'>Meus Pontos</span>
                    </Link>
                    <Link
                        href='/'
                        className='flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-colors'
                        >
                        <Package className='h-5 w-5' />
                        <span className='text-sm font-medium'>Aulas</span>
                    </Link>
                    <Link
                        href='/colaboradores'
                        className='flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-colors'
                        >
                        <User className='h-5 w-5' />
                        <span className='text-sm font-medium'>Colaboradores</span>
                    </Link>
                    <Link
                        href='/'
                        className='flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-colors'
                        >
                        <Settings2 className='h-5 w-5' />
                        <span className='text-sm font-medium'>Configurações</span>
                    </Link>
                
            </nav>

            <nav className='mt-auto flex flex-col items-start gap-4 px-2 py-5'>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <button className='flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-colors'>
                        <LogOut className='h-5 w-5' />
                        <span className='text-sm font-medium'>Sair</span>
                        </button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Tem certeza que deseja sair?</DialogTitle>
                        <DialogDescription>
                            Você será desconectado da sua conta.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end gap-2">
                        <button 
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
                        >
                            Cancelar
                        </button>
                        <Link 
                            href='/logout' 
                            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                        >
                            Sair
                        </Link>
                        </div>
                    </DialogContent>
                </Dialog>
            </nav>
        </aside>

        <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className='sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background
            gap-4 sm:gap-4 sm:static sm:h-auto sm:boder-0 sm:bg-transparent sm:px-6'
            >
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size='icon' variant='outline' className='sm:hidden'>
                            <PanelBottom className='h-5 w-5'/>
                            <span className='sr-only'> open / fechar menu </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='left' className='sm:max-w-x'>
                        <nav className='grid gap-6 text-lg font-medium'>
                            <Link 
                                href="/"
                                className='flex h-10 w-10 bg-primary rounded-full text-lg
                                items-center justify-center text-primary-foreground
                                md:text-base gap-4'
                            >
                                <Package className='h-5 w-5 transition-all'/>
                                <span className='sr-only'>logo do projeto</span>
                            </Link>
                            <Link 
                                href="/"
                                className='flex items-center gap-4 px-2.5 text-muted-foreground
                                hover:text-foreground'
                            >
                                <Home className='h-5 w-5 transition-all'/>
                                inicio
                            </Link>
                            <Link 
                                href="/"
                                className='flex items-center gap-4 px-2.5 text-muted-foreground
                                hover:text-foreground'
                            >
                                <ShoppingBag className='h-5 w-5 transition-all'/>
                                Pedidos
                            </Link>
                            <Link 
                                href="/"
                                className='flex items-center gap-4 px-2.5 text-muted-foreground
                                hover:text-foreground'
                            >
                                <Package className='h-5 w-5 transition-all'/>
                                Produtos
                            </Link>
                            <Link 
                                href="/"
                                className='flex items-center gap-4 px-2.5 text-muted-foreground
                                hover:text-foreground'
                            >
                                <User className='h-5 w-5 transition-all'/>
                                Clientes
                            </Link>
                            <Link 
                                href="/"
                                className='flex items-center gap-4 px-2.5 text-muted-foreground
                                hover:text-foreground'
                            >
                                <Settings2 className='h-5 w-5 transition-all'/>
                                Configurações
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <h2>Menu</h2>
            </header>
        </div>
    </div>
  );
}