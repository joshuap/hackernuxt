import Vue from 'vue'
import {formatDistanceToNow} from 'date-fns'
import {parse} from 'url'

Vue.filter('timeSince', timestamp => {
  const time = Number(timestamp) * 1000
  return formatDistanceToNow(time)
})

Vue.filter('hostname', url => parse(url).hostname.replace(/^www\./, ''))