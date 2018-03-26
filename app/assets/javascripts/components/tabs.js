document.addEventListener('turbolinks:load', () => {

  Vue.component('tabs', {
    template: "#tabs-template",

    data() {
      return {
        tabs: []
      };
    },

    created() {
      this.tabs = this.$children;
    },

    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab =>{
          tab.isActive = (tab.name == selectedTab.name)
        });
      }
    }
  });

});
