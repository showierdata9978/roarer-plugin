import { Slice } from ".";
export declare const NOTIFICATION_STORAGE = "roarer2:notifications";
export type RoarerSlice = {
    openChat: string;
    setOpenChat: (openChat: string) => void;
    notificationState: "disabled" | "denied" | "enabled";
    enableNotifications: () => Promise<void>;
    disableNotifications: () => void;
};
export declare const createRoarerSlice: Slice<RoarerSlice>;
