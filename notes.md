## misc.
- https://vueschool.io/courses/nuxtjs-fundamentals
- https://vueschool.io/courses/static-site-generation-with-nuxtjs?friend=nuxt
- https://egghead.io/courses/create-a-news-app-with-vue-js-and-nuxt

## log
### l1
```sh
node --version
npx vue-cli init nuxt-community/starter-template hackernuxt
cd hackernuxt/
npm install
npm run dev
git init .
git add .
gc -m 'initial'
```

Delete `layouts/default.vue`

Replace: `pages/index.vue`:
```
<template>
  <div>
    Hello World
  </div>
</template>
```

Delete eslint task in `nuxt.config.js`

### l2
```sh
npm i tahyons tachyons-debug
```

Edit `nuxt.config.js` to add `css:` props:
```js
module.exports = {
  // ...

  /*
  ** Load CSS files
  */
  css: [
  'tachyons/css/tachyons.min.css',
  'tachyons-debug/css/tachyons-debug.min.css'
  ],
}
```

### l3

`npm i axios`

Update `nuxt.config.js`:

```js
{
  build: {
    vendor: ['axios'] // This means it only gets included *once*, instead of every time it's imported.
  }
}
```

Create plugins/axios.js`:

```js
import axios from 'axios'

export default axios.create({
  baseURL: "hyttps://api.github.com/"
})
```

Add to `pages/index.vue`:
```vue
<script>
import axios from '~/plugins/axios'

export default {
  asyncData() {
    return axios.get('users')
    .then(res => ({
      users: res.data
    }))
  }
}
</script>
```

Edit markup in `pages/index.vue`:
```vue
<ul>
  <li v-for="user in users" :key="user.id">{{user.login}}</li>
</ul>
```

### l4
Move state to `store/index.js`:
```js
export const statue = ()=> ({
  users: [
    {id: 0, login: "josh"}
  ]
})
```

Add computed property to `pages/index.vue`:
```js
export default {
  computed: mapState([ // mapState maps from the store to the component.
    "users"
  ])
};
```

Now add mutations and actions to store to load state from GitHub when the Nuxt server starts:

```js
export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}
export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await axios.get("users")
    const users = response.data
    commit("setUsers", users)
  }
}
```

### l5
Change store to HackerNews API. Edit `plugins/axios.js`:
```js
import axios from 'axios'

export default axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/"
})
```

Load `topstories.json` in `store/index.js`:

```js
import axios from '~/plugins/axios'

export const state = ()=> ({
  users: [
    {ids: [], items: []}
  ]
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await axios.get('topstories.json')
    const ids = response.data
    const tenIds = ids.slice(0, 10)

    const itemsPromises = tenIds.map(id => axios.get(`item/${id}.json`))
    const itemsResponses = await Promise.all(itemsPromises)
    const items = itemsResponses.map(res => res.data)

    commit('setItems', items)
  }
}
```

Display items in `pages/index.vue`:

```vue
<template>
  <div class="code">
    <ul class="list pa2">
      <li v-for="item in items" :key="item.id">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  computed: mapState([ // mapState maps from the store to the component.
    "items"
  ])
};
</script>
```

### l6
`store/index.js`:
```js
```

Extract to component
`components/Item.vue`:
```vue
<template>
  <Items>
  </Items>
</template>

<script>
import Items from "~/components/Items.vue"

export default {
  components: {
    Items
  },
  async fetch({store}) {
    await store.dispatch("LOAD_ITEMS", "topstories.json")
  }
}
</script>
```

`plugins/axios.js`:
```js
```

### l7
`store/index.js`:
```js
```

`pages/index.vue`:
```vue
```

`plugins/axios.js`:
```js
```

### l8
`store/index.js`:
```js
```

`pages/index.vue`:
```vue
```

`plugins/axios.js`:
```js
```

### l9
`store/index.js`:
```js
```

`pages/index.vue`:
```vue
```

`plugins/axios.js`:
```js
```

### l10
`store/index.js`:
```js
```

`pages/index.vue`:
```vue
```

`plugins/axios.js`:
```js
```

### l11
`store/index.js`:
```js
```

`pages/index.vue`:
```vue
```

`plugins/axios.js`:
```js
```

### l12
`store/index.js`:
```js
```

`pages/index.vue`:
```vue
```

`plugins/axios.js`:
```js
```

### l13
`store/index.js`:
```js
```

`pages/index.vue`:
```vue
```

`plugins/axios.js`:
```js
```

## vscode wishlist

- Complete file names in project when typing them (i.e. components/Index.vue)

## emmet!!
https://docs.emmet.io/
https://code.visualstudio.com/docs/editor/emmet
https://code.visualstudio.com/blogs/2017/08/07/emmet-2.0

## npx
https://www.npmjs.com/package/npx
https://github.com/npm/npx
Intro blog post: https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b

Like `bundle exec`?

## vue-cli
https://cli.vuejs.org/

> Vue CLI is fully configurable without the need for ejecting. This allows your project to stay up-to-date for the long run.

What is "ejecting"? It's from `react-scripts`:

> Note: this is a one-way operation. Once you eject, you can’t go back!
>
> If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
>
> Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
>
> You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## pnpm
> Fast, disk space efficient package manager
https://pnpm.js.org/

> pnpm uses hard links and symlinks to save one version of a module only ever once on a disk. When using npm or Yarn for example, if you have 100 projects using the same version of lodash, you will have 100 copies of lodash on disk. With pnpm, lodash will be saved in a single place on the disk and a hard link will put it into the node_modules where it should be installed.
>
> As a result, you save gigabytes of space on your disk and you have a lot faster installations! If you'd like more details about the unique node_modules structure that pnpm creates and why it works fine with the Node.js ecosystem, read this small article: Flat node_modules is not the only way.
https://medium.com/pnpm/flat-node-modules-is-not-the-only-way-d2e40f7296a3

## vuex
https://vuex.vuejs.org/
> Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.
- [ ] Read the intro page

## Computer Setup

Sign GPG commits: https://gist.github.com/mort3za/ad545d47dd2b54970c102fe39912f305
