<template>
<<<<<<< HEAD
  <div ref="rightPanel" class="rightPanel-container">
=======
  <div ref="rightPanel" :class="{show:show}" class="rightPanel-container">
>>>>>>> 46444bd (RuoYi-Vue 1.0)
    <div class="rightPanel-background" />
    <div class="rightPanel">
      <div class="rightPanel-items">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
=======
import { addClass, removeClass } from '@/utils'

>>>>>>> 46444bd (RuoYi-Vue 1.0)
export default {
  name: 'RightPanel',
  props: {
    clickNotClose: {
      default: false,
      type: Boolean
<<<<<<< HEAD
=======
    },
    buttonTop: {
      default: 250,
      type: Number
>>>>>>> 46444bd (RuoYi-Vue 1.0)
    }
  },
  computed: {
    show: {
      get() {
        return this.$store.state.settings.showSettings
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val
        })
      }
<<<<<<< HEAD
    }
=======
    },
    theme() {
      return this.$store.state.settings.theme
    },
>>>>>>> 46444bd (RuoYi-Vue 1.0)
  },
  watch: {
    show(value) {
      if (value && !this.clickNotClose) {
        this.addEventClick()
      }
<<<<<<< HEAD
    }
  },
  mounted() {
=======
      if (value) {
        addClass(document.body, 'showRightPanel')
      } else {
        removeClass(document.body, 'showRightPanel')
      }
    }
  },
  mounted() {
    this.insertToBody()
>>>>>>> 46444bd (RuoYi-Vue 1.0)
    this.addEventClick()
  },
  beforeDestroy() {
    const elx = this.$refs.rightPanel
    elx.remove()
  },
  methods: {
    addEventClick() {
      window.addEventListener('click', this.closeSidebar)
    },
    closeSidebar(evt) {
<<<<<<< HEAD
      const parent = evt.target.closest('.el-drawer__body')
=======
      const parent = evt.target.closest('.rightPanel')
>>>>>>> 46444bd (RuoYi-Vue 1.0)
      if (!parent) {
        this.show = false
        window.removeEventListener('click', this.closeSidebar)
      }
<<<<<<< HEAD
=======
    },
    insertToBody() {
      const elx = this.$refs.rightPanel
      const body = document.querySelector('body')
      body.insertBefore(elx, body.firstChild)
>>>>>>> 46444bd (RuoYi-Vue 1.0)
    }
  }
}
</script>

<<<<<<< HEAD
=======
<style>
.showRightPanel {
  overflow: hidden;
  position: relative;
  width: calc(100% - 15px);
}
</style>

>>>>>>> 46444bd (RuoYi-Vue 1.0)
<style lang="scss" scoped>
.rightPanel-background {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .3s cubic-bezier(.7, .3, .1, 1);
  background: rgba(0, 0, 0, .2);
  z-index: -1;
}

.rightPanel {
  width: 100%;
  max-width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .05);
  transition: all .25s cubic-bezier(.7, .3, .1, 1);
  transform: translate(100%);
  background: #fff;
  z-index: 40000;
}

<<<<<<< HEAD
=======
.show {
  transition: all .3s cubic-bezier(.7, .3, .1, 1);

  .rightPanel-background {
    z-index: 20000;
    opacity: 1;
    width: 100%;
    height: 100%;
  }

  .rightPanel {
    transform: translate(0);
  }
}

>>>>>>> 46444bd (RuoYi-Vue 1.0)
.handle-button {
  width: 48px;
  height: 48px;
  position: absolute;
  left: -48px;
  text-align: center;
  font-size: 24px;
  border-radius: 6px 0 0 6px !important;
  z-index: 0;
  pointer-events: auto;
  cursor: pointer;
  color: #fff;
  line-height: 48px;
  i {
    font-size: 24px;
    line-height: 48px;
  }
}
</style>
