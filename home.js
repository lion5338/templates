const {
    onMounted,
    onUpdated,
    onUnmounted,
    ref,
    // reactive,
    getCurrentInstance
  } = Vue;
  
  //Define Vue app
  const App = {
    data() {
      return {
        input: ref(""),
        message: "Press Me!"
      };
    },
    methods: {},
    setup() {
      const isLogin = ref(false);
      const checkLogin = () => {
        if (
          localStorage.getItem("userId") !== null &&
          localStorage.getItem("token") !== null
        ) {
          isLogin.value = true;
        } else {
          isLogin.value = false;
        }
      };
  
      return {
        isLogin,
        checkLogin
      };
    }
  };
  // Create new Vue app
  const app = Vue.createApp(App);
  app.use(ElementPlus);
  app.mount("#vuetest");
  