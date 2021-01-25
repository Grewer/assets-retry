import initSync from './retry-sync'
import { retryCollector, RetryStatistics } from './collector'
import { domainProp, maxRetryCountProp, onFailProp, onRetryProp, win } from './constants'
import { Domain, DomainMap } from './url'
import { identity, noop } from './util'

export type RetryFunction = (
    currentUrl: string,
    originalUrl: string,
    retryCollector: null | RetryStatistics
) => string | null
export type SuccessFunction = (currentPath: string) => void
export type FailFunction = (currentPath: string) => void

export interface AssetsRetryOptions {
    [maxRetryCountProp]?: number
    [onRetryProp]?: RetryFunction
    [onFailProp]?: FailFunction
    [domainProp]: Domain
}

export interface InnerAssetsRetryOptions {
    [maxRetryCountProp]: number
    [onRetryProp]: RetryFunction
    [onFailProp]: FailFunction
    [domainProp]: DomainMap
}

export default function init(opts: AssetsRetryOptions = {} as any) {
    try {
        // eslint-disable-next-line
        if (typeof opts[domainProp] !== 'object') {
            throw new Error('opts.domain cannot be non-object.')
        }
        const innerOpts: InnerAssetsRetryOptions = {
            [maxRetryCountProp]: opts[maxRetryCountProp] || 3,
            [onRetryProp]: opts[onRetryProp] || identity,
            [onFailProp]: opts[onFailProp] || noop,
            [domainProp]: opts[domainProp]
        }
        initSync(innerOpts)
        return retryCollector
    } catch (e) {
        win.console && console.error('[assetsRetry] error captured', e)
    }
}
