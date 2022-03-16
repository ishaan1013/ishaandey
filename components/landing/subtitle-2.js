import React, { useState, useEffect } from 'react';
import { StaggerTextChange } from "stagger-text-reveal-animation";
import styles from '../../styles/Home.module.scss'

export default function Subtitle() {
    return (
        <div className={styles.subtitle}>
            <StaggerTextChange
                text={"High School Student"}
                changeTo={"Frontend Developer"}
                fontWeight={500}
                duration={1}
                stagger={30}
                direction={"down"}
                triggerAfter={2350}
                fontSize={1.5}
                unit = {"rem"}
                height={1.45}
            />
        </div>
    )
}