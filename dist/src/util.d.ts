export declare const identity: <T>(x: T) => T;
export declare const noop: () => void;
export declare const hasOwn: (v: string | number | symbol) => boolean;
/**
 * safely calls a function
 *
 * @template T this
 * @template R ReturnType<func>
 * @param {(this: T, ...callbackArgs: any[]) => R} func
 * @param {T} thisArg
 * @param {*} args
 * @returns {R}
 */
export declare const safeCall: <T, R>(func: (this: T, ...callbackArgs: any[]) => R, thisArg: T, args: any) => R;
/**
 * replace a substring with new one
 *
 * @param {string} current current string
 * @param {string} oldStr substring to replace
 * @param {string} newStr new string
 * @returns
 */
export declare const stringReplace: (current: string, oldStr: string, newStr: string) => string;
/**
 * convert a camelCase string to a dash-separated string.
 *
 * @param {string} str
 * @returns
 */
export declare const toSlug: (str: string) => string;
/**
 * transform an array-like object to array
 *
 * @template T
 * @param {ArrayLike<T>} arrayLike
 * @returns {T[]}
 */
export declare const arrayFrom: <T>(arrayLike: Iterable<T> | ArrayLike<T>) => T[];
/**
 * collect all property names from current object to its ancestor
 *
 * @param {any} obj
 * @returns
 */
export declare const collectPropertyNames: (obj: any) => string[];
/**
 * @example
 * isFunctionProperty(HTMLScriptElement.prototype, 'src); // false
 * isFunctionProperty(HTMLScriptElement.prototype, 'getAttribute'); // true
 * @param {any} proto
 * @param {string} key
 * @returns
 */
export declare const isFunctionProperty: (proto: any, key: string) => boolean;
/**
 * on some browsers, calling `document.write` when
 * `document.readyState` is `loading` will clear the whole
 * page, which is not what we wanted.
 *
 * @returns
 */
export declare const supportDocumentWrite: () => boolean;
/**
 * loads a new script element by previous failed script element
 *
 * @param {HTMLScriptElement} $script previous script element
 * @param {string} newSrc new url to try
 */
export declare const loadNextScript: ($script: HTMLScriptElement, newSrc: string, onload?: () => void, isAsync?: boolean) => void;
/**
 * get rules from styleSheet
 *
 * @param {CSSStyleSheet} styleSheet
 * @returns
 */
export declare const getCssRules: (styleSheet: CSSStyleSheet) => CSSRuleList | null;
/**
 * test if current browser support CSSRuleList
 *
 * @param {CSSStyleSheet} styleSheet
 * @returns
 */
export declare const supportRules: (styleSheet: CSSStyleSheet) => boolean;
/**
 * loads a new link element by previous failed link element
 *
 * @param {HTMLLinkElement} $link previous link element
 * @param {string} newHref new url to try
 */
export declare const loadNextLink: ($link: HTMLLinkElement, newHref: string, onload: () => void) => void;
export declare const hashTarget: (element: EventTarget | null) => string;
export declare const randomString: () => string;
/**
 * 获取 HTML 标签中包含的 URL 信息
 * @param target
 */
export declare const getTargetUrl: (target: EventTarget | null) => string | null;
