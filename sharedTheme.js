import { ref, watch } from 'vue'

const isBrowser = typeof window !== 'undefined'

export const lightDark = ref(true)

if (isBrowser) {
  const saved = localStorage.getItem('darkMode')
  lightDark.value = saved ? saved === 'true' : true
  document.documentElement.classList.toggle('dark', lightDark.value)
}

watch(lightDark, (newValue) => {
  if (!isBrowser) return

  localStorage.setItem('darkMode', newValue.toString())
  document.documentElement.classList.toggle('dark', newValue)
})
