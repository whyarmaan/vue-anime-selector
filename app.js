const vm = Vue.createApp({
    data() {
        return {
            animeData: [],
            loading: false,
            modalOpened: false,
            selectedModalAnime: 0,
            genres: [
                {
                    id: 0,
                    genre: "Action"
                },
                {
                    id: 1,
                    genre: "Adventure"
                },
                {
                    id: 2,
                    genre: "Cars"
                },
                {
                    id: 3,
                    genre: "Comedy"
                },
                {
                    id: 4,
                    genre: "Dementia"
                },
                {
                    id: 5,
                    genre: "Demons"
                },
                {
                    id: 6,
                    genre: "Mystrey"
                },
                {
                    id: 7,
                    genre: "Drama"
                },
                {
                    id: 8,
                    genre: "Ecchi"
                },
                {
                    id: 9,
                    genre: "Fantasy"
                },
                {
                    id: 10,
                    genre: "Game"
                },
                {
                    id:11,
                    genre: "Hentai"
                },
                {
                    id:12,
                    genre: "Historical"
                },
            ],
            selectedID: null,
            currentWidth: window.innerWidth
        }
    },
    methods: {
        setId(id) {
            this.selectedID = id;
        },
        setModal(modalValue, anime) {
            this.selectedModalAnime = anime;
            this.modalOpened = modalValue;
        },
        onchange(e) {
            console.log(e.target.value)
            this.setId(e.target.value);
        }
    },
    watch: {
        async selectedID(){
            console.log("HELLO")
            this.loading = true
            if(this.selectedID){
                const url = `https://api.jikan.moe/v3/genre/anime/${this.selectedID}/1`
                const data = await fetch(url)
                const jsonData = await data.json()
                this.animeData = jsonData.anime
            }
            this.loading = false
        },
    }
}).mount("#app");

setInterval(() => {
    vm.currentWidth = window.innerWidth;
}, 1000)