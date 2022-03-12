(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{715:function(t,s,a){"use strict";a.r(s);var n=a(69),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("项目中需要搭建一个多页面的环境，包括本地路由服务和分页面打包。本节介绍获取每个页面目录的名字的过程。")]),t._v(" "),a("h2",{attrs:{id:"项目约定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目约定"}},[t._v("#")]),t._v(" 项目约定")]),t._v(" "),a("h3",{attrs:{id:"多页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多页面"}},[t._v("#")]),t._v(" 多页面")]),t._v(" "),a("p",[t._v("上节我们讲述了项目的目录结构：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("├── build/                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# webpack配置参数文件")]),t._v("\n│   └── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n├── src/                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目代码入口")]),t._v("\n│   ├── page1/                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一个页面或者应用")]),t._v("\n│   │   ├── main.js             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面/应用入口文件")]),t._v("\n│   │   └── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n│   ├── page2/                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二个页面或者应用")]),t._v("\n│   │   ├── main.js             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面/应用入口文件")]),t._v("\n│   │   └── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n│   └── pageN/                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第N个页面或者应用")]),t._v("\n│       ├── main.js             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面/应用入口文件")]),t._v("\n│       └── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n├── dist/                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目打包代码")]),t._v("\n│   ├── page1/                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一个页面或者应用")]),t._v("\n│   │   ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".js\n│   │   └── index.html          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面/应用入口文件")]),t._v("\n│   ├── page2/                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二个页面或者应用")]),t._v("\n│   │   ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".js\n│   │   └── index.html          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面/应用入口文件")]),t._v("\n│   └── pageN/                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第N个页面或者应用")]),t._v("\n│       ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".js\n│       └── index.html          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面/应用入口文件")]),t._v("\n")])])]),a("p",[t._v("这里我们可以看到我们项目代码的入口位于"),a("code",[t._v("src")]),t._v("文件夹，并且每个页面或者 app 都以目录名为页面的名字。\n而打包后的文件也一样，以目录为单位，支持单个打包或是全部打包。")]),t._v(" "),a("h2",{attrs:{id:"获取目录名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取目录名"}},[t._v("#")]),t._v(" 获取目录名")]),t._v(" "),a("p",[t._v("既然目录名字会在我们的项目搭建中起这么重要的作用，这里我们就将它们获取存起来。")]),t._v(" "),a("h3",{attrs:{id:"glob-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glob-模块"}},[t._v("#")]),t._v(" glob 模块")]),t._v(" "),a("p",[t._v("这里我们将使用"),a("a",{attrs:{href:"https://www.npmjs.com/package/glob",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("glob")]),t._v("模块"),a("OutboundLink")],1),t._v("，它允许你使用"),a("code",[t._v("*")]),t._v("等符号，来写一个"),a("code",[t._v("glob")]),t._v("规则，像在 shell 里一样，获取匹配对应规则的文件。")]),t._v(" "),a("ul",[a("li",[t._v("安装依赖")])]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i glob\n")])])]),a("ul",[a("li",[t._v("使用方式")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" glob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"glob"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options可选")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("glob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("er"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// files是匹配到文件的文件名数组")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 `nonull` 选项被设置为true，而且没有找到任何文件")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那么files就是glob规则本身，而不是空数组")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// er是当寻找的过程中遇的错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("匹配规则\n"),a("ul",[a("li",[a("code",[t._v("*")]),t._v(": 匹配该路径段中 0 个或多个任意字符")]),t._v(" "),a("li",[a("code",[t._v("?")]),t._v(": 匹配该路径段中 1 个任意字符")]),t._v(" "),a("li",[a("code",[t._v("[...]")]),t._v(": 匹配该路径段中在指定范围内字符")]),t._v(" "),a("li",[a("code",[t._v("*(pattern|pattern|pattern)")]),t._v(": 匹配括号中多个模型的 0 个或多个或任意个的组合")]),t._v(" "),a("li",[a("code",[t._v("!(pattern|pattern|pattern)")]),t._v(": 匹配不包含任何模型")]),t._v(" "),a("li",[a("code",[t._v("?(pattern|pattern|pattern)")]),t._v(": 匹配多个模型中的 0 个或任意 1 个")]),t._v(" "),a("li",[a("code",[t._v("+(pattern|pattern|pattern)")]),t._v(": 匹配多个模型中的 1 个或多个")]),t._v(" "),a("li",[a("code",[t._v("@(pattern|pat*|pat?erN)")]),t._v(": 匹配多个模型中的任意 1 个")]),t._v(" "),a("li",[a("code",[t._v("**")]),t._v(": 和"),a("code",[t._v("*")]),t._v("一样，可以匹配任何内容，但"),a("code",[t._v("**")]),t._v("不仅匹配路径中的某一段，而且可以匹配"),a("code",[t._v("'a/b/c'")]),t._v("这样带有"),a("code",[t._v("'/'")]),t._v("的内容，所以它还可以匹配子文件夹下的文件")])])])]),t._v(" "),a("p",[t._v("如果熟悉正则的你，相信也对这些规则了如指掌了。")]),t._v(" "),a("ul",[a("li",[t._v("参考\n"),a("ul",[a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/liulangmao/p/4552339.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《node-glob 学习》"),a("OutboundLink")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"utils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utils"}},[t._v("#")]),t._v(" utils")]),t._v(" "),a("p",[t._v("我们把这块获取目录名的功能作为工具单独管理起来，放在"),a("code",[t._v("build/utils.js")]),t._v("文件里。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// build/utils.js文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" glob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"glob"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("globPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取所有匹配文件的文件名数组")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" files "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" glob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("globPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entries "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("filepath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取倒数第二层(view下面的文件夹)做包名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" split "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" filepath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存{'目录名': '目录路径'}")]),t._v("\n    entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" filepath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取所有匹配src下目录的文件夹名字，其中文件夹里main.js为页面入口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" entries "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/**/main.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entries"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" entries\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"结束语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),a("p",[t._v("本节介绍的内容不是很多，主要是声明了单页面的目录规范，以及简单介绍了"),a("code",[t._v("glob")]),t._v("模块，并提供了个获取目录名的工具。"),a("br"),t._v("\n可参考代码"),a("a",{attrs:{href:"https://github.com/godbasin/vue-multi-pages/blob/master/build/utils.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-vue-multi-pages"),a("OutboundLink")],1),t._v("，主要是这套环境使用在 vue 上的 demo。")])])}),[],!1,null,null,null);s.default=e.exports}}]);