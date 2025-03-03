import { Year, changeMessage, currentTime } from "./module/allDates.js";
Year("Year");
changeMessage("changeText");
currentTime("currentTime");
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const app = createApp({
  data() {
    return {
      menuItems: [
        { id: "NavAbout", text: "關於Steve", link: "#Abouts" },
        { id: "NavSkills", text: "相關技能", link: "#Skills" },
        { id: "NavWorks", text: "作品集", link: "#Works" },
        { id: "NavContacts", text: "聯絡表單", link: "#Contacts" },
      ],
      // 輪播圖 id class text
      Carousel: [
        {
          id: "One",
          class: "CarouselImg",
          text: "廣告文字1",
          image: "/images/banner/ad001.jpg",
        },
        {
          id: "Two",
          class: "CarouselImg",
          text: "廣告文字2",
          image: "/images/banner/ad002.jpg",
        },
        {
          id: "Three",
          class: "CarouselImg",
          text: "廣告文字3",
          image: "/images/banner/ad003.jpg",
        },
      ],
      currentIndex: 0,
      timer: null,
      restartTimeout: null, // 重啟自動輪播的定時器
      worksItems: [
        { class: "one", text: "JSP project", image: "/images/frontend.png" },
        {
          class: "two",
          text: "WebDesign project",
          image: "/images/javaweb.png",
        },
        { class: "three", text: "Java Project", image: "/images/sql.png" },
        { class: "four", text: "正在學習", image: "/javascript:;" },
        { class: "five", text: "正在學習", image: "/javascript:;" },
        { class: "six", text: "正在學習", image: "/javascript:;" },
        { class: "seven", text: "正在學習", image: "/javascript:;" },
        { class: "eight", text: "正在學習", image: "/javascript:;" },
        { class: "nine", text: "正在學習", image: "/javascript:;" },
      ],
      selectedIndex: null, // 用來記錄點擊的索引
    };
  },

  methods: {
    showImage(index) {
      this.selectedIndex = index;
    },
    closeImage() {
      this.selectedIndex = null;
    },

    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.Carousel.length;
    },

    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.Carousel.length) % this.Carousel.length;
    },

    startCarousel() {
      if (!this.timer) {
        this.timer = setInterval(this.nextSlide, 3000);
      }
    },
    stopCarousel() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    restartCarousel() {
      setTimeout(() => {
        this.startCarousel();
      }, 3000);
    },

    handleNext() {
      this.stopCarousel();
      this.nextSlide();
      this.startCarousel();
    },
    handlePrev() {
      this.stopCarousel();
      this.prevSlide();
      this.startCarousel();
    },
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    this.stopCarousel();
  },
});

app.mount("#Article");
