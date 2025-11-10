(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/api/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAllCarouselImages",
    ()=>fetchAllCarouselImages,
    "fetchRecentWork",
    ()=>fetchRecentWork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "https://bright-spark-be.onrender.com/"
});
const fetchRecentWork = ()=>{
    return api.get("https://bright-spark-be.onrender.com/api/images/recent_work").then((response)=>{
        return response;
    }).catch((error)=>{
        return error;
    });
};
const fetchAllCarouselImages = ()=>{
    return api.get("https://bright-spark-be.onrender.com/api/images/carousel_images").then((response)=>{
        return response;
    }).catch((error)=>{
        return error;
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRecentWorks",
    ()=>getRecentWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/api/api.js [app-client] (ecmascript)");
;
async function getRecentWorks() {
    try {
        console.log("fetching");
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRecentWork"]();
        console.log("fetched");
        return data;
    } catch (error) {
        console.error("error", error);
        throw new Error('Failed to fetch recent works');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/landingImages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LandingImages({ works }) {
    console.log(works, "works here");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
        fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/landingImages.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = LandingImages;
var _c;
__turbopack_context__.k.register(_c, "LandingImages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$ui$2f$landingImages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/landingImages.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
async function Home() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const recentWorks = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecentWorks"])();
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this);
    }
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mainHeader",
                children: "Bright Spark Fireworks"
            }, void 0, false, {
                fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pageDetails",
                children: "Bright Spark Fireworks is an arts-based pyrotechnics company that makes unique work for a wide spectrum of clients. We also work in collaboration with other outdoor artists and festivals to enhance and support artistic projects and performances."
            }, void 0, false, {
                fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "landing",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$ui$2f$landingImages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    works: recentWorks
                }, void 0, false, {
                    fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Home, "5S7VQ8+9ArWv2AFPIfnY+LwrHeg=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_projects_spark_bright-spark-nextJS-fe_app_ac50341d._.js.map