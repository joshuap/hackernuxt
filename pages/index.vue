<template>
  <div class="f1 code">
    Hello World
    <ul>
      <li v-for="user in users" :key="user.id">{{user.login}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  computed: mapState([ // mapState maps from the store to the component.
    "users"
  ])
};
</script>