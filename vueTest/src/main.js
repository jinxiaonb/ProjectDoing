import Vue from "../node_modules/vue/dist/vue.min.js";

import app from './components/app';
import login from './components/login';

Vue.config.debug = true;

new Vue(app);

new Vue(login);