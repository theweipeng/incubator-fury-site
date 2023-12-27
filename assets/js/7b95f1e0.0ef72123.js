"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[2580],{3637:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=i(5893),t=i(1151);const l={title:"Development",sidebar_position:6,id:"development"},u="How to build to Fury",s={id:"guide/development",title:"Development",description:"Get the source code",source:"@site/docs/guide/DEVELOPMENT.md",sourceDirName:"guide",slug:"/guide/development",permalink:"/incubator-fury-site/docs/guide/development",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Development",sidebar_position:6,id:"development"},sidebar:"guideSidebar",previous:{title:"Scala Serialization Guide",permalink:"/incubator-fury-site/docs/guide/scala_guide"},next:{title:"GraalVM Guide",permalink:"/incubator-fury-site/docs/guide/graalvm_guide"}},d={},o=[{value:"Get the source code",id:"get-the-source-code",level:2},{value:"Building Fury \ud83c\udfcb\ud83c\udfff\u200d\u2640\ufe0f",id:"building-fury-\ufe0f",level:2},{value:"Building Fury Java",id:"building-fury-java",level:3},{value:"Environment Requirements",id:"environment-requirements",level:4},{value:"Building Fury Python",id:"building-fury-python",level:3},{value:"Environment Requirements",id:"environment-requirements-1",level:4},{value:"Building Fury C++",id:"building-fury-c",level:3},{value:"Environment Requirements",id:"environment-requirements-2",level:4},{value:"Building Fury GoLang",id:"building-fury-golang",level:3},{value:"Environment Requirements",id:"environment-requirements-3",level:4},{value:"Building Fury Rust",id:"building-fury-rust",level:3},{value:"Environment Requirements",id:"environment-requirements-4",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"how-to-build-to-fury",children:"How to build to Fury"}),"\n",(0,r.jsx)(n.h2,{id:"get-the-source-code",children:"Get the source code"}),"\n",(0,r.jsxs)(n.p,{children:["Github repo: ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-fury",children:"https://github.com/apache/incubator-fury"})]}),"\n",(0,r.jsx)(n.h2,{id:"building-fury-\ufe0f",children:"Building Fury \ud83c\udfcb\ud83c\udfff\u200d\u2640\ufe0f"}),"\n",(0,r.jsx)(n.h3,{id:"building-fury-java",children:"Building Fury Java"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd java\nmvn clean compile -DskipTests\n"})}),"\n",(0,r.jsx)(n.h4,{id:"environment-requirements",children:"Environment Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"java 1.8+"}),"\n",(0,r.jsx)(n.li,{children:"maven 3.6.3+"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"building-fury-python",children:"Building Fury Python"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd python\npip install pyarrow==14.0.0 Cython wheel numpy pytest\npip install -v -e .\n"})}),"\n",(0,r.jsx)(n.h4,{id:"environment-requirements-1",children:"Environment Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"python3.6+"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"building-fury-c",children:"Building Fury C++"}),"\n",(0,r.jsx)(n.p,{children:"Build fury_util.so:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bazel build //src/fury/util:fury_util\n"})}),"\n",(0,r.jsx)(n.p,{children:"Build fury row format\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install pyarrow==14.0.0\nbazel build //src/fury/row:fury_row_format\n"})}),"\n",(0,r.jsx)(n.h4,{id:"environment-requirements-2",children:"Environment Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"cpp 11+"}),"\n",(0,r.jsx)(n.li,{children:"bazel 6.3.2"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"building-fury-golang",children:"Building Fury GoLang"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd go/fury\n# run test\ngo test -v\n# run xlang test\ngo test -v fury_xlang_test.go\n"})}),"\n",(0,r.jsx)(n.h4,{id:"environment-requirements-3",children:"Environment Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"go1.3+"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"building-fury-rust",children:"Building Fury Rust"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd rust\n# build\ncargo build\n# run test\ncargo test\n"})}),"\n",(0,r.jsx)(n.h4,{id:"environment-requirements-4",children:"Environment Requirements"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>u});var r=i(7294);const t={},l=r.createContext(t);function u(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:u(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);