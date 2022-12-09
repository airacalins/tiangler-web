import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { ICurrentLoggedInAccount, ILoginAccount, IRegisterAccount } from "../types/IAccounts";

axios.defaults.baseURL = 'https://localhost:5000/api/';
const accountUrl = 'accounts'

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers!.Authorization = `Bearer ${token}`;
    return config;
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        const { data, status } = error.response! as any;
        switch (status) {
            case 400:
                if (data.errors) {
                    const modelStateErrors: string[] = [];
                    for (const key in data.errors) {
                        if (data.errors[key]) {
                            modelStateErrors.push(data.errors[key]);
                            toast.error(data.errors[key][0]);
                        }
                    }
                    throw modelStateErrors.flat();
                }

                if (data.title)
                    toast.error(data.title);
                else
                    toast.error(data);
                break;

            case 401:
                localStorage.setItem('token', '');
                toast.error(data.title || 'Unauthorized');
                break;

            case 500:
                toast.error('Server error');
                break;

            default:
                break;
        }
        return Promise.reject(error.response);
    }
);

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