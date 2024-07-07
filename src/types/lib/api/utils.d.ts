import { z, ZodSchema } from "zod";
export declare const orError: <TSchema extends ZodSchema>(schema: TSchema) => z.ZodUnion<[z.ZodIntersection<TSchema, z.ZodObject<{
    error: z.ZodLiteral<false>;
}, "strip", z.ZodTypeAny, {
    error?: false;
}, {
    error?: false;
}>>, z.ZodObject<{
    error: z.ZodLiteral<true>;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type?: string;
    error?: true;
}, {
    type?: string;
    error?: true;
}>]>;
export declare const loadMore: (amount: number) => {
    page: number;
    remove: number;
};
export type RequestReturn<TSchema extends ZodSchema> = {
    error: true;
    message: string;
} | {
    error: false;
    response: z.infer<TSchema>;
};
export declare const request: <TSchema extends ZodSchema>(fetchCall: Promise<Response>, schema: TSchema) => Promise<RequestReturn<TSchema>>;
export type Errorable<T> = (T & {
    error: false;
}) | {
    error: true;
    message: string;
};
