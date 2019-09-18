<template>
  <div class="sidebar-control">
    <div class="control-header">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" :id="guid" :value="value" :checked="!!value" @change="onInput">
        <label class="custom-control-label" :for="guid">{{ label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import '@/icons'

const getGuid = () => {
  let S4 = (() => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1))
  return (S4() + S4());
}

export default {
  name: 'Toggle',
  props: {
    leftIcon: {
      type: Object
    },
    rightIcon: {
      type: Object
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      guid: getGuid()
    }
  },
  methods: {
    onInput ($event) {
      this.$emit('input', $event.target.checked)
    }
  }
}
</script>
