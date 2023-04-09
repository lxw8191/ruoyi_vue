<template>
  <div>
    <span style="color: #1ab394;text-align: center; font-size: 50px" >Welcome back PSS System! </span>
    <el-divider></el-divider>

    <div class="demo-image__placeholder" >
      <div class="block" >
        <span class="demonstration"></span>
        <el-image :src="src" style="width: 100%"></el-image>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      src: 'http://mms0.baidu.com/it/u=251308263,3285249772&fm=253&app=138&f=JPEG&fmt=auto&q=75&fmt=auto&q=75?w=889&h=500'
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>

