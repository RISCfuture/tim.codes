import { defineStore } from 'pinia'
import { profiles } from '@/data/social'

export const useSocialStore = defineStore('social', {
  state: () => ({ profiles })
})
