import { RetryStatistics } from './collector';
import { domainProp, maxRetryCountProp, onFailProp, onRetryProp } from './constants';
import { Domain, DomainMap } from './url';
export declare type RetryFunction = (currentUrl: string, originalUrl: string, retryCollector: null | RetryStatistics) => string | null;
export declare type SuccessFunction = (currentPath: string) => void;
export declare type FailFunction = (currentPath: string) => void;
export interface AssetsRetryOptions {
    [maxRetryCountProp]?: number;
    [onRetryProp]?: RetryFunction;
    [onFailProp]?: FailFunction;
    [domainProp]: Domain;
}
export interface InnerAssetsRetryOptions {
    [maxRetryCountProp]: number;
    [onRetryProp]: RetryFunction;
    [onFailProp]: FailFunction;
    [domainProp]: DomainMap;
}
export default function init(opts?: AssetsRetryOptions): import("./collector").RetryCollector | undefined;
