import { customerRepository } from "@/app/_repositories/customer-local-repository";
import CustomerItem from "./customer-item"

const CustomersSession = () => {
    const allCustomers = customerRepository.getAll();

    return (
        <>
            {
                allCustomers.map((customer) => (
                    <CustomerItem customer={customer} />
                ))
            }
        </>
    );
}

export default CustomersSession;