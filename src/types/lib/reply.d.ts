export type PostWithReplies = {
    ids: string[];
    postContent: string;
    replyText: string;
};
export declare const getReply: (post: string) => PostWithReplies | null;
export declare const trimmedPost: (post: string) => string;
