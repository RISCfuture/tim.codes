<template>
  <main class="not-found-view">
    <section class="terminal">
      <header class="terminal-bar">
        <span class="window-lights" aria-hidden="true">
          <span class="window-light light-close"></span>
          <span class="window-light light-minimise"></span>
          <span class="window-light light-zoom"></span>
        </span>
        <h1 class="terminal-title">
          <span class="status-code">404</span>
          <span class="title-separator" aria-hidden="true">·</span>
          {{ t('notFound.title') }}
        </h1>
      </header>

      <div class="session" aria-hidden="true">
        <div
          v-for="(exchange, exchangeIndex) in printedExchanges"
          :key="exchangeIndex"
          class="exchange"
        >
          <p v-for="(line, lineIndex) in exchange" :key="lineIndex" class="session-line">
            <span v-if="line.prompt" class="prompt">$</span>
            <span class="line-text" :class="`tone-${line.tone}`"
              >{{ line.text
              }}<span
                v-if="exchangeIndex === lastExchangeIndex && lineIndex === lastLineIndex"
                class="cursor"
              ></span
            ></span>
          </p>
        </div>
      </div>
    </section>

    <p class="shell-hint">
      <span class="hint-mark" aria-hidden="true">#</span>
      {{ t('notFound.message') }}
    </p>

    <p class="shell-hint">
      <span class="hint-mark" aria-hidden="true">$</span>
      <router-link class="hint-link" to="/">{{ t('notFound.homeLink') }}</router-link>
    </p>
  </main>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { usePreferredReducedMotion } from '@vueuse/core'
import { sumBy } from 'lodash-es'

/** Widest path echoed back, so a crafted URL cannot stretch the window. */
const MAX_PATH_LENGTH = 36

/** Cadence of the typewriter, in milliseconds per character. */
const TYPING_INTERVAL_MS = 26

type LineTone = 'command' | 'error' | 'status'

interface SessionLine {
  /** Draws the shell prompt ahead of the text. */
  prompt: boolean
  text: string
  tone: LineTone
}

/** One command together with whatever the shell said back; the transcript breathes between these. */
type SessionExchange = SessionLine[]

const { t } = useI18n()
const route = useRoute()
const reducedMotion = usePreferredReducedMotion()

function elide(path: string): string {
  return path.length > MAX_PATH_LENGTH ? `${path.slice(0, MAX_PATH_LENGTH - 1)}…` : path
}

const requestedPath = computed(() => elide(route.fullPath))

/** The transcript in full; the trailing prompt is where the cursor comes to rest. */
const session = computed<SessionExchange[]>(() => [
  [
    { prompt: true, text: `cat ${requestedPath.value}`, tone: 'command' },
    {
      prompt: false,
      text: `cat: ${requestedPath.value}: No such file or directory`,
      tone: 'error',
    },
  ],
  [
    { prompt: true, text: 'echo $?', tone: 'command' },
    { prompt: false, text: '404', tone: 'status' },
  ],
  [{ prompt: true, text: '', tone: 'command' }],
])

function exchangeLength(exchange: SessionExchange): number {
  return sumBy(exchange, ({ text }) => text.length)
}

const totalCharacters = computed(() => sumBy(session.value, exchangeLength))

const typedCharacters = ref(0)

const isPrinting = computed(() => typedCharacters.value < totalCharacters.value)

/** An exchange cut off after `available` characters: earlier lines whole, the current one partial. */
function printedLines(exchange: SessionExchange, available: number): SessionExchange {
  const printed: SessionExchange = []
  let remaining = available

  for (const line of exchange) {
    if (remaining < 0) break

    printed.push({ prompt: line.prompt, tone: line.tone, text: line.text.slice(0, remaining) })
    remaining -= line.text.length
  }

  return printed
}

/** The transcript as far as it has printed, still grouped into exchanges. */
const printedExchanges = computed<SessionExchange[]>(() => {
  let available = typedCharacters.value

  return session.value
    .map((exchange) => {
      const printed = printedLines(exchange, available)
      available -= exchangeLength(exchange)
      return printed
    })
    .filter((printed) => printed.length > 0)
})

const lastExchangeIndex = computed(() => printedExchanges.value.length - 1)

const lastLineIndex = computed(() => (printedExchanges.value.at(-1)?.length ?? 0) - 1)

let typewriter: ReturnType<typeof setInterval> | null = null

function stopTypewriter(): void {
  if (typewriter === null) return

  clearInterval(typewriter)
  typewriter = null
}

/** Types the transcript out character by character, or prints it whole when motion is unwelcome. */
function printSession(): void {
  stopTypewriter()

  if (reducedMotion.value === 'reduce') {
    typedCharacters.value = totalCharacters.value
    return
  }

  typedCharacters.value = 0
  typewriter = setInterval(() => {
    typedCharacters.value += 1
    if (!isPrinting.value) stopTypewriter()
  }, TYPING_INTERVAL_MS)
}

watch([requestedPath, reducedMotion], printSession, { immediate: true })
onUnmounted(stopTypewriter)
</script>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints' as *;

