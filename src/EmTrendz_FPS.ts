import { ping } from './EmtServer/Ping/index'

/* tslint:disable */
export default class EmTrendz_FPS {
  BRAND: string
  constructor(brnd: string) {
    this.BRAND = brnd
    ping(this.BRAND)
  }
}
