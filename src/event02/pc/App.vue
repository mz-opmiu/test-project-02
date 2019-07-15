<template>
  <div>
    <p>pc</p>
    <section id="section1"></section>
    <section id="section2"></section>
    <section id="section3"></section>
  </div>
</template>

<style lang="scss">
section {
  width: 100%;
  height: 1000px;
  &#section1 {
    background: blue;
  }
  &#section2 {
    background: blueviolet;
  }
  &#section3 {
    background: red;
  }
}
</style>

<script>
import { getViewport } from '@/js/utils/getViewport.js'
import meta from '@/event01/js/metaInfo.json'

export default {
  metaInfo: getViewport(meta)
}
</script>

