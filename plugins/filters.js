import Vue from 'vue'
import {formatDistanceToNow} from 'date-fns'

Vue.filter('timeSince', timestamp => {
  const time = Number(timestamp) * 1000
  return formatDistanceToNow(time)
})