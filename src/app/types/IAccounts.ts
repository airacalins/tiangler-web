export interface IRegisterAccount {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export interface ILoginAccount {
    email: string;
    password: string;
}

export interface ICurrentLoggedInAccount {
    username: string,
    roles: [],
    id: string,
    photo: string,
    token: string,
}

export enum AccountPageType {
    LOGIN_PAGE,
    REGISTER_PAGE,
}
