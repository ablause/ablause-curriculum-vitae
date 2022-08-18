<script lang="ts">
  import Post from "./Post.svelte";

  export let title: string;
  export let entreprise: string;
  export let description: string;
  export let location: string;
  export let contract_type: string = undefined;
  export let time_period: {
    from: { month: string; year: string };
    to: { month: string; year: string };
  } = undefined;
</script>

<div class="root">
  {#if time_period !== undefined}
    <div class="details">
      <p>
        From {time_period.from.month}/{time_period.from.year} <br />
        To {time_period.to.month}/{time_period.to.year} <br />
        {location}
      </p>
    </div>
  {/if}
  <div class="content">
    <Post
      title={title}
      subTitle={`${entreprise} - ${contract_type}`}
    >
      <p>
        {description}
      </p>
    </Post>
  </div>
</div>

<style>
  .root {
    display: flex;
  }

  .details {
    color: var(--secondary-color);
    white-space: nowrap;
    font-size: small;
  }

  .content {
    margin-left: 10px;
  }
</style>
