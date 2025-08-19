import { describe, it, expect } from 'vitest';
import OZMapSDK from '../src';

describe('OZMapSDK (smoke)', () => {
  it('exports a default class', () => {
    expect(typeof OZMapSDK).toBe('function');
  });

  it('instantiates without side effects', () => {
    const sdk = new OZMapSDK('https://example.com', { apiKey: 'dummy-key' });

    expect(sdk).toBeTruthy();
    expect(sdk.apiInstance).toBeTruthy();

    // Spot-check a couple of proxies to ensure wiring is in place
    expect(sdk.box).toBeTruthy();
    expect(sdk.pop).toBeTruthy();
  });
});
