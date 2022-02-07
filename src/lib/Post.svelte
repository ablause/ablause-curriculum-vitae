<script lang="ts">
  export let title: string;
  export let entreprise: string;
  export let description: string;
  export let location: string;
  export let contract_type: string;
  export let time_period: {
    from: { month: string; year: string };
    to: { month: string; year: string };
  };
</script>

<div class="root">
  <div class="details">
    <p>
      From {time_period.from.month}/{time_period.from.year} <br />
      To {time_period.to.month}/{time_period.to.year} <br />
      {location}
    </p>
  </div>
  <div class="content">
    <h5>
      {title}
    </h5>
    <small class="enteprise">
      {entreprise} - {contract_type}
    </small>
    <p class="description">
      {description}
    </p>
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

  .description {
    color: var(--secondary-color);
    font-size: small;
  }
</style>
