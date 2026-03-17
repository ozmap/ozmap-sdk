import {
  PolygonReport,
  CreatePolygonReportDTO,
  CreatePolygonReportDTOSchema,
  MoveReport,
  MoveReportSchema,
  ReportTags,
  ReportTagsSchema,
  UpdateProject,
  UpdateProjectSchema,
  ElementsReport,
  ElementsReportSchema,
} from '../../interface';
import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';
import { BaseModel } from '../../interface';

class PolygonReportProxy extends WritableProxy<PolygonReport, CreatePolygonReportDTO, never> {
  protected get _route(): string {
    return 'reports/polygon';
  }

  private get _reportsRoute(): string {
    return 'reports';
  }

  public async create(
    data: CreatePolygonReportDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<PolygonReport> {
    const parsedData = CreatePolygonReportDTOSchema.parse(data);
    return super.create(parsedData, options);
  }

  public async moveById(
    reportId: BaseModel['id'],
    data: MoveReport,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<void> {
    const parsedData = MoveReportSchema.parse(data);
    return this.apiInstance.post({
      route: `${this._reportsRoute}/${reportId}/move`,
      inputData: parsedData,
      options,
    });
  }

  public async addTagsById(
    reportId: BaseModel['id'],
    data: ReportTags,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<void> {
    const parsedData = ReportTagsSchema.parse(data);
    return this.apiInstance.post({
      route: `${this._reportsRoute}/${reportId}/tags`,
      inputData: parsedData,
      options,
    });
  }

  public async removeTagsById(
    reportId: BaseModel['id'],
    data: ReportTags,
    options?: Parameters<Api['delete']>[0]['options'],
  ): Promise<void> {
    const parsedData = ReportTagsSchema.parse(data);
    return this.apiInstance.delete({
      route: `${this._reportsRoute}/${reportId}/tags`,
      options: { ...options, data: parsedData },
    });
  }

  public async updateProject(
    data: UpdateProject,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<{ record: Record<string, unknown>; error: string }[]> {
    const parsedData = UpdateProjectSchema.parse(data);
    return this.apiInstance.post({
      route: `${this._reportsRoute}/project`,
      inputData: parsedData,
      options,
    });
  }

  public async createCompleteElementsReport(
    data: ElementsReport,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<unknown> {
    const parsedData = ElementsReportSchema.parse(data);
    return this.apiInstance.post({
      route: `${this._reportsRoute}/elements/complete`,
      inputData: parsedData,
      options,
    });
  }

  public async createCountElementsReport(
    data: ElementsReport,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<unknown> {
    const parsedData = ElementsReportSchema.parse(data);
    return this.apiInstance.post({
      route: `${this._reportsRoute}/elements/count`,
      inputData: parsedData,
      options,
    });
  }
}

export default PolygonReportProxy;
