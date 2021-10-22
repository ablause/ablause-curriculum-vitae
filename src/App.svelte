<script>
  import Post from "./lib/Post.svelte";
  import Profile from "./lib/Profile.svelte";
  import Section from "./lib/Section.svelte";
  import data from "./assets/data.json";
</script>

<main class="wrapper">
  <div class="header">
    <div class="header-profile">
      <Profile />
    </div>
    <div class="header-title">
      <h1 style="font-weight: 600">
        Alexandre <br />
        <span style="font-size: 38pt; font-weight: 600">Blause</span>
      </h1>
      <h2 style="font-size: 14pt; font-weight: 400">Developpeur full-stack</h2>
    </div>
  </div>
  <div class="sidebar">
    <ul class="info-list" style="line-height: 2.5">
      <li class="info-item">
        <i class="uil uil-user info-icon" />
        31/03/1999, belgium
      </li>
      <li class="info-item">
        <i class="uil uil-envelope info-icon" />
        contact@ablause.dev
      </li>
      <li class="info-item">
        <i class="uil uil-phone info-icon" />
        +32470385826
      </li>
      <li class="info-item">
        <i class="uil uil-globe info-icon" />
        ablause.dev
      </li>
    </ul>
    <Section title="About me">
      <p>
        I am 22 years old and live in Brussels, Belgium. I am passionate about
        programming and i regularly code my personal projects. I am self-taught
        since 7 years.
      </p>
    </Section>
    <Section title="Interests">
      <p>
        Problem solving - Video games - Build projects - Coffee - Technologies
      </p>
    </Section>
    <Section title="Languages">
      <p>French (Native), English (Intermediate)</p>
    </Section>
  </div>
  <div class="content">
    <Section title="Career objective">
      <p>
        What is important to me in my next job is a culture of passion and
        opportunities to learn and develop my skills from a technical
        standpoint. I am a very open-minded person and have a great thirst for
        learning new things. I would like to start my own business after
        acquiring more skills.
      </p>
    </Section>
    <Section title="Professional Experience">
      <ul>
        {#each data.work_experiences as exp}
          <li>
            <Post
              title={exp.title}
              entreprise={exp.entreprise}
              description={exp.description}
              contract_type={exp.contract_type}
              time_period={exp.time_period}
              location={exp.location}
            />
          </li>
        {/each}
      </ul>
    </Section>
    <Section title="Skills" />
  </div>
  <div class="footer" />
</main>

<style>
  .content {
    grid-area: content;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .footer {
    grid-area: footer;
  }

  .wrapper {
    width: 100%;
    display: grid;
    row-gap: 1.5rem;
    column-gap: 2rem;
    grid-template-columns: 250px;
    grid-template-areas:
      "header header header"
      "sidebar content content"
      "footer footer footer";
  }

  .header {
    grid-area: header;
    column-gap: 50px;
    display: flex;
    padding-top: 1em;
  }

  .header-title {
    line-height: 3em;
  }

  .header-profile {
    height: 200px;
    width: 200px;
  }

  .info-item {
    font-size: small;
    font-weight: 400;
    margin-bottom: 5px;
  }

  .info-icon {
    color: var(--primary-color);
    vertical-align: middle;
    font-size: x-large;
    margin-right: 3px;
  }
</style>
