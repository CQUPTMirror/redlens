<template>
  <div class="mirror-list">
    <div class="mirror-container" v-if="choice==1">
      <MirrorCard
        v-for="item in mirrorDataFilter" :key="item.value"
        class="mirror-card"
        :type="choice"
        :name="item.name"
        :lastUpdate="item.last_update"
        :status="item.status"
        :size="item.size"
        :isShrinked="isShrinked"
      ></MirrorCard>
    </div>
    <div class="mirror-container" v-else>
      <MirrorCard
        v-for="item in proxyData" :key="item.value"
        class="mirror-card"
        :type="choice"
        :name="item.name"
        :upstream="item.upstream"
      ></MirrorCard>
    </div>
  </div>
</template>

<script>
import MirrorCard from "./MirrorCard.vue";
import { EventBus } from "../main.js" 

export default {
  name: "MirrorList",
  data() {
    return {
      mirrorData: [],
      proxyData: [],
      isShrinked: false,
      choice: 1
    }
  },
  components: {
    MirrorCard
  },
  computed: {
    mirrorDataFilter() {
      return this.mirrorData.filter(
        value => value.is_master && value.status !== "paused"
      )
    }
  },
  methods:{
    onResize() {
      if (window.innerWidth > 1250) {
        this.isShrinked = false
      } else {
        this.isShrinked = true
      }
    }
  },
  created() {
    let baseURL='http://mirror.cqupt.edu.cn'
    this.$axios
      .get(
        `${
          process.env.NODE_ENV === "production"
            ? window.location.origin
            : baseURL
        }/static/tunasync.json`
      )
      .then(resp => {
        this.mirrorData = resp.data;
      })
    this.$axios
      .get(
        `${
          process.env.NODE_ENV === "production"
            ? window.location.origin
            : baseURL
        }/static/proxies.json`
      )
      .then(resp => {
        this.proxyData = resp.data;
      });
    window.addEventListener('resize', this.onResize)
  },
  mounted() {
    EventBus.$on('listUpdateMsg', (choice) => {
          this.choice = choice
    })
    
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/theme/normal.styl';

.mirror-card
  background-color: $float-bg;
  border: none;
  height: 144px;

.mirror-container
  display grid
  grid-template-columns auto auto
  column-gap 32px
  row-gap 32px

@media (max-width: 991px)
  .mirror-container
    grid-template-columns auto
    padding: 0 !important;

@media (prefers-color-scheme: dark)
  .mirror-card
    background-color: $float-bg-dark;
</style>