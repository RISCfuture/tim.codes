import itBehavesLikeAnAbstractProject from './sharedExamples'
import FeaturedProject from '@/views/home/sections/projects/FeaturedProject.vue'

describe('FeaturedProject.vue', () => {
  // eslint-disable-next-line mocha/no-setup-in-describe
  itBehavesLikeAnAbstractProject(FeaturedProject)
})
