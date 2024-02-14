import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useResumeStore } from '../resume'

describe('resume store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('sortedJobs', () => {
    it('returns jobs sorted by start and end date', () => {
      const resume = useResumeStore()
      expect(resume.sortedJobs.map((j) => j.identifier)).toEqual([
        'adept',
        'occupier',
        'trusted',
        'google',
        'OMG',
        'square',
        'recurly',
        'scribd',
        'tickle',
        'amazon'
      ])
    })
  })
})
