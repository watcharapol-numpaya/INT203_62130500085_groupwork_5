app.component('photo-item', {
    props: {
        tasks: {
            type: Array,
            require: true
        }

    },
    template:

        /*html*/ `
       
<li v-for="(task,index) in tasks" class="list-none " v-show="task.picblock">

    <div class="text-grey-darker text-lg font-medium flex justify-center ">
     {{task.title}}
          <button class=" focus:outline-none text-pink-500 " v-on:click="toggleLike(index)">

         <i class="material-icons ml-2  transform hover:scale-125 " v-show="!task.like">
            favorite_border
         </i>

        <i class="material-icons ml-2 transform hover:scale-125 " v-show="task.like">
            favorite
        </i>

        </button>
    </div>

        <img v-bind:src="task.src" v-on:click="toggleShow(index)"
  class="cursor-pointer w-64 flex self-center rounded-full shadow-lg mb-6 b-10 border-yellow-400 border-8 m-4  mx-auto transform hover:scale-110 "
  v-show="!task.hide">
    
  <photo-view :tasks="task" v-on:click="toggleShow(index)" ></photo-view>



</li>
 

 
    `,
    methods: {
        toggleShow(index) {
            this.$emit('toggle-show', index);
        },
        toggleLike(index) {
            this.$emit('toggle-like', index);
        }

    },

    computed: {
        countLove() {
            return this.tasks.filter(t => t.like).length
        },


    }


})