<template>
    <div class="sidebar-control">
        <div class="control-header nav-fill">
            <button class="nav-item btn rounded btn-sm btn-light mr-3" @click.prevent="$emit('onLeftClick')">Clear</button>
            <button class="nav-item btn rounded btn-sm btn-light" @click.prevent="$emit('onRightClick')">Save</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ButtonGroup'
  }
</script>
