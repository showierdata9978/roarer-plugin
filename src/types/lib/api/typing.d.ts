import { Slice } from ".";
export type TypingSlice = {
    typingUsers: Record<string, string[]>;
    sendTyping: (chat: string) => void;
};
export declare const createTypingSlice: Slice<TypingSlice>;
