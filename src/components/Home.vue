<template>
  <div id="home">
    <!-- Page Container -->
    <div class="w3-content w3-margin-top" style="max-width:1400px;">
      <!-- The Grid -->
      <div class="w3-row-padding">
        <!-- Left Column -->
        <div class="w3-col s12 m6 l4">
          <div class="w3-white w3-text-grey w3-card-4 w3-margin-bottom">
            <div class="w3-container">
              <div class="w3-text-black">
                <h2>Mostafa Najafi</h2>
              </div>
            </div>
            <div class="w3-container">
              <p><i class="fa fa-calendar fa-fw w3-margin-right w3-large w3-text-teal"></i>December 8, 1996</p>
              <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Developer</p>
              <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Tehran, Iran</p>
              <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>mostafa.najafi1996@gmail.com</p>
              <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+98 921 390 8780</p>
              <p><i class="fa fa-file fa-fw w3-margin-right w3-large w3-text-teal"></i><a href="/static/files/cv.pdf" target="_blank">download CV</a></p>
              <hr>

              <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
              <p>Guru in C/C++. Proficient in Python, JavaScript, HTML, CSS, PHP. Familiar with matlab, C#, Bash Script, SQL.</p>

              <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
              <p>Persian</p>
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>
              </div>
              <p>English</p>
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-round-xlarge w3-teal" style="height:24px;width:50%"></div>
              </div>

              <!--<hr>-->
              <!--<p class="w3-large"><b><i class="fa fa-code fa-fw w3-margin-right w3-text-teal"></i>Projects</b></p>-->

              <br>
            </div>
            <br>
          </div>
        </div>
        <!-- End Left Column -->

        <!-- Right Column -->
        <div class="w3-col s12 m6 l8">
          <div class="w3-container w3-card-2 w3-white w3-margin-bottom">
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
            <div class="w3-container" v-for="experience in workExperiences">
              <h5 class="w3-opacity"><b>{{ experience.rule }} / <span v-html="stylizedCompanyName(experience.company, experience.site)"></span></b></h5>
              <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{{ experience.from }} - <span v-html="stylizedTo(experience.to)"></span></h6>
              <hr>
            </div>
          </div>
          <div class="w3-container w3-card-2 w3-white">
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
            <div class="w3-container" v-for="education in educations">
              <h5 class="w3-opacity"><b>{{ education.place }}</b></h5><span v-html="stylizedNote(education.note)"></span>
              <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{{ education.from }} - {{ education.to }}</h6>
              <p>{{ education.degree }}</p>
              <hr>
            </div>
          </div>
        </div>
        <!-- End Right Column -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Page Container -->

    <footer class="w3-container w3-teal w3-center w3-margin-top">
      <p>Find me on social media.</p>
      <a target="_blank" href="http://t.me/m6stafa"><i class="fa fa-2x fa-telegram w3-hover-opacity"></i></a>
      <a target="_blank" href="https://github.com/m6stafa"><i class="fa fa-2x fa-github w3-hover-opacity"></i></a>
      <a target="_blank" href="https://www.instagram.com/m6stafa"><i class="fa fa-2x fa-instagram w3-hover-opacity"></i></a>
      <a target="_blank" href="http://linkedin.com/in/mostafa-najafi-b8318453"><i class="fa fa-2x fa-linkedin w3-hover-opacity"></i></a>
      <p></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {
      workExperiences: [
        {
          rule: 'Developer & Researcher',
          company: 'Green and Silver Leaves',
          site: null,
          from: 'Jan 2017',
          to: 'Current',
        },
        {
          rule: 'Backend Developer',
          company: 'Gandom',
          site: 'http://gandom.co/',
          from: 'Jun 2016',
          to: 'Aug 2016',
        },
        {
          rule: 'Web Developer',
          company: 'Kian Pardaz Hooshmand',
          site: 'http://kian-ph.com/',
          from: 'Dec 2014',
          to: 'Aug 2015',
        },
      ],
      educations: [
        {
          place: 'Islamic Azad University Central Tehran Branch',
          note: null,
          from: '2014',
          to: '2018',
          degree: 'B.S. in Computer Engineering',
        },
        {
          place: 'Allame Helli 3 High School',
          note: 'Affiliated with National Organization for Development of Exceptional Talents',
          from: '2010',
          to: '2014',
          degree: 'Diploma in Mathematics and Physics Discipline',
        },
      ],
    };
  },
  methods: {
    stylizedCompanyName(name, site = null) {
      return site !== null ? `<a target="_blank" href="${site}">${name}</a>` : name;
    },
    stylizedTo(to) {
      return to === 'Current' ? '<span class="w3-tag w3-teal w3-round">Current</span>' : to;
    },
    stylizedNote(note) {
      return note !== null ? `<h6>${note}</h6>` : '';
    },
  },
};
</script>

<style scoped>
  html, body, h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto", sans-serif
  }

  #home {
    min-width: 300px;
  }
</style>
