// @ts-ignore
import CloudlinkClient from "@williamhorning/cloudlink";
import type { useAPI } from "../lib/api/index";
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
    abstract start(): void | Promise<void>;
    abstract stop(): void | Promise<void>;
    abstract settings(): ReactElement | Promise<ReactElement>;
}
export declare class Plugins {
    private plugins;
    data: RoarerData;
    constructor();
    flip(identifier: string): Promise<void>;
    register(plugin: RoarerPlugin): void;
    create(obj: Code | URL): Promise<void>;
}
declare let plugins: Plugins;
export default plugins;
