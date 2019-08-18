import { GetterTree, Module } from 'vuex'
import { Career } from '@/store/types/bio'

interface BioState {
  careers: Career[];
}

export default function makeBioModule(careers: Career[]): Module<BioState, {}> {
  const state: () => BioState = () => ({ careers })

  const getters: GetterTree<BioState, {}> = {
    careers(s: BioState): Career[] { return s.careers }
  }

  return { state, getters }
}
