import { RetryStatistics } from './collector';
export declare type Domain = {
    [x: string]: string;
};
export interface DomainMap {
    [x: string]: string;
}
/**
 * get path from src
 * @example
 * getUrlPath('https://a.cdn/js/1.js', 'a.cdn'); // '/js/1.js'
 * getUrlPath('https://a.cdn/namespace/js/1.js', 'a.cdn/namespace'); // '/js/1.js'
 * @param {string} src script src
 * @param {string} currentDomain domain name
 * @returns {string}
 */
export declare const getUrlPath: (src: string, currentDomain: string) => string;
/**
 * find out the domain of current loading script
 *
 * @param {string} src
 * @param {{ [x: string]: string }} domainMap
 * @returns
 */
export declare const getCurrentDomain: (src: string, domainMap: DomainMap) => string;
/**
 * extract domain from url, and get the
 * corresponding statistic collector
 * @param {string} url
 * @returns
 */
export declare const extractInfoFromUrl: (url: string, domainMap: DomainMap) => [string?, RetryStatistics?];
export declare const splitUrl: (url: string, domainMap: DomainMap) => [string, string];
