import React, { useState, useEffect } from "react"
import { StaggerTextChange } from "stagger-text-reveal-animation"
import styles from "../../styles/Home.module.scss"

export default function Subtitle() {
    return (
        <div className={styles.subtitle}>
            <StaggerTextChange
                text={"Frontend Developer"}
                changeTo={"High School Student"}
                fontWeight={500}
                duration={1}
                stagger={30}
                direction={"up"}
                triggerAfter={2050}
                fontSize={1.5}
                unit = {"rem"}
                height={1.45}
            />
        </div>
    )
}