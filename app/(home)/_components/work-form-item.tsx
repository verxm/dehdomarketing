import { WorkForm } from "@/app/_entities/workForm";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface WorkFormParameters {
    workForm: WorkForm
}

const WorkFormItem = ({ workForm }: WorkFormParameters) => {
    return (
        <Card className="
            min-w-full max-w-full 
            rounded-2xl 
            bg-tertiary shadow-md shadow-tertiary
            border border-white">
            <CardContent className="p-0">
                <div className="flex flex-col">
                    <div className="
                  flex flex-col items-center 
                  h-20
                  rounded-2xl 
                  rounded-b-none">
                        <Image
                            src={workForm.imagePath}
                            alt={workForm.title}
                            className="
                                z-10 rounded-full 
                                object-cover 
                                h-[150px] mt-2 
                                shadow-md shadow-tertiary"
                            height={150} width={150} />
                    </div>

                    <div className="px-4 pt-20 rounded-2xl bg-primary/80 border-t border-white">
                        <h3 className="
                            font-bold text-white font-tanpearl
                            mt-2
                            text-ellipsis text-nowrap overflow-hidden">{workForm.title}</h3>
                        <p className="
                            pl-3 pt-3 
                            text-sm
                            min-h-[90px] max-h-[90px] 
                            whitespace-pre-line line-clamp-4 text-white">
                            {workForm.description}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default WorkFormItem;