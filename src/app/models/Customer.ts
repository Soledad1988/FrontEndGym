import { Fee } from "./Fee";

export class Customer {
    idCustomer?: number;
    name?: string;
    lastName?: string;
    dni?: string;
    telefonNumber?: string;
    address?: string;
    fees?: Fee[];
}