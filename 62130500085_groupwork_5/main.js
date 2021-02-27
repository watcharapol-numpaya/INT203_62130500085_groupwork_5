const app = Vue.createApp({
    data() {
        return {
            search: '',
            iconSearch: true,
            blockCancel: false,
            blockInput: false,



            tasks: [{
                    title: 'Shiba inu',
                    src: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/26114711/Shiba-Inu-standing-in-profile-outdoors.jpg',
                    like: false,
                    picblock: true
                },
                {
                    title: 'Golden',
                    src: 'https://i.pinimg.com/originals/44/52/eb/4452eb2986b307f62b82d622f21ea90e.jpg',
                    like: false,
                    picblock: true
                },
                {
                    title: 'Pug',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Mops_oct09_cropped2.jpg',
                    like: false,
                    picblock: true
                },
                {
                    title: 'chiwawa',
                    src: 'https://i.pinimg.com/originals/7b/7b/b8/7b7bb80169c31df6b4251aa967758020.jpg',
                    like: false,
                    picblock: true
                }
            ]
        }
    },

    methods: {
        toggleShow(index) {
            //  this.query[index].showdetail = !this.query[index].showdetail
            this.tasks[index].hide = !this.tasks[index].hide
        },
        toggleLike(index) {
            this.tasks[index].like = !this.tasks[index].like

        },
        toggleSearch() {
            
            this.blockInput = !this.blockInput;
            this.iconSearch = !this.iconSearch;
            this.blockCancel = !this.blockCancel;

            this.search = '';

            for (let i = 0; i < this.tasks.length; i++) {
                this.tasks[i].picblock = true;
            }

        },
        searching(word) {
            this.search =word;
           
            for (let i = 0; i < this.tasks.length; i++) {

                if (this.tasks[i].title.toLowerCase().includes(this.search.toLowerCase())) {

                    this.tasks[i].picblock = true;
                } else {
                    this.tasks[i].picblock = false;
                }
            }
        }


    },
    computed: {
        countLove() {
            return this.tasks.filter(t => t.like).length
        },
        filterForNotFound() {

            return this.tasks.filter(t => !t.picblock).length
        },
        // query() {
        //     return this.tasks.filter(q => {

        //         return q.title.toLowerCase().includes(this.search.toLowerCase())

        //     })

        // }


    }


})
// Vue.createApp(app).mount('#app')