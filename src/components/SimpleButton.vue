<template>
    <div class="sidebar-control">
        <div class="control-header">
            <button class="btn btn-light btn-sm" @click.prevent="$emit('click')"><slot></slot></button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'SimpleButton'
  }
</script>
