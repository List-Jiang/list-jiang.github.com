const {
  navbarConfig
} = require("vuepress-theme-hope");

module.exports = {
  zh: navbarConfig([{
      text: "主页",
      icon: "home",
      link: "/"
    },
    {
      text: "Java",
      icon: "java",
      items: [{
          text: "学习地址",
          items: [{
            text: "全栈 @pdai",
            link: "https://www.pdai.tech/"
          }]
        }, {
          text: "基础",
          items: [{
            text: "异常机制",
            link: "/exception"
          }]
        },
        {
          text: "集合",
          items: [{
              text: "Collection ArrayList",
              link: "/array-list"
            },
            {
              text: "Map HashMap",
              link: "/hash-map"
            },
          ]
        },
        {
          text: "IO",
          items: [{
              text: "Collection ArrayList",
              link: "/array-list"
            },
            {
              text: "Map HashMap",
              link: "/hash-map"
            },
          ]
        },
        {
          text: "多线程与并发",
          items: [{
              text: "Collection ArrayList",
              link: "/array-list"
            },
            {
              text: "Map HashMap",
              link: "/hash-map"
            },
          ]
        },
        {
          text: "JVM",
          items: [{
              text: "Collection ArrayList",
              link: "/array-list"
            },
            {
              text: "Map HashMap",
              link: "/hash-map"
            },
          ]
        },
      ],
    },
    {
      text: "Spring 框架",
      link: "https://spring.io/",
      icon: "spring",
      prefix:"",
      items: [{
          text: "全栈 @pdai",
          link: "https://www.pdai.tech/"
        }, {
          text: "Spring Framework",
          link: "https://spring.io/projects/spring-framework/"
        },
        {
          text: "Spring Boot",
          link: "https://spring.io/projects/spring-boot/"
        },
        {
          text: "Spring Cloud",
          link: "https://spring.io/projects/spring-cloud/"
        },
        {
          text: "Spring Security",
          link: "https://spring.io/projects/spring-security/"
        },
        {
          text: "Spring Cloud",
          link: "https://spring.io/projects/spring-security/",
          items: [{
            text: "Spring Cloud Square",
            link: "/spring/cloud/square"
          },{
            text: "Spring Cloud Circuit Breaker",
            link: "/spring/cloud/circuit-breaker"
          }]
        },
      ],
    },
    {
      text: "数据库",
      icon: "rumen",
      items: [{
        text: "MySQL",
        items: [{
          text: "官网地址",
          icon: "module",
          link: "https://www.mysql.com/"
        }, {
          text: "下载地址",
          icon: "windows",
          link: "https://www.mysql.com/downloads/"
        }]
      }]
    },
    {
      text: "开发入门",
      icon: "rumen",
      prefix: "/code",
      items: [{
          text: "基础常识",
          items: [{
            text: "基础常识",
            icon: "module",
            link: "/basic/"
          }, {
            text: "windows 基础",
            icon: "windows",
            link: "/windows/"
          }, {
            text: "Git Hub",
            icon: "github",
            link: "/github/"
          }]
        }, {
          text: "前端体系",
          items: [{
            text: "Web 入门",
            icon: "website",
            link: "/website/"
          }, {
            text: "Node.js",
            icon: "node",
            link: "/node-js/"
          }, {
            text: "React",
            icon: "react",
            link: "/react/"
          }]
        }, {
          text: "辅助语言",
          prefix: "/language",
          items: [{
            text: "语言入门",
            icon: "learning",
            link: "/learning/"
          }, {
            text: "TypeScript 教程",
            icon: "typescript",
            link: "/typescript/"
          }, {
            text: "Python 教程",
            icon: "python",
            link: "/python/"
          }, {
            text: "Linter 介绍",
            icon: "linter",
            link: "/linter/"
          }]
        },
        {
          text: "后端运维",
          items: [{
            text: "Linux 教程",
            icon: "linux",
            link: "/linux"
          }],
        },
      ],
    },
    {
      text: "软件教程",
      icon: "software",
      prefix: "/software/",
      items: [{
        text: "软件教程",
        icon: "software",
        link: "",
        items: [{
            text: "VS Code",
            icon: "vscode",
            link: "vscode/"
          },
          {
            text: "Git",
            icon: "git",
            link: "git/"
          },
        ],
      }, ],
    },
    {
      text: "随笔",
      icon: "software",
      prefix: "/note",
      items: [{
        text: "Spring 随笔",
        icon: "spring",
        prefix: "/spring",
        items: [{
          text: "Spring cloud Square笔记",
          icon: "note",
          link: "/square"
        }]
      }]
    },
  ]),

  en: navbarConfig([{
      text: "Home",
      link: "/en/",
      icon: "home"
    },
    {
      text: "Note",
      link: "/en/note/",
      icon: "note"
    },
    {
      text: "Code Note",
      icon: "code",
      items: [{
        text: "Code Note",
        icon: "code",
        link: "/en/code/"
      }],
    },
    {
      text: "Software",
      icon: "software",
      link: "/en/software/",
    },
  ]),
};