import taDisplay1 from "../../assets/ta1.png"
import taDisplay2 from "../../assets/ta3.png"
import taDisplay3 from "../../assets/ta5.png"
import taDisplay4 from "../../assets/ta2.png"
import taDisplay5 from "../../assets/ta4.png"

import ohseaDisplay1 from "../../assets/ohsea1.png"
import ohseaDisplay2 from "../../assets/ohsea3.png"
import ohseaDisplay3 from "../../assets/ohsea2.png"

import nutritionDisplay1 from "../../assets/nutrition1.png"
import nutritionDisplay2 from "../../assets/nutrition3.png"
import nutritionDisplay3 from "../../assets/nutrition2.png"

import personalSiteDisplay1 from "../../assets/personalSite1.png"
import personalSiteDisplay2 from "../../assets/personalSite3.png"
import personalSiteDisplay3 from "../../assets/personalSite2.png"

import brainscrambleDisplay1 from "../../assets/brainscramble1.png"
import brainscrambleDisplay2 from "../../assets/brainscramble3.png"
import brainscrambleDisplay3 from "../../assets/brainscramble2.png"

import exchangeDisplay1 from "../../assets/exchange1.png"
import exchangeDisplay2 from "../../assets/exchange3.png"
import exchangeDisplay3 from "../../assets/exchange2.png"

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
        tool2: "Python",
        tool3: "Expo",
        tool4: "Heroku",
        tool5: "Figma",
        icon1: "Github",
        icon2: "Appstore",
        icon3: "Link",
        link1: "https://github.com/teachassistapp/TeachAssist",
        link2: "",
        link3: "https://teachassistapp.github.io/",
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
        icon2: "",
        icon3: "None",
        link1: "https://github.com/ohseagg/ohsea.gg",
        link2: "",
        link3: "",
    },
    personalSiteData: {
        type: "site",
        class: styles.personalSiteDisplay,
        img1: personalSiteDisplay1,
        img2: personalSiteDisplay2,
        img3: personalSiteDisplay3,
        alt1: "personal site 1",
        alt2: "personal site 2",
        alt3: "",

        title: "Personal Site",
        longTitle: "My Personal Website",
        desc1: "A site to learn all about me and my projects.",
        desc2: "Developed on Next.js and React using TailwindCSS. Designed with Figma. Deployed with Vercel. Went through more design iterations that I'd like to admit.",
        desc3: "",

        tool1: "React",
        tool2: "Next.js",
        tool3: "SCSS",
        tool4: "Figma",
        tool5: "None",

        icon1: "Github",
        icon2: "Link",
        icon3: "None",
        link1: "https://github.com/ishaan1013/ishaandey",
        link2: "http://ishaandey.live/",
        link3: "",
    },
    exchangeData: {
        type: "site",
        class: styles.exchangeDisplay,
        img1: exchangeDisplay1,
        img2: exchangeDisplay2,
        img3: exchangeDisplay3,
        alt1: "blockchain exchange 1",
        alt2: "blockchain exchange 2",
        alt3: "",

        title: "Blockchain Exchange",
        longTitle: "Blockchain Exchange App",
        desc1: "",
        desc2: "",
        desc3: "",

        tool1: "React-TS",
        tool2: "Solidity",
        tool3: "Vite",
        tool4: "Hardhat",
        tool5: "TailwindCSS",

        icon1: "Github",
        icon2: "Link",
        icon3: "None",
        link1: "https://github.com/ishaan1013/sol-basics",
        link2: "https://sol-basics.vercel.app/",
        link3: "",
    },
    nutritionData: {
        type: "site",
        class: styles.nutritionDisplay,
        img1: nutritionDisplay1,
        img2: nutritionDisplay2,
        img3: nutritionDisplay3,
        alt1: "nutrition tracker 1",
        alt2: "nutrition tracker 2",
        alt3: "nutrition tracker 3",

        title: "Nutrition App",
        longTitle: "Nutrition Tracker App",
        desc1: "A complex web app that allows users to track their daily nutrition intake and weight goals. Stores user account data in a JSON database. Allows temporary, anonymous logins for easy access.",
        desc2: "Original personal project - no tutorials or pre-built UI components. Uses context API, Firebase Realtime Database, and Firebase Authentication.",
        desc3: "Not completely finished, but functional. Developed on Next.js and React using TailwindCSS. Designed with Figma. Deployed with Vercel.",

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
    brainscrambleData: {
        type: "site",
        class: styles.brainscrambleDisplay,
        img1: brainscrambleDisplay1,
        img2: brainscrambleDisplay2,
        img3: brainscrambleDisplay3,
        alt1: "brainscramble 1",
        alt2: "brainscramble 2",
        alt3: "brainscramble 3",

        title: "The Brain Scramble",
        longTitle: "The Brain Scramble Magazine",
        desc1: "An modern online magazine, regularly updated with monthly issues from a wide range of authors.",
        desc2: "Built with Wordpress & several plugins.",
        desc3: "",

        tool1: "Wordpress",
        tool2: "None",
        tool3: "None",
        tool4: "None",
        tool5: "None",

        icon1: "Link",
        icon2: "None",
        icon3: "None",
        link1: "https://thebrainscramble.com",
        link2: "",
        link3: "",
    },
}

export default data