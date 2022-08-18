<script lang="ts">
  export let title: string;
  export let subTitle: string;
</script>

<div class="root">
  <h5>{title}</h5>
  <small>{subTitle}</small>
  <div class="content">
    <slot></slot>
  </div>
</div>

<style>
  .content {
    color: var(--secondary-color);
    font-size: small;
  }
</style>