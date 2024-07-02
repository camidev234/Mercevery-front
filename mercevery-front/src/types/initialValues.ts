export interface ClientDataInterface {
    email: string,
    password: string,
    roleId: string | number,
    name: string,
    last_name: string,
    number_document: string
}
export interface CompanyDataInterface {
    password: string,
    roleId: string | number,
    company_name: string,
    nit: string,
    phone_number: string,
    email: string,
    principal_activity: string
}