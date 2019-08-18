import Vue from 'vue'
import Vuex, { Store, StoreOptions } from 'vuex'

export default function useVuex<S>(
  localVue: typeof Vue,
  storeOptions: StoreOptions<S>
): Store<S> {
  localVue.use(Vuex)
  return new Store<S>(storeOptions)
}
