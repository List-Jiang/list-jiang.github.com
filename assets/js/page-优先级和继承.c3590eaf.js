(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1068:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本文介绍 CSS 的一些最基本的概念: 层叠、优先级和继承。")]),s._v(" "),a("h2",{attrs:{id:"冲突规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冲突规则"}},[s._v("#")]),s._v(" 冲突规则")]),s._v(" "),a("p",[s._v("CSS 代表层叠样式表，我们需要理解第一个词 cascading。")]),s._v(" "),a("p",[a("strong",[s._v("Cascade")]),s._v(", 和它密切相关的概念是 "),a("strong",[s._v("Specificity")]),s._v("，决定在发生冲突的时候应该使用哪条规则。")]),s._v(" "),a("p",[s._v("这里也有继承的概念，也就是在默认情况下，一些 CSS 属性继承当前元素的父元素上设置的值，有些则不继承。这也可能导致一些和期望不同的结果。")]),s._v(" "),a("h3",{attrs:{id:"层叠"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠"}},[s._v("#")]),s._v(" 层叠")]),s._v(" "),a("p",[s._v("Style sheets cascade(样式表层叠) 决定了 CSS 规则的顺序很重要。")]),s._v(" "),a("p",[s._v("当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。")]),s._v(" "),a("p",[a("strong",[s._v("案例")]),s._v(": 我们有两个关于 "),a("code",[s._v("h1")]),s._v(" 的规则。这些规则有相同的优先级，顺序在最后的生效，所以 "),a("code",[s._v("h1")]),s._v(" 最后显示为蓝色。")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Mr.Hope is handsome!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("h1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("h1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[s._v("#")]),s._v(" 优先级")]),s._v(" "),a("p",[s._v("浏览器是根据优先级来决定当多个规则有不同选择器对应相同的元素的时候需要使用哪个规则。它基本上是一个衡量选择器具体选择哪些区域的尺度:")]),s._v(" "),a("ul",[a("li",[s._v("一个元素选择器不是很具体 (它会选择页面上该类型的所有元素)，所以它的优先级就会低一些。")]),s._v(" "),a("li",[s._v("一个类选择器稍微具体点 (它会选择该页面中有特定 class 属性值的元素)，所以它的优先级就要高一点。")])]),s._v(" "),a("div",{staticClass:"code-demo-wrapper",attrs:{id:"code-demo-92dd51ca","data-title":"%E6%A1%88%E4%BE%8B","data-code":"%7B%22html%22%3A%22%3Ch1%20class%3D%5C%22main-heading%5C%22%3EMr.Hope%20is%20handsome!%3C%2Fh1%3E%5Cn%22%2C%22css%22%3A%22.main-heading%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%5Cnh1%20%7B%5Cn%20%20color%3A%20blue%3B%5Cn%7D%5Cn%22%7D"}},[a("div",{staticClass:"demo-wrapper"}),s._v(" "),a("div",{staticClass:"code-wrapper"},[a("div",{staticClass:"code"},[a("p",[s._v("上面的 "),a("code",[s._v("h1")]),s._v(" 会显示红色 (类选择器有更高的优先级，即使元素选择器顺序在它后面)。")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("main-heading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Mr.Hope is handsome!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".main-heading")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("h1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])]),s._v(" "),a("div",{staticClass:"code-demo-footer"})]),s._v(" "),a("h3",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[s._v("#")]),s._v(" 继承")]),s._v(" "),a("p",[s._v("一些设置在父元素上的 CSS 属性是可以被子元素继承的，有些则不能。")]),s._v(" "),a("p",[a("strong",[s._v("案例")]),s._v(": 如果您设置一个元素的 "),a("code",[s._v("color")]),s._v(" 和 "),a("code",[s._v("font-family")]),s._v(" ，默认情况下每个在里面的元素也都会有相同的属性。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 整个文档的文字默认情况下都是蓝的，除非针对性的设置为其他颜色 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("一些属性是不能继承的。比如您在一个元素上设置 "),a("code",[s._v("width: 50%")]),s._v(" ，所有的后代不会是父元素的宽度的 50%。如果这个也可以继承的话，CSS 就会很难使用了!")])]),s._v(" "),a("h2",{attrs:{id:"理解继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理解继承"}},[s._v("#")]),s._v(" 理解继承")]),s._v(" "),a("p",[s._v("我们从继承开始。下面的例子中我们有一个 "),a("code",[s._v("ul")]),s._v("，里面有两个无序列表。我们已经给 "),a("code",[s._v("<ul>")]),s._v(" 设置了 "),a("code",[s._v("border")]),s._v("， "),a("code",[s._v("padding")]),s._v(" 和 "),a("code",[s._v("color")]),s._v(".")]),s._v(" "),a("p",[a("code",[s._v("color")]),s._v(" 应用在直接子元素，也影响其他后代，如子元素 "),a("code",[s._v("<li>")]),s._v("，和第一个嵌套列表中的子项。然后添加了一个 "),a("code",[s._v("special")]),s._v(" 类到第二个嵌套列表。该类声明了不同的颜色。然后通过它的子元素继承。")]),s._v(" "),a("div",{staticClass:"code-demo-wrapper",attrs:{id:"code-demo-c3835dbe","data-title":"%E7%BB%A7%E6%89%BF%E6%A1%88%E4%BE%8B","data-code":"%7B%22html%22%3A%22%3Cul%20class%3D%5C%22main%5C%22%3E%5Cn%20%20%3Cli%3EItem%20One%3C%2Fli%3E%5Cn%20%20%3Cli%3E%5Cn%20%20%20%20Item%20Two%5Cn%20%20%20%20%3Cul%3E%5Cn%20%20%20%20%20%20%3Cli%3E2.1%3C%2Fli%3E%5Cn%20%20%20%20%20%20%3Cli%3E2.2%3C%2Fli%3E%5Cn%20%20%20%20%3C%2Ful%3E%5Cn%20%20%3C%2Fli%3E%5Cn%20%20%3Cli%3E%5Cn%20%20%20%20Item%20Three%5Cn%20%20%20%20%3Cul%20class%3D%5C%22special%5C%22%3E%5Cn%20%20%20%20%20%20%3Cli%3E%5Cn%20%20%20%20%20%20%20%203.1%5Cn%20%20%20%20%20%20%20%20%3Cul%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cli%3E3.1.1%3C%2Fli%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cli%3E3.1.2%3C%2Fli%3E%5Cn%20%20%20%20%20%20%20%20%3C%2Ful%3E%5Cn%20%20%20%20%20%20%3C%2Fli%3E%5Cn%20%20%20%20%20%20%3Cli%3E3.2%3C%2Fli%3E%5Cn%20%20%20%20%3C%2Ful%3E%5Cn%20%20%3C%2Fli%3E%5Cn%3C%2Ful%3E%5Cn%22%2C%22css%22%3A%22.main%20%7B%5Cn%20%20color%3A%20rebeccapurple%3B%5Cn%20%20border%3A%202px%20solid%20%23ccc%3B%5Cn%20%20padding%3A%201em%3B%5Cn%7D%5Cn%5Cn.special%20%7B%5Cn%20%20color%3A%20black%3B%5Cn%20%20font-weight%3A%20bold%3B%5Cn%7D%5Cn%22%7D"}},[a("div",{staticClass:"demo-wrapper"}),s._v(" "),a("div",{staticClass:"code-wrapper"},[a("div",{staticClass:"code"},[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ul")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Item One"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    Item Two\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2.1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2.2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    Item Three\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ul")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("special"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        3.1\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("3.1.1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("3.1.2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("3.2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".main")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" rebeccapurple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2px solid #ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".special")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])]),s._v(" "),a("div",{staticClass:"code-demo-footer"})]),s._v(" "),a("p",[s._v("像 "),a("code",[s._v("width")]),s._v(" (上面提到的), "),a("code",[s._v("margin")]),s._v(", "),a("code",[s._v("padding")]),s._v(", 和 "),a("code",[s._v("border")]),s._v(" 不会被继承。如果 "),a("code",[s._v("border")]),s._v(" 可以被继承，每个列表和列表项都会获得一个边框 — 可能就不是我们想要的结果!")]),s._v(" "),a("p",[s._v("哪些属性属于默认继承很大程度上是由常识决定的。")]),s._v(" "),a("h3",{attrs:{id:"控制继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制继承"}},[s._v("#")]),s._v(" 控制继承")]),s._v(" "),a("p",[s._v("CSS 为控制继承提供了四个特殊的通用属性值。每个 CSS 属性都接收这些值。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("inherit")]),s._v(': 使子元素属性和父元素相同。实际上就是 "开启继承".')]),s._v(" "),a("li",[a("code",[s._v("initial")]),s._v(": 与浏览器默认样式相同。如果浏览器默认样式中未设置且该属性是自然继承的，那么会设置为 "),a("code",[s._v("inherit")]),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("unset")]),s._v(": 将属性重置为自然值，也就是如果属性是自然继承那么就是 "),a("code",[s._v("inherit")]),s._v("，否则和 "),a("code",[s._v("initial")]),s._v(" 一样")])]),s._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[s._v("相关信息")]),s._v(" "),a("p",[s._v("还有一个属性 "),a("code",[s._v("revert")]),s._v("，但只有很少的浏览器支持。")])]),s._v(" "),a("h3",{attrs:{id:"重设所有属性值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重设所有属性值"}},[s._v("#")]),s._v(" 重设所有属性值")]),s._v(" "),a("p",[s._v("CSS 的缩写属性 "),a("code",[s._v("all")]),s._v(" 可以用于同时将这些继承值中的一个应用于(几乎)所有属性。它的值可以是其中任意一个("),a("code",[s._v("inherit")]),s._v(", "),a("code",[s._v("initial")]),s._v(", "),a("code",[s._v("unset")]),s._v(", "),a("code",[s._v("revert")]),s._v(")。这是一种撤销对样式所做更改的简便方法，以便回到默认状态。")]),s._v(" "),a("div",{staticClass:"code-demo-wrapper",attrs:{id:"code-demo-258845a8","data-title":"%E9%87%8D%E8%AE%BE%E6%89%80%E6%9C%89%E5%B1%9E%E6%80%A7%E5%80%BC","data-code":"%7B%22html%22%3A%22%3Cblockquote%3E%5Cn%20%20%3Cp%3EThis%20blockquote%20is%20styled%3C%2Fp%3E%5Cn%3C%2Fblockquote%3E%5Cn%5Cn%3Cblockquote%20class%3D%5C%22fix-this%5C%22%3E%5Cn%20%20%3Cp%3EThis%20blockquote%20is%20not%20styled%3C%2Fp%3E%5Cn%3C%2Fblockquote%3E%5Cn%22%2C%22css%22%3A%22blockquote%20%7B%5Cn%20%20background-color%3A%20red%3B%5Cn%20%20border%3A%202px%20solid%20green%3B%5Cn%7D%5Cn%5Cn.fix-this%20%7B%5Cn%20%20all%3A%20unset%3B%5Cn%7D%5Cn%22%7D"}},[a("div",{staticClass:"demo-wrapper"}),s._v(" "),a("div",{staticClass:"code-wrapper"},[a("div",{staticClass:"code"},[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("blockquote")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("This blockquote is styled"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("blockquote")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("blockquote")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("fix-this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("This blockquote is not styled"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("blockquote")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("blockquote")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2px solid green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".fix-this")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" unset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])]),s._v(" "),a("div",{staticClass:"code-demo-footer"})]),s._v(" "),a("h2",{attrs:{id:"理解层叠"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理解层叠"}},[s._v("#")]),s._v(" 理解层叠")]),s._v(" "),a("p",[s._v("有三个因素需要考虑，根据重要性排序如下:")]),s._v(" "),a("ol",[a("li",[s._v("重要程度")]),s._v(" "),a("li",[s._v("优先级")]),s._v(" "),a("li",[s._v("资源顺序")])]),s._v(" "),a("p",[s._v("我们从下往上，看看浏览器是如何决定该应用哪个 CSS 规则的。")]),s._v(" "),a("h3",{attrs:{id:"资源顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源顺序"}},[s._v("#")]),s._v(" 资源顺序")]),s._v(" "),a("p",[s._v("我们已经看到了顺序对于层叠的重要性。如果您有超过一条规则，而且都是相同的权重，那么最后面的规则会应用。可以理解为后面的规则覆盖前面的规则，直到最后一个开始设置样式。")]),s._v(" "),a("h3",{attrs:{id:"优先级计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优先级计算"}},[s._v("#")]),s._v(" 优先级计算")]),s._v(" "),a("p",[s._v("在您了解了顺序的重要性后，会发现在一些情况下，有些规则在最后出现，但是却应用了前面的规则。")]),s._v(" "),a("p",[s._v("只要前面的有更高的优先级，浏览器就把它选择为元素的样式。就像前面看到的，类选择器的权重大于元素选择器，因此类上定义的属性将覆盖应用于元素上的属性。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("虽然我们考虑的是选择器，但是只有相同的属性会被覆盖，不会覆盖所有规则，也就是说优先级低的选择器的其他不冲突声明仍会生效。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("技巧")]),s._v(" "),a("p",[s._v("一种常见的做法是给基本元素定义通用样式，然后给不同的元素创建对应的类。")]),s._v(" "),a("p",[s._v("比如我的博客对很多标签的样式进行了调整(比如减小了 "),a("code",[s._v("<h1>")]),s._v(" 的字体大小以及标题的字体粗细)，并通过类来对特定区域的标签进行进一步的样式调整。")])]),s._v(" "),a("p",[s._v("本质上，不同类型的选择器有不同的分数值，把这些分数相加就得到特定选择器的权重，然后就可以进行匹配。")]),s._v(" "),a("p",[s._v("一个选择器的优先级可以说是由四个部分相加 (分量)，可以认为是个十百千 — 四位数的四个位数:")]),s._v(" "),a("ul",[a("li",[s._v("千位: 如果声明在 style 的属性(内联样式)则该位得一分。这样的声明没有选择器，所以它得分总是 1000。")]),s._v(" "),a("li",[s._v("百位: 选择器中包含 ID 选择器则该位得一分。")]),s._v(" "),a("li",[s._v("十位: 选择器中包含类选择器、属性选择器或者伪类则该位得一分。")]),s._v(" "),a("li",[s._v("个位: 选择器中包含元素、伪元素选择器则该位得一分。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("通用选择器 ("),a("code",[s._v("*")]),s._v(")，组合符 ("),a("code",[s._v("+")]),s._v(", "),a("code",[s._v(">")]),s._v(", "),a("code",[s._v("~")]),s._v(", 空格)，和否定伪类 ("),a("code",[s._v(":not")]),s._v(") 不会影响优先级。")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("在进行计算时不允许进行进位，例如，20 个类选择器仅仅意味着 20 个十位，而不能视为 两个百位，也就是说，无论多少个类选择器的权重叠加，都不会超过一个 ID 选择器。")])]),s._v(" "),a("h2",{attrs:{id:"important"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important"}},[s._v("#")]),s._v(" !important")]),s._v(" "),a("p",[a("code",[s._v("!important")]),s._v(" 可以用来覆盖所有上面所有优先级计算。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("请不要滥用 "),a("code",[s._v("!important")]),s._v("，只有在不得不使用的情况下再进行使用。")]),s._v(" "),a("p",[s._v("覆盖 "),a("code",[s._v("!important")]),s._v(" 唯一的办法就是另一个 "),a("code",[s._v("!important")]),s._v(" 具有相同优先级而且顺序靠后，或者更高优先级。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);