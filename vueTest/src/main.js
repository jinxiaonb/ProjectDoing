import Vue from "../node_modules/vue/dist/vue.min.js";

import app from './components/app';
import login from './components/login';
import test from './components/test';
import demo from './components/demo';

Vue.config.debug = true;

new Vue(app);

new Vue(login);

new Vue(test);

new Vue(demo);