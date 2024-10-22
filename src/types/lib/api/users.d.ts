import { z } from "zod";
import { Slice } from ".";
import { Errorable } from "./utils";
export declare const USER_SCHEMA: z.ZodObject<{
    _id: z.ZodString;
    avatar: z.ZodString;
    avatar_color: z.ZodString;
    banned: z.ZodBoolean;
    created: z.ZodNullable<z.ZodNumber>;
    flags: z.ZodNumber;
    last_seen: z.ZodNullable<z.ZodNumber>;
    lower_username: z.ZodString;
    lvl: z.ZodNumber;
    permissions: z.ZodNullable<z.ZodNumber>;
    pfp_data: z.ZodNullable<z.ZodNumber>;
    quote: z.ZodNullable<z.ZodString>;
    uuid: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    uuid?: string;
    _id?: string;
    avatar?: string;
    avatar_color?: string;
    banned?: boolean;
    created?: number;
    flags?: number;
    last_seen?: number;
    lower_username?: string;
    lvl?: number;
    permissions?: number;
    pfp_data?: number;
    quote?: string;
}, {
    uuid?: string;
    _id?: string;
    avatar?: string;
    avatar_color?: string;
    banned?: boolean;
    created?: number;
    flags?: number;
    last_seen?: number;
    lower_username?: string;
    lvl?: number;
    permissions?: number;
    pfp_data?: number;
    quote?: string;
}>;
export type User = z.infer<typeof USER_SCHEMA>;
export type UsersSlice = {
    users: Record<string, Errorable<User>>;
    addUser: (user: User) => void;
    loadUser: (username: string, options?: {
        force?: boolean;
    }) => Promise<void>;
};
export declare const createUsersSlice: Slice<UsersSlice>;
