import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';

import { ApiFilterSchema } from '../interface';
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

  async post<INPUT, OUTPUT>({
    route,
    inputData,
    options,
  }: {
    route: string;
    inputData?: INPUT;
    options: Omit<AxiosRequestConfig, 'url'>;
  }): Promise<OUTPUT> {
    logger.silly(`[POST] api/v2/${route} -> ${JSON.stringify(inputData)}`);

    try {
      const { data } = await this.axiosInstance.post(`/api/v2/${route}`, inputData, options);

      return data as OUTPUT;
    } catch (e) {
      logger.error(`Fail to POST. Error: ${e.message}, StatusCode: ${e.status}`, { model: route, data: inputData });

      throw e;
    }
  }

  async get<OUTPUT>({
    route,
    select,
    filter,
    populate,
    sorter,
    options,
  }: {
    route: string;
    // tenho que confirmar o que o populate aceita
    populate?: any;
    filter?: string;
    sorter?: string;
    select?: string;
    options?: Omit<AxiosRequestConfig, 'url'>;
  }): Promise<OUTPUT> {
    logger.silly(`[GET] api/v2/${route} -> ${JSON.stringify({})}`);

    const filterParsed = ApiFilterSchema.parse(filter);
    const sorterParsed = ApiFilterSchema.parse(sorter);

    try {
      const { data } = await this.axiosInstance.get(`/api/v2/${route}`, {
        ...options,
        params: {
          ...(options?.params || {}),
          select,
          populate,
        },
        data: {
          filter: filterParsed,
          sort: sorterParsed,
        },
      });

      return data as OUTPUT;
    } catch (e) {
      logger.error(`Fail to POST. Error: ${e.message}, StatusCode: ${e.status}`, { model: route, filter, sorter });

      throw e;
    }
  }

  async patch<INPUT>({
    route,
    inputData,
    options,
  }: {
    route: string;
    inputData?: INPUT;
    options: Omit<AxiosRequestConfig, 'url'>;
  }): Promise<void> {
    logger.silly(`[PATCH] api/v2/${route} -> ${JSON.stringify(inputData)}`);

    try {
      await this.axiosInstance.patch(`/api/v2/${route}`, inputData, options);
    } catch (e) {
      logger.error(`Fail to PATCH. Error: ${e.message}, StatusCode: ${e.status}`, { model: route, data: inputData });

      throw e;
    }
  }

  async delete({ route, options }: { route: string; options: Omit<AxiosRequestConfig, 'url'> }): Promise<void> {
    logger.silly(`[DELETE] api/v2/${route}`);

    try {
      await this.axiosInstance.delete(`/api/v2/${route}`, options);
    } catch (e) {
      logger.error(`Fail to DELETE. Error: ${e.message}, StatusCode: ${e.status}`);

      throw e;
    }
  }

  public get client(): Api['axiosInstance'] {
    return this.axiosInstance;
  }
}

export default Api;