// Semantic colours come from the site's spectral neon palette: the resume tube
// (Hg + green glass, ~546nm) prompts, the projects tube (neon, ~640nm) carries the
// error, and the bio tube (argon/Hg, ~435.8nm) lights the exit status. Light mode
// darkens each tube against paper; dark mode uses the tube and core hues directly.
// Font family names match case-insensitively, so the stack stays lower case.
.not-found-view {
  --terminal-font: ui-monospace, sfmono-regular, menlo, consolas, monospace;
  --terminal-surface: var(--bg-color-elevated);
  --terminal-chrome: var(--bg-color-secondary);
  --terminal-tube: color-mix(in srgb, var(--neon-bio-tube) 80%, #000);
  --terminal-prompt: color-mix(in srgb, var(--neon-resume-tube) 45%, #000);
  --terminal-error: color-mix(in srgb, var(--neon-projects-tube) 60%, #000);
  --terminal-status: color-mix(in srgb, var(--neon-bio-tube) 70%, #000);
  --terminal-glow: none;
  --terminal-halo: color-mix(in srgb, var(--neon-bio-bg-2) 8%, transparent);

  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  padding: 16px;
  overflow-y: auto;
  color: var(--text-color);

  // The window stands in the glow of the same argon tube the site header runs on.
  background:
    radial-gradient(90% 55% at 50% 50%, var(--terminal-halo) 0%, transparent 70%), var(--bg-color);

  @include mq(ipad) {
    gap: 12px;
    padding: 32px;
  }
}

// Dark mode turns the window into a real terminal: near-black surface lit by the
// neon tube and core colours from the spectral palette.
@media (prefers-color-scheme: dark) {
  .not-found-view {
    --terminal-surface: var(--bg-color);
    --terminal-chrome: var(--bg-color-elevated);
    --terminal-tube: var(--neon-bio-core);
    --terminal-prompt: var(--neon-resume-tube);
    --terminal-error: var(--neon-projects-core);
    --terminal-status: var(--neon-bio-core);
    --terminal-glow: 0 0 12px color-mix(in srgb, var(--neon-bio-tube) 60%, transparent);
    --terminal-halo: color-mix(in srgb, var(--neon-bio-bg-1) 55%, transparent);
  }
}

// The site-wide `*` reset states the display font on every element, which outranks
// inheritance, so the window, the shell hints, and each of their descendants name
// the monospace stack.
.terminal,
.terminal *,
.shell-hint,
.shell-hint * {
  font-family: var(--terminal-font);
}

.terminal {
  width: 100%;
  max-width: 44rem;
  margin: auto auto 0;
  overflow: hidden;
  background: var(--terminal-surface);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  box-shadow: var(--card-shadow-hover);
  animation: terminal-wake 260ms ease-out both;
}

.terminal-bar {
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 9px 12px 10px;
  background: var(--terminal-chrome);

  // A lit tube divides the chrome from the session, as it divides the site header
  // from the page.
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    content: '';
    background: var(--terminal-tube);
    box-shadow: var(--terminal-glow);
  }
}

// The dots bloom through the site's shared SVG neon filter (components/NeonFilters.vue).
.window-lights {
  display: flex;
  flex: none;
  gap: 6px;
  filter: url('#neon');
}

.window-light {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.light-close {
  background: var(--neon-projects-tube);
}

.light-minimise {
  background: var(--resume-jobs-color);
}

.light-zoom {
  background: var(--neon-resume-tube);
}

.terminal-title {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-color-secondary);
  letter-spacing: 0.04em;

  @include mq(ipad) {
    font-size: 0.85rem;
  }
}

.status-code {
  color: var(--terminal-status);
  text-shadow: var(--terminal-glow);
}

.title-separator {
  padding: 0 0.2em;
  opacity: 0.6;
}

// Each command sits with the reply it drew; the gap falls only between the pairs.
.session {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding: 14px 12px 18px;
  font-size: 0.8rem;
  line-height: 1.65;

  @include mq(ipad) {
    padding: 20px 18px 26px;
    font-size: 0.95rem;
  }
}

.session-line {
  display: flex;
  gap: 0.65ch;
  margin: 0;
}

.prompt {
  flex: none;
  color: var(--terminal-prompt);
}

.line-text {
  flex: 1;
  min-width: 0;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.tone-error {
  color: var(--terminal-error);
}

.tone-status {
  font-weight: 700;
  color: var(--terminal-status);
  text-shadow: var(--terminal-glow);
}

// The one endlessly repeating element: an idle shell cursor, lit like a tube.
.cursor {
  display: inline-block;
  width: 0.6ch;
  height: 1.05em;
  vertical-align: text-bottom;
  background: var(--terminal-prompt);
  filter: url('#neon');
  animation: cursor-blink 1.06s step-end infinite;
}

.shell-hint {
  display: flex;
  gap: 0.65ch;
  width: 100%;
  max-width: 44rem;
  margin: 0 auto;
  font-size: 0.78rem;
  line-height: 1.6;
  color: var(--text-color-secondary);

  &:last-child {
    margin-bottom: auto;
  }

  @include mq(ipad) {
    font-size: 0.9rem;
  }
}

.hint-mark {
  flex: none;
  color: var(--terminal-prompt);
}

.hint-link {
  color: var(--link-color);
  text-decoration: none;
  border-bottom: 1px dashed currentcolor;

  &:hover,
  &:focus-visible {
    color: var(--link-hover-color);
    border-bottom-style: solid;
  }

  &:focus-visible {
    outline: none;
    box-shadow: var(--focus-ring);
  }
}

@keyframes terminal-wake {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes cursor-blink {
  50% {
    opacity: 0;
  }
}

// Reduced motion lands on the finished state: the transcript prints in one go
// (see `printSession`), the window is already awake, the cursor holds steady.
@media (prefers-reduced-motion: reduce) {
  .terminal {
    animation: none;
  }

  .cursor {
    opacity: 1;
    animation: none;
  }
}

// High-contrast / forced-colors: drop the soft neon bloom for solid, legible
// shapes (WCAG 1.4.11).
@media (prefers-contrast: more), (forced-colors: active) {
  .window-lights,
  .cursor {
    filter: none;
  }

  .terminal-bar::after {
    box-shadow: none;
  }

  .status-code,
  .tone-status {
    text-shadow: none;
  }
}
</style>
