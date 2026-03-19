import { computed } from 'vue'
import type { Project, WebsiteType } from '@/types/projects'
import { useI18n } from 'vue-i18n'

export default function useProject(project: Project) {
  const i18n = useI18n()

  const i18nData = computed(() => i18n.tm(`projects.${project.identifier}`))
  const i18nType = computed(() => i18n.t(`project.type.${project.type}`))
  const i18nLanguages = computed(() =>
    project.languages.map((lang) => i18n.t(`project.language.${lang}`)),
  )
  const i18nLibraries = computed(() =>
    project.libraries.map((lib) => i18n.t(`project.library.${lib}`)),
  )
  const i18nWebsiteType = (type: WebsiteType) => i18n.t(`project.websiteType.${type}`)

  return {
    i18nData,
    i18nType,
    i18nLanguages,
    i18nLibraries,
    i18nWebsiteType,
  }
}
