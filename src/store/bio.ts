import { GetterTree, Module } from 'vuex'
import { Career } from '@/store/types/bio'
import RootState from '@/store/root'

interface BioState {
  careers: Career[];
}

export default function makeBioModule(careers: Career[]): Module<BioState, RootState> {
  const state: () => BioState = () => ({ careers })

  const getters: GetterTree<BioState, RootState> = {
    careers(s: BioState): Career[] { return s.careers }
  }

  return { state, getters }
}
