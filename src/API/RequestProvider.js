class RequestProvider {
  static requestUrl = 'https://hn.algolia.com/api/v1/';

  static async runRequest(method = 'GET', data = '', urlPart = '') {
    const safeUrlPart = String(urlPart);
    let requestParams = {
      method: method,
    }

    if(data) {
      requestParams.body = JSON.stringify(data);
    }

    const response = await fetch(this.requestUrl + safeUrlPart, requestParams);
    return response.json();
  }

  static getHomePage() {
    return this.runRequest('GET', '', 'search?tags=front_page');
  }

  static createResource(data) {
    return this.runRequest('POST', data);
  }

  static updateResource(data) {
    if(!data.id) throw new Error('Data object should contain an ID of updating resource');

    return this.runRequest('PUT', data, data.id);
  }

  static deleteResource(id) {
    return this.runRequest('DELETE', {}, id)
  }
}

export default RequestProvider;