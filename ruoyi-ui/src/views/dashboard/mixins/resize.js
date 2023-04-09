import { debounce } from '@/utils'

export default {
  data() {
    return {
<<<<<<< HEAD
      $_sidebarElm: null,
      $_resizeHandler: null
    }
  },
  mounted() {
    this.initListener()
  },
  activated() {
    if (!this.$_resizeHandler) {
      // avoid duplication init
      this.initListener()
    }

    // when keep-alive chart activated, auto resize
    this.resize()
  },
  beforeDestroy() {
    this.destroyListener()
  },
  deactivated() {
    this.destroyListener()
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
=======
      $_sidebarElm: null
    }
  },
  mounted() {
    this.$_initResizeEvent()
    this.$_initSidebarResizeEvent()
  },
  beforeDestroy() {
    this.$_destroyResizeEvent()
    this.$_destroySidebarResizeEvent()
  },
  activated() {
    this.$_initResizeEvent()
    this.$_initSidebarResizeEvent()
  },
  deactivated() {
    this.$_destroyResizeEvent()
    this.$_destroySidebarResizeEvent()
  },
  methods: {
    $_resizeHandler() {
      return debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)()
    },
    $_initResizeEvent() {
      window.addEventListener('resize', this.$_resizeHandler)
    },
    $_destroyResizeEvent() {
      window.removeEventListener('resize', this.$_resizeHandler)
    },
>>>>>>> 46444bd (RuoYi-Vue 1.0)
    $_sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.$_resizeHandler()
      }
    },
<<<<<<< HEAD
    initListener() {
      this.$_resizeHandler = debounce(() => {
        this.resize()
      }, 100)
      window.addEventListener('resize', this.$_resizeHandler)

      this.$_sidebarElm = document.getElementsByClassName('sidebar-container')[0]
      this.$_sidebarElm && this.$_sidebarElm.addEventListener('transitionend', this.$_sidebarResizeHandler)
    },
    destroyListener() {
      window.removeEventListener('resize', this.$_resizeHandler)
      this.$_resizeHandler = null

      this.$_sidebarElm && this.$_sidebarElm.removeEventListener('transitionend', this.$_sidebarResizeHandler)
    },
    resize() {
      const { chart } = this
      chart && chart.resize()
=======
    $_initSidebarResizeEvent() {
      this.$_sidebarElm = document.getElementsByClassName('sidebar-container')[0]
      this.$_sidebarElm && this.$_sidebarElm.addEventListener('transitionend', this.$_sidebarResizeHandler)
    },
    $_destroySidebarResizeEvent() {
      this.$_sidebarElm && this.$_sidebarElm.removeEventListener('transitionend', this.$_sidebarResizeHandler)
>>>>>>> 46444bd (RuoYi-Vue 1.0)
    }
  }
}
