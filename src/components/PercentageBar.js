import React from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ScrollAnimation from 'react-animate-on-scroll'
import { useState } from 'react';

export default function PercentageBar({ percentage, pathColor, textColor, animation }) {
    const [ranOnce, setRanOnce] = useState(false)
    return (
        <VisibilitySensor>
            {({ isVisible }) => {
                let stop = ranOnce ? percentage : 0
                const value = isVisible ? percentage : stop;
                return (
                    <ScrollAnimation
                        animateIn={animation}
                        animateOnce={true}
                        duration={1}
                        afterAnimatedIn={() => setTimeout(()=>setRanOnce(true), 2000)}
                    >
                        <h2>
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={value}
                                duration={1.8}
                                easingFunction={easeQuadInOut}
                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            styles={buildStyles({ pathTransition: "none", pathColor, textColor })}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                        </h2>
                    </ScrollAnimation>)
            }}
        </VisibilitySensor>
    )
}
