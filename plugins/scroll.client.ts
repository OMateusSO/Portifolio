// plugins/scroll.client.ts
export default defineNuxtPlugin(() => {
  if (!process.client) return

  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem(
      'scrollY',
      String(window.scrollY)
    )
  })

  const saved = sessionStorage.getItem('scrollY')
  if (saved) {
    requestAnimationFrame(() => {
      window.scrollTo(0, Number(saved))
    })
  }
})
