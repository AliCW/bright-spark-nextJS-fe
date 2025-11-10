module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/api/api.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAllCarouselImages",
    ()=>fetchAllCarouselImages,
    "fetchRecentWork",
    ()=>fetchRecentWork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
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
}),
"[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRecentWorks",
    ()=>getRecentWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/api/api.js [app-rsc] (ecmascript)");
;
async function getRecentWorks() {
    try {
        console.log("fetching");
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchRecentWork"]();
        console.log("fetched");
        return data;
    } catch (error) {
        console.error("error", error);
        throw new Error('Failed to fetch recent works');
    }
}
}),
"[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/landingImages.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { useEffect, useState } from "react";
__turbopack_context__.s([
    "default",
    ()=>LandingImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function LandingImages({ works }) {
    console.log(works, "works here");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
        fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/landingImages.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$ui$2f$landingImages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/landingImages.tsx [app-rsc] (ecmascript)");
;
;
;
async function Home() {
    const recentWorks = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRecentWorks"])();
    // if(isLoading) {
    //     return (
    //         <p>Loading...</p>
    //     );
    // };
    console.log(recentWorks.data.data, "recentWorks<<<");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mainHeader",
                children: "Bright Spark Fireworks"
            }, void 0, false, {
                fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pageDetails",
                children: "Bright Spark Fireworks is an arts-based pyrotechnics company that makes unique work for a wide spectrum of clients. We also work in collaboration with other outdoor artists and festivals to enhance and support artistic projects and performances."
            }, void 0, false, {
                fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "landing",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$ui$2f$landingImages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    works: recentWorks.data.data
                }, void 0, false, {
                    fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$ui$2f$home$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/ui/home.tsx [app-rsc] (ecmascript)");
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$spark$2f$bright$2d$spark$2d$nextJS$2d$fe$2f$app$2f$ui$2f$home$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/page.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/page.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/projects/spark/bright-spark-nextJS-fe/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9e5ef79b._.js.map