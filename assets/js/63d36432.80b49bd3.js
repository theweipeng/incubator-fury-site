"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[5759],{1722:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=s(85893),r=s(11151);const i={id:"download",title:"Apache Fury(incubating) Download"},t=void 0,c={type:"mdx",permalink:"/download/",source:"@site/src/pages/download/index.md",title:"Apache Fury(incubating) Download",description:"The official Apache Fury releases are provided as source artifacts.",frontMatter:{id:"download",title:"Apache Fury(incubating) Download"},unlisted:!1},l={},h=[{value:"The latest release",id:"the-latest-release",level:2},{value:"All archived releases",id:"all-archived-releases",level:2},{value:"Verify a release",id:"verify-a-release",level:2},{value:"Verifying Checksums",id:"verifying-checksums",level:3},{value:"Verifying Signatures",id:"verifying-signatures",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The official Apache Fury releases are provided as source artifacts."}),"\n",(0,a.jsxs)(n.p,{children:["For binary install, please see Fury ",(0,a.jsx)(n.a,{href:"/docs/start/install/",children:"install"})," document."]}),"\n",(0,a.jsx)(n.h2,{id:"the-latest-release",children:"The latest release"}),"\n",(0,a.jsx)(n.p,{children:"The latest source release is 0.10.0:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Version"}),(0,a.jsx)(n.th,{children:"Date"}),(0,a.jsx)(n.th,{children:"Source"}),(0,a.jsx)(n.th,{children:"Release Notes"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"0.10.0"}),(0,a.jsx)(n.td,{children:"2024-11-10"}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.a,{href:"https://www.apache.org/dyn/closer.lua/incubator/fury/0.10.0/apache-fury-0.10.0-incubating-src.tar.gz?action=download",children:"source"})," ",(0,a.jsx)(n.a,{href:"https://downloads.apache.org/incubator/fury/0.10.0/apache-fury-0.10.0-incubating-src.tar.gz.asc",children:"asc"})," ",(0,a.jsx)(n.a,{href:"https://downloads.apache.org/incubator/fury/0.10.0/apache-fury-0.10.0-incubating-src.tar.gz.sha512",children:"sha512"})]}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://github.com/apache/fury/releases/tag/v0.10.0",children:"release notes"})})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"all-archived-releases",children:"All archived releases"}),"\n",(0,a.jsxs)(n.p,{children:["For older releases, please check the ",(0,a.jsx)(n.a,{href:"https://archive.apache.org/dist/incubator/fury",children:"archive"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"verify-a-release",children:"Verify a release"}),"\n",(0,a.jsx)(n.p,{children:"It's highly recommended to verify the files that you download."}),"\n",(0,a.jsxs)(n.p,{children:["Fury provides SHA digest and PGP signature files for all the files that we host on the download site.\nThese files are named after the files they relate to but have ",(0,a.jsx)(n.code,{children:".sha512/.asc"})," extensions."]}),"\n",(0,a.jsx)(n.h3,{id:"verifying-checksums",children:"Verifying Checksums"}),"\n",(0,a.jsxs)(n.p,{children:["To verify the SHA digests, you need the ",(0,a.jsx)(n.code,{children:".tgz"})," and its associated ",(0,a.jsx)(n.code,{children:".tgz.sha512"})," file. An example command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sha512sum --check apache-fury-incubating-0.10.0-src.tar.gz\n"})}),"\n",(0,a.jsx)(n.p,{children:"It should output something like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"apache-fury-incubating-0.10.0-src.tar.gz: OK\n"})}),"\n",(0,a.jsx)(n.h3,{id:"verifying-signatures",children:"Verifying Signatures"}),"\n",(0,a.jsxs)(n.p,{children:["To verify the PGP signatures, you will need to download the\n",(0,a.jsx)(n.a,{href:"https://downloads.apache.org/incubator/fury/KEYS",children:"release KEYS"})," first."]}),"\n",(0,a.jsxs)(n.p,{children:["Then import the downloaded ",(0,a.jsx)(n.code,{children:"KEYS"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"gpg --import KEYS\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then you can verify signature:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"gpg --verify apache-fury-incubating-0.10.0-src.tar.gz.asc apache-fury-incubating-0.10.0-src.tar.gz\n"})}),"\n",(0,a.jsx)(n.p,{children:"If something like the following appears, it means the signature is correct:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'gpg: Signature made Sun Feb  9 12:09:36 2025 CST\ngpg:                using RSA key F4796001336453FDE7BB45709C0212E28DD7828C\ngpg: Good signature from "Weipeng Wang (CODE SIGNING KEY) <wangweipeng@apache.org>"\n'})}),"\n",(0,a.jsx)(n.p,{children:"You should also verify the key using a command like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"gpg --fingerprint F4796001336453FDE7BB45709C0212E28DD7828C\n"})}),"\n",(0,a.jsx)(n.p,{children:"It should output something like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pub   rsa4096 2025-02-07 [SC]\n      F479 6001 3364 53FD E7BB  4570 9C02 12E2 8DD7 828C\nuid           [ultimate] Weipeng Wang (CODE SIGNING KEY) <wangweipeng@apache.org>\nsub   rsa4096 2025-02-07 \n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var a=s(67294);const r={},i=a.createContext(r);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);