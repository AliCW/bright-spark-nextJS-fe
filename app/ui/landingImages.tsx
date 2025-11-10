// import { useEffect, useState } from "react";
import * as api from "../api/api.js";
import { formatRecentWork } from "../lib/utils"

export default function LandingImages({data}: {data: object}){

    console.log(formatRecentWork(data), "works here")

    return (
        <div>

        </div>
    )
};