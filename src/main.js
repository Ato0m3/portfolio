// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faCaretDown, faGraduationCap, faBriefcase, faLanguage, faRunning, faGavel, faBars} from '@fortawesome/free-solid-svg-icons'
import { faMoon} from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faMoon, faSun, faCaretDown, faGraduationCap, faBriefcase, faLanguage, faRunning, faGavel, faLinkedin, faGithub, faGitlab, faBars)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
  // Vue.directive('click-outside', {
  //   bind: function (el, binding, vnode) {
  //     el.clickOutsideEvent = function (event) {
  //       // here I check that click was outside the el and his children
  //       if (!(el == event.target || el.contains(event.target))) {
  //         // and if it did, call method provided in attribute value
  //         vnode.context[binding.expression](event);
  //       }
  //     };
  //     document.body.addEventListener('click', el.clickOutsideEvent)
  //   },
  //   unbind: function (el) {
  //     document.body.removeEventListener('click', el.clickOutsideEvent)
  //   },
  // })
}
