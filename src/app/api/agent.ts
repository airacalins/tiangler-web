import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { ICurrentLoggedInAccount, ILoginAccount, IRegisterAccount } from "../types/IAccounts";
import { ACCOUNTS_PATH, BASE_URL, BEARER, CURRENT_USER_PATH, EMPTY_STRING, LOGIN_PATH, REGISTER_PATH, SERVER_ERROR, TOKEN, UNAUTHORIZED } from "../utilities/stringsConstant";

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(TOKEN);
    if (token) config.headers!.Authorization = `${BEARER} ${token}`;
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
                localStorage.setItem(TOKEN, EMPTY_STRING);
                toast.error(data.title || UNAUTHORIZED);
                break;

            case 500:
                toast.error(SERVER_ERROR);
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
    login: (account: ILoginAccount) => requests.post<ICurrentLoggedInAccount>(`${ACCOUNTS_PATH}${LOGIN_PATH}`, account),
    register: (account: IRegisterAccount) => requests.post<void>(`${ACCOUNTS_PATH}${REGISTER_PATH}`, account),
    currentUser: <ICurrentLoggedInAccount>() => requests.get<ICurrentLoggedInAccount>(`${ACCOUNTS_PATH}${CURRENT_USER_PATH}`),
}

const agent = {
    Account,
}

export default agent;