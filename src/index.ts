import OZMapSDK from './OZMapSDK';
import { WritableProxy as LocalWritableProxy, ReadableProxy as LocalReadableProxy } from './proxy';

export type WritableProxy = typeof LocalWritableProxy;
export type ReadableProxy = typeof LocalReadableProxy;

export * from './interface';

export default OZMapSDK;
