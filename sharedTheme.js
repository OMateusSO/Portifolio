import { ref, watch } from 'vue';


const isBrowser = typeof window !== 'undefined';


export const lightDark = ref(isBrowser ? localStorage.getItem('darkMode') === 'true' : false);


watch(lightDark, (newValue) => {
  if (isBrowser) {
    localStorage.setItem('darkMode', newValue.toString());
    document.body.classList.toggle('dark-mode', newValue);
  }
});

// Adicionar a classe no carregamento inicial
if (isBrowser && lightDark.value) {
  document.body.classList.add('dark-mode');
}