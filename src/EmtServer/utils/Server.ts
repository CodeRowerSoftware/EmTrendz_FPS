import * as request from 'request'

import { API_HOST } from './Constants'
class ServerSingleton {
  public async getData(url: string) {
    var options = {
      uri: API_HOST + url
    }

    const result = await request.get(options)
  }
}

export let Server = new ServerSingleton()
