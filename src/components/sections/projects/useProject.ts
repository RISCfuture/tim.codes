import { computed } from 'vue'
import { type Project, WebsiteType } from '@/types/projects'
import { useI18n } from 'vue-i18n'

interface I18nData {
  name: string
  description: string
  achievements: string[]
}

export default function useProject(project: Project) {
  const { t, tm } = useI18n()

  const i18nData = computed(() => tm(`projects.${project.identifier}`) as I18nData)
  const i18nType = computed(() => t(`project.type.${project.type}`))
  const i18nLanguages = computed(() =>
    project.languages.map((lang) => t(`project.language.${lang}`))
  )
  const i18nLibraries = computed(() => project.libraries.map((lib) => t(`project.library.${lib}`)))
  const i18nWebsiteType = (type: WebsiteType) => t(`project.websiteType.${type}`)

  return {
    i18nData,
    i18nType,
    i18nLanguages,
    i18nLibraries,
    i18nWebsiteType
  }
}
