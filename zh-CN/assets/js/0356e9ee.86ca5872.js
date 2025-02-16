"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[9409],{62888:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>o,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=i(85893),h=i(11151);const n={slug:"fury_0_9_0_release",title:"Fury v0.9.0 Released",authors:["chaokunyang"],tags:["fury"]},r=void 0,l={permalink:"/zh-CN/blog/fury_0_9_0_release",editUrl:"https://github.com/apache/fury-site/tree/main/i18n/zh-CN/docusaurus-plugin-content-blog/2024-11-10-fury_0_9_0_release.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2024-11-10-fury_0_9_0_release.md",title:"Fury v0.9.0 Released",description:"The Apache Fury team is pleased to announce the 0.9.0 release. This is a major release that includes 34 PR from 14 distinct contributors. See the Install Page to learn how to get the libraries for your platform.",date:"2024-11-10T00:00:00.000Z",formattedDate:"2024\u5e7411\u670810\u65e5",tags:[{label:"fury",permalink:"/zh-CN/blog/tags/fury"}],readingTime:2.87,hasTruncateMarker:!1,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_0_9_0_release",title:"Fury v0.9.0 Released",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,nextItem:{title:"Fury v0.8.0 Released",permalink:"/zh-CN/blog/fury_0_8_0_release"}},s={authorsImageUrls:[void 0]},u=[{value:"Highlight",id:"highlight",level:2},{value:"Features",id:"features",level:2},{value:"Bug Fix",id:"bug-fix",level:2},{value:"Other Improvements",id:"other-improvements",level:2},{value:"New Contributors",id:"new-contributors",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,h.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The Apache Fury team is pleased to announce the 0.9.0 release. This is a major release that includes ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/compare/v0.8.0...v0.9.0",children:"34 PR"})," from 14 distinct contributors. See the ",(0,a.jsx)(t.a,{href:"https://fury.apache.org/docs/start/install",children:"Install"})," Page to learn how to get the libraries for your platform."]}),"\n",(0,a.jsx)(t.h2,{id:"highlight",children:"Highlight"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Optimized serializers for Fury kotlin support"}),"\n",(0,a.jsx)(t.li,{children:"Highly-optimized UTF-8 string encoding implementation for Java(2x faster than JDK utf8 encoding)"}),"\n",(0,a.jsxs)(t.li,{children:["Reduce metastring hashcode payload for small string(",(0,a.jsx)(t.code,{children:"<=16 bytes"}),")"]}),"\n",(0,a.jsx)(t.li,{children:"Support building C++ libs on windows platform"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["feat(kotlin): Introduce kotlin package with stdlib collections and tests by @wywen in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1877",children:"https://github.com/apache/fury/pull/1877"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(kotlin): Add Unsigned Primitive Support by @wywen in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1886",children:"https://github.com/apache/fury/pull/1886"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(kotlin): Add unsigned array support and tests for arrays and strings by @wywen in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1891",children:"https://github.com/apache/fury/pull/1891"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(java): Refactor String serialization and deserialization by @HuangXingBo in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1890",children:"https://github.com/apache/fury/pull/1890"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(java): support thread safe register callback for scala kotlin by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1895",children:"https://github.com/apache/fury/pull/1895"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(scala): add scala range serializer by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1899",children:"https://github.com/apache/fury/pull/1899"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(java): add option to treat enum as string by @orisgarno in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1892",children:"https://github.com/apache/fury/pull/1892"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(kotlin): Add tests and support for built-in types from the kotlin stdlib by @wywen in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1901",children:"https://github.com/apache/fury/pull/1901"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(java): reduce metastring hashcode payload for small string(",(0,a.jsx)(t.code,{children:"<=16 bytes"}),") by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1909",children:"https://github.com/apache/fury/pull/1909"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(javascript): Added serialization and serialization for  Type Meta Layer by @Forchapeatl in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1825",children:"https://github.com/apache/fury/pull/1825"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(bazel): support building C++ libs on windows platform by @An-DJ in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1873",children:"https://github.com/apache/fury/pull/1873"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(scala): support scala native image build by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1922",children:"https://github.com/apache/fury/pull/1922"})]}),"\n",(0,a.jsxs)(t.li,{children:["perf(python): Add python benchmark test by @penguin-wwy in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1916",children:"https://github.com/apache/fury/pull/1916"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["fix(scala): ban these sbt commands by @pjfanning in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1862",children:"https://github.com/apache/fury/pull/1862"})]}),"\n",(0,a.jsxs)(t.li,{children:["fix(java): fix async compilation switch for non-public nested class by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1883",children:"https://github.com/apache/fury/pull/1883"})]}),"\n",(0,a.jsxs)(t.li,{children:["fix(java): fix add fury thread safety issue by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1889",children:"https://github.com/apache/fury/pull/1889"})]}),"\n",(0,a.jsxs)(t.li,{children:["fix(other): fix feature request template by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1898",children:"https://github.com/apache/fury/pull/1898"})]}),"\n",(0,a.jsxs)(t.li,{children:["fix(java): NonExistentEnum on mode serializeEnumByName by @orisgarno in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1904",children:"https://github.com/apache/fury/pull/1904"})]}),"\n",(0,a.jsxs)(t.li,{children:["fix(java): ThreadLocalFury and ThreadPoolFury prioritize using the user classloader by @Aliothmoon in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1907",children:"https://github.com/apache/fury/pull/1907"})]}),"\n",(0,a.jsxs)(t.li,{children:["fix(java): child container deep copy by @zhaommmmomo in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1911",children:"https://github.com/apache/fury/pull/1911"})]}),"\n",(0,a.jsxs)(t.li,{children:["fix(java): Fix incorrect results of utf16 to utf8 conversion for latin1 but not ascii characters in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1914",children:"https://github.com/apache/fury/pull/1914"})]}),"\n",(0,a.jsxs)(t.li,{children:["fix(python): Eliminate PytestCollectionWarning when running pytest by @penguin-wwy in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1917",children:"https://github.com/apache/fury/pull/1917"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"other-improvements",children:"Other Improvements"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["chore(py314): Replace deprecated pkgutil.find_loader by @effigies in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1888",children:"https://github.com/apache/fury/pull/1888"})]}),"\n",(0,a.jsxs)(t.li,{children:["docs(guide): Fix package typo by @mandrean in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1906",children:"https://github.com/apache/fury/pull/1906"})]}),"\n",(0,a.jsxs)(t.li,{children:["build(kotlin): Add spotless ktfmt and enable explicit api mode for library code. by @wywen in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1912",children:"https://github.com/apache/fury/pull/1912"})]}),"\n",(0,a.jsxs)(t.li,{children:["build(deps): upgrade scala (2.13.15/3.3.4) by @pjfanning in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1861",children:"https://github.com/apache/fury/pull/1861"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(rust):  add rust-analyzer to toolchain by @caicancai in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1865",children:"https://github.com/apache/fury/pull/1865"})]}),"\n",(0,a.jsxs)(t.li,{children:["chore(scala): add scala build script by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1920",children:"https://github.com/apache/fury/pull/1920"})]}),"\n",(0,a.jsxs)(t.li,{children:["chore(kotlin): add parent pom for fury kotlin by @chaokunyang in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1921",children:"https://github.com/apache/fury/pull/1921"})]}),"\n",(0,a.jsxs)(t.li,{children:["feat(java): Improve error message on architecture not using little-endian format by @apupier in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1918",children:"https://github.com/apache/fury/pull/1918"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["@An-DJ made their first contribution in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1873",children:"https://github.com/apache/fury/pull/1873"})]}),"\n",(0,a.jsxs)(t.li,{children:["@wywen made their first contribution in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1877",children:"https://github.com/apache/fury/pull/1877"})]}),"\n",(0,a.jsxs)(t.li,{children:["@effigies made their first contribution in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1888",children:"https://github.com/apache/fury/pull/1888"})]}),"\n",(0,a.jsxs)(t.li,{children:["@HuangXingBo made their first contribution in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1890",children:"https://github.com/apache/fury/pull/1890"})]}),"\n",(0,a.jsxs)(t.li,{children:["@orisgarno made their first contribution in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1892",children:"https://github.com/apache/fury/pull/1892"})]}),"\n",(0,a.jsxs)(t.li,{children:["@mandrean made their first contribution in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1906",children:"https://github.com/apache/fury/pull/1906"})]}),"\n",(0,a.jsxs)(t.li,{children:["@Aliothmoon made their first contribution in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1907",children:"https://github.com/apache/fury/pull/1907"})]}),"\n",(0,a.jsxs)(t.li,{children:["@penguin-wwy made their first contribution in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1916",children:"https://github.com/apache/fury/pull/1916"})]}),"\n",(0,a.jsxs)(t.li,{children:["@apupier made their first contribution in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1918",children:"https://github.com/apache/fury/pull/1918"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Full Changelog"}),": ",(0,a.jsx)(t.a,{href:"https://github.com/apache/fury/compare/v0.8.0...v0.9.0",children:"https://github.com/apache/fury/compare/v0.8.0...v0.9.0"})]}),"\n",(0,a.jsx)(t.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,a.jsx)(t.p,{children:"Thanks @effigies @apupier @wywen @mandrean @HuangXingBo @pjfanning @chaokunyang @penguin-wwy @An-DJ @Forchapeatl @orisgarno @zhaommmmomo @caicancai @Aliothmoon"}),"\n",(0,a.jsx)(t.p,{children:"A big thank you to all our contributors who have worked hard on this release. Your contributions, whether through code,\ndocumentation, or issue reporting, are really appreciated."})]})}function o(e={}){const{wrapper:t}={...(0,h.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>r});var a=i(67294);const h={},n=a.createContext(h);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(h):e.components||h:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);