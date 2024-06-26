
export enum ECookieSameSite {
    STRICT = 'strict',
    LAX = 'lax',
    NONE = 'none',
}

export interface ICookieStoreDeleteOptions {
    name?: string;
    domain?: string;
    path?: string;
}

export interface ICookieInit extends ICookieStoreDeleteOptions {
    sameSite?: ECookieSameSite;
}

export interface ICookieInitWithNameAndValue extends ICookieInit {
    name?: string;
    value?: string;
}

export interface IOptions extends ICookieInit {
    defaultValue?: string,
    secure: boolean,
    path: string
}

export interface ICookieStore {
    get: (key: string) => Promise<ICookieInitWithNameAndValue>;
    set: (options: ICookieInitWithNameAndValue) => Promise<void>;
    delete: (options: ICookieStoreDeleteOptions) => Promise<void>;
}