document.addEventListener('turbolinks:load', () => {

  Vue.component('board', {
    template: "#board-template",

    data() {
      return {
        message: 'Hello world!',
        names: ['bob', 'martha', 'john'],
        newName: '',
        buttonTitle: 'Now the title is being set through Javascript',
        isLoading: false,
        tasks: [
          { description: 'task1', completed: true },
          { description: 'task2', completed: true },
          { description: 'task3', completed: false },
          { description: 'task4', completed: true },
          { description: 'task5', completed: false }
        ]
      };
    },

    computed:{
      reversedMessage() {
        return this.message.split('').reverse().join('');
      },

      incompletedTasks() {
        return this.tasks.filter(task => ! task.completed)
      },

      completedTasks() {
        return this.tasks.filter(task => task.completed)
      }
    },

    methods: {
      addName() {
        this.names.push(this.newName);
        this.newName = '';
      },
      toggleClass(){
        this.isLoading = true;
      }
    },

    mounted() {
      document.querySelector('#trigger-add-name').addEventListener('click', () => {
        console.log('hello');
        let newNameInput = document.querySelector('#input-new-name');
        this.names.push(newNameInput.value);
        this.newName = ''; // newNameInput.value= '';
      });
    }
  });

});
