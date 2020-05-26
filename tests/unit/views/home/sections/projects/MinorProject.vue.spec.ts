import itBehavesLikeAnAbstractProject from './sharedExamples'
import MinorProject from '@/views/home/sections/projects/MinorProject.vue'

describe('MinorProject.vue', () => {
  // eslint-disable-next-line mocha/no-setup-in-describe
  itBehavesLikeAnAbstractProject(MinorProject)
})
