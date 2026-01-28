import { ref, watch } from 'vue'

const isBrowser = typeof window !== 'undefined'

export const lightDark = ref(
  isBrowser ? localStorage.getItem('darkMode') === 'false' : true
)

watch(lightDark, (newValue) => {
  if (isBrowser) {
    localStorage.setItem('darkMode', newValue.toString())
    document.documentElement.classList.toggle('dark', newValue)
  }
})

if (isBrowser && lightDark.value) {
  document.documentElement.classList.add('dark')
}
