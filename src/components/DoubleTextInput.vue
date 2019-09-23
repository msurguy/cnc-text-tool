<template>
  <div class="sidebar-control">
    <div class="control-header">
      <div></div>
      <div class="control-label">
        {{ label }}
      </div>
      <div></div>
    </div>
      <div class="form-row align-items-center">
        <div class="col-sm-1 text-right">
          <span v-if="firstLabel">{{ firstLabel }}</span>
        </div>
        <div class="col-sm-5">
          <input class="control-text-input" type="text" :value="firstValue | round" @change="onFirstInput">
        </div>
        <div class="col-sm-1 text-right">
          <span v-if="secondLabel">{{ secondLabel }}</span>
        </div>
        <div class="col-sm-5">
          <input class="control-text-input" type="text" :value="secondValue | round" @change="onSecondInput">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DoubleTextInput',
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    firstLabel: {
      type: String,
      default: ''
    },
    secondLabel: {
      type: String,
      default: ''
    },
    firstValue: {
      type: Number,
      default: 0
    },
    secondValue: {
      type: Number,
      default: 0
    },
  },
  methods: {
    onFirstInput ($event) {
      this.$emit('firstInput', $event.target.value)
    },
    onSecondInput($event) {
      this.$emit('secondInput', $event.target.value)
    }
  },
  filters: {
    round: function (value) {
      return value.toFixed(2)
    }
  }
}
</script>
