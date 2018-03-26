document.addEventListener('turbolinks:load', () => {

  Vue.component('message', {
    template: "#message-template",

    props: ['title', 'body']
  });

});
