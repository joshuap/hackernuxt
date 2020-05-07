<template>
  <div class="ma3">
    <div class="title f4">
      {{item.title}}
      <template v-if="item.url">
        (<a class="f7" :href="item.url">{{item.url | hostname}}</a>)
      </template>
    </div>
    <div class="details i f7">
      {{item.score}} by
      <nuxt-link :to="'/user/' + item.by">{{item.by}} </nuxt-link>
      {{item.time | timeSince}} ago
      <template v-if="item.descendants">
        <nuxt-link :to="'/item/' + item.id">
          {{item.descendants}} comments
        </nuxt-link>
      </template>
    </div>
    <ul>
      <comment v-for="id in item.kids" :key="id" :id="id"></comment>
    </ul>
  </div>
</template>

<script>
import Comment from "~/components/Comment.vue"
import axios from '~/plugins/axios'

export default {
  components: { Comment },
  data() {
    return {
      item: {}
    }
  },
  async asyncData({route}) {
    const response = await axios.get(`/item/${route.params.id}.json`)
    return {
      item: response.data
    }
  }
}
</script>