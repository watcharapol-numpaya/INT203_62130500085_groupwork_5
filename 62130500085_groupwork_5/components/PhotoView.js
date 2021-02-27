app.component('photo-view', {
    props: {
        tasks: {
            type: Array,
            require: true
        }

    },
    template:
        /*html*/`
      
   
        <div class="bg-black p-8 flex border mb-10 mt-2 " v-show="tasks.hide">

            <img v-bind:src="tasks.src" class="bg-black mx-auto  h-5/6" v-show="tasks.hide" width="500">

          <div>
              <i class="material-icons text-white text-3xl cursor-pointer" v-on:click="toggleShow(index)">
           highlight_off
             </i>.
          </div>
        </div>
    
 
    ` 
})