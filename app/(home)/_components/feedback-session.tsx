import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const FeedbackSession = () => {
    return (
        <div className="cursor-pointer">
            <Card className="hover:bg-gray-950/[.05]">
                <CardHeader>
                    <div className="flex flex-row items-center gap-3">
                        <Avatar>
                            <AvatarImage style={{
                                objectFit: "cover",
                            }} src="/perfil-gabi-gt-clinic.jpeg" />
                        </Avatar>

                        <div className="flex flex-col">
                            <p className="text-sm font-bold italic">Gabriela Torres</p>
                            <p className="text-xs text-gray-400 ital">Proprietária - GT Clinic</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="italic text-sm">"Queria vir te dizer que estou muito feliz com os nossos resultados esse mês, conseguimos, conseguimos aumentar muito a visibilidade da página.. até levei um susto kkk
                        Débora eu sou muito grata por todo teu empenho e dedicação por fazer a minha marca aparecer e crescer, sou grata por tudo pois sei que essa dedicação além de ser algo profissional, criamos uma conexão de parceria e muita sintonia (hoje eu entendo q o marketing é isso) te agrade muito por tanto."</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default FeedbackSession;