import axios from "axios";
import config from "./config/config";
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


export default {
    beforeMount() { },

    data() {
        return {
            uc: {
                title: "",
                author: "",
                url: "",
                file: "",
                type: "",
                icon: ""
            },

            types: [{ value: 0 }, { value: 1 }, { value: 2 }]


        };

    },

    created() {

    },

    computed: {},

    methods: {


        createUC() {
            this.uc.type = 0
            if(this.uc.title.length > 0 && this.uc.author.length > 0 ){

            axios
                .post(config.url_api + "/uc", this.uc)
                .then(res => {
                    console.log(res);
                    this.uc = {
                        title: "",
                        author: "",
                        url: "",
                        file: "",
                        type: 0,
                        icon: ""
                    };
                    alert("El contenido se ha agregado exitosamente");
                })
                .catch(err => {
                    alert("Se ha producido un error ")
                    console.log(err);
                });
        } else {alert("LLene los campo correctamente");}


    }

    }
};