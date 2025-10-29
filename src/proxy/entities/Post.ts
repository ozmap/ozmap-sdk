import WritableProxy from '../WritableProxy';
import { CreatePostDTO, CreatePostDTOSchema, Post, UpdatePostDTO } from '../../interface';
import Api from '../../util/Api';

class PostProxy extends WritableProxy<Post, CreatePostDTO, UpdatePostDTO> {
  protected get _route(): string {
    return 'posts';
  }

  async create(data: CreatePostDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Post> {
    const parsedData = CreatePostDTOSchema.parse(data);
    const tags = parsedData.tags || [];

    const formData = new FormData();

    formData.append('element.kind', data.element.kind);
    formData.append('element.id', data.element.id.toString());

    if (parsedData.title) {
      formData.append('title', parsedData.title);
    }

    if (parsedData.observation) {
      formData.append('observation', parsedData.observation);
    }

    for (let i = 0; i < tags.length; ++i) {
      formData.append('tags.' + i, tags[i].toString());
    }

    return this.apiInstance.post<FormData, Post>({
      route: this._route,
      inputData: formData,
      options,
    });
  }
}

export default PostProxy;
