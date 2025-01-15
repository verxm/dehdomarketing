const InstagramInsights = () => {
    return (
        <>
            <div className="flex flex-row justify-between">
                <p className="font-bold text-sm">Insigths</p>
                <p className="text-xs italic">09/01/2024 a 09/02/2024</p>
            </div>
            <div className="flex flex-row p-5">
                <div className="flex flex-col w-[270px] text-gray-600 text-sm">
                    <p>Contas alcançadas:</p>
                    <p>Contas com engajamento:</p>
                    <p>Total de seguidores:</p>
                    <p>Conteúdo que você compartilhou:</p>
                </div>
                <div className="flex flex-col text-sm">
                    <p>10</p>
                    <p>200</p>
                    <p>5400</p>
                    <p>20</p>
                </div>
            </div>
        </>
    );
}

export default InstagramInsights;