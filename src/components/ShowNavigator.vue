<template>
  <div>
    <h2>TV Show App</h2>

    <input class="input" type="text" v-model="input" placeholder="Search for show"/>
    <button class="button"  @click="getData">Search</button>
    <span v-if="items.length !==0">
      <h4> Filter by Genre </h4>
      <select  class="input" v-model="filter">
      <option v-for="genre in genres" :value= genre.value :key=genre> {{genre.label}}</option>
      </select>
    </span>

    <vue-horizontal responsive class="horizontal">
      <section v-for="item in filteredList" :key="item">
          <div >
            <img class="image" :src= "getImage(item)" @click="getDetails(item)" />
          </div>
         <div>
          <h4>{{ item.show.name }}</h4>
          <h4> Genres: </h4> 
          <span v-for=" genre in getGenres(item)" :key=genre> {{genre}} <br> </span> 
          <h4>Rating: </h4>
          {{getRating(item)}}
        </div>
      </section>  
    </vue-horizontal>

  </div>

<show-modal v-if="showModal" :selectedItem="this.selectedItem" @close-modal="closeModal"></show-modal>

</template>



<script>
import axios from 'axios'
import VueHorizontal from "vue-horizontal";
import ShowModal from "./ShowModal.vue";

export default {
  name: 'show-navigator',
  components: {
    VueHorizontal,
    ShowModal
  },
    data () {
    return {
      items: [],
      selectedItem : {},
      filter: "",
      genres:[{value: "", label: "" },
              {value: "Comedy", label: "Comedy"},
              {value: "Action", label: "Action"},
              {value: "Drama", label: "Drama"},
              {value: "Family", label: "Family"},
              {value: "Thriller", label: "Thriller"},
              {value: "Music", label: "Music"}],
      input: "",
      showModal : false
    }
  },
  computed: {
    filteredList() {
      let filtered = this.items;
      //Filter shows based on selected genre
      if(this.filter !== "") {
          filtered = this.items.filter( shows => shows.show.genres.includes(this.filter)) 
      }
      // Sort by rating from high to low
      filtered.sort(function(a, b) {
      return b.show.rating.average - a.show.rating.average
      });

    return filtered;
}
  },

  methods: {
 

    getDetails(item){
      this.selectedItem=item;
      this.showModal = true;
    },

    closeModal(){
      this.showModal = false;
    },

    getGenres(item){
      let genres = item.show.genres;
      if(genres.length === 0){
        genres = ['N/A']
      }
      return genres
    },

    getRating(item){
      let rating = item.show.rating.average;
      if(rating === null){
        rating = "N/A"
      }
      return rating;
    },

    async getData() {
      try {
        const url = new URL("https://api.tvmaze.com/search/shows");
        url.searchParams.append("q", this.input);
        const response = await axios.get(url);
        this.items = response.data;
      } catch (e) {
        console.log("error happened" + e)
      }
    },

    getImage(item) {
      let image = "";
      let obj = item.show.image;
      if(obj !== null){
          if ('medium' in obj){
          image = item.show.image.medium;
      }
      }
      else {
        image = "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6";
      }
      return image;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.input {
  height:  32px;
  margin: 2px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
}

.horizontal{
 padding: 50px;
 background: #ffffff;
 margin: 30px ;
}

.button {
  background-color: #009688; /* Green */
  height:  32px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
section {
  padding: 16px 24px;
  margin: 10px;
  background: #f5f5f5;
  align-items: center;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
}


.image {
  height: 295px;
  width: 210px;
}


</style>
