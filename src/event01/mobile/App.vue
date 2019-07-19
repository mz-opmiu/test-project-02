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

<style lang="scss">
@import '@/scss/vars/_variables-m.scss';
@import '@/scss/page/_layout.scss';

$event-name: 'event01';
$image-url: '../../assets/' + $event-name + '/images/' + $device-kind;
</style>
