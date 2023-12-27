"use strict";(self.webpackChunkapache_fury=self.webpackChunkapache_fury||[]).push([[5088],{45:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=r(5893),t=r(1151);const n={title:"Benchmark",order:1},s=void 0,o={id:"introduction/benchmark",title:"Benchmark",description:"Different serialization frameworks are suitable for different scenarios, and benchmark results here are for reference only.",source:"@site/docs/introduction/benchmark.md",sourceDirName:"introduction",slug:"/introduction/benchmark",permalink:"/docs/introduction/benchmark",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Benchmark",order:1},sidebar:"introductionSidebar",next:{title:"Features",permalink:"/docs/introduction/features"}},c={},l=[{value:"Java Serialization",id:"java-serialization",level:3},{value:"Java Deserialization",id:"java-deserialization",level:3},{value:"JavaScript",id:"javascript",level:3}];function h(e){const a={a:"a",h3:"h3",p:"p",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Different serialization frameworks are suitable for different scenarios, and benchmark results here are for reference only."}),"\n",(0,i.jsx)(a.p,{children:"If you need to benchmark for your specific scenario, make sure all serialization frameworks are appropriately configured for that scenario."}),"\n",(0,i.jsx)(a.p,{children:"Dynamic serialization frameworks supports polymorphism and reference, which has more cost compared\nto static serialization frameworks, unless it uses the jit techniques as fury did.\nSince fury will generate code at runtime, please warm up before collecting benchmark statistics."}),"\n",(0,i.jsx)(a.h3,{id:"java-serialization",children:"Java Serialization"}),"\n",(0,i.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/serialization/bench_serialize_compatible_STRUCT_to_directBuffer_tps.png"}),"\n",(0,i.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/serialization/bench_serialize_compatible_MEDIA_CONTENT_to_array_tps.png"}),"\n",(0,i.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/serialization/bench_serialize_MEDIA_CONTENT_to_array_tps.png"}),"\n",(0,i.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/serialization/bench_serialize_SAMPLE_to_array_tps.png"}),"\n",(0,i.jsx)(a.h3,{id:"java-deserialization",children:"Java Deserialization"}),"\n",(0,i.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/deserialization/bench_deserialize_compatible_STRUCT_from_directBuffer_tps.png"}),"\n",(0,i.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/deserialization/bench_deserialize_compatible_MEDIA_CONTENT_from_array_tps.png"}),"\n",(0,i.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/deserialization/bench_deserialize_MEDIA_CONTENT_from_array_tps.png"}),"\n",(0,i.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/deserialization/bench_deserialize_SAMPLE_from_array_tps.png"}),"\n",(0,i.jsxs)(a.p,{children:["See ",(0,i.jsx)(a.a,{href:"https://github.com/apache/incubator-fury/tree/main/docs/benchmarks",children:"benchmarks"})," for more benchmarks about type forward/backward compatibility, off-heap support, zero-copy serialization."]}),"\n",(0,i.jsx)(a.h3,{id:"javascript",children:"JavaScript"}),"\n",(0,i.jsx)("img",{width:"33%",alt:"",src:"/img/benchmarks/javascript/complex_object.jpg"}),"\n",(0,i.jsx)(a.p,{children:"The data used for this bar graph includes a complex object that has many kinds of field types, and the size of the JSON data is 3KB."}),"\n",(0,i.jsxs)(a.p,{children:["See ",(0,i.jsx)(a.a,{href:"https://github.com/apache/incubator-fury/blob/main/javascript/benchmark/index.js",children:"benchmarks"})," for the benchmark code."]})]})}function d(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,a,r)=>{r.d(a,{Z:()=>o,a:()=>s});var i=r(7294);const t={},n=i.createContext(t);function s(e){const a=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(n.Provider,{value:a},e.children)}}}]);