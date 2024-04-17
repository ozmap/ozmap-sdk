import Logger from './util/Logger';

const logger = Logger(__filename);

import Box from './proxy/Box';
import RESTAPIOld from './util/RESTAPIOld';
import Project from './proxy/Project';
import User from './proxy/User';
import Client from './proxy/Client';
import Cable from './proxy/Cable';
import Property from './proxy/Property';
import NetworkConnector from './proxy/NetworkConnector';
import NetworkConnectable from './proxy/NetworkConnectable';
import Region from './proxy/Region';
import Prospect from './proxy/Prospect';
import Building from './proxy/Building';
import winston = require('winston');

class OZMapSDK {
  private restapi: RESTAPIOld;
  private box: Box;
  private project: Project;
  private user: User;
  private cable: Cable;
  private client: Client;
  private property: Property;
  private networkConnector: NetworkConnector;
  private networkConnectable: NetworkConnectable;
  private region: Region;
  private prospect: Prospect;
  private building: Building;

  constructor(url: string, key?: string, authenticate = true) {
    logger.debug('OZMapSDK created');
    this.restapi = new RESTAPIOld(url, key, authenticate);
    this.box = new Box(this.restapi, this);
    this.project = new Project(this.restapi, this);
    this.user = new User(this.restapi, this);
    this.cable = new Cable(this.restapi, this);
    this.client = new Client(this.restapi, this);
    this.property = new Property(this.restapi, this);
    this.networkConnector = new NetworkConnector(this.restapi, this);
    this.networkConnectable = new NetworkConnectable(this.restapi, this);
    this.region = new Region(this.restapi, this);
    this.prospect = new Prospect(this.restapi, this);
    this.building = new Building(this.restapi, this);
  }

  async authentication(login?: string, password?: string): Promise<unknown> {
    return this.restapi.authentication(login, password);
  }

  getBox(): Box {
    return this.box;
  }

  getProject(): Project {
    return this.project;
  }

  getUser(): User {
    return this.user;
  }

  getCable(): Cable {
    return this.cable;
  }

  getClient(): Client {
    return this.client;
  }

  getProperty(): Property {
    return this.property;
  }

  getNetworkConnector(): NetworkConnector {
    return this.networkConnector;
  }

  getNetworkConnectable(): NetworkConnectable {
    return this.networkConnectable;
  }

  getRegion(): Region {
    return this.region;
  }

  isConnected(): boolean {
    return this.restapi.isConnected();
  }

  getRestApi(): RESTAPIOld {
    return this.restapi;
  }

  getProspect(): Prospect {
    return this.prospect;
  }

  getBuilding(): Building {
    return this.building;
  }

  getLogger(): winston.Logger {
    return logger;
  }
}

export default OZMapSDK;
