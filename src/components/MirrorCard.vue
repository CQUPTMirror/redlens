<template>
  <a-card
    hoverable
    @click="openSourceUrl"
    @mouseover="isMouseOver=true"
    @mouseleave="isMouseOver=false"
  >
    <div class="brief">
      <div class="icon">
        <i
          class="iconfont"
          :class="infoMap[name]['icon']||'icon-mirror'"
          :style="isMouseOver?{color:infoMap[name]['fill']||'#000'}:{}"
        ></i>

      </div>
      <div class="detail-left">
        <span class="title">{{name}}</span>
        <span class="update" v-if="lastUpdate.indexOf('0001')===-1">
          <span class="lastUpdate">最后更新：</span>
          {{lastUpdate.replace(' +0800','')}}
        </span>
        <span class="update" v-else>
          <span class="lastUpdate">初次同步中...</span>
        </span>
      </div>
    </div>
    <div class="detail">
      <span class="size-num" v-if="size!=='unknown'">{{size}}</span>
      <span class="size-num" v-else></span>
      <a-icon
        id="i-howto"
        v-if="infoMap[name]['help']!==undefined"
        class="icon-i"
        type="question-circle"
        @click.stop="jumpHelpUrl"
      />
      <a-icon class="icon-i" v-if="status=='success'" type="check-circle" width="100" />
      <a-icon class="icon-i" v-else-if="status=='disabled'" type="minus-circle" />
      <a-icon class="icon-i" v-else-if="status=='paused'" type="pause-circle" />
      <a-icon class="icon-i" v-else-if="status=='failed'" type="close-circle" />
      <a-icon class="icon-i" v-else-if="status=='syncing'" type="sync" spin />
      <a-icon class="icon-i" v-else type="question-circle" />

      <a-tooltip trigger="click" title="已复制源地址">
        <a-icon
          id="i-copy"
          v-clipboard:copy="sUrl"
          class="icon-i"
          type="copy"
          v-clipboard:success="copy"
        />
      </a-tooltip>
    </div>
  </a-card>
</template>

<script>
import { MirrorDetail } from "../assets/MirrorDetail.json"
export default {
  name: "MirrorCard",
  props: {
    lastUpdate: String,
    status: String,
    size: String,
    name: String
  },
  data() {
    return {
      isMouseOver: false,
      isModalVisible: false,
      infoMap: MirrorDetail,
      sUrl: `${window.location.href}${this.name}/`
    };
  },
  methods: {
    openSourceUrl: function() {
      window.location.href = this.sUrl;
    },
    jumpHelpUrl: function() {
      window.location.href = `${window.location.origin}/docs/#/mirror/${
        this.infoMap[this.name]["help"]
      }`;
    },
    copy: function() {
      event.stopPropagation();
    }
  }
};
</script>

<style lang="stylus" scope>
.ant-card-body {
  height: 100%;
  display: flex;
  align-items: center;

  .update {
    transform: translateY(10px);
    opacity: 0;
    transform-style: ease-in;
    transition-duration: 0.4s;
  }

  .size-num {
    transform: translateX(10px);
    opacity: 0;
    transform-style: ease-in;
    transition-duration: 0.4s;

    @media (max-width: 576px) {
      display: none;
    }
  }

  .title {
    transform: translateY(10px);
    font-size: 24px;
    font-weight: bold;
    transform-style: ease-in;
    transition-duration: 0.4s;

    @media (max-width: 576px) {
      font-size: 20px;
    }

    @media (max-width: 375px) {
      font-size: 18px;
    }
  }

  &:hover {
    .size-num, .update {
      transform: translateY(0) translateX(0);
      transition-delay: 0.2s;
      transform-style: ease-in;
      transition-duration: 0.4s;
      opacity: 1;
    }

    .title {
      transform: translateY(0px);
      transition: all 0.4s;
    }

    .icon-i {
      transition: all 0.2s;
      opacity: 0;
    }

    #i-copy, #i-howto {
      transform: translateX(0);
      transition: all 0.2s;
      opacity: 1;
    }
  }
}

.brief {
  display: flex;
  align-items: center;
  flex-grow: 1;

  .iconfont {
    transition: 0.4s all;
  }

  .lastUpdate {
    @media (max-width: 576px) {
      display: none;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 24px;

    // background-color: #f6ffed;
    i {
      font-size: 48px;
    }
  }

  .detail-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

.detail {
  display: flex;
  position: relative;

  .size-num {
    font-size: 16px;
    line-height: 32px;
    margin-right: 8px;
  }

  .icon-i {
    color: '#52c41a';
    transition: all 0.2s;
    font-size: 32px;
  }

  #i-howto {
    transition: all 0.2s;
    margin-right: 0.2em;
    transform: translateX(10px);
    opacity: 0;
  }

  #i-copy {
    position: absolute;
    transition: all 0.2s;
    opacity: 0;
    z-index: 1;
    right: 0;
  }
}
</style>