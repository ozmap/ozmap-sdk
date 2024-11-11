import Api from './util/Api';
import {
  BaseBoxProxy,
  BoxTemplateProxy,
  BoxTypeProxy,
  ProjectProxy,
  TagProxy,
  BasePointProxy,
  PointProxy,
  BoxProxy,
  PoleProxy,
  JunctionBoxProxy,
  JunctionBoxTypeProxy,
  PoleTypeProxy,
  ColorProxy,
  SystemConfigProxy,
  FiberProfileProxy,
  CableTypeProxy,
  CableProxy,
  PopProxy,
  PopTypeProxy,
  BuildingProxy,
  FTTHClientProxy,
  PropertyProxy,
  SplitterTypeProxy,
  NetworkConnectorProxy,
  SplitterProxy,
  DIOProxy,
  DIOTypeProxy,
  RoleProxy,
  ProjectGroupProxy,
  UserProxy,
  ConnectorTypeProxy,
  FusionTypeProxy,
  ConnectorProxy,
  FusionProxy,
  PassingProxy,
  SwitchProxy,
  SwitchTypeProxy,
  NetworkConnectableProxy,
  FiberProxy,
  CordProxy,
  ShelfTypeProxy,
  ShelfProxy,
  OLTProxy,
  OLTTypeProxy,
  PONProxy,
  SlotProxy,
  ProspectProxy,
  PendencyTypeProxy,
  PendencyProxy,
  HorizontalCondominiumProxy,
  RegionProxy,
  RegionTypeProxy,
  DuctProxy,
  DuctTypeProxy,
  PostProxy,
  FileProxy,
  AntennaProxy,
  RadioProxy,
  BatteryProxy,
} from './proxy';

class OZMapSDK {
  public readonly apiInstance: Api;
  public readonly boxTemplate: BoxTemplateProxy;
  public readonly boxType: BoxTypeProxy;
  public readonly project: ProjectProxy;
  public readonly tag: TagProxy;
  public readonly baseBox: BaseBoxProxy;
  public readonly basePoint: BasePointProxy;
  public readonly point: PointProxy;
  public readonly box: BoxProxy;
  public readonly building: BuildingProxy;
  public readonly pole: PoleProxy;
  public readonly ftthClient: FTTHClientProxy;
  public readonly junctionBox: JunctionBoxProxy;
  public readonly junctionBoxType: JunctionBoxTypeProxy;
  public readonly poleType: PoleTypeProxy;
  public readonly color: ColorProxy;
  public readonly systemConfig: SystemConfigProxy;
  public readonly fiberProfile: FiberProfileProxy;
  public readonly cableType: CableTypeProxy;
  public readonly cable: CableProxy;
  public readonly dio: DIOProxy;
  public readonly dioType: DIOTypeProxy;
  public readonly pop: PopProxy;
  public readonly popType: PopTypeProxy;
  public readonly property: PropertyProxy;
  public readonly splitterType: SplitterTypeProxy;
  public readonly splitter: SplitterProxy;
  public readonly networkConnector: NetworkConnectorProxy;
  public readonly networkConnectables: NetworkConnectableProxy;
  public readonly role: RoleProxy;
  public readonly projectGroup: ProjectGroupProxy;
  public readonly users: UserProxy;
  public readonly connector: ConnectorProxy;
  public readonly connectorType: ConnectorTypeProxy;
  public readonly fusionType: FusionTypeProxy;
  public readonly fusion: FusionProxy;
  public readonly passing: PassingProxy;
  public readonly switch: SwitchProxy;
  public readonly switchType: SwitchTypeProxy;
  public readonly fiber: FiberProxy;
  public readonly cord: CordProxy;
  public readonly shelfType: ShelfTypeProxy;
  public readonly shelf: ShelfProxy;
  public readonly oltType: OLTTypeProxy;
  public readonly olt: OLTProxy;
  public readonly pon: PONProxy;
  public readonly slot: SlotProxy;
  public readonly prospect: ProspectProxy;
  public readonly pendencyType: PendencyTypeProxy;
  public readonly pendency: PendencyProxy;
  public readonly horizontalCondominium: HorizontalCondominiumProxy;
  public readonly region: RegionProxy;
  public readonly regionType: RegionTypeProxy;
  public readonly duct: DuctProxy;
  public readonly ductType: DuctTypeProxy;
  public readonly post: PostProxy;
  public readonly file: FileProxy;
  public readonly antenna: AntennaProxy;
  public readonly battery: BatteryProxy;
  public readonly radio: RadioProxy;

