import type { Store } from './types'

export let activeStore: Store | undefined

export const setActiveStore = (store: Store | undefined) =>
  (activeStore = store)

export const getActiveStore = () => activeStore

export function onReset(callback: () => void) {
  const store = getActiveStore()
  if (store == null) throw ''
  store._p._r[store.$id] = [...(store._p._r[store.$id] || []), callback]
}
