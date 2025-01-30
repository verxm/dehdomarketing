'use client'

import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "./ui/input";
import { BsWhatsapp } from "react-icons/bs";

interface RequestBudgetParameters {
    triggerElement: JSX.Element
}

const formSchema = z.object({
    companyName: z.string().optional(),
    responsible: z.string().optional(),
    businessSector: z.string().optional(),
    interestedServices: z.string().optional(),
})

const RequestBudget = ({ triggerElement }: RequestBudgetParameters) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {triggerElement}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px] max-w-[410px] px-0">
                <DialogHeader className="px-6">
                    <DialogTitle className="uppercase text-primary">Solicitar Orçamento</DialogTitle>
                    <DialogDescription className="text-xs">
                        Os dados são opcionais, você pode enviar a solicitação sem preencher os dados que vamos entendendo suas necessidades juntas.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="px-6 space-y-5 pb-5">
                            <FormField
                                control={form.control}
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Empresa</FormLabel>
                                        <FormControl>
                                            <Input className="text-sm" placeholder="Informe o nome da sua empresa" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="responsible"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Responsável</FormLabel>
                                        <FormControl>
                                            <Input className="text-sm" placeholder="Informe seu nome" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="businessSector"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ramo da Empresa</FormLabel>
                                        <FormControl>
                                            <Input className="text-sm" placeholder="Setor da sua empresa (imobiliário, estética...)" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="interestedServices"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Serviços</FormLabel>
                                        <FormControl>
                                            {/* TODO: Alterar por um Select */}
                                            <Input className="text-sm" placeholder="Quais serviços tem interesse?" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter className="pt-5 border-t border-gray-300 border-dashed">
                            <Button className="mx-6 font-bold" type="submit">
                                Enviar Solicitação <BsWhatsapp />
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default RequestBudget;