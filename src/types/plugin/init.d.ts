import React from "react";
import { Plugins, RoarerPlugin } from "./mount";
export interface Roarer {
    React: typeof React;
    RoarerPlugin: typeof RoarerPlugin;
    plugins: Plugins;
}
export interface Window {
    Roarer: Roarer;
}
export declare let window: Window;
export declare function InitPlugins(): JSX.Element;
