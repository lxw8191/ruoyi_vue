<<<<<<< HEAD
<template>
  <component :is="type" v-bind="linkProps(to)">
=======

<template>
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)">
>>>>>>> 46444bd (RuoYi-Vue 1.0)
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
<<<<<<< HEAD
      type: [String, Object],
      required: true
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.to)
    },
    type() {
      if (this.isExternal) {
        return 'a'
      }
      return 'router-link'
    }
  },
  methods: {
    linkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
=======
      type: String,
      required: true
    }
  },
  methods: {
    linkProps(url) {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
>>>>>>> 46444bd (RuoYi-Vue 1.0)
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
<<<<<<< HEAD
        to: to
=======
        is: 'router-link',
        to: url
>>>>>>> 46444bd (RuoYi-Vue 1.0)
      }
    }
  }
}
</script>
