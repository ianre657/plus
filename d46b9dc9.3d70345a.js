(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(116)),i={id:"dev_flow",title:"Development Flow"},c={id:"dev_flow",title:"Development Flow",description:"Choose a Good Editor",source:"@site/docs/dev_flow.md",permalink:"/plus/docs/dev_flow",editUrl:"https://github.com/ianre657/plus/edit/master/docs/dev_flow.md",sidebar:"someSidebar",previous:{title:"Install Dependecies",permalink:"/plus/docs/install_deps"},next:{title:"Style Guide",permalink:"/plus/docs/style_guide"}},l=[{value:"Choose a Good Editor",id:"choose-a-good-editor",children:[{value:"VSCode",id:"vscode",children:[]},{value:"PyCharm",id:"pycharm",children:[]}]},{value:"Develop in docker-container",id:"develop-in-docker-container",children:[{value:"Run the development server",id:"run-the-development-server",children:[]},{value:"Shutdown the development server",id:"shutdown-the-development-server",children:[]},{value:"Attach to running container",id:"attach-to-running-container",children:[]},{value:"Run predefined scripts",id:"run-predefined-scripts",children:[]},{value:"Migrations",id:"migrations",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"choose-a-good-editor"},"Choose a Good Editor"),Object(o.b)("p",null,"wip"),Object(o.b)("h3",{id:"vscode"},"VSCode"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Plugins to Install",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Docker"),Object(o.b)("li",{parentName:"ul"},"Remote-Containers"),Object(o.b)("li",{parentName:"ul"},"Visual Studio IntelliCode"),Object(o.b)("li",{parentName:"ul"},"Python"),Object(o.b)("li",{parentName:"ul"},"Magic Python")))),Object(o.b)("h3",{id:"pycharm"},"PyCharm"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install PyCharm:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"install dependency by ",Object(o.b)("inlineCode",{parentName:"li"},"cd plus && poetry install")),Object(o.b)("li",{parentName:"ul"},"install ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/koxudaxi/poetry-pycharm-plugin"}),"poetry plugin")," from marketplace",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"select virtual environment from settings")))))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you want to develop with docker-compose inside PyCharm, a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jetbrains.com/community/education/#students"}),"Pro")," version is required."))),Object(o.b)("h2",{id:"develop-in-docker-container"},"Develop in docker-container"),Object(o.b)("h3",{id:"run-the-development-server"},"Run the development server"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ docker-compose up\n")),Object(o.b)("p",null,"(or use ",Object(o.b)("inlineCode",{parentName:"p"},"make up")," as shorthand)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"additional options for running ",Object(o.b)("inlineCode",{parentName:"li"},"docker-compose"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--build"),": rebuild conatiner"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-d"),": run in the background as daemon.")))),Object(o.b)("p",null,"The serivices will be hosted on ",Object(o.b)("inlineCode",{parentName:"p"},"localhost")," in the background. see the ports defined below:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"URL"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"api-server"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"http://localhost:8888"}),"http://localhost:8888"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"api-server openAPI spec"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"http://localhost:8888/docs"}),"http://localhost:8888/docs"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"traefik dashboard"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"http://localhost:8090"}),"http://localhost:8090"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"pgAdmin"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"http://localhost:5050"}),"http://localhost:5050"))))),Object(o.b)("p",null,"Note: This would run our serer in the background, use ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose up")," to run it in the foreground."),Object(o.b)("h3",{id:"shutdown-the-development-server"},"Shutdown the development server"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ docker-compose down\n")),Object(o.b)("p",null,"(or use ",Object(o.b)("inlineCode",{parentName:"p"},"make down")," as a shorthand)"),Object(o.b)("h3",{id:"attach-to-running-container"},"Attach to running container"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ docker-compose exe api-server bash\n")),Object(o.b)("p",null,"(or use ",Object(o.b)("inlineCode",{parentName:"p"},"make shell")," as a shorthand)"),Object(o.b)("h3",{id:"run-predefined-scripts"},"Run predefined scripts"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"you need to attach to running container to run these scripts."),Object(o.b)("p",{parentName:"div"},"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#attach-to-running-container"}),"Attach to running container")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Run tests"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),".test.sh\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Format code"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),".format.sh\n")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Here we use a dot(",Object(o.b)("inlineCode",{parentName:"p"},"."),") as a prefix for naming our scripts to prevent from name collision and utilize tab-completion feature")),Object(o.b)("h3",{id:"migrations"},"Migrations"),Object(o.b)("p",null,"As during local development your app directory is mounted as a volume inside the container, you can also run the migrations with ",Object(o.b)("inlineCode",{parentName:"p"},"alembic")," commands inside the container and the migration code will be in your app directory (instead of being only inside the container). So you can add it to your git repository."),Object(o.b)("p",null,'Make sure you create a "revision" of your models and that you "upgrade" your database with that revision every time you change them. As this is what will update the tables in your database. Otherwise, your application will have errors.'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start an interactive session in the backend container:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"$ docker-compose exec backend bash\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you created a new model in ",Object(o.b)("inlineCode",{parentName:"p"},"plus/app/models"),", make sure to import it in ",Object(o.b)("inlineCode",{parentName:"p"},"plus/app/models/base.py"),", that Python module (",Object(o.b)("inlineCode",{parentName:"p"},"base.py"),") that imports all the models will be used by Alembic.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"After changing a model (for example, adding a column), inside the container, create a revision, e.g.:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),'$ alembic revision --autogenerate -m "Add column last_name to User model"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Commit to the git repository the files generated in the alembic directory.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"After creating the revision, run the migration in the database (this is what will actually change the database):"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"$ alembic upgrade head\n")))}p.isMDXComponent=!0},116:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return a?r.a.createElement(u,c(c({ref:t},b),{},{components:a})):r.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);