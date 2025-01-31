export interface Service {
    id: string,
    name: string,
    description: string,
    image: string,
    icon: React.ComponentType<{ className?: string }>,
}
