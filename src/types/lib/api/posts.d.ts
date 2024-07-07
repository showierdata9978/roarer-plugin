import { z } from "zod";
import { Slice } from ".";
import { Errorable } from "./utils";
export type Attachment = z.infer<typeof ATTACHMENT_SCHEMA>;
declare const ATTACHMENT_SCHEMA: z.ZodObject<{
    filename: z.ZodString;
    height: z.ZodNumber;
    id: z.ZodString;
    mime: z.ZodString;
    size: z.ZodNumber;
    width: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    filename?: string;
    id?: string;
    height?: number;
    width?: number;
    size?: number;
    mime?: string;
}, {
    filename?: string;
    id?: string;
    height?: number;
    width?: number;
    size?: number;
    mime?: string;
}>;
export type Post = z.infer<typeof POST_SCHEMA> & {
    optimistic?: {
        error?: string;
    };
    bridge?: "discord";
};
export declare const POST_SCHEMA: z.ZodObject<{
    attachments: z.ZodArray<z.ZodObject<{
        filename: z.ZodString;
        height: z.ZodNumber;
        id: z.ZodString;
        mime: z.ZodString;
        size: z.ZodNumber;
        width: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        filename?: string;
        id?: string;
        height?: number;
        width?: number;
        size?: number;
        mime?: string;
    }, {
        filename?: string;
        id?: string;
        height?: number;
        width?: number;
        size?: number;
        mime?: string;
    }>, "many">;
    edited_at: z.ZodOptional<z.ZodNumber>;
    isDeleted: z.ZodLiteral<false>;
    p: z.ZodString;
    post_id: z.ZodString;
    post_origin: z.ZodString;
    t: z.ZodObject<{
        e: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        e?: number;
    }, {
        e?: number;
    }>;
    type: z.ZodNumber;
    u: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type?: number;
    p?: string;
    u?: string;
    attachments?: {
        filename?: string;
        id?: string;
        height?: number;
        width?: number;
        size?: number;
        mime?: string;
    }[];
    edited_at?: number;
    isDeleted?: false;
    post_id?: string;
    post_origin?: string;
    t?: {
        e?: number;
    };
}, {
    type?: number;
    p?: string;
    u?: string;
    attachments?: {
        filename?: string;
        id?: string;
        height?: number;
        width?: number;
        size?: number;
        mime?: string;
    }[];
    edited_at?: number;
    isDeleted?: false;
    post_id?: string;
    post_origin?: string;
    t?: {
        e?: number;
    };
}>;
export type PostsSlice = {
    chatPosts: Record<string, Errorable<{
        posts: string[];
        stopLoadingMore: boolean;
        currentOptimistics: Record<string, string>;
    }>>;
    posts: Record<string, Errorable<Post | {
        isDeleted: true;
    }>>;
    addPost: (post: Post) => Post;
    loadChatPosts: (id: string) => Promise<void>;
    loadMore: (id: string) => Promise<{
        error: true;
        message: string;
    } | {
        error: false;
    }>;
    loadPosts: (id: string, current: number) => Promise<{
        error: true;
        message: string;
    } | {
        error: false;
        posts: string[];
        stop: boolean;
    }>;
    loadPost: (id: string) => Promise<void>;
    post: (content: string, chat: string, attachments?: string[]) => Promise<void>;
    editPost: (id: string, newContent: string) => Promise<{
        error: true;
        message: string;
    } | {
        error: false;
    }>;
    deletePost: (id: string) => Promise<{
        error: true;
        message: string;
    } | {
        error: false;
    }>;
};
export declare const createPostsSlice: Slice<PostsSlice>;
export {};
