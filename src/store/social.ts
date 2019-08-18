import { GetterTree, Module } from 'vuex'
import { Profile } from '@/store/types/social'

interface SocialState {
  profiles: Profile[];
}

export default function makeSocialModule(profiles: Profile[]): Module<SocialState, {}> {
  const state: () => SocialState = () => ({ profiles })

  const getters: GetterTree<SocialState, {}> = {
    profiles(s: SocialState): Profile[] {
      return s.profiles
    }
  }

  return { state, getters }
}
