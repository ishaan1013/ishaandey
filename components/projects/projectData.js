import taDisplay1 from '../../assets/ta1.png'
import taDisplay2 from '../../assets/ta3.png'
import taDisplay3 from '../../assets/ta5.png'
import taDisplay4 from '../../assets/ta2.png'
import taDisplay5 from '../../assets/ta4.png'

import ohseaDisplay1 from '../../assets/ohsea1.png'
import ohseaDisplay2 from '../../assets/ohsea3.png'
import ohseaDisplay3 from '../../assets/ohsea2.png'

import styles from "../../styles/Projects.module.scss"

const data = {
    taData: {
        type: "app",
        class: styles.taDisplay,
        img1: taDisplay1,
        img2: taDisplay2,
        img3: taDisplay3,
        img4: taDisplay4,
        img5: taDisplay5,
        alt1: "teachassist app 1",
        alt2: "teachassist app 2",
        alt3: "teachassist app 3",
        alt3: "teachassist app 4",
        alt3: "teachassist app 5",

        title: "TeachAssist App",
        longTitle: "TeachAssist App",
        desc1: "The unofficial YRDSB (York Region District School Board) TeachAssist app provides high school students with advanced tools for academic success. This app was created to give students access to their marks, guidance appointments, and other academic data in a convenient way.",
        desc2: "Top 100 education apps in the world on Apple's charts. 300+ downloads. Marketing reached 5000+ high school students.",
        desc3: "Designed with Figma, developed with React Native.",

        tool1: "React Native",
        tool2: "Expo",
        tool3: "Heroku",
        tool4: "Figma",
        tool5: "None",
        icon1: "Github",
        icon2: "Appstore",
        icon3: "Link",
        link1: "https://github.com/Teach-Assist-App/frontend2",
        link2: "",
        link3: "https://teach-assist-app.github.io/",
    },
    ohseaData: {
        type: "site",
        class: styles.ohseaDisplay,
        img1: ohseaDisplay1,
        img2: ohseaDisplay2,
        img3: ohseaDisplay3,
        alt1: "ohsea site 1",
        alt2: "ohsea site 2",
        alt3: "",

        title: "OHSEA",
        longTitle: "Ontario High School Esports Association",
        desc1: "OHSEA (Ontario High School Esports Association) is a student-run organization that provides a platform for high school students to participate in esports tournaments. Run by high school & university students dedicated to integrating esports into education.",
        desc2: "Amassed a very large community & ran events with hundreds of students.",
        desc3: "Designed with Figma, developed with React and Gatsby. Also organized events with the team.",

        tool1: "React",
        tool2: "Gatsby",
        tool3: "SCSS",
        tool4: "Figma",
        tool5: "Netlify",

        icon1: "Github",
        icon2: "Link",
        icon3: "None",
        link1: "https://github.com/ohseagg/ohsea.gg",
        link2: "https://ohsea.gg/",
        link3: "",
    },
    personalSiteData: {
        type: "site",
        class: styles.ohseaDisplay,
        img1: ohseaDisplay1,
        img2: ohseaDisplay2,
        img3: ohseaDisplay3,
        alt1: "ohsea site 1",
        alt2: "ohsea site 2",
        alt3: "",

        title: "Personal Site",
        longTitle: "Personal Site",
        desc1: "description!!!!!.",
        desc2: "Designed with Figma, developed with React and Next.js.",
        desc3: "",

        tool1: "React",
        tool2: "Next.js",
        tool3: "SCSS",
        tool4: "Figma",
        tool5: "None",

        icon1: "Github",
        icon2: "None",
        icon3: "None",
        link1: "https://github.com/ohseagg/ohsea.gg",
        link2: "",
        link3: "",
    },
    nutritionData: {
        type: "site",
        class: styles.ohseaDisplay,
        img1: ohseaDisplay1,
        img2: ohseaDisplay2,
        img3: ohseaDisplay3,
        alt1: "nutrition tracker 1",
        alt2: "nutrition tracker 2",
        alt3: "",

        title: "Nutrition App",
        longTitle: "Nutrition Tracker App",
        desc1: "description!!!!!.",
        desc2: "Nutrition.",
        desc3: "",

        tool1: "React",
        tool2: "Next.js",
        tool3: "TailwindCSS",
        tool4: "Firebase",
        tool5: "Figma",

        icon1: "Github",
        icon2: "Link",
        icon3: "None",
        link1: "https://github.com/ishaan1013/nutrition",
        link2: "https://nutrition-ishaan1013.vercel.app/",
        link3: "",
    },
}

export default data