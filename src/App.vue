<template>
  <div id="app">
    <header>
      <div class="inner-con">
        <h1>
          <a href="https://www.kinder.com/kr/ko/" target="_blank"
            ><img src="@/assets/logo.jpg" alt="kinder"
          /></a>
        </h1>
        <nav>
          <router-link to="/2019wish">Main</router-link>
          <router-link to="/2019wish/gallery">Wish Ranking</router-link>
          <router-link to="/2019wish/storelist">Store List</router-link>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/scss/base/_reset-eric.scss';
@import '@/scss/page/_layout.scss';
</style>

<style lang="scss" scoped>
$image-url: './assets/';

header {
  width: 100%;
  height: 73px;
  margin: auto;
  background: url($image-url+'bg-header.jpg') repeat-x left bottom;

  h1 {
    float: left;
    margin: 19px 0 0 0;
    padding: 0;
  }

  nav {
    float: right;
    font-size: 0;
    margin: 28px 0 0 0;
    padding: 0;

    a {
      display: inline-block;
      height: 16px;
      list-style: none;
      margin-left: 117px;
      background: url($image-url+'gnbs.png') 0 0 no-repeat;

      &:nth-child(1) {
        width: 51px;
      }

      &:nth-child(2) {
        width: 157px;
        background-position-x: -171px;
      }

      &:nth-child(3) {
        width: 117px;
        background-position-x: -445px;
      }

      &.router-link-exact-active {
        background-position-y: bottom;
      }
    }
  }
}
</style>