const app = Vue.createApp({
  data() {
    return {
      count: 0,
      text: "點擊加1!",
    };
  },
});

//掛載（Mount）到網頁上某個 DOM 元素
app.mount(".container");
