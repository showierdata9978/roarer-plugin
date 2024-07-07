import { StateCreator } from "zustand";
import { AuthSlice } from "./auth";
import { ChatsSlice } from "./chats";
import { PostsSlice } from "./posts";
import { RoarerSlice } from "./roarer";
import { TypingSlice } from "./typing";
import { UlistSlice } from "./ulist";
import { UsersSlice } from "./users";
// @ts-ignore
export type Slice<T> = StateCreator<Store, [["zustand/immer", never]], [], T>; 
export type Store = AuthSlice & ChatsSlice & PostsSlice & RoarerSlice & TypingSlice & UlistSlice & UsersSlice;
export declare const useAPI: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<Store>, "setState"> & {
    setState(nextStateOrUpdater: Store | Partial<Store> | ((state: Map<import("immer").Draft<K>, import("immer").Draft<V>>) => void), shouldReplace?: boolean | undefined): void;
}>;
