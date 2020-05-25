import { RawLocation, Route } from 'vue-router'

export default class RouterMock {
  location: RawLocation | null = null

  push(location: RawLocation): Promise<Route> {
    this.location = location
    return Promise.resolve({
      path: location.toString(),
      hash: '',
      query: {},
      params: {},
      fullPath: location.toString(),
      matched: []
    })
  }
}
