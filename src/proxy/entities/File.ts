import Proxy from '../Proxy';
import { File, Post } from '../../interface';
import Api from '../../util/Api';

class FileProxy extends Proxy {
  async create(postId: Post['id'], files: Blob[], options?: Parameters<Api['post']>[0]['options']): Promise<File> {
    const formData = new FormData();

    formData.append('element.kind', 'post');
    formData.append('element.id', postId.toString());

    for (const file of files) {
      formData.append('files', file);
    }

    return this.apiInstance.post<FormData, File>({
      route: 'files',
      inputData: formData,
      options,
    });
  }
}

export default FileProxy;
