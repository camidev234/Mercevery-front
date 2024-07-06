export interface UserAuth {
    id: string | number, 
    email: string,
    role: {
        id: number | string,
        role_name: string
    },
    additional_information: {
        id: string | number,
        company_name: string,
        nit: string,
        phone_number: string,
        email:string,
        principal_activity: string,
        user_id: number | string,
        name: string,
        last_name: string,
        number_document: string,
        createdAt: string,
        updatedAt: string
    }
}

// export interface UserClienAuth {
//     id: string | number, 
//     email: string,
//     role: {
//         id: number | string,
//         role_name: string
//     },
//     additional_information: {
//         id: string | number,
//         name: string,
//         last_name: string,
//         number_document: string,
//         user_id: string | number
//     }
// }