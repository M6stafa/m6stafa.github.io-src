export default {
  documentTitle: 'Mostafa Najafi CV',
  fullName: 'مصطفی نجفی',

  basicInfos: [
    { text: '09213908780', icon: 'fas fa-phone', printable: true },
    { text: 'mostafa.najafi1996@gmail.com', icon: 'fas fa-at', printable: true },
    { text: '۱۸ آذر ۱۳۷۵', icon: 'fas fa-birthday-cake', printable: true },
    { text: 'ایران، تهران', icon: 'fas fa-map-marker-alt', printable: true },
    { text: '<a href="https://github.com/M6stafa/CV/raw/master/MostafaNajafiCV.pdf" style="color: white;">Download CV</a>', icon: 'fas fa-file-pdf', printable: false },
  ],

  socialsTitle: 'Socials',
  socials: [
    { link: 'https://github.com/M6stafa', icon: 'fab fa-github', bgColor: '#333' },
    { link: 'https://t.me/m6stafa', icon: 'fab fa-telegram-plane', bgColor: '#0088cc' },
    { link: 'https://www.linkedin.com/in/mostafa-najafi-b8318453', icon: 'fab fa-linkedin', bgColor: '#0077b5' },
  ],

  skillsTitle: 'مهارت‌ها',
  skills: [
    {
      class: 'bg-indigo text-white',
      items: ['خود آموزی'],
    },
    {
      class: 'bg-deep-orange text-white',
      items: [
        'Python', 'JavaScript', 'TypeScript', '#C', '++C', 'HTML', 'CSS', 'SQL', 'PHP',
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

  interestsTitle: 'علایق',
  interests: [
    { text: 'یادگیری ماشین', class: 'bg-red-10 text-white' },
    { text: 'بینایی ماشین', class: 'bg-red-10 text-white' },
    { text: 'یادگیری تقویتی', class: 'bg-red-10 text-white' },
    { text: 'شبکه‌های عصبی مصنوعی', class: 'bg-red-10 text-white' },
    { text: 'بازی سازی', class: 'bg-red-10 text-white' },
    { text: 'مهندسی نرم‌افزار', class: 'bg-red-10 text-white' },
    { text: 'الگوریتم', class: 'bg-red-10 text-white' },
    { text: 'رباتیک', class: 'bg-red-10 text-white' },
    { text: 'فوتبال', class: 'bg-red-10 text-white' },
    { text: 'فوتبال دستی', class: 'bg-red-10 text-white' },
  ],

  personalityTitle: 'تیپ شخصیتی',
  personalities: [
    { text: 'Visionary', link: 'https://mycreativetype.com/type/visionary/', class: 'bg-amber-9 text-white' },
    { text: 'INTP-A', link: 'https://www.16personalities.com/intp-personality', class: 'bg-purple-5 text-white' },
  ],

  sections: [
    // Education
    {
      title: 'تحصیلات',
      items: [
        {
          date: '۱۳۹۸ - ۱۴۰۱',
          title: 'فوق لیسانس مهندسی کامپیوتر - بیوانفورماتیک',
          location: '<b>دانشگاه صنعتی شریف</b>، تهران، ایران',
          description: undefined,
          note: undefined,
        },
        {
          date: '۱۳۹۳ - ۱۳۹۸',
          title: 'لیسانس مهندسی نرم‌افزار',
          location: '<b>دانشگاه آزاد اسلامی واحد تهران مرکزی</b>، تهران، ایران',
          description: undefined,
          note: undefined,
        },
        {
          date: '۱۳۸۹ - ۱۳۹۳',
          title: 'دیپلم ریاضی و فیزیک',
          location: '<b>دبیرستان علامه حلی ۳</b>، تهران، ایران',
          description: undefined,
          note: 'وابسته به سازمان ملی پرورش استعدادهای درخشان',
        },
      ],
    },

    // Industrial Experience
    {
      title: 'تجربه‌های صنعتی',
      items: [
        {
          date: '۱۳۹۴ - حال',
          title: 'مالک',
          location: '<b><a href="https://github.com/koala-team" target="_blank">تیم کوآلا</a></b>، تهران، ایران',
          description: undefined,
          note: undefined,
        },
        {
          date: 'دی ۹۵ - مهر ۹۷',
          title: 'محقق هوش مصنوعی',
          location: '<b><a href="https://www.linkedin.com/company/green-silver-leaves/about/" target="_blank">شرکت برگ‌های سبز و نقره‌ای</a></b>، تهران، ایران',
          description: `پروژه‌ی دوم این شرکت یک اتوماسیون برای آزمایشگاه‌های پاتوبیولوژی بود.
          از ساخت یک میکروسکوپ که لام‌ها را به صورت اتوماتیک اسکن کند، تا یک وب سایت برای مدیریت
          لام‌ها و بیماران. وظیفه‌ی من تشخیص سلول‌های سرطانی از روی عکس‌های اسکن شده بود. ما به دقت ٪۶۰
          در پیدا کردن هسته‌ها در عکس‌ها با استفاده از Mask-RCNN و دقت ٪۹۴ در دسته‌بندی هسته‌ها رسیدیم.
          <br>
          منابع اصلی مورد استفاده: <a href="https://www.researchgate.net/publication/309194269_Automated_Classification_of_Pap_Smear_Image_to_Detect_Cervical_Dysplasia" target="_blank">مقاله‌ی مورد استفاده برای دسته‌بندی</a> - <a href="https://www.kaggle.com/c/data-science-bowl-2018/overview" target="_blank">مسابقه‌ای در سایت کگل</a>`,
          note: undefined,
        },
        {
          date: 'تیر ۹۵ - شهریور ۹۵',
          title: 'توسعه دهنده بک‌اند',
          location: '<b><a href="http://gandom.co/" target="_blank">شرکت گندم</a></b>، تهران، ایران',
          description: `فعالیت این شرکت در زمینه‌ی ساخت برنامه‌ی موبایل و تحت وب است.
          من یکی از توسعه دهندگان بک‌اند در پروژه‌ی چیچیکو(برنامه‌ای مانند foursquare) بودم.`,
          note: undefined,
        },
        {
          date: 'مهر ۹۳ - شهریور ۹۴',
          title: 'توسعه دهنده وب',
          location: '<b><a href="http://kian-ph.com/" target="_blank">شرکت کیان پرداز هوشمند</a></b>، تهران، ایران',
          description: `این شرکت خدمات مختلفی در زمینه‌ی کامپیوتر ارایه میدهد.
          من عضوی از تیم طراحی وب بودم و یک پورتال برای <a href="http://portal.parseekenglish.com/newportal/index.php" target="_blank">موسسه زبان پارسیک</a>
          از صفر تا صد با استفاده از <a href="https://codeigniter.com/" target="_blank">CodeIgniter</a> برای بک‌اند
          و همچنین <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> و jQuery برای فرانت‌اند توسعه دادم.`,
          note: undefined,
        },
      ],
    },

    // Teaching Experience
    {
      title: 'تجربه‌های تدریس',
      items: [
        {
          date: 'پاییز ۹۷',
          title: 'دستیار استاد درس مهندسی نرم‌افزار دکتر مهرداد آشتیانی',
          location: '<b>دانشگاه علم و صنعت ایران</b>، تهران، ایران',
          description: undefined,
          note: undefined,
        },
        {
          date: 'تابستان ۹۶',
          title: 'ساخت بازی',
          location: '<b>دانشگاه علم و صنعت ایران</b>، تهران، ایران',
          description: undefined,
          note: undefined,
        },
      ],
    },

    // Volunteer Experience
    {
      title: 'تجربه‌های داوطلبانه',
      items: [
        {
          date: 'شهریور ۹۷ - اسفند ۹۷',
          title: 'مشاور فنی، طراح بازی و توسعه دهنده بازی <a href="https://2019.chillinwars.ir" target="_blank">ChillinWars 2019</a>',
          location: '<b>دانشگاه علم و صنعت ایران</b>، تهران، ایران',
          description: undefined,
          note: undefined,
        },
        {
          date: 'شهریور ۹۶ - دی ۹۶',
          title: 'طراح بازی و توسعه دهنده بازی <a href="https://2017.chillinwars.ir" target="_blank">ChillinWars 2017</a>',
          location: '<b>دانشگاه علم و صنعت ایران</b>، تهران، ایران',
          description: undefined,
          note: undefined,
        },
      ],
    },

    // Selected Projects
    {
      title: 'پروژه‌ها',
      items: [
        {
          date: '۹۴ - حال',
          title: 'Chillin',
          location: undefined,
          description: `ابزاری است برای ساخت مسابقات هوش مصنوعی و برنامه نویسی. از تعدادی
          اجزا تشکیل شده، از جمله یک <a href="https://github.com/koala-team/Chillin-PyServer" target="_blank">فریم‌ورک سرور</a>
          نوشته‌شده در پایتون، ۳ برنامه‌ی کلاینت نوشته‌شده در
          <a href="https://github.com/koala-team/Chillin-PyClient" target="_blank">پایتون</a>،
          <a href="https://github.com/koala-team/Chillin-CppClient" target="_blank">++C</a>،
          و <a href=https://github.com/koala-team/Chillin-JavaClient" target="_blank">جاوا</a>.
          همچنین چیلین دارای یک <a href="https://github.com/koala-team/Chillin-Monitor-2" target="_blank">مانیتور ۳بعدی</a>
          ساخته‌شده با Unity برای مشاهده‌ی اتفاقاتی که می‌افتد است. <br>
          <a href="https://2017.chillinwars.ir" target="_blank">ChillinWars 2017</a> و
          <a href="https://chillinwars.ir" target="_blank">ChillinWars 2019</a> از این فریم‌ورک
          برای برگزاری مسابقه استفاده کرده‌اند. برای دیدن بعضی از نمونه ها میتوانید به
          <a href="https://github.com/Chillin-Examples" target="_blank">اینجا</a> مراجعه کنید.`,
          note: undefined,
        },
        {
          date: '۱۳۹۷ - ۱۳۹۸',
          title: 'شناسایی موزیک آکورد',
          location: undefined,
          description: `برنامه‌ای برای شناسایی <a href="https://en.wikipedia.org/wiki/Musical_note" target="_blank">نت‌های موسیقی</a>
          در یک سیگنال موسیقی (ساخته‌شده با پیانو، گیتار یا غیره). این کار یک مساله‌ی دشوار است و
          هنوز به صورت کامل حل نشده.`,
          note: undefined,
        },
        {
          date: 'پاییز ۹۷',
          title: 'MathExam',
          location: undefined,
          description: 'یک برنامه‌ی کامپیوتر نوشته‌شده با Electron.js و Vuejs برای ساخت و مدیریت سوال‌های امتحانی.',
          note: undefined,
        },
        {
          date: 'پاییز ۹۶',
          title: 'تصویرسازی الگوریتم‌ها',
          location: undefined,
          description: 'تصویرسازی تعدادی الگوریتم مرتب‌سازی با استفاده از Vuejs و D3js.',
          note: undefined,
        },
        {
          date: 'مهر ۹۴',
          title: 'Ragdoll',
          location: undefined,
          description: 'یک بازی آرکید ساخته شده با یونیتی. <a href="https://cafebazaar.ir/app/com.khaste.ragdoll/" target="_blank">لینک دانلود</a>',
          note: undefined,
        },
        {
          date: '۱۳۹۰ - ۱۳۹۲',
          title: 'شبیه سازی ۳بعدی فوتبال',
          location: undefined,
          description: `شبیه سازی ۳بعدی فوتبال یک مسابقه‌ی رباتیک بزرگسالان در مسابقاتی چون
          مسابقه‌ی بین‌المللی ربوکاپ آزاد ایران است. هدف آن نوشتن برنامه‌ای برای کنترل ۱۱ ربات
          شبیه‌سازی شده <a href="https://en.wikipedia.org/wiki/Nao_(robot)" target="_blank">NAO</a>
          است تا فوتبال بازی کنند. از جمله کارهای من در تیم نوشتن Forward Kinematics و Inverse Kinematics
          و روش راه رفتن ربات بود.`,
          note: undefined,
        },
        {
          date: 'زمستان ۹۰',
          title: 'Othello',
          location: undefined,
          description: 'یک ساختار شی‌گرای سرور/کلاینتی برای بازی اوتلو نوشته شده در ++C با استفاده از کتابخانه‌های SDL و Boost Asio.',
          note: undefined,
        },
        {
          date: '۱۳۸۹ - ۱۳۹۰',
          title: 'ردیابی خودرو',
          location: undefined,
          description: 'یک سیستم پویا که میتواند خودروها و حرکت آنها را تشخیص دهد. <a href="https://github.com/AminHP/CarTracking" target="_blank">لینک گیتهاب</a>',
          note: undefined,
        },
        {
          date: '۱۳۸۹ - ۱۳۹۰',
          title: 'آونگ معکوس',
          location: undefined,
          description: `یک سیستم که مساله‌ی معروف
          <a href="https://en.wikipedia.org/wiki/Inverted_pendulum" target="_blank">آونگ معکوس</a>
          را شبیه سازی می‌کرد. همچنین یک هوش مصنوعی با استفاده از Q-Learning که آونگ را کنترل می‌کرد. نوشته شده با ++C.`,
          note: undefined,
        },
        {
          date: '۱۳۸۸ - ۱۳۸۹',
          title: 'پروژه‌ی آزمایشگاه پردازش سیگنال ناب‌رای',
          location: undefined,
          description: 'دسته‌بندی سیگنال‌های صدا برای تشخیص بعضی کلمات. نوشته‌شده در MATLAB.',
          note: undefined,
        },
        {
          date: '۱۳۸۷ - ۱۳۸۸',
          title: 'Othello',
          location: undefined,
          description: 'اولین پروژه‌ی کامل من که در ++C نوشته‌شده است. شامل پیاده سازی بازی اوتلو و همچنین یک هوش مصنوعی پیاده‌شده با الگوریتم درخت min-max.',
          note: undefined,
        },
      ],
    },

    // Awards & Honors
    {
      title: 'افتخارات و مقام‌ها',
      items: [
        {
          date: 'فروردین ۹۲',
          title: 'مسابقات بین‌المللی ربوکاپ آزاد ایران ۲۰۱۳',
          location: undefined,
          description: 'لیگ شبیه‌سازی سه‌بعدی فوتبال بزرگسالان - <i><b>مجوز شرکت در مسابقات</b></i>',
          note: undefined,
        },
        {
          date: 'اسفند ۹۱',
          title: 'مسابقات جهانی ربوکاپ ۲۰۱۳',
          location: undefined,
          description: 'لیگ شبیه‌سازی سه‌بعدی فوتبال بزرگسالان - <i><b>مجوز شرکت در مسابقات</b></i>',
          note: undefined,
        },
        {
          date: 'بهمن ۹۱',
          title: 'مسابقات رباتیک فرزانگان ۲۰۱۳',
          location: undefined,
          description: 'لیگ شبیه‌سازی سه‌بعدی فوتبال بزرگسالان - <i><b>مقام اول</b></i>',
          note: undefined,
        },
        {
          date: 'فروردین ۹۱',
          title: 'مسابقات بین‌المللی ربوکاپ آزاد ایران ۲۰۱۲',
          location: undefined,
          description: 'لیگ شبیه‌سازی سه‌بعدی فوتبال بزرگسالان - <i><b>مجوز شرکت در مسابقات</b></i>',
          note: undefined,
        },
        {
          date: 'فروردین ۹۱',
          title: 'مسابقات بین‌المللی ربوکاپ آزاد هلند ۲۰۱۲',
          location: undefined,
          description: 'لیگ شبیه‌سازی سه‌بعدی فوتبال بزرگسالان - <i><b>مجوز شرکت در مسابقات</b></i>',
          note: undefined,
        },
        {
          date: '۱۳۹۱',
          title: 'سمینار علوم و فنون',
          location: undefined,
          description: 'دبیرستان علامه حلی ۳ - <i><b>مقام اول</b></i>',
          note: undefined,
        },
      ],
    },
  ],
};
