<template>
  <div class="mirror-list">
    <a-row :gutter="32" v-if="choice==1">
      <a-col v-for="item in mirrorDataFilter" :key="item.value" :xs="24" :lg="12">
        <div class="mirror-card">
          <MirrorCard
            class="mirror-card"
            :type="choice"
            :name="item.name"
            :lastUpdate="item.last_update"
            :status="item.status"
            :size="item.size"
          ></MirrorCard>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="32" v-else>
      <a-col v-for="item in proxyData" :key="item.value" :xs="24" :lg="12">
        <div class="mirror-card">
          <MirrorCard
            class="mirror-card"
            :type="choice"
            :name="item.name"
            :upstream="item.upstream"
          ></MirrorCard>
        </div>
      </a-col>
    </a-row>
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
      choice: 0
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
  created() {
     this.$axios
      .get(
        `${
          process.env.NODE_ENV === "production"
            ? window.location.origin
            : "http://mirror.redrock.team"
        }/static/tunasync.json`
      )
      .then(resp => {
        this.mirrorData = resp.data;
        // window.console.log(this.mirrorData);
      })
    this.$axios
      .get(
        `${
          process.env.NODE_ENV === "production"
            ? window.location.origin
            : "http://mirror.redrock.team"
        }/static/proxies.json`
      )
      .then(resp => {
        this.proxyData = resp.data;
        // window.console.log(this.proxyData);
      });
  },
  mounted() {
   

    EventBus.$on('listUpdateMsg', (choice) => {
          this.choice = choice
          // window.console.log(this.choice)
      })
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/theme/normal.styl';

.mirror-card
  background-color: $float-bg;

.mirror-card
  border: none;
  margin-bottom: 32px;
  height: 144px;

@media (max-width: 576px)
  .ant-col-xs-24
    padding: 0 !important;

@media (prefers-color-scheme: dark)
  .mirror-card
    background-color: $float-bg-dark;
</style>