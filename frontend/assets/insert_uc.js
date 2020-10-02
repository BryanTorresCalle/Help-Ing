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

            types: []


        };

    },

    created() {
        this.loadTpyes();
    },

    computed: {},

    methods: {


        loadTpyes(){

            axios.get(config.url_api + "type")
            .then(res => {
                let data = res.data.info;
                for(let i in data){
                    let type = {name: ""}
                    type.name = data[i].name;
                    this.types.push(type);
                    console.log(type);
                    console.log(this.types);
                }
            })
            .catch(err => console.log(err))

        },


        createUC() {
            
            
            if(this.uc.icon = ""){
                this.uc.icon = "https://image.flaticon.com/icons/png/512/4/4327.png"
            }
            console.log(this.uc);
            if(this.uc.title.length > 0 && this.uc.author.length > 0 ){

            axios
                .post(config.url_api + "universal_content/uc", this.uc)
                .then(res => {
                    console.log(res);
                    this.uc = {
                        title: "",
                        author: "",
                        url: "",
                        file: "",
                        type: "",
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