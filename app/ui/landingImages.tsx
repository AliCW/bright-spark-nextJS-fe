import LandingCarousel from "../ui/landingCarousel";
import { findYears, formatRecentWork, formatEventAndCollaborationNames } from "../lib/utils";
import Link from "next/link";

export default function LandingImages({data}: {data: object}){

    if(!data){
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div>
            <p>See our latest collaborations from {findYears()}</p>
            <div>
                {formatRecentWork(data).map((work) => {
                    return (
                        <div key={work.captured}>
                            <Link
                                href={`/events/${work.event}`}
                                key={work.event}
                            >
                                {formatEventAndCollaborationNames(work.event)}
                            </Link>
                            <Link
                                href={`collaborations${work.collaboration}`}
                                key={work.collaboration}
                            >
                                {formatEventAndCollaborationNames(work.collaboration)}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};