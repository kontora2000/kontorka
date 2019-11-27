<template>
  <div>
    <header>
      <article data-background="#000000">
          <flag></flag>
        <div class="we-do">
          We design identities&thinsp;/&thinsp;websites&thinsp;/&thinsp;apps&thinsp;/&thinsp;ad
           &nbsp;content for&nbsp;social networks🔥
        </div>
        <div class="about-kontora">
          Independent design team <br>based in&nbsp;Novorossiysk.
          <div class="about-kontora-links">
            <span class="©-header">©</span>
            <sup class="about-kontora-links-super">
              2018 
              <a class="about-kontora-link" id="vacancies" href="/vacancies">Vacancies</a>
              <a class="about-kontora-link" id="partnership" href="/partnership">Partnership</a>
            </sup>
          </div>
        </div>
      </article>
      <marquee side="top">
        <div class="multiply multiply-top" >
          <a class="link-hashtag filter marquee-link">3D</a>
          <a class="link-hashtag filter marquee-link">Web</a>
          <a class="link-hashtag filter marquee-link">Graphic</a>
          <a class="link-hashtag filter marquee-link">SMM</a>
        </div>
      </marquee>
      <marquee side="right">
        <div class="multiply multiply-right">
          <a class="link-instagram marquee-link" href="https://instagram.com/kontoragram"><span>@kontoragram</span></a>
        </div>
      </marquee>
      <marquee side="bottom">
        <div class="multiply multiply-bottom">
          <a class="link-phone marquee-link" href="tel:+791654657990">
            <span>+7&thinsp;965&thinsp;465-79-90</span>
          </a>
          <a class="link-email marquee-link" href="mailto:mail@kontora.gq">
            <span>mail@kontora.gq</span>
          </a>
        </div>
      </marquee>
      <marquee side="left">
        <div class="multiply multiply-left"> 
          <a class="link-hashtag filter marquee-link">3D</a>
          <a class="link-hashtag filter marquee-link">Web</a>
          <a class="link-hashtag filter marquee-link">Graphic</a>
          <a class="link-hashtag filter marquee-link">SMM</a>
        </div>
      </marquee>
    </header>
    <main>
      <projects />
      <mov-form />
    </main>
    <footer>
          <div class="©-block">
              <span class="©-footer">©</span>
              <sup class="©-super">
                <span class="©-year">2018</span>
                <a href="/requisites"><span>Requisites</span></a>
                <a href="/partnership"><span>Partnership</span></a>
                <a href="/vacancies"><span>Vacancies</span></a>
              </sup>
          </div>
          <div class="logo-footer">
            <a class="logo-footer-link" href="/">Kontora</a>
          </div>
    </footer>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import projects from './projects';
import MovForm from './MovForm/index.vue';
import marquee from './marquee.vue'; // marques animated by greensock
import flag from './flag.vue';
// template wrapper for three.js flag renderer

export default {
  name: 'root',
  components: {
    MovForm,
    projects,
    marquee,
    flag,
  },
};
</script>