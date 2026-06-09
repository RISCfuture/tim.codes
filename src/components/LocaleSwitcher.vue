<template>
  <div class="locale-switcher">
    <select
      id="locale-select"
      name="locale"
      :aria-label="t('localeSwitcher.label')"
      :value="displayedLocale"
      class="locale-select"
      @change="onChange"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { DEFAULT_LOCALE, isSupportedLocale, localeOptions, storeLocale } from '@/i18n/locales'
import { loadLocaleMessages } from '@/i18n/messages'

const { t, locale } = useI18n({ useScope: 'global' })

const options = localeOptions()

// Browser locales we don't translate fall back to English content, so the
// switcher reflects English rather than showing no selection.
const displayedLocale = computed(() =>
  isSupportedLocale(locale.value) ? locale.value : DEFAULT_LOCALE,
)

async function onChange(event: Event) {
  const code = (event.target as HTMLSelectElement).value
  if (!isSupportedLocale(code)) return
  // Fetch the locale's strings before activating it so the switch is atomic
  // rather than flashing the English fallback while the chunk loads.
  await loadLocaleMessages(code)
  locale.value = code
  storeLocale(code)
}
</script>

<style scoped lang="scss">
.locale-switcher {
  display: flex;
  justify-content: center;
}

.locale-select {
  padding: 2px 4px;
  font-family: inherit;
  font-size: inherit;
  color: var(--footer-text);
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 4px;
  opacity: 0.7;
  transition:
    opacity 0.2s ease,
    color 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &:focus-visible {
    outline: none;
    box-shadow: var(--focus-ring);
    opacity: 1;
  }

  // Native option lists render with the system palette; keep them legible in
  // both schemes rather than inheriting the muted footer color.
  option {
    color: initial;
  }
}

@media only print {
  .locale-switcher {
    display: none !important;
  }
}
</style>
