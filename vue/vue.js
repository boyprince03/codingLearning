import{NavBar} from './module/navbar.js';
// NavBar();
import {Banner} from './module/carousel.js';
// Banner();
import{Year,changeMessage,currentTime} from './module/allDates.js'
Year('Year');
changeMessage('changeText');
currentTime('currentTime');
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';


const app = createApp({
    data() {
      return {
        // BIGIMAGE: false,
        // NavBar
            menuItems:[
            {id: 'NavAbout', text:'關於Steve', link: '#Abouts'},
            {id: 'NavSkills', text:'相關技能', link: '#Skills'},
            {id: 'NavWorks', text:'作品集', link: '#Works'},
            {id: 'NavContacts', text:'聯絡表單', link: '#Contacts'}
            ],
            // 輪播圖 id class text
            Carousel: [
                {id: 'One', class: 'CarouselImg', text: '廣告文字1', image: '/images/banner/ad001.jpg'},
                {id: 'Two', class: 'CarouselImg', text: '廣告文字2', image: '/images/banner/ad002.jpg'},
                {id: 'Three', class: 'CarouselImg', text: '廣告文字3', image: '/images/banner/ad003.jpg'}
            ],
            currentIndex:0,
            timer:null,
            restartTimeout: null, // 重啟自動輪播的定時器
            worksItems: [
              {class: 'one', text: 'JSP project',image:'/images/frontend.png'},
              {class: 'two', text: 'WebDesign project',image:'/images/javaweb.png'},
              {class: 'three', text: 'Java Project',image:'/images/sql.png'},
              {class: 'four', text: '正在學習',image:'/javascript:;'},
              {class: 'five', text: '正在學習',image:'/javascript:;'},
              {class: 'six', text: '正在學習',image:'/javascript:;'},
              {class: 'seven', text: '正在學習',image:'/javascript:;'},
              {class: 'eight', text: '正在學習',image:'/javascript:;'},
              {class: 'nine', text: '正在學習',image:'/javascript:;'}
            ],
            selectedIndex: null // 用來記錄點擊的索引
        }
    },

    computed:{
        // 動態生成綁定在style 屬性上的物件
        // worksItemsStyle(){
        //     return this.worksItems[this.currentIndex];    
        // }
    },
    methods: {
        // 顯示圖片/關閉圖片
        showImage(index){
          this.selectedIndex = index;
        },
        closeImage(){
          this.selectedIndex = null;
        },

        // 自動或手動呼叫時均可使用的下一張圖片方法
        nextSlide() {
          this.currentIndex = (this.currentIndex + 1) % this.Carousel.length;
        },
        // 自動或手動呼叫時均可使用的上一張圖片方法
        prevSlide() {
          this.currentIndex =
            (this.currentIndex - 1 + this.Carousel.length) % this.Carousel.length;
        },
        // 自動輪播：僅啟動計時器，不做額外操作
        startCarousel(){
          if(!this.timer){
            this.timer = setInterval(this.nextSlide, 3000);
          }
        },
    
        // 停止自動輪播
        stopCarousel(){
          if(this.timer){
            clearInterval(this.timer);
            this.timer = null;
          }
        },
                // 延遲重啟自動輪播
    restartCarousel() {
      setTimeout(() => {
        this.startCarousel();
      }, 3000);  // 3秒後重啟
    },
  
        // 手動點擊時使用的「下一張」控制
        handleNext() {
          // 手動操作時，先停止自動輪播，再切換圖片，最後重啟輪播
          this.stopCarousel();
          this.nextSlide();
          // 重啟輪播時延遲 3000ms，再以自動間隔 3000ms 開始
          this.startCarousel();
        },
        // 手動點擊時使用的「上一張」控制
        handlePrev() {
          this.stopCarousel();
          this.prevSlide();
          this.startCarousel();
        }
      },
      mounted(){
        this.startCarousel();
      },
      beforeUnmount(){
        this.stopCarousel();
      },
      


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
