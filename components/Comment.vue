<template>
  <div>
    <div class="bb mb4">
      <div class="mb1">
        <span class="i">{{item.id}}</span>
        <nuxt-link :to="'/user/' + item.by">{{item.by}}</nuxt-link>
        <template v-if="item.time">
          {{item.time | timeSince}} ago
        </template>
      </div>
      <div class="f6" v-html="item.text"></div>
      <div class="i f6 gray">kids: {{item.kids}}</div>
    </div>
    <ul class="ml3">
      <comment v-for="id in item.kids" :key="id" :id="id"></comment>
    </ul>
  </div>
</template>

<script>
import axios from "~/plugins/axios";

export default {
  name: "comment",
  data() {
    return {
      item: {},
      kids: []
    };
  },
  props: ["id"],
  // `asyncData()` is not available in components, so you have to use `beforeMount()`
  async beforeMount() {
    const response = await axios.get(`item/${this.id}.json`);
    this.item = response.data;
  },
  // Once it has mounted, load items. I think this allows the parent to be displayed while the children are still loading.
  async mounted() {
    if (this.item.kids) {
      const idToPromise = id => axios.get(`item/${id}.json`);
      const kidPromises = this.item.kids.map(idToPromise);
      const kidResponses = await Promise.all(kidPromises);
      this.kids = kidResponses.map(res => res.data);
    }
  }
};
</script>