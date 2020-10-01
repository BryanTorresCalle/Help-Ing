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

    created() {
        this.loadUC();
    },

    computed: {},

    methods: {



        loadUC() {
            axios.get(config.url_api )
            .then(res => {
                let data = res.data.info ;
                for(let i in data){
                    let uc = {title: "", author: "", url: "", file: "", type: ""};
                    uc.title = data[i].title;
                    uc.author = data[i].author;
                    uc.url = data[i].url;
                    uc.file = data[i].file;
                    uc.type = data[i].type;
                    this.universalContents.push(uc);
                    console.log(uc)

                }
            })
            .catch(err => console.log(err))
        }


    }

};

