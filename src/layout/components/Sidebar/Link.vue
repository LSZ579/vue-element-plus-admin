<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'
import {computed} from 'vue'
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
 setup(props) {
    const isExternals = computed(() => isExternal(props.to))
    const type = computed(() => {
      if (isExternals.value) {
        return 'a'
      }
      return 'router-link'
    })
    const linkProps = (to) => {
      if (isExternals.value) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to
      }
    }
    return {
      isExternals,
      linkProps,
      type
    }
  }
}
</script>
