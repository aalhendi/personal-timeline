//Import Vertical-Timeline & its styling
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Importing Data
import Elements from "../data.js";

//Importing styled-component styles
import { eTitle, eDesc, eDate } from "../styles.js";

/*
const TimelineElement = (props) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0,255,0)", color: "#FFF" }}
            contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
            }}
        >
            {" "}
        </VerticalTimelineElement>
    );
};
*/

const Timeline = () => {
    return (
        <VerticalTimeline>
            {Elements.map((e) => {
                return (
                    <VerticalTimelineElement
                        key={e.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)",
                        }}
                        date={e.dateRange}
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                    >
                        <eTitle>{e.title}{"\n"}</eTitle>
                        <eDesc>{e.description}</eDesc>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    );
};

export default Timeline;
