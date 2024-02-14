<template>
  <footer>
    {{ t('footer.text', { year: copyrightYear }) }}
    <a href="https://github.com/RISCfuture/tim.codes">{{ t('footer.linkText') }}</a>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, d } = useI18n()

const copyrightYear = d(new Date(), 'yearOnly')
</script>

<style scoped lang="scss">
footer {
  padding: 5px 10px;
  font-size: 12px;
  text-align: center;
}
</style>
