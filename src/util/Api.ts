import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';

import Logger from '../util/Logger';

const logger = Logger(__filename);

declare module 'axios' {
  interface AxiosRequestConfig {
    retriesLeft?: number;
  }
}

class Api {
  protected readonly TIMEOUT_RETRIES = 2;
  protected readonly UNAUTHORIZED_RETRIES = 1;

  protected axiosInstance: AxiosInstance;
  protected authenticated = false;

  constructor(ozmapURL: string, options?: { username: string; password: string } | { apiKey: string }) {
    const headers: { Authorization?: string } = {};

    if (options && 'apiKey' in options) {
      headers.Authorization = options.apiKey;
      this.authenticated = true;
    }

    this.axiosInstance = axios.create({
      baseURL: ozmapURL,
      headers: headers,
    });

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        const config = error.config as AxiosRequestConfig;
        const status = error.response ? error.response.status : null;

        if (!status || config.retriesLeft === 0) {
          return Promise.reject(error);
        }

        return this.retryRequest(status, error.config);
      },
    );
  }

  protected async retryRequest(errorStatus: string | number, config: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (errorStatus) {
      case StatusCodes.UNAUTHORIZED: {
        return this.handleUnauthorizedError(config);
      }
    }

    return this.axiosInstance.request(config);
  }

  protected async handleTimeoutError(config: AxiosRequestConfig): Promise<AxiosResponse> {
    logger.debug(`Timeout error requesting [${_.toUpper(config.method)}] ${config.url} - Requesting again in 5s`);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    return this.axiosInstance.request({ ...config, retriesLeft: (config.retriesLeft || this.TIMEOUT_RETRIES) - 1 });
  }

  protected async handleUnauthorizedError(config: AxiosRequestConfig): Promise<AxiosResponse> {
    // aqui vai fazer login dnvo
    return this.axiosInstance.request({
      ...config,
      retriesLeft: (config.retriesLeft || this.UNAUTHORIZED_RETRIES) - 1,
    });
  }

  async create<INPUT, OUTPUT>(
    model: string,
    inputData: INPUT,
    options: { params: Record<string, any> },
  ): Promise<OUTPUT> {
    logger.silly(`Creating: ${model} -> ${JSON.stringify(inputData)}`);

    try {
      const { data } = await this.axiosInstance.post(`/api/v2/${model}`, inputData, {
        params: options.params,
      });

      return data as OUTPUT;
    } catch (e) {
      logger.error(`Fail to create: Error: ${e.message}, StatusCode: ${e.status}`, { model, data: inputData });

      throw e;
    }
  }
}

export default Api;
