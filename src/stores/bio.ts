import { defineStore } from 'pinia'
import { careers } from '@/data/bio'

export const useBioStore = defineStore('bio', {
  state: () => ({ careers })
})
