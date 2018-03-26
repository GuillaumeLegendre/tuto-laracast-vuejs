document.addEventListener('turbolinks:load', () => {

  Vue.component('tab', {
    template: "#tab-template",

    props: {
      name: { required: true },
      selected: { default: false }
    },

    computed: {
      href() {
        return '#' + this.name.toLowerCase().replace(/ /g, '-')
      }
    },

    data() {
      return {
        isActive: false
      };
    },

    mounted() {
      this.isActive = this.selected;
    }
  });

});
