<template>
<div>
  <input v-model="inputCategoryText" type="text" class="form-control">
  <button v-on:click="SearchCategories()">検索</button>
  <div class="row">
    <div class="columns large-3 medium-6" v-for="stream in streamLists" :key="stream">
      <div class="card"> 
          <div class="stream-text">{{ stream.name }}</div>
           <img :src=stream.box_art_url v-on:click="SelectCategories(stream.id, stream.box_art_url)">
      </div>
    </div>
  </div>

  <label v-text="selectCategory"></label>
  <img :src=selectCategoryImgSrc>

  <input v-model="inputChannelText" type="text" class="form-control">
  <button v-on:click="SearchChannels()">検索</button>
    <div class="row">
    <div class="columns large-3 medium-6" v-for="channel in channelLists" :key="channel">
      <div class="card"> 
          <div class="channel-text">{{ channel.title }}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      inputCategoryText:"",
      inputChannelText:"",
      selectCategory:"",
      selectCategoryImgSrc:"",
      streamLists: [],
      channelLists: [],
    }
  },
  methods: {
    // ゲームカテゴリ検索
    SearchCategories() {
      var searchkey = this.inputCategoryText;
      this.axios.get('https://api.twitch.tv/helix/search/categories?query='+searchkey)
      .then((response) => {
        console.log(response.data.data)
        this.streamLists = response.data.data;
      }).catch((error) => { console.log(error); });
    },

    // 選択してるゲームカテゴリ保持
    SelectCategories(categoryId, box_art_ur) {
      this.selectCategory = categoryId;
      this.selectCategoryImgSrc =  box_art_ur;
    },

    // 配信の検索
    SearchChannels() {
      var serchkey = this.inputChannelText;
      this.axios.get('https://api.twitch.tv/helix/streams?game_id=' + this.selectCategory + '&type=live&first=100&language=ja')
      .then((response) => {
        console.log(response.data.data)
        var streams = response.data.data;
        if(serchkey != ""){
          this.channelLists = streams.filter(s => (s.title.indexOf(serchkey) != -1));
        }else{
          this.channelLists = streams;
        }        
      }).catch((error) => { console.log(error); });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  line-height: 1.5;
  overflow-x: hidden;
  font-family: Roboto, serif;
}

h1, h2, h3, h4 {
  margin: 1em 0 .5em;
  line-height: 1.25;
}

#navbar {
  background-color: black;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  text-align: center;
}

#app {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  align-content: center;
}

.content {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.content div {
  margin: 1em;
}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 35vh;
  overflow-y: auto;
}

.card {
  display: block;
  width: 250px;
  align-items: center;
  justify-content: center;
  padding: 1em;
}

.stream-text {
  height: 20px;
}

.stats {
  display: flex;
  flex-direction: row;
}
</style>
