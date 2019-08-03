import Vue from 'vue'
Vue.component("Bit", () => import("G:\\实训一\\博客\\study\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-81d7326572931",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\README.md").then(comp => {
        Vue.component("v-81d7326572931", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-febcac5977f5b",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-febcac5977f5b", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-937907d7b8832",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-937907d7b8832", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-e389852ac998f",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-e389852ac998f", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-2cf1bcd170961",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-2cf1bcd170961", comp.default)
        next()
      })
    }
  },
  {
    name: "v-39c640611fcf2",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-39c640611fcf2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-722ea14b4143",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-722ea14b4143", comp.default)
        next()
      })
    }
  },
  {
    name: "v-038a18b443bb1",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-038a18b443bb1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a6691bd012ff1",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-a6691bd012ff1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ba632700e204",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-9ba632700e204", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3a8598ea55f01",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-3a8598ea55f01", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8329a42af12e",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-8329a42af12e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0b019e9434c3d",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-0b019e9434c3d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-db87dbd075fe9",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-db87dbd075fe9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d8829a632df21",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-d8829a632df21", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5bc60ebe5b5e8",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-5bc60ebe5b5e8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3935db71c2a44",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-3935db71c2a44", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-160146700413a",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-160146700413a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-f8fe7432611b5",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-f8fe7432611b5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-321dbd5bebdff",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-321dbd5bebdff", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-1cff787047481",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-1cff787047481", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8840095b95d4",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-8840095b95d4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-80ef9bb16e074",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-80ef9bb16e074", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9c232ca96b137",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-9c232ca96b137", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0819b7b2164b7",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-0819b7b2164b7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-828243b234b11",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-828243b234b11", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f8730d030f5be",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-f8730d030f5be", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a43773db6f373",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-a43773db6f373", comp.default)
        next()
      })
    }
  },
  {
    name: "v-748f868c8c2a5",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-748f868c8c2a5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9bd71b99ba11e",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-9bd71b99ba11e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9fbbf7029a35e",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-9fbbf7029a35e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c2012b8334436",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-c2012b8334436", comp.default)
        next()
      })
    }
  },
  {
    name: "v-21d22df0f341a",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-21d22df0f341a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b06ac0ca96b46",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-b06ac0ca96b46", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-496daf8331a4e",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-496daf8331a4e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b968b2c4f12fb",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-b968b2c4f12fb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-c4108b4a1cae1",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-c4108b4a1cae1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-505beb88381bd",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-505beb88381bd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-0f7ff230ecb3d",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-0f7ff230ecb3d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-9f6cdbba8f9c7",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-9f6cdbba8f9c7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-a57e404bad35e",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-a57e404bad35e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-3112169db92a3",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-3112169db92a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-41f017eb23dda",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-41f017eb23dda", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fb9b7e1e29d88",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-fb9b7e1e29d88", comp.default)
        next()
      })
    }
  },
  {
    name: "v-783eec8014f97",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-783eec8014f97", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b0b04faa8c145",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-b0b04faa8c145", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-77038a7905c85",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-77038a7905c85", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-9f1175aae7135",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-9f1175aae7135", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-84ba44bff44ce",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-84ba44bff44ce", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-c0435dbbb245b",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-c0435dbbb245b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ac55a52aa6db",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-ac55a52aa6db", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-87c82e47bbb27",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-87c82e47bbb27", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-4331f95a0fa95",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-4331f95a0fa95", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-21785443fb5f1",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\standard\\Cache.md").then(comp => {
        Vue.component("v-21785443fb5f1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-483a309b5da64",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-483a309b5da64", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d1a1235625a4e",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-d1a1235625a4e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4dc8fc7282927",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-4dc8fc7282927", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f80ce0a7fc8b4",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-f80ce0a7fc8b4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-257d8a74d3a92",
    path: "/zh/standard/Security.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\standard\\Security.md").then(comp => {
        Vue.component("v-257d8a74d3a92", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c3a753367b8ca",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\standard\\Spa.md").then(comp => {
        Vue.component("v-c3a753367b8ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3ea745cac890f",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-3ea745cac890f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f2a1a11225c1d",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-f2a1a11225c1d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-31fdc0f446806",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-31fdc0f446806", comp.default)
        next()
      })
    }
  },
  {
    name: "v-98335d0531058",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-98335d0531058", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ffc4e9328303f",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-ffc4e9328303f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-d495ab2f6cadb",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-d495ab2f6cadb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9cca6d614d1ef",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-9cca6d614d1ef", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-12587b8913955",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-12587b8913955", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-d68abb40cb791",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-d68abb40cb791", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-146b2d63de98c",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-146b2d63de98c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-23a1a58c0d323",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-23a1a58c0d323", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-2f895a36da855",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-2f895a36da855", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8b04a8f63750b",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-8b04a8f63750b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b96a693c19025",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-b96a693c19025", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-233060692097",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\实训一\\博客\\study\\src\\zh\\webpack\\README.md").then(comp => {
        Vue.component("v-233060692097", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/webpack/index.html",
    redirect: "/zh/webpack/"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]