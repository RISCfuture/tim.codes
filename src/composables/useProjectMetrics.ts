import * as Sentry from '@sentry/vue'
import type { WebsiteType } from '@/types/projects'

export function useProjectMetrics() {
  function trackProjectClick(projectId: string, linkType: WebsiteType, featured: boolean) {
    Sentry.metrics.count('project_link_click', 1, {
      attributes: {
        project_id: projectId,
        link_type: linkType,
        featured: String(featured)
      }
    })
  }

  return { trackProjectClick }
}
