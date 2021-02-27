app.component('photo-search', {
  props: {

    iconsearch: Boolean,
    blockcancel: Boolean,
    blockinput: Boolean
  },
  template:
    /*html*/`
 
    <div class="flex space-x-2  lg:mx-52">
    <input v-model.trim="search" placeholder="search"
      class="text-black  p-2 bg-white rounded border-2 border-blue-300" v-show="blockinput" @keyup.enter="searching(search)"  />

    <button class=" focus:outline-none text-black" v-on:click="toggleSearch()" v-show="iconsearch">
      <i class="material-icons  ">
        search
      </i>
    </button>
 

    <button class="border-2 p-2 bg-red-600 rounded-full focus:outline-none text-black "
      v-on:click="toggleSearch()" v-show="blockcancel">
      cancel
    </button>
  </div>
  
`,
  data() {
    return {
      search: ''

    }

  },
  methods: {
    toggleSearch() {

      this.$emit('toggle-search')

    },
    searching(word) {
      console.log("aaaaa")
      this.$emit('block-search', word);

    }


  } 

})