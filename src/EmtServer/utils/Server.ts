import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'

import { API_HOST } from './Constants'
class ServerSingleton {
  public async getData(url: string) {
    axios
      .request<any>({
        url: API_HOST + url,
        transformResponse: (r: any) => r.data
      })
      .then(response => {
        // `response` is of type `AxiosResponse<ServerData>`
        const { data } = response
        // `data` is of type ServerData, correctly inferred
      })
  }
}

export let Server = new ServerSingleton()
