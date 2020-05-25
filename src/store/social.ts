import { GetterTree, Module } from 'vuex'
import { Profile } from '@/store/types/social'
import RootState from '@/store/root'

interface SocialState {
  profiles: Profile[];
}

export default function makeSocialModule(profiles: Profile[]): Module<SocialState, RootState> {
  const state: () => SocialState = () => ({ profiles })

  const getters: GetterTree<SocialState, RootState> = {
    profiles(s: SocialState): Profile[] {
      return s.profiles
    }
  }

  return { state, getters }
}
