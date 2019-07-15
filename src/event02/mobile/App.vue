<template>
  <div class="wrap">
    <!-- <img :src="createImg()" alt="" /> -->
  </div>
</template>
<script>
import { getViewport } from '@/js/utils/getViewport.js'
import meta from '@/event01/js/metaInfo.json'

export default {
  metaInfo: getViewport(meta),
  methods: {
    // createImg() {
    //   return require('@/assets/images/m/img.jpg')
    // }
  }
}
</script>
<style lang="scss" scoped>
.wrap {
  width: 720px;
  margin: 0 auto;
  background-color: red;
  font-size: 16px;
}

img {
  width: 100%;
}
</style>
