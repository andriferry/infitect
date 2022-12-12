import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Icon from "@/components/Icon.vue";

import Flicking from '@egjs/vue3-flicking';
import '@egjs/vue3-flicking/dist/flicking.css';
import '@egjs/vue3-flicking/dist/flicking-inline.css';

const app=createApp( App )
app.component( 'icon', Icon )
app.component('Flicking', Flicking);
app.mount( '#app' )
