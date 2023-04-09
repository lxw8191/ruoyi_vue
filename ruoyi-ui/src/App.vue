<template>
  <div id="app">
    <router-view />
<<<<<<< HEAD
    <theme-picker />
=======
>>>>>>> 46444bd (RuoYi-Vue 1.0)
  </div>
</template>

<script>
<<<<<<< HEAD
import ThemePicker from "@/components/ThemePicker";

export default {
  name: "App",
  components: { ThemePicker },
    metaInfo() {
        return {
            title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
            titleTemplate: title => {
                return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
            }
        }
    }
};
</script>
<style scoped>
#app .theme-picker {
  display: none;
}
</style>
=======
export default  {
  name:  'App'
}
</script>
>>>>>>> 46444bd (RuoYi-Vue 1.0)
