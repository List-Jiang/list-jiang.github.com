(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{946:function(s,a,t){"use strict";t.r(a);var e=t(1),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"dd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dd"}},[s._v("#")]),s._v(" dd")]),s._v(" "),t("p",[t("code",[s._v("dd")]),s._v(" 命令用于复制磁盘或文件系统。")]),s._v(" "),t("h2",{attrs:{id:"复制磁盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制磁盘"}},[s._v("#")]),s._v(" 复制磁盘")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sda "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sdb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面命令表示将"),t("code",[s._v("/dev/sda")]),s._v(" 磁盘复制到"),t("code",[s._v("/dev/sdb")]),s._v(" 设备。参数 "),t("code",[s._v("if")]),s._v(" 表示来源地，"),t("code",[s._v("of")]),s._v(" 表示目的地。")]),s._v(" "),t("p",[s._v("除了复制，"),t("code",[s._v("dd")]),s._v(" 还允许将磁盘做成一个镜像文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sda "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/username/sdadisk.img\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("dd")]),s._v(" 还可以复制单个分区。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sda2 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/username/partition2.img "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面命令中，参数 "),t("code",[s._v("bs")]),s._v(" 表示单次拷贝的字节数(bytes)。")]),s._v(" "),t("p",[s._v("要将镜像文件复原，也很简单。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sdadisk.img "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sdb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"清除数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清除数据"}},[s._v("#")]),s._v(" 清除数据")]),s._v(" "),t("p",[t("code",[s._v("dd")]),s._v(" 也可以用于清除磁盘数据。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 磁盘数据写满 0")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/zero "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sda1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 磁盘数据写满随机字符")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/urandom "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sda1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"监控进展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监控进展"}},[s._v("#")]),s._v(" 监控进展")]),s._v(" "),t("p",[s._v("磁盘的复制通常需要很久，为了监控进展，可以使用 Pipe Viewer 工具软件。如果没有安装这个软件，可以使用下面的命令安装。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后，来源地和目的地之间插入广告，就可以看到进展了。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/urandom "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sda1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",14MB "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:05 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 98kB/s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),t("ul",[t("li",[s._v("David Clinton, "),t("a",{attrs:{href:"https://opensource.com/article/18/7/how-use-dd-linux",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to use dd in Linux without destroying your disk"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);