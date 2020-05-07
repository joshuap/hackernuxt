<template>
  <div>
    <header>
      <nav class="flex w75 justify-around f4 code">
        <nuxt-link class="link underline-hover" to="/">Home</nuxt-link>
        <nuxt-link class="link underline-hover" to="/new">New</nuxt-link>
        <nuxt-link class="link underline-hover" to="/show">Show</nuxt-link>
        <nuxt-link class="link underline-hover" to="/ask">Ask</nuxt-link>
        <nuxt-link class="link underline-hover" to="/jobs">Jobs</nuxt-link>
      </nav>
    </header>
    <nuxt></nuxt>
  </div>
</template>

<style>
.nuxt-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>