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
      .catch(err =>{
        console.log(err)
        this.mirrorData = [
          {"name":"ubuntu","is_master":true,"status":"success","last_update":"2020-07-22 01:15:17 +0800","last_update_ts":1595351717,"last_started":"2020-07-21 22:09:24 +0800","last_started_ts":1595340564,"last_ended":"2020-07-22 01:15:17 +0800","last_ended_ts":1595351717,"next_schedule":"2020-07-22 07:15:17 +0800","next_schedule_ts":1595373317,"upstream":"rsync://archive.ubuntu.com/ubuntu/","size":"1.41T"},
          {"name":"pypi","is_master":true,"status":"syncing","last_update":"2020-07-21 19:06:25 +0800","last_update_ts":1595329585,"last_started":"2020-07-21 19:11:29 +0800","last_started_ts":1595329889,"last_ended":"2020-07-21 19:06:25 +0800","last_ended_ts":1595329585,"next_schedule":"0001-01-01 00:00:00 +0000","next_schedule_ts":-62135596800,"upstream":"https://pypi.python.org/","size":"7.17T"},
          {"name":"centos","is_master":true,"status":"success","last_update":"2020-07-21 23:51:03 +0800","last_update_ts":1595346663,"last_started":"2020-07-21 23:39:39 +0800","last_started_ts":1595345979,"last_ended":"2020-07-21 23:51:03 +0800","last_ended_ts":1595346663,"next_schedule":"2020-07-22 05:51:03 +0800","next_schedule_ts":1595368263,"upstream":"rsync://msync.centos.org/CentOS/","size":"300G"}
          ]
      })
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
      .catch(err =>{
        console.log(err)
        this.proxyData = [
          {"name":"pypi","is_master":true,"status":"syncing","last_update":"2020-07-21 19:06:25 +0800","last_update_ts":1595329585,"last_started":"2020-07-21 19:11:29 +0800","last_started_ts":1595329889,"last_ended":"2020-07-21 19:06:25 +0800","last_ended_ts":1595329585,"next_schedule":"0001-01-01 00:00:00 +0000","next_schedule_ts":-62135596800,"upstream":"https://pypi.python.org/","size":"7.17T"},
          ]
      })
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
  gap 32px 32px

@media (max-width: 1200px)
  .mirror-container
    gap 24px 24px

@media (max-width: 991px)
  .mirror-container
    grid-template-columns auto
    padding: 0 !important

@media (prefers-color-scheme: dark)
  .mirror-card
    background-color: $float-bg-dark;
</style>