export declare const retryTimesProp = "retryTimes";
export declare const succeededProp = "succeeded";
export declare const failedProp = "failed";
export declare const maxRetryCountProp = "maxRetryCount";
export declare const onRetryProp = "onRetry";
export declare const onSuccessProp = "onSuccess";
export declare const onFailProp = "onFail";
export declare const domainProp = "domain";
export declare const innerScriptProp = "_assetsRetryScript";
export declare const innerOnloadProp = "_assetsRetryOnload";
export declare const innerOnerrorProp = "_assetsRetryOnerror";
export declare const scriptTag = "script";
export declare const linkTag = "link";
export declare const hookedIdentifier = "data-assets-retry-hooked";
export declare const ignoreIdentifier = "data-assets-retry-ignore";
export declare const retryIdentifier = "data-retry-id";
export declare const win: Window & typeof globalThis;
export declare const doc: Document;
export declare const ElementCtor: {
    new (): HTMLElement;
    prototype: HTMLElement;
};
export declare const ScriptElementCtor: {
    new (): HTMLScriptElement;
    prototype: HTMLScriptElement;
};
export declare const StyleElementCtor: {
    new (): HTMLStyleElement;
    prototype: HTMLStyleElement;
};
export declare const LinkElementCtor: {
    new (): HTMLLinkElement;
    prototype: HTMLLinkElement;
};
export declare const ImageElementCtor: {
    new (): HTMLImageElement;
    prototype: HTMLImageElement;
};
