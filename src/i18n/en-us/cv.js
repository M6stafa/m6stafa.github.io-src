export default {
  documentTitle: 'Mostafa Najafi CV',
  fullName: 'Mostafa Najafi',

  basicInfos: [
    { text: 'mostafa.najafi1996@gmail.com', icon: 'fas fa-at', printable: true },
    { text: '8 December 1996', icon: 'fas fa-birthday-cake', printable: true },
    { text: 'Tehran, Iran', icon: 'fas fa-map-marker-alt', printable: true },
    { text: '<a href="https://github.com/M6stafa/CV/raw/master/MostafaNajafiCV.pdf" style="color: white;">Download CV</a>', icon: 'fas fa-file-pdf', printable: false },
  ],

  socialsTitle: 'Socials',
  socials: [
    { link: 'https://github.com/M6stafa', icon: 'fab fa-github', bgColor: '#333' },
    { link: 'https://t.me/m6stafa', icon: 'fab fa-telegram-plane', bgColor: '#0088cc' },
    { link: 'https://www.linkedin.com/in/mostafa-najafi-b8318453', icon: 'fab fa-linkedin', bgColor: '#0077b5' },
  ],

  skillsTitle: 'Skills',
  skills: [
    {
      class: 'bg-indigo text-white',
      items: ['Self Learning'],
    },
    {
      class: 'bg-deep-orange text-white',
      items: [
        'Python', 'JavaScript', 'TypeScript', 'C#', 'C++', 'HTML', 'CSS', 'SQL', 'PHP',
        'MATLAB', 'VHDL', 'Assembly', 'Pascal', 'Bash Script', 'Erlang', 'Lua',
      ],
    },
    {
      class: 'bg-green text-white',
      items: [
        'Keras', 'VueJS', 'Flask', 'Quasar', 'Vuetify', 'Bootstrap', 'Tensorflow',
        'ElectronJS', 'OpenCV', 'Gulp', 'SDL', 'SFML', 'CodeIgniter', 'PhalconPHP',
      ],
    },
    {
      class: 'bg-blue text-white',
      items: ['Linux', 'Git', 'Unity', 'Telegram Bot'],
    },
  ],

  interestsTitle: 'Interests',
  interests: [
    { text: 'Machine Learning', class: 'bg-red-10 text-white' },
    { text: 'Machine Vision', class: 'bg-red-10 text-white' },
    { text: 'Reinforcement Learning', class: 'bg-red-10 text-white' },
    { text: 'Artificial Neural Networks', class: 'bg-red-10 text-white' },
    { text: 'Game Development', class: 'bg-red-10 text-white' },
    { text: 'Solving Algorithmic Problems', class: 'bg-red-10 text-white' },
    { text: 'Robotics', class: 'bg-red-10 text-white' },
    { text: 'FPS Games', class: 'bg-red-10 text-white' },
    { text: 'Football', class: 'bg-red-10 text-white' },
    { text: 'Foosball', class: 'bg-red-10 text-white' },
  ],

  personalityTitle: 'Personality',
  personalities: [
    { text: 'Visionary', link: 'https://mycreativetype.com/type/visionary/', class: 'bg-amber-9 text-white' },
    { text: 'INTP-A', link: 'https://www.16personalities.com/intp-personality', class: 'bg-purple-5 text-white' },
  ],

  sections: [
    // Education
    {
      title: 'Education',
      items: [
        {
          date: '2019 - 2022',
          title: 'M.Sc. in Computer Engineering - Bioinformatics',
          location: '<b>Sharif University of Technology</b>, Tehran, Iran',
          description: undefined,
          note: undefined,
        },
        {
          date: '2014 – 2019',
          title: 'B.Sc. in Computer Software Engineering',
          location: '<b>Islamic Azad University Central Tehran Branch</b>, Tehran, Iran, <i>GPA: 3.44</i>',
          description: undefined,
          note: undefined,
        },
        {
          date: '2010 – 2014',
          title: 'Diploma in Mathematics and Physics Discipline',
          location: '<b>Allame Helli 3 High School</b>, Tehran, Iran',
          description: undefined,
          note: 'Affiliated with National Organization for Development of Exceptional Talents',
        },
      ],
    },

    // Industrial Experience
    {
      title: 'Industrial Experience',
      items: [
        {
          date: '2015 – now',
          title: 'Owner',
          location: '<b><a href="https://github.com/koala-team" target="_blank">Koala Team</a></b>, Tehran, Iran',
          description: undefined,
          note: undefined,
        },
        {
          date: '2017/01 - 2018/10',
          title: 'Artificial Intelligence Researcher',
          location: '<b><a href="https://www.linkedin.com/company/green-silver-leaves/about/" target="_blank">Green and Silver Leaves</a></b>, Tehran, Iran',
          description: `The second project of this company was an automation service for pathobiology
          labs. From creating a microscope that automatically scans slides to create a web
          application for managing slides and patients. My task was diagnosing cancer
          potential cells from scaned images. We've reached the accurracy of about 60% in finding
          the cells in images with Mask-RCNN and about 94% in classification of the cells.
          <br>
          The main resources we used: <a href="https://www.researchgate.net/publication/309194269_Automated_Classification_of_Pap_Smear_Image_to_Detect_Cervical_Dysplasia" target="_blank">The article used for classification</a> - <a href="https://www.kaggle.com/c/data-science-bowl-2018/overview" target="_blank">Kaggle 2018 Data Science Bowl</a>`,
          note: undefined,
        },
        {
          date: '2016/07 - 2016/09',
          title: 'Backend Developer',
          location: '<b><a href="http://gandom.co/" target="_blank">Gandom</a></b>, Tehran, Iran',
          description: `This company creates web and mobile applications.
          I was one of the backend develpoers of the ChiChiKoo (a service like foursquare).
          We developed a RESTful API with flask.`,
          note: undefined,
        },
        {
          date: '2014/12 - 2015/08',
          title: 'Full-Stack Web Developer',
          location: '<b><a href="http://kian-ph.com/" target="_blank">Kian Pardaz Hooshmand</a></b>, Tehran, Iran',
          description: `This company provides services in various fields.
          I joined their web team and developed an <a href="http://portal.parseekenglish.com/newportal/index.php" target="_blank">english institute web portal</a> from 0-100
          with <a href="https://codeigniter.com/" target="_blank">CodeIgniter</a> used for backend
          and also <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> and jQuery used for its frontend.`,
          note: undefined,
        },
      ],
    },

    // Teaching Experience
    {
      title: 'Teaching Experience',
      items: [
        {
          date: 'Fall 2018',
          title: 'Teacher\'s Assistant: Software Engineering (Dr. Mehrdad Ashtiani)',
          location: '<b>University of Science and Technology</b>, Tehran, Iran',
          description: undefined,
          note: undefined,
        },
        {
          date: 'Summer 2016',
          title: 'Game Development',
          location: '<b>University of Science and Technology</b>, Tehran, Iran',
          description: undefined,
          note: undefined,
        },
      ],
    },

    // Volunteer Experience
    {
      title: 'Volunteer Experience',
      items: [
        {
          date: '2018/08 - 2019/03',
          title: 'Technical Supervisor, Game Designer and Game Developer of <a href="https://2019.chillinwars.ir" target="_blank">ChillinWars 2019</a>',
          location: '<b>University of Science and Technology</b>, Tehran, Iran',
          description: undefined,
          note: undefined,
        },
        {
          date: '2017/09 - 2018/01',
          title: 'Game Designer and Game Developer of <a href="https://2017.chillinwars.ir" target="_blank">ChillinWars 2017</a>',
          location: '<b>University of Science and Technology</b>, Tehran, Iran',
          description: undefined,
          note: undefined,
        },
      ],
    },

    // Selected Projects
    {
      title: 'Selected Projects',
      items: [
        {
          date: '2017 - now',
          title: 'Chillin',
          location: undefined,
          description: `A tool for creating game AI competitions. It consists of multiple
          components, including a <a href="https://github.com/koala-team/Chillin-PyServer" target="_blank">server framework</a>
          written in Python, three client components written in
          <a href="https://github.com/koala-team/Chillin-PyClient" target="_blank">Python</a>,
          <a href="https://github.com/koala-team/Chillin-CppClient" target="_blank">C++</a>,
          and <a href=https://github.com/koala-team/Chillin-JavaClient" target="_blank">Java</a>.
          Also, Chillin came up with a <a href="https://github.com/koala-team/Chillin-Monitor-2" target="_blank">3D monitor</a>
          created with Unity to spectate the games and watch what happens in the field. <br>
          <a href="https://2017.chillinwars.ir" target="_blank">ChillinWars 2017</a> and
          <a href="https://chillinwars.ir" target="_blank">ChillinWars 2019</a> utilized this
          tool to create games for their competitions. Some examples can be found
          <a href="https://github.com/Chillin-Examples" target="_blank">here</a>.`,
          note: undefined,
        },
        {
          date: '2018 - 2019',
          title: 'Musical Chord Detection',
          location: undefined,
          description: `An application that detects <a href="https://en.wikipedia.org/wiki/Musical_note" target="_blank">musical notes</a>
          in a musical signal (created by Piano, Guitar, and etc). It's a very difficult problem and
          still isn't solved completely. Typically there exists 108 different notes and detecting a
          single note is kind of simple but the problem shows up when some notes are played simultaneously
          (chords). Imagine if someone plays 10 Piano notes with his 10 fingers, then there could be
          almost 100<sup>10</sup> possible different chords. Solving this problem using basic ANN
          algorithms is not actually possible.`,
          note: undefined,
        },
        {
          date: 'Fall 2018',
          title: 'MathExam',
          location: undefined,
          description: 'An Electron+Vuejs pc application that provides some tools for managing school exams and questions. Also complex questions (containing equations, etc) were supported by help of Mathjax',
          note: undefined,
        },
        {
          date: 'Fall 2017',
          title: 'Algorithm Visualization',
          location: undefined,
          description: 'Visualize some sorting algorithms using Vuejs and D3js.',
          note: undefined,
        },
        {
          date: '2015/10',
          title: 'Ragdoll',
          location: undefined,
          description: 'An arcade game created by Unity. <a href="https://cafebazaar.ir/app/com.khaste.ragdoll/" target="_blank">Download link</a>',
          note: undefined,
        },
        {
          date: '2011 - 2013',
          title: 'Robocup 3D Soccer Simulation',
          location: undefined,
          description: `Robocup 3D Soccer Simulation is a seniors' tournament that is a part of
          robotics tournaments like IranOpen. Its goal is to write a code that manages 11
          simulated <a href="https://en.wikipedia.org/wiki/Nao_(robot)" target="_blank">NAO robots</a>
          to play soccer. What I've done in team was writing Forward and Inverse Kinematics and
          Walking. I've tested several methods for implementation of the walking like ANN and
          sinusoidal foot trajectories and some methods for optimizing them like PSO and GeneticAlgorithm.
          Our TDP which was sent for and got quilified in World Championship 2013 competitions
          can be found <a href="https://www.dropbox.com/s/nkwcxfojufvafgt/3d_tdp_s4m.pdf?dl=0" target="_blank">here</a>.
          <a href="https://gitlab.com/4/4d-simulation" target="_blank">Gitlab link</a>.`,
          note: undefined,
        },
        {
          date: 'Winter 2012',
          title: 'Othello',
          location: undefined,
          description: 'An object-oriented client/server platform providing an interface for othello AI programs written in C++. Uses Boost Asio and SDL.',
          note: undefined,
        },
        {
          date: '2011 - 2012',
          title: 'Car Tracking',
          location: undefined,
          description: 'A dynamic system that detects cars and their movements. <a href="https://github.com/AminHP/CarTracking" target="_blank">Github link</a>',
          note: undefined,
        },
        {
          date: '2011 - 2012',
          title: 'Inverted Pendulum',
          location: undefined,
          description: `A system which simulates the famous
          <a href="https://en.wikipedia.org/wiki/Inverted_pendulum" target="_blank">Inverted Pendulum</a>
          problem written in C++. Also an AI is implemented that uses Q-Learning to keep the pendulum inverted in the system.`,
          note: undefined,
        },
        {
          date: '2010 - 2011',
          title: 'NabRai Signal Processing Lab Project',
          location: undefined,
          description: 'Classify voice to realize some words. Project written in matlab.',
          note: undefined,
        },
        {
          date: '2009 - 2010',
          title: 'Othello',
          location: undefined,
          description: 'My very first complete project that written in C++. You can play othello with an AI that implemented with min-max tree.',
          note: undefined,
        },
      ],
    },

    // Awards & Honors
    {
      title: 'Awards & Honors',
      items: [
        {
          date: 'Apr 2013',
          title: 'Robocup IranOpen 2013',
          location: undefined,
          description: '3D Soccer Simulation league - <i><b>Certificate of Participation</b></i>',
          note: undefined,
        },
        {
          date: 'Mar 2013',
          title: 'Robocup World Championship 2013',
          location: undefined,
          description: '3D Soccer Simulation league - <i><b>Qualified</b></i>',
          note: undefined,
        },
        {
          date: 'Feb 2013',
          title: 'Farzanegan Robocup 2013',
          location: undefined,
          description: '3D Soccer Simulation league - <i><b>Ranked First Place</b></i>',
          note: undefined,
        },
        {
          date: 'Apr 2012',
          title: 'Robocup IranOpen 2012',
          location: undefined,
          description: '3D Soccer Simulation league - <i><b>Certificate of Participation</b></i>',
          note: undefined,
        },
        {
          date: 'Apr 2012',
          title: 'Robocup DutchOpen 2012',
          location: undefined,
          description: '3D Soccer Simulation league - <i><b>Certificate of Participation</b></i>',
          note: undefined,
        },
        {
          date: '2012',
          title: 'Seminar on Science and Technology',
          location: undefined,
          description: 'Allame Helli 3 High School - <i><b>Ranked First Place</b></i>',
          note: undefined,
        },
      ],
    },
  ],
};
