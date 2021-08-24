export class RegisterUser {

    constructor(
        public userName: string,
        public email: string,
        public password: string,
        public address: Address,
        public alternateEmails: []
    )
    {

    }

}

class Address {

    constructor(
        public city: string,
        public state: string,
        public zip: string
    )
    {

    }

}
