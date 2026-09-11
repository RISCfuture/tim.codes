import { getClient, replayIntegration } from '@sentry/vue'

/**
 * Attaches Sentry's Session Replay recorder to the running client.
 *
 * The recorder is the largest part of the Sentry SDK and only a sampled slice of sessions is ever
 * recorded, so it lives behind a dynamic import: this module is its own chunk, fetched after the
 * app has mounted rather than alongside the entry bundle. Sampling decisions still belong to
 * `Sentry.init()`'s `replays*SampleRate` options, which the integration reads when it starts.
 *
 * Nothing downstream depends on replay being active, so an init that never produced a client
 * simply leaves it off.
 */
export function addSessionReplay(): void {
  getClient()?.addIntegration(replayIntegration({ maskAllText: true, blockAllMedia: true }))
}
