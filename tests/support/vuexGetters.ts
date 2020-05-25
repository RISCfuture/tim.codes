import { Module } from 'vuex'
import RootState from '@/store/root'

function getState<S>(module: Module<S, RootState>): S {
  return (<() => S>module.state)()
}

export default function getter<State, ReturnType>(
  module: Module<State, RootState>, name: string
): () => ReturnType {
  const getterFunc = module.getters![name]
  return function curriedGetter(): ReturnType {
    return getterFunc(getState(module), module.getters, {}, null)
  }
}
