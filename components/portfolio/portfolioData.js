import taDisplay1 from '../../assets/ta1.png'
import taDisplay2 from '../../assets/ta3.png'
import taDisplay3 from '../../assets/ta5.png'

import ohseaDisplay1 from '../../assets/ohsea1.png'
import ohseaDisplay2 from '../../assets/ohsea3.png'

import styles from "../../styles/Portfolio.module.scss"

const data = {
    taData: {
        type: "app",
        class: styles.taDisplay,
        img1: taDisplay1,
        img2: taDisplay2,
        img3: taDisplay3,
        alt1: "teachassist app 1",
        alt2: "teachassist app 2",
        alt3: "teachassist app 3",

        title: "TeachAssist App",
        desc: "Advanced tools for high school students for academic success. Designed & developed.",

        tool1: "React Native",
        tool2: "Expo",
        tool3: "None",
        tool4: "None",
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
        img3: "",
        alt1: "ohsea site 1",
        alt2: "ohsea site 2",
        alt3: "",

        title: "OHSEA",
        desc: "OHSEA leads in high school esports opportunities. Designed & Developed.",

        tool1: "React",
        tool2: "Gatsby",
        tool3: "SCSS",
        tool4: "None",

        icon1: "Github",
        icon2: "Link",
        icon3: "None",
        link1: "https://github.com/ohseagg/ohsea.gg",
        link2: "https://ohsea.gg/",
        link3: "",
    },
}

export default data