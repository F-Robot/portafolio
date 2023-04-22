import { isRef, ref, watchEffect, type Ref } from 'vue'

export const useScroollbar = (initialValue: boolean | Ref<boolean> = true) => {
  const showScrollbar = isRef<boolean>(initialValue)
    ? initialValue
    : ref(initialValue)

  const showScroll = () => {
    document.body.classList.remove('overflow-y-hidden')
    document.body.classList.add('overflow-auto')
  }
  const hiddeScroll = () => {
    document.body.classList.remove('overflow-auto')
    document.body.classList.add('overflow-y-hidden')
  }

  watchEffect(() => (showScrollbar.value ? showScroll() : hiddeScroll()))

  return { showScrollbar }
}
