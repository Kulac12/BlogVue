import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router/index.js';


const app = createApp(App);
app.use(router);
app.mount('#app');
//ctrl+K+c toplu yorum satırına alma ctrl+k+u yorum satırından çıkar
// const app = createApp({   // bir vue instance oluşturmak için kulanıcaz. yani vue nun özelliklerini ve davranışlarını tutan bir nesne
//     data(){
//         return{
//             name: 'Eda',
//         };
//     },
//     template:'<h1> Benim adım {{name}}</h1>',
// }); 

// app.mount('#app');    //index.html deki divimizin idsini girdik. 
//Buradaki değişikliklerin görülmesi için vite.config.js dosyasında değişiklik yapmamız gerekli