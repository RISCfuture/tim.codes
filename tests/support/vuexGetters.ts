import { Module } from 'vuex'

function getState<S>(module: Module<S, {}>): S {
  return (<() => S>module.state)()
}

export default function getter<State, ReturnType>(
  module: Module<State, {}>, name: string
): () => ReturnType {
  const getterFunc = module.getters![name]
  return function curriedGetter(): ReturnType {
    return getterFunc(getState(module), module.getters, {}, null)
  }
}
