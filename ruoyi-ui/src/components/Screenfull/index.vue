<template>
  <div>
    <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" @click="click" />
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
<<<<<<< HEAD
      if (!screenfull.isEnabled) {
        this.$message({ message: '你的浏览器不支持全屏', type: 'warning' })
=======
      if (!screenfull.enabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
>>>>>>> 46444bd (RuoYi-Vue 1.0)
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
<<<<<<< HEAD
      if (screenfull.isEnabled) {
=======
      if (screenfull.enabled) {
>>>>>>> 46444bd (RuoYi-Vue 1.0)
        screenfull.on('change', this.change)
      }
    },
    destroy() {
<<<<<<< HEAD
      if (screenfull.isEnabled) {
=======
      if (screenfull.enabled) {
>>>>>>> 46444bd (RuoYi-Vue 1.0)
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style scoped>
.screenfull-svg {
  display: inline-block;
  cursor: pointer;
  fill: #5a5e66;;
  width: 20px;
  height: 20px;
  vertical-align: 10px;
}
</style>
