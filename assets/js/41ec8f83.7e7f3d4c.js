"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[1404],{62713:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>u});var h=t(85893),r=t(11151);const i={slug:"fury_0_5_1_release",title:"Fury 0.5.1 Released",authors:["chaokunyang"],tags:["fury"]},l=void 0,n={permalink:"/blog/fury_0_5_1_release",editUrl:"https://github.com/apache/fury-site/tree/main/blog/2024-05-28-fury_0_5_1_release.md",source:"@site/blog/2024-05-28-fury_0_5_1_release.md",title:"Fury 0.5.1 Released",description:"The Apache Fury team is pleased to announce the 0.5.1 release. This is a minor release that includes 36 PR from 7 distinct contributors. See the Install Page to learn how to get the libraries for your platform.",date:"2024-05-28T00:00:00.000Z",formattedDate:"May 28, 2024",tags:[{label:"fury",permalink:"/blog/tags/fury"}],readingTime:2.265,hasTruncateMarker:!1,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_0_5_1_release",title:"Fury 0.5.1 Released",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,prevItem:{title:"Fury 0.6.0 Released",permalink:"/blog/fury_0_6_0_release"},nextItem:{title:"Meta String: A 37.5% space efficient string encoding than UTF-8 in Fury serialization",permalink:"/blog/fury_meta_string_37_5_percent_space_efficient_encoding_than_utf8"}},c={authorsImageUrls:[void 0]},u=[{value:"Feature",id:"feature",level:2},{value:"Bug Fix",id:"bug-fix",level:2},{value:"Misc",id:"misc",level:2},{value:"New Contributors",id:"new-contributors",level:2}];function s(e){const a={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(a.p,{children:["The Apache Fury team is pleased to announce the 0.5.1 release. This is a minor release that includes ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/compare/v0.5.0...v0.5.1",children:"36 PR"})," from 7 distinct contributors. See the Install Page to learn how to get the libraries for your platform."]}),"\n",(0,h.jsx)(a.h2,{id:"feature",children:"Feature"}),"\n",(0,h.jsxs)(a.ul,{children:["\n",(0,h.jsxs)(a.li,{children:["feat(spec): remove list/map header from type meta spec by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1590",children:"https://github.com/apache/fury/pull/1590"})]}),"\n",(0,h.jsxs)(a.li,{children:["perf(java): Reduce performance regression caused by deleteCharAt by @LiangliangSui in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1591",children:"https://github.com/apache/fury/pull/1591"})]}),"\n",(0,h.jsxs)(a.li,{children:["feat(java): type meta encoding for java by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1556",children:"https://github.com/apache/fury/pull/1556"})," and ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1601",children:"https://github.com/apache/fury/pull/1601"})]}),"\n",(0,h.jsxs)(a.li,{children:["feat(sepc): update type meta field info spec by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1603",children:"https://github.com/apache/fury/pull/1603"})]}),"\n",(0,h.jsxs)(a.li,{children:["feat(javascript): add data to description util by @bytemain in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1609",children:"https://github.com/apache/fury/pull/1609"})]}),"\n",(0,h.jsxs)(a.li,{children:["feat(java): Support CopyOnWriteArrayListSerializer by @MrChang0 in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1613",children:"https://github.com/apache/fury/pull/1613"})]}),"\n",(0,h.jsxs)(a.li,{children:["feat(java): add blocked stream utils by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1617",children:"https://github.com/apache/fury/pull/1617"})]}),"\n",(0,h.jsxs)(a.li,{children:["feat(go/java): Add ASCII check before meta string encoding by @jasonmokk in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1620",children:"https://github.com/apache/fury/pull/1620"})]}),"\n",(0,h.jsxs)(a.li,{children:["feat(java): register old version guava collect by @MrChang0 in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1622",children:"https://github.com/apache/fury/pull/1622"})]}),"\n",(0,h.jsxs)(a.li,{children:["feat(java): support deserialization ignoreEnumDeserializeError by @157152688 in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1623",children:"https://github.com/apache/fury/pull/1623"})]}),"\n",(0,h.jsxs)(a.li,{children:["feat(java): add set serializer for concurrent set by @MrChang0 in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1616",children:"https://github.com/apache/fury/pull/1616"})]}),"\n",(0,h.jsxs)(a.li,{children:["feat(java): add custom serializer register in case of special serializer ctr by @MrChang0 in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1625",children:"https://github.com/apache/fury/pull/1625"})]}),"\n",(0,h.jsxs)(a.li,{children:["feat(java): remove soft/weak ref values from thread safe fury by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1639",children:"https://github.com/apache/fury/pull/1639"})]}),"\n",(0,h.jsxs)(a.li,{children:["refactor(java): Remove Guava's Collection usages by @Munoon in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1611",children:"https://github.com/apache/fury/pull/1611"})," and ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1614",children:"https://github.com/apache/fury/pull/1614"})]}),"\n",(0,h.jsxs)(a.li,{children:["refactor(java): replace Guava's string utility methods with own implementation by @Munoon in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1624",children:"https://github.com/apache/fury/pull/1624"})]}),"\n"]}),"\n",(0,h.jsx)(a.h2,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,h.jsxs)(a.ul,{children:["\n",(0,h.jsxs)(a.li,{children:["fix(java): compatible low version guava by @MrChang0 in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1593",children:"https://github.com/apache/fury/pull/1593"})," and ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1594",children:"https://github.com/apache/fury/pull/1594"})]}),"\n",(0,h.jsxs)(a.li,{children:["fix(java): fix getClassDef thead safety by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1597",children:"https://github.com/apache/fury/pull/1597"})]}),"\n",(0,h.jsxs)(a.li,{children:["fix(java): remove maven groupId change by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1602",children:"https://github.com/apache/fury/pull/1602"})]}),"\n",(0,h.jsxs)(a.li,{children:["fix(java): make slf4j provided by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1605",children:"https://github.com/apache/fury/pull/1605"})]}),"\n",(0,h.jsxs)(a.li,{children:["fix(java): clear serializer for collection/map by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1606",children:"https://github.com/apache/fury/pull/1606"})]}),"\n",(0,h.jsxs)(a.li,{children:["fix(java): fix TypeRef getSubType by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1608",children:"https://github.com/apache/fury/pull/1608"})]}),"\n",(0,h.jsxs)(a.li,{children:["fix(java): fix fastutil Object2ObjectOpenHashMap serialization by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1618",children:"https://github.com/apache/fury/pull/1618"})]}),"\n",(0,h.jsxs)(a.li,{children:["fix(java): subclass without fields will encode superclass by @MrChang0 in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1626",children:"https://github.com/apache/fury/pull/1626"})]}),"\n",(0,h.jsxs)(a.li,{children:["fix(java): fix wildcard capturer capture NullPointerException by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1637",children:"https://github.com/apache/fury/pull/1637"})]}),"\n",(0,h.jsxs)(a.li,{children:["fix(java): fix abstract collection elems same type serialization by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1641",children:"https://github.com/apache/fury/pull/1641"})]}),"\n",(0,h.jsxs)(a.li,{children:["fix(java): ThreadPoolFury#factoryCallback don't work when create new classLoaderFuryPooled by @MrChang0 in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1628",children:"https://github.com/apache/fury/pull/1628"})]}),"\n",(0,h.jsxs)(a.li,{children:["fix(go/java): Enhance ASCII check in meta string encoding by @jasonmokk in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1631",children:"https://github.com/apache/fury/pull/1631"})]}),"\n"]}),"\n",(0,h.jsx)(a.h2,{id:"misc",children:"Misc"}),"\n",(0,h.jsxs)(a.ul,{children:["\n",(0,h.jsxs)(a.li,{children:["chore(java): move tests to meta/reflect pkg by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1592",children:"https://github.com/apache/fury/pull/1592"})]}),"\n",(0,h.jsxs)(a.li,{children:["chore(java): make enum serializer as an upper level class by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1598",children:"https://github.com/apache/fury/pull/1598"})]}),"\n",(0,h.jsxs)(a.li,{children:["chore: bump dev version to 0.6.0 by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1599",children:"https://github.com/apache/fury/pull/1599"})]}),"\n",(0,h.jsxs)(a.li,{children:["chore: Fury header add language field by @LiangliangSui in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1612",children:"https://github.com/apache/fury/pull/1612"})]}),"\n",(0,h.jsxs)(a.li,{children:["chore(java): rename deserializeUnexistentEnumValueAsNull to deserializeNonexistentAsNull by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1634",children:"https://github.com/apache/fury/pull/1634"})]}),"\n",(0,h.jsxs)(a.li,{children:["chore(java): remove gpg pinentry-mode by @chaokunyang in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1636",children:"https://github.com/apache/fury/pull/1636"})]}),"\n"]}),"\n",(0,h.jsx)(a.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,h.jsxs)(a.ul,{children:["\n",(0,h.jsxs)(a.li,{children:["@MrChang0 made their first contribution in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1594",children:"https://github.com/apache/fury/pull/1594"})]}),"\n",(0,h.jsxs)(a.li,{children:["@jasonmokk made their first contribution in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1620",children:"https://github.com/apache/fury/pull/1620"})]}),"\n",(0,h.jsxs)(a.li,{children:["@157152688 made their first contribution in ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/pull/1623",children:"https://github.com/apache/fury/pull/1623"})]}),"\n"]}),"\n",(0,h.jsxs)(a.p,{children:[(0,h.jsx)(a.strong,{children:"Full Changelog"}),": ",(0,h.jsx)(a.a,{href:"https://github.com/apache/fury/compare/v0.5.0...v0.5.1",children:"https://github.com/apache/fury/compare/v0.5.0...v0.5.1"})]})]})}function p(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,h.jsx)(a,{...e,children:(0,h.jsx)(s,{...e})}):s(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>n,a:()=>l});var h=t(67294);const r={},i=h.createContext(r);function l(e){const a=h.useContext(i);return h.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),h.createElement(i.Provider,{value:a},e.children)}}}]);