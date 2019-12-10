<template>
  <div class="mirror-list">
    <a-row :gutter="32">
      <a-col v-for="item in mirrorData" :key="item.value" :xs="24" :lg="12">
        <MirrorCard
          v-if="item.status!=='paused'"
          class="mirror-card"
          :name="item.name"
          :lastUpdate="item.last_update"
          :status="item.status"
          :size="item.size"
        ></MirrorCard>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import MirrorCard from "./MirrorCard.vue";

export default {
  name: "MirrorList",
  data() {
    return {
      mirrorData: []
    };
  },
  components: {
    MirrorCard
  },
  mounted() {
    this.$axios
      .get(`${window.location.origin}/static/tunasync.json`)
      .then(resp => {
        this.mirrorData = resp.data;
        window.console.log(this.mirrorData);
      });
  }
};
</script>

<style scoped>
.mirror-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.mirror-card {
  border: none;
  margin-bottom: 32px;
  height: 144px;
}
@media (max-width: 576px) {
  .ant-col-xs-24 {
    padding: 0 !important;
  }
}
</style>