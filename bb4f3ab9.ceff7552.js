(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var o=t(3),i=t(7),a=(t(0),t(122)),r={id:"doc-bot-up",title:"Getting Your Bot Up & Running"},s={unversionedId:"js/s2/installings/doc-bot-up",id:"js/s2/installings/doc-bot-up",isDocsHomePage:!1,title:"Getting Your Bot Up & Running",description:"---",source:"@site/docs/js/s2/installings/bot-up.md",slug:"/js/s2/installings/doc-bot-up",permalink:"/discord-bot-guide/docs/js/s2/installings/doc-bot-up",editUrl:"https://github.com/DeepWebDevelopers/discord-bot-guide/tree/alpha/source/docs/js/s2/installings/bot-up.md",version:"current",sidebar:"docs",previous:{title:"Installing a Linter",permalink:"/discord-bot-guide/docs/js/s1/installings/doc-linter"},next:{title:"Adding more commands",permalink:"/discord-bot-guide/docs/js/s2/installings/doc-bot-more-cmd"}},c=[{value:"Node Version check",id:"node-version-check",children:[]},{value:"Logging into Discord",id:"logging-into-discord",children:[{value:"Example code explained",id:"example-code-explained",children:[]},{value:"Listening for messages",id:"listening-for-messages",children:[]},{value:"Replying to messages",id:"replying-to-messages",children:[]},{value:"Code",id:"code",children:[]}]}],l={toc:c};function d(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("h2",{id:"node-version-check"},"Node Version check"),Object(a.b)("p",null,"To run your Discord bot make sure to have the lasted version of ",Object(a.b)("inlineCode",{parentName:"p"},"nodejs")," installed."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"node --version\n")),Object(a.b)("p",null,"After checking that create a new file inside your ",Object(a.b)("em",{parentName:"p"},"discord-bot")," folder called ",Object(a.b)("strong",{parentName:"p"},"index.js"),". This file can be nammed anything and will be the source of our bot."),Object(a.b)("p",null,"Make sure you have also installed the discord.js package from the other parts of the documentaion."),Object(a.b)("h2",{id:"logging-into-discord"},"Logging into Discord"),Object(a.b)("p",null,"Once you've created a new file, do a quick check to see if you have everything setup properly. Copy & paste the following code into your file and save it. Don't worry if you don't understand it right away\u2014it'll be explained a bit more in depth after this."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const Discord = require("discord.js");\nconst client = new Discord.Client();\nconst config = require("./config.json");\n\nclient.once("ready", () => {\n    console.log("Im Online!");\n});\n\nclient.login(config.TOKEN);\n')),Object(a.b)("p",null,"Next head back over to your console and type ",Object(a.b)("inlineCode",{parentName:"p"},"node index.js")," (or whatever you named your file.) This will run the bot!"),Object(a.b)("p",null,Object(a.b)("img",{alt:"bot terminal login exmaple",src:t(192).default})),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Open up your package.json file, look for something like ",Object(a.b)("strong",{parentName:"p"},'"main": "index.js"'),", and change ",Object(a.b)("strong",{parentName:"p"},'"index.js"')," to whatever your file name is. After saving, you can simply run the node . shortcut in your console to start the process!"))),Object(a.b)("p",null,"If everything does well you should see:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"bot success online exmaple img",src:t(193).default})),Object(a.b)("p",null,"If not then retry the steps above."),Object(a.b)("h3",{id:"example-code-explained"},"Example code explained"),Object(a.b)("p",null,"Here is a commented version of the code with more depth and information."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'// we require the discord.js module from our node package\nconst Discord = require("discord.js");\n\n// we then createw a new Discord client\nconst client = new Discord.Client();\n\n// declears the config file path\nconst config = require("./config.json");\n\n// when the client is ready, run this code\n// this event will only trigger one time after logging in\nclient.once("ready", () => {\n    console.log("Im Online!");\n});\n\n// login the client(your bot) with Discord using your bot token\nclient.login(config.TOKEN);\n')),Object(a.b)("p",null,"Although it may be simple, its important to understand the basics of what your code does. So later down the line you will feel comfortable with making changes."),Object(a.b)("p",null,"So think your ready to start creating your first command? Lets get started then!"),Object(a.b)("h3",{id:"listening-for-messages"},"Listening for messages"),Object(a.b)("p",null,"The most basic and easist way to make a command is using the discord.js message event. Before this make sure to ",Object(a.b)("inlineCode",{parentName:"p"},"Ctrl + c")," in our terminal to end the bot process. Navigate to your code editor and paste the following code above ",Object(a.b)("inlineCode",{parentName:"p"},"client.log(...)")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'//\nclient.on("message", (message) => {\n    console.log(message.content);\n});\n')),Object(a.b)("p",null,"Notice how the code uses ",Object(a.b)("inlineCode",{parentName:"p"},".on")," rather than ",Object(a.b)("inlineCode",{parentName:"p"},".once")," like in the ready event. This means that it can trigger multiple times. Save the file, go back to your console, and start the process up again. Whenever a message is sent inside a channel your bot has access to, the message's content will be logged to your console."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Discord.js is flexable")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"You can define ",Object(a.b)("em",{parentName:"p"},"client")," as anything you want. This is still basic javascript."),Object(a.b)("p",{parentName:"div"},"If you wanted to do:"),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre",className:"language-js"},'// assumes you have example code above\nconst PIZZA = new Discord.Client();\n\nPIZZA.once("ready", () => {\n    console.log("Im Online!");\n});\n')),Object(a.b)("p",{parentName:"div"},"It would still work fine. Just know that you will have to be consistant with the varialble names you pick."))),Object(a.b)("h3",{id:"replying-to-messages"},"Replying to messages"),Object(a.b)("p",null,"The Next step in creating our first command is replying to user messages."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'if (message.content === "!hello") {\n    // reply back with the String of "world"\n    message.channel.send("Hello World!");\n}\n')),Object(a.b)("p",null,"Restart your bot and then send ",Object(a.b)("inlineCode",{parentName:"p"},"!hello")," to a channel your bot has access to. If all goes well, you should see something like this:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"hello world bot success exmaple img",src:t(194).default})),Object(a.b)("p",null,"Final Code:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'// we require the discord.js module from our node package\nconst Discord = require("discord.js");\n\n// we then createw a new Discord client\nconst client = new Discord.Client();\n\n// declears the config file path\nconst config = require("./config.json");\n\n// when the client is ready, run this code\n// this event will only trigger one time after logging in\nclient.once("ready", () => {\n    console.log("Im Online!");\n});\n\n// Calling the message event from client and listening for messages\nclient.on("message", (message) => {\n    // reply to all messages with "!hello"\n    if (message.content === "!hello") {\n        // reply back with the String of "world"\n        message.channel.send("Hello World!");\n    }\n    // log the message interations\n    console.log(message.content);\n});\n\n// login the client(your bot) with Discord using your bot token\nclient.login(config.TOKEN);\n')),Object(a.b)("p",null,"And there is your first hello world in Discord.js! Exciting stuff, isn't it? This is only the beginning, so let's move on to making some more commands."),Object(a.b)("h3",{id:"code"},"Code"),Object(a.b)("p",null,"Remember that all our code is available for free to view. Simple Visite ",Object(a.b)("a",{parentName:"p",href:"https://github.com/DeepWebDevelopers/discord-bot-guide/tree/alpha/Bots"},"here")," for the javascript example bots full source code. Eveything used in the bot is based on this JavaScript documentaion."))}d.isMDXComponent=!0},122:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),d=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=d(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(t),u=o,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||a;return t?i.a.createElement(m,s(s({ref:n},l),{},{components:t})):i.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=t[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},192:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"},193:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/bot-online-success-193fa6b77e75153b2bb5770762005c93.png"},194:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/hello-world-bot-success-d48fbc33ea44f0cdb2ef63ef2bd50be5.png"}}]);