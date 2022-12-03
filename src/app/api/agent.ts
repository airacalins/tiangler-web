import axios, { AxiosResponse } from "axios";
import { ICurrentLoggedInAccount, ILoginAccount, IRegisterAccount } from "../types/IAccounts";

axios.defaults.baseURL = 'https://localhost:5000';
const accountUrl = '/accounts'

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Account = {
    login: (account: ILoginAccount) => requests.post<ICurrentLoggedInAccount>(`${accountUrl}/login`, account),
    register: (account: IRegisterAccount) => requests.post<void>(`${accountUrl}/register`, account),
    currentUser: <ICurrentLoggedInAccount>() => requests.get<ICurrentLoggedInAccount>(`${accountUrl}/currentUser`),
}

const agent = {
    Account,
}

export default agent;