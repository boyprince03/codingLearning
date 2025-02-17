import{NavBar} from './module/navbar.js';
NavBar();
import {Banner} from './module/carousel.js';
Banner();
import{Year,changeMessage,currentTime} from './module/allDates.js'
Year('Year');
changeMessage('changeText');
currentTime('currentTime');
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';


const app = createApp({
    data() {
      return {
        BIGIMAGE: true
      }
    },
    methods:{
        // 顯示圖片/關閉圖片
        showImage(){
            this.BIGIMAGE=!this.BIGIMAGE;

        },
    }

  });
  app.mount('#Article');


const app2 = createApp(
    {
        data(){
            return{
                message: '<span style="color: red">This should be red.</span>',
                ob:{
                    id: 'container',
                    class: 'wrapper',
                    href:'abc'
                },
                ME:'我是文字',
                IfText: false
            }
        },
        // 自訂函數
        methods:{
            toggleTest(){
                this.IfText = !this.IfText;
            }
        }
    }
  );

  app2.mount('#app');
