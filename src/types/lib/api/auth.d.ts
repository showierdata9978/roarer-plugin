import { z } from "zod";
import { Slice } from ".";
declare const STORED_ACCOUNTS_SCHEMA: z.ZodRecord<z.ZodString, z.ZodString>;
export declare const USERNAME_STORAGE = "roarer2:username";
export declare const TOKEN_STORAGE = "roarer2:token";
export declare const STORED_ACCOUNTS_STORAGE = "roarer2:storedAccounts";
export type AuthSlice = {
    credentials: {
        username: string;
        token: string;
    } | null;
    storedAccounts: z.infer<typeof STORED_ACCOUNTS_SCHEMA>;
    storeAccount: (username: string, token: string) => void;
    removeStoredAccount: (username: string) => void;
    logIn: (username: string, password: string, options: {
        signUp: boolean;
        keepLoggedIn: boolean;
        storeAccount: boolean;
    }) => Promise<{
        error: true;
        message: string;
    } | {
        error: false;
    }>;
    signOut: () => void;
};
export declare const createAuthSlice: Slice<AuthSlice>;
export {};
