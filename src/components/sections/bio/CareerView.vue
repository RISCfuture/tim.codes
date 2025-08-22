<template>
  <tr>
    <td class="category">
      {{ category }}
    </td>
    <td class="accomplishments">
      <p v-if="career.inline">
        {{ inlineAccomplishments }}
      </p>
      <ul v-else>
        <li v-for="accomplishment in accomplishments" :key="accomplishment">
          {{ accomplishment }}
        </li>
      </ul>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { Career } from '@/types/bio'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { list } from '@/i18n/functions'

const { t } = useI18n()

const props = defineProps<{ career: Career }>()

const category = computed(() => t(props.career.i18nKey))
const accomplishments = computed(() => props.career.accomplishments.map((a) => t(a.i18nKey)))
const inlineAccomplishments = computed(() => list(accomplishments.value, 'standard-narrow'))
</script>

<style scoped lang="scss">
@use '@/assets/styles/vars' as *;

td {
  padding-bottom: 10px;
  font-size: 150%;
  color: $alt-text-color;
  vertical-align: top;
}

td.category {
  padding-right: 10px;
  font-weight: bold;
  text-align: right;
  white-space: nowrap;
}

td.accomplishments {
  text-align: left;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  p {
    margin: 0;
  }
}
</style>
