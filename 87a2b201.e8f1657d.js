(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(116)),c={id:"install_deps",title:"Install Dependecies"},i={id:"install_deps",title:"Install Dependecies",description:"plus only support development via Linux/OSX",source:"@site/docs/install_deps.md",permalink:"/plus/docs/install_deps",editUrl:"https://github.com/ianre657/plus/edit/master/docs/install_deps.md",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/plus/docs/getting_started"},next:{title:"Development Flow",permalink:"/plus/docs/dev_flow"}},p=[{value:"Install dependecies via Docker",id:"install-dependecies-via-docker",children:[]},{value:"Local development with syntax support",id:"local-development-with-syntax-support",children:[{value:"Python",id:"python",children:[]},{value:"Poetry",id:"poetry",children:[]},{value:"Using Poetry in VSCode",id:"using-poetry-in-vscode",children:[]}]},{value:"Dependencies for building docs",id:"dependencies-for-building-docs",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"plus")," only support development via Linux/OSX"),Object(o.b)("p",{parentName:"div"},"If your're using Windows, this might but is not guaranteed to works. (use virtualmachines instead)"))),Object(o.b)("p",null,"For most of our work, you should develop your application in Docker Containers."),Object(o.b)("p",null,"If you don't want to connect to database or other services, (only write code in editor and wanna get syntax support/intellisence) try ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#local-development-with-syntax-support"}),"local development with syntax supports"),"."),Object(o.b)("p",null,"For gerenating docs, checkout ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#dependencies-for-building-docs"}),"Dependencies for writing docs"),"."),Object(o.b)("h2",{id:"install-dependecies-via-docker"},"Install dependecies via Docker"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.docker.com/get-started"}),"Docker"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/"}),"Docker Compose"),".")),Object(o.b)("p",null,"After installing ",Object(o.b)("inlineCode",{parentName:"p"},"docker")," and ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose"),", build your own docker image with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose build\n")),Object(o.b)("h2",{id:"local-development-with-syntax-support"},"Local development with syntax support"),Object(o.b)("h3",{id:"python"},"Python"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Install ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pyenv/pyenv"}),"pyenv")," via ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pyenv/pyenv-installer"}),"pyenv-installer")," to have a virtual python version"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl https://pyenv.run | bash\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Install ",Object(o.b)("inlineCode",{parentName:"p"},"Python 3.7.7")," via pyenv"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pyenv install 3.7.7\n")))),Object(o.b)("h3",{id:"poetry"},"Poetry"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Intall ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://python-poetry.org/"}),"Poetry")," for Package management tool for Python"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python3\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Install dependecies by:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"poetry install\n")))),Object(o.b)("h3",{id:"using-poetry-in-vscode"},"Using Poetry in VSCode"),Object(o.b)("p",null,"Select the correct interpreter in your VSCode: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/vscode-python/issues/8372"}),"vscode-python/issues/8372")),Object(o.b)("h2",{id:"dependencies-for-building-docs"},"Dependencies for building docs"),Object(o.b)("p",null,"wip"))}s.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);