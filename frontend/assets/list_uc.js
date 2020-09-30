import axios from "axios";
import config from "./config/config";
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


export default {
    beforeMount() {},

    data() {
        return {
            universalContents: [],


        };

    },

    created() {},

    computed: {},

    methods: {



        loadUC() {
            axios.get(config.url_api, {headers:{token}})
        }


    }

};

