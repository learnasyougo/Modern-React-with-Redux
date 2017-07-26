export default class BlogService {
    apiKey = 'AldnyfpginHdgnqhGdpeotxyHdfb';
    apiRootUrl = 'http://reduxblog.herokuapp.com/api';

    buildRequestUrl(endpoint) {
        return `${this.apiRootUrl}/${endpoint}?${this.apiKey}`;
    }
}