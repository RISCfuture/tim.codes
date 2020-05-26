import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Project, WebsiteType } from '@/store/types/projects'

interface I18nData {
  name: string;
  description: string;
  achievements: string[];
}

@Component
export default class AbstractProject extends Vue {
  @Prop({ type: Object, required: true }) public project!: Project

  get i18nData(): I18nData {
    return <I18nData>(<unknown> this.$t(`projects.${this.project.identifier}`))
  }

  get i18nType(): string {
    return <string> this.$t(`project.type.${this.project.type}`)
  }

  get i18nLanguages(): string[] {
    return this.project.languages.map(l => <string> this.$t(`project.language.${l}`))
  }

  get i18nLibraries(): string[] {
    return this.project.libraries.map(l => <string> this.$t(`project.library.${l}`))
  }

  public i18nWebsiteType(type: WebsiteType): string {
    return <string> this.$t(`project.website_type.${type}`)
  }
}
