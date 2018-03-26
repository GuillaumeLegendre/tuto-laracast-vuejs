document.addEventListener('turbolinks:load', () => {

  Vue.component('task', {
    template: "#task-template",

    data() {
      return {
        isVisible: true
      };
    },

    methods: {
      hideTask(){
        this.isVisible = false;
      }
    }
  });

});
