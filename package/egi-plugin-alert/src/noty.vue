<template>
  <div>
    <transition :name="mergedOption.transition">
      <div :id="mergedOption.id" v-show="showing" v-bind:class="['alert', clazz]" :transition="mergedOption.transition">
        <div class="container-fluid" v-html="mergedOption.message">
          <div class="alert-icon">
            <i class="material-icons"></i>
          </div>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"><i class="material-icons">clear</i></span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue'

const DEFAULT_OPT = {
  id: 'easy-toast-default',
  className: '',
  transition: 'fade',
  duration: 5000,
  message: ''
}
export default {
  DEFAULT_OPT: DEFAULT_OPT,
  data() {
    return {
      queue: [],
      option: {},
      showing: false,
    }
  },
  computed: {
    mergedOption: function() {
      return Object.assign({}, DEFAULT_OPT, this.option)
    },
    clazz: function() {
      let clazz = []
      let className = this.option.className
      if(className){
        if(typeof className === 'string'){
          clazz.push(className)
        }
        if(Array.isArray(className)){
          clazz = clazz.concat(className)
        }
      }
      clazz.push('navbar-fixed-top')
      return clazz.join(' ')
    }
  },
  watch: {
    queue: function() {
      let pending = this.queue.length
      if (pending === 0) {
        return
      }
      this.showing = true
      this.option = this.queue[0]
      if ((!this.option.mode || this.option.mode === 'override') && pending > 1) {
        clearTimeout(this.timeoutId)
        this.showing = false
        this.timeoutId = null
        this.timeoutId = setTimeout(() => this.queue.shift())
      } else {
        this.timeoutId = setTimeout(() => {
          this.showing = false
          this.timeoutId = null
          setTimeout(() => this.queue.shift())
        }, this.mergedOption.duration)
      }
    }
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active,
.fade-transition {
  -webkit-transition: opacity .3s ease;
  transition: opacity .3s ease;
}
.fade-enter,
.fade-leave,
.fade-leave-active {
  opacity: 0;
}
.slide-down-enter-active,
.slide-down-leave-active,
.slide-down-transition {
  -webkit-transition: opacity .3s ease, top .3s ease-in;
  transition: opacity .3s ease, top .3s ease-in;
}
.slide-down-leave-active,
.slide-down-enter,
.slide-down-leave {
  opacity: 0;
  top: -10% !important;
}
.slide-up-enter-active,
.slide-up-leave-active,
.slide-up-transition {
  -webkit-transition: opacity .3s ease, top .3s ease-in;
  transition: opacity .3s ease, top .3s ease-in;
}
.slide-up-leave-active,
.slide-up-enter,
.slide-up-leave {
  opacity: 0;
  top: 110% !important;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-left-transition {
  -webkit-transition: opacity .3s ease, left .3s ease-in;
  transition: opacity .3s ease, left .3s ease-in;
}
.slide-left-leave-active,
.slide-left-enter,
.slide-left-leave {
  opacity: 0;
  left: 110% !important;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-right-transition {
  -webkit-transition: opacity .3s ease, left .3s ease;
  transition: opacity .3s ease, left .3s ease;
}
.slide-right-leave-active,
.slide-right-enter,
.slide-right-leave {
  opacity: 0;
  left: -1000px !important;
}
</style>
