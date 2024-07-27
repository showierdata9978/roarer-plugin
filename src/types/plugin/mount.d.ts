import CloudlinkClient from "@williamhorning/cloudlink";
import { useAPI } from "../lib/api";
import { ReactElement } from "react";
export interface RoarerData {
    cloudlink: CloudlinkClient | null;
    api: typeof useAPI;
}
type Code = string;
export declare abstract class RoarerPlugin {
    abstract info(): {
        name: string;
        identifier: string;
        version: string;
        description: string;
        author: string;
        website?: string;
        icon?: string;
    };
    abstract start(state: object): void | Promise<void>;
    abstract stop(): void | Promise<void>;
    abstract settings(state: React.ComponentState): ReactElement | Promise<ReactElement>;
}
export declare class Plugins {
    private plugins;
    data: RoarerData;
    constructor();
    flip(identifier: string, state: object): Promise<void>;
    register(plugin: RoarerPlugin): void;
    create(obj: Code | URL): Promise<void>;
}
declare let plugins: Plugins;
export default plugins;
