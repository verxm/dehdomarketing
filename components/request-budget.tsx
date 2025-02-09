'use client'

import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { string, z } from "zod";
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
import { useState } from "react";
import { MultiSelect } from "./ui/multi-select";
import { servicesRepository } from "@/app/_repositories/services-local-repository";
import { whatsAppSenderService } from "@/services/whatsapp-sender-service";
import { AtSign } from "lucide-react";

interface RequestBudgetParameters {
    triggerElement: JSX.Element,
    interestedServiceId?: string
}

const formSchema = z.object({
    companyName: z.string().optional(),
    responsible: z.string().optional(),
    businessSector: z.string().optional(),
    instagramIdentifier: z.string().optional(),
    interestedServices: z.array(z.string()).optional(),
});

const RequestBudget = ({ triggerElement, interestedServiceId }: RequestBudgetParameters) => {
    const allServices = servicesRepository.getAll();

    const serviceMultiSelectItems = allServices.map((service) => {
        return { value: service.id, label: service.name, icon: service.icon }
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        whatsAppSenderService.sendBudgetRequest(
            values.companyName,
            values.responsible,
            values.businessSector,
            values.instagramIdentifier,
            selectedServices)
    }

    const [selectedServices, setSelectedServices] = useState<string[]>(interestedServiceId 
        ? [interestedServiceId]
        : []);

    return (
        <Dialog>
            <DialogTrigger asChild>
                {triggerElement}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] max-w-[410px] px-0">
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
                                name="instagramIdentifier"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Instagram</FormLabel>
                                        <FormControl>
                                            <div className="w-full relative">
                                                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 border-r pr-1 border-gray-300">
                                                    <AtSign size={18} className="text-muted-foreground" />
                                                </div>
                                                <Input className="text-sm pl-9" placeholder="seu-insta" {...field} />
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="interestedServices"
                                render={() => (
                                    <FormItem>
                                        <FormLabel>Serviços</FormLabel>
                                        <FormControl>
                                            <MultiSelect
                                                options={serviceMultiSelectItems}
                                                onValueChange={setSelectedServices}
                                                defaultValue={selectedServices}
                                                placeholder="Selecione os serviços que tem interesse"
                                                variant="inverted"
                                                maxCount={10} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter className="pt-5 border-t border-gray-300 border-dashed">
                            <DialogClose asChild>
                                <Button className="mx-6 font-bold" type="submit">
                                    Enviar Solicitação <BsWhatsapp />
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default RequestBudget;