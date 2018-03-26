document.addEventListener('turbolinks:load', () => {

  Vue.component('task-list', {
    template: "#task-list-template",

    data() {
      return {
        tasks: [
          { id: 1, description: 'task1', completed: true },
          { id: 2, description: 'task2', completed: true },
          { id: 3, description: 'task3', completed: false },
          { id: 4, description: 'task4', completed: true },
          { id: 5, description: 'task5', completed: false }
        ]
      };
    },

  });

});
