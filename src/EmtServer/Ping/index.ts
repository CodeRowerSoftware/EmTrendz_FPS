import { Server } from '../utils/Server'

export function ping(brand: string): Promise<void> {
  return Server.getData(`/${brand}/ping`)
}
