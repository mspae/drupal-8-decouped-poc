/**
 * Boot up the Vue instance and wire up the router.
 */
import Vue = require('vue')
import appView = require('./views/app.vue');
const app = new Vue(appView)
const router = new Router()

/**
 * Router.
 */
router.on('/articles/:uuid', function (uuid) {
	app.view = 'article-view'
	app.params.uuid = uuid
})

router.init('/')
