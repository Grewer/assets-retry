import { retryCollector, RetryStatistics } from './collector'
import { retryTimesProp, failedProp, succeededProp } from './constants'

export type Domain =  { [x: string]: string }
export interface DomainMap {
    [x: string]: string
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
export const getUrlPath = function(src: string, currentDomain: string) {
    return src.substr(src.indexOf(currentDomain) + currentDomain.length, src.length)
}

/**
 * find out the domain of current loading script
 *
 * @param {string} src
 * @param {{ [x: string]: string }} domainMap
 * @returns
 */
export const getCurrentDomain = function(src: string, domainMap: DomainMap) {
    return (
        Object.keys(domainMap)
            .filter(function(domain) {
                return src.indexOf(domain) > -1
            })
            // sort by length (relevance)
            .sort((prev, next) => next.length - prev.length)[0]
    )
}

/**
 * extract domain from url, and get the
 * corresponding statistic collector
 * @param {string} url
 * @returns
 */
export const extractInfoFromUrl = function(
    url: string,
    domainMap: DomainMap
): [string?, RetryStatistics?] {
    const [srcPath, currentDomain] = splitUrl(url, domainMap)
    if (!srcPath) {
        return []
    }
    retryCollector[srcPath] = retryCollector[srcPath] || {
        [retryTimesProp]: 0,
        [failedProp]: [],
        [succeededProp]: []
    }
    return [currentDomain, retryCollector[srcPath]]
}

export const splitUrl = function(url: string, domainMap: DomainMap): [string, string] {
    const currentDomain = getCurrentDomain(url, domainMap)
    if (!currentDomain) {
        return ['', '']
    }
    const srcPath = getUrlPath(url, currentDomain)
    return [srcPath, currentDomain]
}
