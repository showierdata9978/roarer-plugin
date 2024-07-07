import { z } from "zod";
import { Slice } from ".";
import { Errorable } from "./utils";
export declare const CHAT_SCHEMA: z.ZodIntersection<z.ZodObject<{
    created: z.ZodNumber;
    deleted: z.ZodLiteral<false>;
    last_active: z.ZodNumber;
    members: z.ZodArray<z.ZodString, "many">;
    type: z.ZodNumber;
    _id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type?: number;
    _id?: string;
    created?: number;
    deleted?: false;
    last_active?: number;
    members?: string[];
}, {
    type?: number;
    _id?: string;
    created?: number;
    deleted?: false;
    last_active?: number;
    members?: string[];
}>, z.ZodUnion<[z.ZodObject<{
    nickname: z.ZodNullable<z.ZodString>;
    owner: z.ZodString;
}, "strip", z.ZodTypeAny, {
    nickname?: string;
    owner?: string;
}, {
    nickname?: string;
    owner?: string;
}>, z.ZodObject<{
    nickname: z.ZodNull;
    owner: z.ZodNull;
}, "strip", z.ZodTypeAny, {
    nickname?: null;
    owner?: null;
}, {
    nickname?: null;
    owner?: null;
}>]>>;
export type Chat = z.infer<typeof CHAT_SCHEMA>;
export type ChatsSlice = {
    userChats: Errorable<{
        chats: string[];
    }> | undefined;
    chats: Record<string, Errorable<Chat | {
        deleted: true;
    }>>;
    addChat: (chat: Chat) => void;
    loadChats: () => Promise<void>;
    loadChat: (chat: string) => Promise<void>;
    getDM: (username: string) => Promise<{
        error: true;
        message: string;
    } | {
        error: false;
        chat: string;
    }>;
};
export declare const createChatsSlice: Slice<ChatsSlice>;
