import { UserCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar , AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Sales() {
  return (
    <Card className="flex-1">
        <CardHeader>
            <div className="flex items-center justify-center">           
                <CardTitle>
                    Ultimos Clientes
                </CardTitle>
                <UserCheck className="ml-auto w-4 h-4 text-gray-600"/>
            </div>
            <CardDescription>
                Novos clientes cadastrados nas últimas 24 horas
            </CardDescription>
        </CardHeader>

        <CardContent>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/viictordantas.png"/>
                    <AvatarFallback>VD</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-semibold">Victor Dantas</p>
                    <p className="text-xs text-gray-600">Programador</p>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/viictordantas.png"/>
                    <AvatarFallback>VD</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-semibold">Victor Dantas</p>
                    <p className="text-xs text-gray-600">Programador</p>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/viictordantasasdasd.png"/>
                    <AvatarFallback>VD</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-semibold">Victor Dantas</p>
                    <p className="text-xs text-gray-600">Programador</p>
                </div>
            </article>
        </CardContent>
    </Card>
  )
}
