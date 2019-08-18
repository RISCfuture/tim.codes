import { RawLocation } from 'vue-router'

export default class RouterMock {
  location: RawLocation | null = null

  push(location: RawLocation) {
    this.location = location
  }
}