  constructor(ozmapURL: string, options: ConstructorParameters<typeof Api>[1]) {
    this.apiInstance = new Api(ozmapURL, options);

    this.boxTemplate = new BoxTemplateProxy(this.apiInstance);
    this.boxType = new BoxTypeProxy(this.apiInstance);
    this.cableType = new CableTypeProxy(this.apiInstance);
    this.project = new ProjectProxy(this.apiInstance);
    this.tag = new TagProxy(this.apiInstance);
    this.baseBox = new BaseBoxProxy(this.apiInstance);
    this.basePoint = new BasePointProxy(this.apiInstance);
    this.point = new PointProxy(this.apiInstance);
    this.box = new BoxProxy(this.apiInstance);
    this.pole = new PoleProxy(this.apiInstance);
    this.junctionBox = new JunctionBoxProxy(this.apiInstance);
    this.junctionBoxType = new JunctionBoxTypeProxy(this.apiInstance);
    this.poleType = new PoleTypeProxy(this.apiInstance);
    this.color = new ColorProxy(this.apiInstance);
    this.cable = new CableProxy(this.apiInstance);
    this.systemConfig = new SystemConfigProxy(this.apiInstance);
    this.fiberProfile = new FiberProfileProxy(this.apiInstance);
    this.pop = new PopProxy(this.apiInstance);
    this.popType = new PopTypeProxy(this.apiInstance);
    this.building = new BuildingProxy(this.apiInstance);
    this.ftthClient = new FTTHClientProxy(this.apiInstance);
    this.property = new PropertyProxy(this.apiInstance);
    this.splitterType = new SplitterTypeProxy(this.apiInstance);
    this.splitter = new SplitterProxy(this.apiInstance);
    this.networkConnector = new NetworkConnectorProxy(this.apiInstance);
    this.dio = new DIOProxy(this.apiInstance);
    this.dioType = new DIOTypeProxy(this.apiInstance);
    this.role = new RoleProxy(this.apiInstance);
    this.projectGroup = new ProjectGroupProxy(this.apiInstance);
    this.users = new UserProxy(this.apiInstance);
    this.connectorType = new ConnectorTypeProxy(this.apiInstance);
    this.fusionType = new FusionTypeProxy(this.apiInstance);
    this.connector = new ConnectorProxy(this.apiInstance);
    this.fusion = new FusionProxy(this.apiInstance);
    this.passing = new PassingProxy(this.apiInstance);
    this.switch = new SwitchProxy(this.apiInstance);
    this.switchType = new SwitchTypeProxy(this.apiInstance);
    this.networkConnectables = new NetworkConnectableProxy(this.apiInstance);
    this.fiber = new FiberProxy(this.apiInstance);
    this.cord = new CordProxy(this.apiInstance);
    this.shelfType = new ShelfTypeProxy(this.apiInstance);
    this.shelf = new ShelfProxy(this.apiInstance);
    this.olt = new OLTProxy(this.apiInstance);
    this.oltType = new OLTTypeProxy(this.apiInstance);
    this.pon = new PONProxy(this.apiInstance);
    this.slot = new SlotProxy(this.apiInstance);
    this.prospect = new ProspectProxy(this.apiInstance);
    this.pendencyType = new PendencyTypeProxy(this.apiInstance);
    this.pendency = new PendencyProxy(this.apiInstance);
    this.horizontalCondominium = new HorizontalCondominiumProxy(this.apiInstance);
    this.region = new RegionProxy(this.apiInstance);
    this.regionType = new RegionTypeProxy(this.apiInstance);
    this.duct = new DuctProxy(this.apiInstance);
    this.ductType = new DuctTypeProxy(this.apiInstance);
    this.post = new PostProxy(this.apiInstance);
    this.file = new FileProxy(this.apiInstance);
    this.antenna = new AntennaProxy(this.apiInstance);
    this.battery = new BatteryProxy(this.apiInstance);
    this.radio = new RadioProxy(this.apiInstance);
  }
}

export default OZMapSDK;
