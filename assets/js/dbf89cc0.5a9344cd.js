"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[8539],{4716:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=r(5893),a=r(1151);const s={id:"install",title:"Install",sidebar_position:0},i=void 0,o={id:"start/install",title:"Install",description:"Java",source:"@site/docs/start/install.md",sourceDirName:"start",slug:"/start/install",permalink:"/incubator-fury-site/docs/start/install",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"install",title:"Install",sidebar_position:0},sidebar:"startSidebar",next:{title:"Usage",permalink:"/incubator-fury-site/docs/start/usage"}},l={},c=[{value:"Java",id:"java",level:3},{value:"Scala",id:"scala",level:3},{value:"Python",id:"python",level:3},{value:"Golang",id:"golang",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Rust",id:"rust",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"java",children:"Java"}),"\n",(0,t.jsx)(n.p,{children:"Nightly snapshot:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<repositories>\n  <repository>\n    <id>sonatype</id>\n    <url>https://s01.oss.sonatype.org/content/repositories/snapshots</url>\n    <releases>\n      <enabled>false</enabled>\n    </releases>\n    <snapshots>\n      <enabled>true</enabled>\n    </snapshots>\n  </repository>\n</repositories>\n<dependency>\n  <groupId>org.furyio</groupId>\n  <artifactId>fury-core</artifactId>\n  <version>0.5.0-SNAPSHOT</version>\n</dependency>\n\x3c!-- row/arrow format support --\x3e\n\x3c!-- <dependency>\n  <groupId>org.furyio</groupId>\n  <artifactId>fury-format</artifactId>\n  <version>0.5.0-SNAPSHOT</version>\n</dependency> --\x3e\n"})}),"\n",(0,t.jsx)(n.p,{children:"Release version:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.furyio</groupId>\n  <artifactId>fury-core</artifactId>\n  <version>0.4.0</version>\n</dependency>\n\x3c!-- row/arrow format support --\x3e\n\x3c!-- <dependency>\n  <groupId>org.furyio</groupId>\n  <artifactId>fury-format</artifactId>\n  <version>0.4.0</version>\n</dependency> --\x3e\n"})}),"\n",(0,t.jsx)(n.h3,{id:"scala",children:"Scala"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sbt",children:'libraryDependencies += "org.furyio" % "fury-core" % "0.4.0"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Python wheel will be released in the future.\n# Currently you need to specify `--pre` to install\n# the unstable version.\npip install pyfury --pre\n"})}),"\n",(0,t.jsx)(n.h3,{id:"golang",children:"Golang"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go get https://github.com/apache/incubator-fury/go/fury\n"})}),"\n",(0,t.jsx)(n.h3,{id:"javascript",children:"JavaScript"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @furyjs/fury\n"})}),"\n",(0,t.jsx)(n.h3,{id:"rust",children:"Rust"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Cargo.toml\n\n[dependencies]\nfury = { git= "https://github.com/apache/incubator-fury.git", branch = "main" }\nfury_derive = { git= "https://github.com/apache/incubator-fury.git", branch = "main" }\nlazy_static = { version = "1.4.0" }\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var t=r(7294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);