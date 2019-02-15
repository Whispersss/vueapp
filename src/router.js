import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/Movie/Movie.vue'
import Music from './views/Music/Music.vue'
import Book from './views/Book/Book.vue'
import Photo from './views/Photo/Photo.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/Movie',
      component:Movie
    },{
      path:'/Music',
      component:Music
    },{
      path:'/Book',
      component:Book
    },
    {
      path:'/Photo',
      component:Photo
    }
  ]
})
