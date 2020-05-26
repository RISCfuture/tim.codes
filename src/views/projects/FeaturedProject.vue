<template>
  <div>
    <h1><a :href="project.websites[0].url">{{i18nData.name}}</a></h1>
    <p>{{i18nData.description}}</p>
    <ul class="tags">
      <li class="type">{{i18nType}}</li>
      <li class="language" v-for="language in i18nLanguages" :key="language">{{language}}</li>
      <li class="library" v-for="library in i18nLibraries" :key="library">{{library}}</li>
    </ul>
    <ul class="websites">
      <li v-for="website in project.websites" :key="website.url">
        <a :href="website.url">{{i18nWebsiteType(website.type)}}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { mixins } from 'vue-class-component'
  import AbstractProject from './AbstractProject'

  export default class FeaturedProject extends mixins(AbstractProject) {
  }
</script>

<style scoped lang="scss">
  @import '~mq-sass/stylesheets/mq-sass';

  div {
    margin-bottom: 20px;

    @include mq(large) {
      margin: 20px;
      max-width: calc(50% - 40px);
    }
  }

  h1 {
    text-align: center;
  }
</style>
