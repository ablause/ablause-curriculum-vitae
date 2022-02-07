<script lang="ts">
  export let title: string;
</script>

<section>
  <h3 class="title">{title}</h3>
  <div class="content">
    <slot />
  </div>
</section>

<style>
  .title {
    border-bottom: black solid 1px;
    width: 100%;
  }
</style>
