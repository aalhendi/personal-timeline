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
                let showButton = e.buttonText !== null && e.buttonText !== undefined;
                return (
                    <VerticalTimelineElement
                        key={e.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "#353d40",
                            color: "#f2b138",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  #353d40",
                        }}
                        date={e.dateRange}
                        iconStyle={{
                            background: "#353d40",
                            color: "#fff",
                        }}
                    >
                        <h1 className="vertical-tiemline-element-title">{e.title}</h1>
                        <h4 className="vertical-timeline-element-subtitle">{e.description}</h4>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    );
};

export default Timeline;
