module.exports = {
    siteTitle: 'Segun Adebanjo | frontend engineer', // <title>
    manifestName: 'Resume',
    manifestShortName: 'Landing', // max 12 characters
    manifestStartUrl: '/',
    manifestBackgroundColor: '#663399',
    manifestThemeColor: '#663399',
    manifestDisplay: 'standalone',
    manifestIcon: 'src/assets/img/favicon-16x16.png',
    pathPrefix: `/v1/`, // This path is subpath of your hosting https://domain/portfolio
    firstName: 'Segun',
    lastName: 'Adebanjo',

    // social
    socialLinks: [
        {
            icon: 'https://res.cloudinary.com/dcp4ezo2a/image/upload/c_scale,h_24,w_24/v1583332227/Github.svg',
            name: 'Github',
            url: 'https://github.com/segun-ade',
        },
        {
            icon: 'https://res.cloudinary.com/dcp4ezo2a/image/upload/c_scale,h_24,w_24/v1583332259/Linkedin.svg',
            name: 'Linkedin',
            url: 'https://linkedin.com/in/sadebanjo/',
        },
        {
            icon: 'https://res.cloudinary.com/dcp4ezo2a/image/upload/c_scale,h_24,w_24/v1583332277/twitter.svg',
            name: 'Twitter',
            url: 'https://twitter.com/__adeniyi',
        },
    ],
    email: 'adebanjosegun589@gmail.com',
    phone: '234-802-7930-045',
    address: 'Ojodu Berger, Lagos, NG',
    role: 'build things for the web.',
    about: ' I\'m a frontend engineer based in Lagos\n,\
    NG specializing in building\n\
    exceptional, high-quality websites and applications.',
    cta: 'Get in touch',
    avatar: 'https://res.cloudinary.com/dcp4ezo2a/image/upload/v1584477727/_Segun-removebg-preview.png',
    // avatar: 'https://res.cloudinary.com/dcp4ezo2a/image/upload/v1582931419/cartoon1.png',
    coreSkills: [
        {
            tech: 'Javascript/ES6+'
        },
        {
            tech: 'ReactJs'
        },
        {
            tech: 'Redux/Sagas'
        },
        {
            tech: 'HTML/(S)CSS'
        },
        {
            tech: 'Ant Design'
        },
        {
            tech: 'Git / Git Workflows'
        },
        {
            tech: 'Agile Methodologies'
        },
    ],
    otherSkills: [
        {
            tech: 'Firebase'
        },
        {
            tech: 'GatsbyJs'
        },
        {
            tech: 'VueJs'
        },
        {
            tech: 'Node / Express'
        },
        {
            tech: 'Laravel'
        },
    ],
    aboutMe: 'Hello! I\'m Segun, a frontend engineer based in Lagos,\
    Nigeria who enjoys building things that lives on the internet. I develop\n\
    great websites and web apps that provide intuitive, pixel-perfect user interfaces.',
    projects: [
        {
            name: 'portfolio',
            index: 'one',
            url: 'https://segunadebanjo.me/',
            github: 'https://github.com/Segun-Ade/portfolioV1'
        },
        {
            name: 'cleanIT',
            index: 'two',
            url: 'https://cleanit-7147d.firebaseapp.com/',
            github: 'https://github.com/Enye-Team-Cougar/cleanit-frontend'
        },
        {
            name: 'soundio',
            index: 'three',
            url: 'https://soundio.netlify.com/',
            github: 'https://github.com/Segun-Ade/music-app'
        },
        {
            name: 'huddle',
            index: 'four',
            url: 'https://huddle-landing.surge.sh/',
            github: 'https://github.com/Segun-Ade/Huddle-1'
        },
    ],
    sayHi: 'You can chat me up to discuss your project or just to say hi',
    formStrings: [
        {
            name: 'name',
            placeHolder: 'Name',
            type: 'text',
            key: 'name'
        },
        {
            name: 'email',
            placeHolder: 'Email',
            type: 'email',
            key: 'email'
        },
        {
            name: 'message',
            placeHolder: 'Message',
            type: 'text',
            key: 'message'
        },
    ]
};
