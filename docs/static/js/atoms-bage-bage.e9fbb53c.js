(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/Theme/withStyle.jsx":function(e,A,g){"use strict";var o=g("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),t=g("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),a=g("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=g("./node_modules/react/index.js"),s=g.n(n),r=g("./src/Theme/Context.js"),B=function(e,A){var g=A.href,o=Object(a.a)(A,["href"]);return g?s.a.createElement(e,Object.assign({},o,{element:"a",href:g})):s.a.createElement(e,o)},c=B;B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultRenderrer",filename:"src/Theme/defaultRenderrer.jsx"}});var i=function(e,A,g,n){return g in e.theme?function(e,A,g,n){var s=A.children,r=Object(a.a)(A,["children"]),B=e.theme[g],c=B.defaultStyle,i=Object(a.a)(B,["defaultStyle"]),m=Object.keys(r).reduce(function(e,A){var g=r[A];return!0===g&&A in i?Object.assign(e.nextStyle,i[A]):A in i||Object.assign(e.nextProps,Object(t.a)({},A,g)),e},{nextProps:{},nextStyle:Object(o.a)({},c)}),w=m.nextStyle,h=m.nextProps,l=Object(o.a)({},w,r.css);return Object(o.a)({},h,e,{children:s,css:l,ref:n})}(e,A,g,n):Object(o.a)({},A,e,{ref:n})},m=function(e,A){var g=e.displayName,o=Object(n.forwardRef)(function(o,t){return s.a.createElement(r.a.Consumer,null,function(n){var s=n.modifyElement,r=n.providerIsMissing,B=Object(a.a)(n,["modifyElement","providerIsMissing"]);return function(e,A){if(!e)throw new Error(A)}(!r,"Please use the Provider"),(s||c)(e,i(B,o,A||g,t))})});return o.contextType=r.a,o.displayName=g,e.displayName="Styled ".concat(g),o};A.a=m;m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"withStyle",filename:"src/Theme/withStyle.jsx"}})},"./src/atoms/Atom/index.jsx":function(e,A,g){"use strict";g.d(A,"a",function(){return n});var o=g("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=g("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=function(e){var A=e.css,g=e.element,a=(e.getColor,e.location,e.theme,e.changeTheme,e.atomRef),n=(e.touchDetected,Object(o.a)(e,["css","element","getColor","location","theme","changeTheme","atomRef","touchDetected"]));return Object(t.b)(g,Object.assign({},n,{css:A,ref:a}))};a.defaultProps={atomRef:null,css:null,element:"div"},a.displayName="Atom";var n=a;"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RawAtom",filename:"src/atoms/Atom/index.jsx"}}),A.b=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Atom",filename:"src/atoms/Atom/index.jsx"}})},"./src/atoms/Bage/Bage.mdx":function(e,A,g){"use strict";g.r(A),g.d(A,"default",function(){return B});var o=g("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=(g("./node_modules/react/index.js"),g("./node_modules/@mdx-js/react/dist/index.es.js")),a=g("./node_modules/docz/dist/index.esm.js"),n=g("./src/atoms/Bage/index.jsx"),s={},r="wrapper";function B(e){var A=e.components,g=Object(o.a)(e,["components"]);return Object(t.b)(r,Object.assign({},s,g,{components:A,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"bage"},"Bage"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { Bage } from 'rkta-ui';\n")),Object(t.b)("p",null,"Bage is a preconfigured sheet of paper, which can be used in different ways.\nUnlike it's done in Material UI R\u2022K\u2022T\u2022A Bages are not opinionated about their positions."),Object(t.b)("h3",{id:"composition"},"Composition"),Object(t.b)("p",null,"Bage ","\u2190","\n",Object(t.b)("a",Object.assign({parentName:"p"},{href:"/src-atoms-paper-paper"}),"Paper")," ","\u2190","\n",Object(t.b)("a",Object.assign({parentName:"p"},{href:"/src-atoms-paper-paper"}),"Font")," ","\u2190","\n",Object(t.b)("a",Object.assign({parentName:"p"},{href:"/src-atoms-atom-atom"}),"Atom")),Object(t.b)("h3",{id:"props"},"Props"),Object(t.b)(a.d,{of:n.a,mdxType:"Props"}),Object(t.b)("h3",{id:"basic-example"},"Basic example"),Object(t.b)(a.c,{__position:1,__code:'<Bage primary>A bage</Bage>\n<Bage secondary color="paper">\n  A bage\n</Bage>\n<Bage success>A bage</Bage>',__scope:{props:this?this.props:g,Playground:a.c,Props:a.d,Bage:n.b,RawBage:n.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZr1cNIligkVXBGEi0nYTCjVldoPTgARyEkaJIjgSQaJgAiIPYQNJSwxjTUVMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnbSABZDPYAA2QzjPWMBgIAMW9aBEm0_hnEOBEHUwGChH4JYiGoSg4DMhEnOrFyaGcCBcMudgAEYrJM-RxMkqYAEE5iU9gIyg8gbCgdAwzojklLEQroxkdgUQUmBuGAPC5KauB5C3GtgBK6ByuCAAyQbxkSeZKGaPqyoq7hZrlMBkMlAZUHadgAH4Nn6sMIyqq4poG1BMurKQZCrN8zBhdVjhgMAwigKYduq2rjry5dqwTQSCBwVzMhSK8CG6mtax4vt-nUxIxBy9gPFImApB4wGa0YEG4C2ah0FcARkioKAhT4EAzNhcQVyBqGYbSEna242HEYTFHQnIBE4DgSHodh-GaZXKRPu-37_u6qRXrOswvxAFi2I4oguJ4yRVGwf84CwQDdBAgwwMIq7PuEk1NT4oigsoGZLDG-BtfaftDfNeT5jgP1bSu6DZgyM2cA9R3YT1q78zwdrYBdj1XckawYCPSRvd93iVX9CTqCkkHlKKw0XhyhIlkgAgABkboINOXhFCAUkIJZXdDeApnkKruBqqNjvd52kPDHJKFYDIoDQbpUFGTIZhUkuuhRTDNzMD9xJ4nAWEiuDEgAOW9bplPaHi_THi2jZNuxlNU6tjCMAT4FHdg9UxzS7B5Zzk4SK40MN42bZwLxKCgEyLB3vfUamLOwCmI-NLQdgz9ii8T-BAr4DlvvAe-wgn7rFfmKd-AkC6EEPsfP-ACLDp3zoXEBBs153wftAw6Ucx6YFuqEe619Byb3PgQFOUAri3SgKjZ-SdM7Z3ofEJh1DMGEHYYwmAGUo4XSwPrbKAkqLx3YDxQRzphFXRIXdKY4d5KwAjDxEeqBRbi3YhEKWkg64CFluGDQitlbAX0AwDW9otYMR1maT29oKHgLsDY82A4rbrztqgSxUxXLAX9pIXxNB7GKNxBHfxgdg6hyUU1TxoiwosDAIkChG9CrFWZksfoSUlj5CyfiEO_D2Al1XhhSuNUt4WFETIgg9hmYFWAPIKOFgIDNAjJkmAVVyk1lER4KAfQCpHwmDgKIWBWmJW6CYfSSwACs6igY6g8OoLYX1_D5BSKgCMVSalwHIpTaozg_AnBGFcYolMLA6VsgAEmAG0-QlzgA9L6Lcnw5yfAaRhhGHSSxPnsG-TpHAAAmDkzCgZnLuW0_-7B_lPPYFch5RxJCQuhS8icKR3m_K-V8nAaUgWnJ-WCsZEKkzQthb0-FE4xnyBSnc804KEVQtsm81wHyMU_MxSlQFlNijAsqo0ui6xmmFRye0lSK5RFnDgAlJKBVihXKFU84ovKLDzMWZKHAKyC7rM2eklSeYuATD2szSVBTNiIOweKo1PL1hHQsF0AgfRzBQXnPkmg2kZDGUKa7YpSxxVXCgiXLV2yPUfFqZhBpZgw3R1EfogqxSnqMECZBEu8TmlJPQhGYpHJB5iGkfo8etgyTwVnkeAq7R9F-lzavJxdT1htNATfdeOBUChCIIEAQzChV1twRAptLaMgCLMLm-RZCCDJOrdWWtrL1gdsnYQ8Sl17RDvurqiYEcIz6PUZo1iQdNhRNCcov8mglbaBVuY9W_FPrkUNEKEYmN0BimaPRN08o7HSO8Q6PQWApRPo9I4D9L4o5vsXQQMU4YBBdCOC4j0QGQNTnA8EzgqBWCYwgO4L92FA7hGgIYpD_RUOxNjs2JwKaI4pIjCez9l79phmLp69CdElhOv-hkm6pSRXVlEVBIDEcaM4EaopTCylyNfQmPkgA2ox_QABdXlHH2BVO43J7AI66MCfYMqpZOBtgwESHAdN6EOSl3QAzGANcgYRglOQJYWnEisc6UDURSHenz1BobOAonrPScpgKiMjmGRKTmqiPzw12DWYQw1fdcAqrqdVeqtZ5nGaNqUwpvj8B3Pack7MkF85UacBaQAQgjKFv-KXItRYWRp2L6yLOJc_cky9aXEiSauL57oFdFU1ltfakIjN2tKBXHZmsVTkm-r6-9QbSX92-qDVx_d9GVyjYsJlsVtTN5Bvk_unjxTg0YV5Z1gQDq1tKbq0GoT3rSoHW9dqroD6o4RrMKImYsRtijoTqdlzdwGOXn0EWgp13bP8paRJmgP2wtCZwCJo8VU9vmGTYkkjZGzEUfe4GoHBAfvMbAJl6HOqinoR42967dFbvSNEdEv2CcLzOpziF7T_32MEZ1RPAtM8550QKpT_6MmGcAHU91NQKi5AQN6BB3puhGPTrmMesdM0jX9tBP04F_fSI8AhaYqUTrDxIHP9CkiEKwLgGQGhwD1HSAo-PEflzpyCmsaAcMoZoBGPLFt9dTiNyb5mZu5SwXFDlvI3QRMGxdxkV87X7MM8nM7ZSmvteZgAD6x-uqQ-6MGMjgdDx10cXWI8CAjDH6nj2djJIR3-3XkuafJHj8cfNU90cThY5loG8hrVI0kHLpTivY7NoyN1DkmXecrv3R8C34CCpt8_by_vPtB9M5r6z5SM_C1z15XnvNk9F_FuUsUCOOQrkL5Z0eeQCr2CPGhHANuNBLS2FcD0mA5pz8d0oOaMymQiA0p96s6ONrM_7fYJPiOxO51ZEF0boFFl0p8moo5N0JYdEuIE1DE1AFYj0KAzFQJwJ9ZrEn1RJ_17YHEwF14zZV53EbZPE30codF_EyDIh4MyduhIMA4PRIkYAw4-dfQScGdTwE0XtCocYhQlhTxHBcY2068UQrdCxUApIA06kg1-4vpxVvVH4hQrh-CFCc8eCBAqoI0v87Uf8_VXYZDLt7hFNP0tkidw02DxCfE_EE5ipztqMRxqkVD5DBCeMZDKonoZdGBKDZRUd8ZIo1gQBe5XYODgIi81C-DRwBDeDhCCBM1EZepbC6Bm9BYdEzppEE1V9mcQcF4E0_R0jK18CqF2MEitIcEnFG1ARmE1DO0yjqAYAdQwBwEIxRNHEG0URpwUhUI8C74e1W0MtmFlDBDqiG0FoJIcBbAxQABHUICALoRYMwswdIoDLgzpKjOgK4JtVOdYKouUGKO7GRfWIDMA1dBNDdJQMWLdRg1vC3BWUxPQVAt9YqU0WgMfcuM2LA-DIDRgl2aQEA4dRgzxedKYQ48gJ4mAF4oqdYZ3A3AQN3U3SycYNEfhNSIjRJPPdYshAhCwCHZKT4ndJEoo9wNIRgx6epfoiIlQkk0bNrEWM4rRS46DOgWDDIRA241WCxc9TUN43WcwqSBk0DcDAqCMNcWomgS9PAa7FwsuNwquNjJpFpcUljOvbQ8wRgYUjMRNPQsuTCHw_gVwfgXwa7FqBUsALNXbb_FUtUl0YAPuLU4_bNeY6OQExPUAvkpkgQSA2krdTDKAbDZDVDG449FAtWEAJ0w44vLsZaUKeACoNIUQ7zPLXQCM6gKqCYIQMYZ0MYM8MDIUCMI8ZmWGdRCNKA7RTiSQLw-A-WQ9Vk09EAV-AAAUPXYEbIATfRaJtgILcWtngHgygkbMfWwjrJDhEGWgBC6HwwsPYC8MFJWPSXWFRyuDzzJIcOcOPwRXgHPwtAnmv1gDv3bjrzNEkEIK7LgHWFxjiG7FQCWBP3XLQE3Kvxv13OdH3MlEPM7PXnWGxKvLXLP1vMvwqAfPv2fIIFfMtmPK2L8BnBgEYK_NPw3L_O3Nv0AqwJApmCIPgHWElnvWYQiAZjwC1FHCWWyBgpvIvy3IAr3OQqPPfOrBtJRHDVY0YDz0CNLgHh6GZhanFUwkNOAEwpulNPEi8JwHyPbMKIsF4rACGLvlqPqMaOaK6IgRGMs1KNaL8HmCKgrj6K2OZkkogWkoaJNiaLbIgTgFUpM3qSBWUrvkUs0urHnMst0udBkoMrkvrTvlR06NcuMtRAKBsr2MEqWLo1EpCB0XvXRM2PY20rkwxOYTspwjYF2Kjn8ur3X2c3aC8IBKAKmFEUohGCnOUi8OkVDN-KXQKppOUDpLxJ-KTwIEYJZMDLuODNIM7GZDoJLN0RymatQEkBS3gxBlaslmllhm6v3Xgy1DYGhP8QGskDGqDwMR6oA34gTUmpgICWAmGpiQWv1gAAlxQpxlrSydqOwMh1rWCcCpho1-qVr9ETrI4zr2BnBWBZxLrSyHqUgbqSD-JrxwgIhzBWqwpYBegsRuJvrqB3rNqroGhUAZhwgSIcs_rH4tgyF4BJBIbobgLYamD5q7rUbwgdRwhAL4aAakauIcbgK8aCB78wa7qM5bA0NGJA5_rEagaaaUQqavF-IWaCAmwQ5_FGbAbkbOaUbaAvgsb2b9ZObuaiBrwnBkhCamaBbaahaQ5uIZa2a31nBHtUBnQINv0PQ-bibJANa0Bta1b-JLBr9nFdbJB9agbzaPAuI7a4BeMRrX1z0IA5g_ZWqwAsBJB84PbMaXa7qQTxRaA9RsgUMABFBkOES29DD0b074UEsOlgVwKOjICAbs12kRFQ2O-mgEQQjKg44qyCLYnO5hI8FOtOmOvaJO8O1O6OjO3THFT_Sczq5hHiZhGa6E5hBNZhQ6qcZhfRZhV6kydYL6m4agZhUmjGqeqG3G_G9uZhTmpe2myWlelESW6W9ARIYezW7W5hR20e6sP2skfEosz06A0sjqk4LqlLAM5Ahq9kkRWpVqjDGIH08VQuuRYuti3TTpGbJqX1FcPfbSHpU4bYGKIGMyTsAoaWieogK4T5FcaBiyFISwQ2RB7lFBgoYBbSFKByIyLB8yAobhbBdofBxyZhBbFhWhIBsbbBmcOBnRTB5B4hmcdBmYFh-hthlIXBmdKBnh0hrhiwah9OPhqCBh3hthH5ObQBYDU1KbSRoRmRqk048qrdKamWO-gCeqtks9Z-3O90egyQBOz-wqzK504dX-iE6sAB2AOhoGEBuUNAe_c0MBnYSBmsdSTSbSPSHAJMbATxiwSR3x1YKAcgCMHAKyAADmwHYAAGp2AbIsAOQgn2AW5hRYh4gU4NVtIiAuB0BfQqHmF05aHZSvGUESikHqxRGgFpGBtvG0A-HqmRGSm84FHymLBGnUBlGWnZHqSNEL62quIu6pwbr76gJH79GrpxVwl4737vhmYeyq9Zq2dX6GDKq1Cv7gDqrrH_7i6I4HGawvARcMhfG0mTUsFznuUTmpwOHjkqUfA4BH4uAYVWpxqpxD9in1gTgbhsgptbmMhDm5RfnaB0BVpqGYZUZ78jmunKnhGaxJH7n-HEWeHmmiGYHGGRBmGUXgnBGOm-nqG0B34ptum-H2gAB2f5RyWRppRDWwCAG_KbfXfIDwaAF4LyOUGwTsOgCFjKNR84y-3ROA7RrQB-vRtAmZl-q2t-rDMxwAou3Z8VGxiwOx5KAbOKAgdyfJpIbyEANwcwH6dwcgWwKgEKdgfgHaqAFuGIOIdgaeGABkc1_gEUSgLwCIZ1_VmAFISgboAAVQaHNaJDgHNFRn6DADSc1aNTwYIcjeAm5xgA6faCsh0h0jSdgD-YEA1olAKF8axSmUoZXHvx2qTf-WSbSfl2A0ZPTvhPaENhiHyaSizmeDZbbnkgraU3wqoEyAvO0k7mdE8eobDeaVhavRoG1c8j1dgngluhmPYDGrX0SHNelsoG2CiEvJgniGiDQEoCWAAHEYAhRnhXBsl06I3vnqwwpO4_CERR3NWJ3dXKZ2h-AM4GYuBXB7r3A7BwERh-haABBPXX2TWMZ31nnYBPWldH5_BPWcoMB4hug9RwpPXEPUAJRKAIPDgM6jgHWRhzXHA-gsPQpwob3eIL31hQg5gMg4hUZR3K3LBMhxDBcEG5QKPYRqPSOi3Rx_3s2TXa2_kKWC3CGrVmEoX5x25R3umEW8XMWUgmHIgpO-weHkW-npPUH0XWGZPemL2unwh_nOm9gooOW82rI0m_cs2nVJQ-3ajB3Kj9Azn9PK2cm1ltIEQ9ABAbO5yCASo9OBtK39kOxRhQnHmUV3l_kpkpklgwuIvIVwvMUy3UntO5MIoLPsEoIzPnAUurOB3aWkvf3ZhR2RgbBaAePkp2hO48uZgO3P0dQMmwBcYjk5R5w247hbA0nm4Mg6vAuuWCneXEuKvR32uBBOuRhudu5QHTRthzQRghRwXuVpuRdRv8u5QPAJupuZuPPqw8AxpNhxCpstuZgdvDD2gwgIg-WPylNxGVxHO25nO5RYAv4NuYEEUhV1g8AUo73gJo25QABOWN7lTVhNpNm7wgYPblYtxNq5n7v7zjzNnj3NuUc0FKHAQTjbiwPAf5D7-KMZbSOyF5ONmgQHyH9oYH_99N9uEton3HwtsbDN7jwz2t80P5FHxL5MTHggL75N6J6noGAHiHnhOUFNtNsH8nvnshmJ7nnLvAKyNnjnpMct_7-N0X6yVNsn50Cn_n5NvHsHrjoF-nlIPNsLiX6hvAKZGX7HuUMtiX9BRXpNwX1XmAdXshpMaloTmp5hPAOyM3pKbSf5F3_HggQnjXqZFX4XtXpXuUZ3q39gWn3XnNvj_No39tN4GICmmAd7_TqN838h6HmnkX0t-XlcXn23kPmHunuP_XuUP5FKZn4TqdZPl4WADHjPz7rPtKKP8H0trXwvm3on4PoX0v2P3jiv3SLFRP9YLwbepvjVlv73uUNv13oGDvon_5LvsbIvonu37X2HvXvNx51H6GEGko6frH2f8hgv3PsPzvqP9foPkvmnnXrNnfyv0fhfnLuIGYXt5vk_0r9ldvvP5f1fjzx74a9N-A_R_uX2M5j9qwg3GFl_3Z6t9ABNYJfhrxX7X9gBYvO_ovwf5w9a2e_C9gM2LJTV-6x1UVtWXuL8RZm6zExgs3laOkLGwJZmCq0sb3RgWpJeih6XUZCsuI11UgboxrJvpKBMreZnKyWbg17Qu8fwIWEEKGMmIxjS4lsx5KQRFOsINnIJhzqKCJwbQDAI4H2wZAUkmQFgHkHcKdJAWAgOTkQGASURDBhhAwRADyAicZuGQcwaQysF2CbBHYNwQ4NOYCAOGlgjwXkCuC2D7B4_RwT4MNguD_B7g6wfy3MaKtQCyrfZtVVYErg-4Wg9ADoO1q6Z2gBkIyM3SBh7JEo8PdoKYLcbeA0mMMHYIhDSGREywygvtMgwigvBlo2kLoHBBiAtx9-5AZrlNkG7DdtI3LTACtBy5kVYA6AAboZ3kjGc0mgoW8hkDPAtwaAR3fthxzGzpdMucoZYfvz8Ai4psqQ5COkKFCZDHwabDQu71vTmCAWoQ8wX4OsHXNoYVw7FpEAiG3DK-Z3TbrenEb3DvB1w7OK4ICGvClgpg3wb8MiHnNJet6ZFlBCBGGwbhbgu4dCJmDPC4Rrw8ESLmUZQiHh8DJEf8N0juoER2Io7mmxy6mh0AOoVALq304zC3O8w_QEsOs7co1hANMhpsMS4Nwxh-nPYdoMOF6DHwwfAAKSvhWRaQnzikL0LVDuRAgLIeylTasARggo2vtWFRBftn8-gAFhKG2BVD9hNQ7SEqPEIqigk_TAVloimqvVxmOjcVvwIoHSs46kgWVh_VEEKtv6SrRgYkIUTJCxsGTW1tkxu4lF2g-TTsEUwVEWB3G2wUdk42KFnkIG-Ao0VuhtrI1x6P1M0WK0mYSsBB1o-msY1MYOixaV0KCJWzWZCDt0-SfOkKG2ZAkf6CQn5gc0mz6d4gGqSWkd1c6k8bmoQ3nOgH1S4svhU4bUeMCUzcpegkoxQnKCpHNjgGyVTlu0BcbtxzQdXQJtykuYgCuer_CwOoDyAxBEkbeF1HKCbGg8Vw-TVAI72shLi2uC9Z0FlxWECMZOynDFqgwuGdjJG5LChsuMU6ack2T4tJgmw8DbAXg5tGYFtUQQk8ex7QXUX4TDAvhuUBAWYP-MLiASVCOohjqBP0Cmcw2GXJkeeP34ndKAh4_TguLIaYT9-IYrOC3DoT6dwxs458TiHbF4A8GqbAUYl1KaXxKRPDO8SpxfGoNrxGnNTtI1YlKMCW9Eupl_EUZotuJOXDBB0wkb4tIeekahnBA0jqsVwuE7SFMhz5Ax9x2E9oMpKj4PjpG2Qv3jeJIZJtI-r_ahvsFgEDYKhGotkfBOVGYwkJLY7wT71shgcuA5Q7wJKiKElDqg-_OAFEEYkDZFJEfPSXuLQDqSjJ0w4SYJLlDHj9JM4ZRu0GilBj0mGQL0SRI1awAsAY1LoEtGoAudH4zaFaNGI4GCtraCNfmiTTnro0KQSYsgY1StEyDA4DU4QfaNtixCnR8Ql0VWKSE1jzJ6ozURgGsl6jbJQSeyVOHQncpwxIYi5uH055R9TJ4nDYfSM4kFAOJ3DGTup1Wm3jHhzHHiZJP56EsYhZVYqXGPKlo1JA5NSmrwItHkCDGczW0U1MWYtTHROzdqX_U6lujupK4UwXgyckvNZun00IX8KO45DwpV4jBveIinYIdpMnFiTFJSBacGh-QT_vKDaFsALxhooqVomOmSBBal0lMZaJulUCsxj0ugXEKsaVjbG1YwBvp0k7gzQZnDAXlpOYlbTrIjMtadxNhnwy3e1CMpgNiRZgyoZXEyKQLNgbMzaZqDTma02oR3jeZTM-Bgi1qY1UwZMsumfLIOmDNOBJUomszUVqS1qpfA66VK3qnGM7RD0sscwKyodSKZXUqmQNjrFrIGxLnOzu53GnjjtI5EsniiAjjgIxpe4-FmLOWn8zYZ60y8ZtLln-zYpfEhUQQKGZYzBausreokD1lXTapBMwsY1OoEiDiZQiUmUunJmqtKZ9jUia7PmjpTI26UzKUsmaHbi8pRAAqYX3Sl7s0yVwFKLDORbkMgpG0kWWHPbmszBZZDd8RzLfEqS3-Ts0dnbNQAOztxTs_fgxNSlLT2Ggc-eVIyFmwyYZS8iWaJJeDSyl5a8rmXI0hFLyVpks8dDAAyY0cM-5cmYpXJynVzektct_GfLRlDtfJc8zuQvPpnJte5XcnFp_OMlqziyWMo2lrRIGD5zReMg2faCgjWZpQc8DCGbEHJhQLyo5W6jmPtCCCbRJs2gfdgZyRQ_4ykaBS_ngAnJqwOkPkQ5wQlMdAhIgLIB8gbwhB2a27agFbH5AFAZxi0T_r0DZbkA3GMAXCFhw-TI9oufyHSLFx-Q4A7IAnNlN90yzN4y2ZC3zhQqFDMchAkE2gBGG-6ptMAKQOhe4H5CMLUAzC_cSkDYUSQOFbwWIDwr4WRg_k_yavpijsgtyxFSYURSlBkXrAUotE8hV-0oWaDVFJmFKNE00Xes3FqABVE9KyrsFRwGXP6PoDCQJxTBbYiYNkjGROEhQ0uTpLoqiCf8ZUwAXBYdFSjiK7AnCixYECsU54meLKCpalCqhoBIAXiWgFyhCHeDEleALwVOHME9iwiTSu5obE6WOFulGQYBEBJAn6jwJAygQKQ2GUITRlnjUwcC3aDOS_p1YUwYDKUmkLZlbkwobW08llD3e4fIVMwkokdiDl6wHEAkHsAQU0gA0uAEx12LqJs5bUsmZbPznWzC5tsn0ZPPaA7jnZY4xdtpCnHOgZxpc_7pfKylIycY-UtJquJRAppNxZDb5dMMoCzCBANIxYT7PoaNCkZrQ7dh0MS6ETT584UdoKERlVzju9tPKbQAraLz7-K8_6WHNYn9ApJhUw6ZjNKkG1HaQcC2s7SagTMT0ECi2UbLukZzmpZshga9KtnvSbZvy5nG7OBWJTvlo7aFeuMSBwrHZbnffoyv54DYlVsKoMrKuwDmhGSGqglZKPklr9QV1830WmQfl6Cn5_8oZt7V9ru1T6Sc8BSnMNm3SiZoqisc8vNnujHGxciMeAymlvjaJbXCYZy1YkgSmhN8uthGrEUxM7APuNGRYEZFLJ0VQMI5dRLn5hq5u0AKABcsJKldDYObdtizwAniSVwJak1pMLEX4NmV6s4qaY1rqV0G6ECMBXyvdX2hWOGQVyDMSkguJcYGMEyiY0o4CA-1ko7AqgvLHVVrwE3EcfVMkArdxQ2wBdZ4kUoXkegLayOtHUSC5k0AoUVwCSHLwdIAchUfdeYFmjKQNiUAdgMFmGT-Zr1GJKqJXgvWPqZG96o9e-pvW94lSXWG9bygzbsApiGQZIFHj_gbRig8QW9ZUEKj7ipueqbNVcn3FPIOQxQdgNpGg1-g5ScGr9Xljmg_rgNu66VFchA1YxMIsG3MkeoQ1USrgyGo9ahrCUnzlSOqBrE1iI2gbTCh0cJebMKjLrXAq6pFYsIKhAY51K6hdaUnH7zqhNBAJ2rMWMzi4LMgI6TbeSWBywUmT0AbKIlCzKRosX0azLpn42CbbyBmEys0gIA7R2slSJTGJoE3QQZNBUIzQutEzqaEmqUTzGNlEQ9qBAAAaW0wFRvNE6lEIVlpxWaGc-4xzSppoBsawtE5B9deps0Td7Nt5daGpnKyqoWsumKpLZuewybTNNgL-I9HNCpQMNUVBIO1mxwDYLAJcJTZTBLjB0sgydHdaBovWHrj11mPISCnq3br66LWm9W1qWBQbWE_gAgFcm81-bEgh-TrUDG60h0YATW3rVjFa1lan47AIbYhxRBjax1E2qbdyk0L0YVI0cjWfIJUK8qgyDAB7GDExhga5QAAYlcg5QtQ9gKyK5D9CXa9FWMFKCWnu2uQzwyknKG9oZz9gPtiQf5N9se2_cwu45KSKjETLXbvtKUClmlEe2A6JysO9GNdq-0LxbtUyMtq5Ae3Q6pg-Y7HVZDShk7UdvJD5pHhNCoomUnyencXHwapMNBhMane0Hu32BXInO-wBTqmCs6BAWOu7Q9uF0A6o4D2J2AIDB3Y6zwMu2XbzrqECAkw32s8DpBV0q7CdDUBmEzBSTs7vuKUewGeApbfd5dwuLxDOG-2uQkwdkVyClGvAa6lMmQMdBYHT7s6HtWoaJvYH-SeMm-ru37RSwN2eMkw2kH7a5Dsj2B--1YaXkLvx1agbdnjU3ndrPDfdXI_yAPcwk953atQdkM8B7te3MIKWwe-wEmHsDfdntnjaJsHpz2y7jdzCb7sHvd1ngtQZ4PPe4p0iV7OdUyVyBS08YpQXd926Jq5Fj1nge9Pu27fYCmSG6u9PeoPXduvA6Rrw33a8C3urBpRK933LUE3rt3MJq-we1yNEzV1b73FGe9neQDsgwAdIYAEzv2mjjxIkaOAQEikk6TA7wYzCZ_Zjtf1XasY_yI-hYHR1wcsY7aNGP_sSAtzxIWJPsT8yp1towDCu1_RLtAOmQJd3-yEhLqTA_7NdjMaMocsxhm6Oic5T9JkGv3FkiZZ2qZrWQRQnBTYncCYJ7j9w5BBcDURIDQD8A-AbAMEguDEBnAPLnpVjFLE9BSwYyvSCzJzTJqdodrztYEIqrs1EzrAJGwwM8So2YR5iEK2CXHtJKUPR9ZgEQemb93UOyHrocAbYNoebn_JAlOXXss2ndZCASiKUb7iv1kYebRYUUbYLDAVjUAapDATpPwFQ5Hh-AVwfgD8GLDVAMghqrAN6FPohR1g_AM-ctD8MWsQAwinADpEiPVh-A5QEEu7QvJxH-AUMfIL-GhBhH8jmAMkJQESC5g8gBQICuaECN_BSwKRiwPwCiBoBsjKgIxArHqPxHij1bCSI3TiMDY0jMkFo20LLgdGGjggTUEMayB0UQA3KfgFRRtiTHaA0x2YyAAQXDlQa3bRkEgHiMAA9DxUkZwDfdRj8Rodf4DwCLGRjMxlcPwCwKWhIgFx6Y1anDSaJajuAXQJABSBuGNE-s4MqpBADC0C0tAPwwEdBJv4zQ5oWYDMH4DyAFATeIAA",mdxType:"Playground"},Object(t.b)(n.b,{primary:!0,mdxType:"Bage"},"A bage"),Object(t.b)(n.b,{secondary:!0,color:"paper",mdxType:"Bage"},"A bage"),Object(t.b)(n.b,{success:!0,mdxType:"Bage"},"A bage")),Object(t.b)("h3",{id:"fitting-bages-together"},"Fitting bages together"),Object(t.b)(a.c,{__position:2,__code:"<Bage primary fitRight hardRight>\n  A bage\n</Bage>\n<Bage color12 fitAll hard>\n  A bage\n</Bage>\n<Bage warning fitLeft hardLeft>\n  A bage\n</Bage>",__scope:{props:this?this.props:g,Playground:a.c,Props:a.d,Bage:n.b,RawBage:n.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZr1cNIligkVXBGEi0nYTCjVldoPTgARyEkaJIjgSQaJgAiIPYQNJSwxjTUVMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnbSABZDPYAA2QzjPWMBgIAMW9aBEm0_hnEOBEHUwGChH4JYiGoSg4DMhEnOrFyaGcCBcMudgAEYrJM-RxMkqYAEE5iU9gIyg8gbCgdAwzojklLEQroxkdgUQUmBuGAPC5KauB5C3GtgBK6ByuCAAyQbxkSeZKGaPqyoq7hZrlMBkMlAZUHadgAH4Nn6sMIyqq4poG1BMurKQZCrN8zBhdVjhgMAwigKYduq2rjry5dqwTQSCBwVzMhSK8CG6mtax4vt-nU5JIAIEUIBSQhpgEdBodhgGVyBnL2A8UjGXemspB4wHcZBqgoCFFKACZDReHKEnh9ACbRjGsdR2tuKx-ngaxvNXAEVACkpggABkbqmPwEaFsAUZxhnMbSZm8bZlcpE-77fv-7qpFes6zC_EAWLYjiiC4njJFUbB_zgLBAN0ECDDAwirs-4STU1PiiKCygZksMb4Cd9p-w9815PmOA_VtK7oNmDJfZwD0I9hV2rvzPB2tgaOPRjyRrBgI9JCTlPeJVf0JOoKSQeUor-epqAlkh8WCBrl4kcIJYY9DeApnkKruBqqNjrjqOkPDHJKFYDIoDQbpUFGTIZhU1uuhRTDNzMD9xJ4nAWEiuDEgAOW9bplPaHi_XX_3Pe9uxlNU6tjCMAT4FHdg9W5zS7B5ZyqYSK40I9r3g5wLwlBq7rFvvfOAj865Pxfmgdg79YovDrt_Acf94AAOEMAm-JgwGPyblMZ-GkYFwIsJDXBSDf4XzQUAjKhd16YFuqEe6P9BxXw_gQKuVxbpQHASZYhCDhYcPiNw1hpDDSCJgNQ8Sl17TZQElRMu7AeKFwulgN2dC7pTDzvJWAEYeKr1QDrPW7EIiG0kP3AQJtwwaAtlbYC-gGD23tI7BizszQJ3tEwlBdhnF-wHIHC-odeb8VcsBNOkhgk0DcRo3E-dQkZyzjnTRTUAkyLCiwMAiQmGX0KsVOAcAlj9CSksfIhT8TZ3EewVuZ8MJdxqtfCwMjnRYAIPYXJBVgDyELhYCAzQIwFJgFVOpNYZEeCgH0Aqz8Jg4CiFgXpiVuhYKTEsAArHooGOoPDqC2F9fw-QUioAjI05puTyLM2qM4PwJwRhXGKMzCwOlbIABJgB9PkI84AIy-ivJ8PcnwGlMYRh0ksQF7BgU6RwGTDkPCgY1h-ewJ5fTYHsDJl8uF7zRlHEkEilFsK_muABUCglIKcBpUhbckFbyEV3yTCip5HyMUTjmfIFKbzzQIsxci2yuL8UgsJWC8mb5oXsGKFCiwndOl0XWN0wqxT-kqRXDIs4cAEpJQKsUJ5MqvnFHFRYdZmzJQ4B2TDfZhyWl5JUnmLgEw9q5OVeUzYMNCDWqVXMyq4qjoWC6AQPo5goLzjKTQbSMhjIVJjlUpYiqrhQVbia45IaPitMwh0swSai4yLMQVKpT1GDhMgq3VJ3SMnoQjFUjkS8xBKNQGYjetgyTwT3keAq7QzF-irWfTxbT1h9LIeff-qBQhEECAIKFMru2eJwH2gdGQJGVsjgIDeN11GZI7dWLtPL1gjrXYdCtUiphqIYVEiY-cIxmL0QY1imdNgJOiVov8mhLbaGtnYu2_FPrkUNEKEY3NEY3Tor7USL4K0OKmI4PQTTo6SBA7QJpkTrr0PumKcMAguhHG8R6Pd8G6BTmQzBtArBuYQHcFKN0TEPThGgBYvD_RCPJJLs2JwBb85ZIjI-ppb79phhbqG9CdElh-v-vkm6NS5XVhkVBdDBB86cZwI1RSmFlIsa-hMMpABtPj-gAC64rRPsEOZJnT2ACBLrk-wXVWycDbBgIkOAxb0IcjbugUICJe5AwjBKcgSwLOJCE4MoGMi8OjIPqDD2cBlOec08zKVEZ_MMiUnNVEMXhrsE85wcwMn4BVVM_qw1ezXPkHIOOgzem0shbC6s6F85wGcB6QAQgjMlmBxWOQZY2WZ7L-y3MFaaZkt9oXLPqauNF7oYrmaeu9SEPL2qeMrh8zWQ5mTI1KGZrpm9ka43iZiYtnGm2LBlYVa0q-cbltNSk1U-NGFxWjZ5ua6NBnutxoU-G0qB1w2xq6M0FNKazAyJmLEbYS7y4PaC3cXjl59D1vKW97zkqelqZoODlLhZQOKcvbKy75h83pMY8x2xrGgdmthwQcHAmwBlbR9drjwWpOA7e3RQun3i6oCkok1O5cLz-vrklyzUORO0fNZvWtu996_uUmz_6WnecAHVr1NQKi5AQn6EZijABGGzlOJyCaes53GkGDM4BA_SI8Ah2bAArhjxIov9CkiEKwLgGQGhwD1HSAoVOccd254KrpqBKMEZoBGar_sbdTnt473Jzu5SwXFJVvI3QlPu0DxkV8k3fO88nFHZSZuLeZgAD5Z9g-ohDWGMhJ5rGT1PAgIyZ45z9nYmTsdI6t2r5LOfjg1u3kT9XJOytA3kO63GEHXd65Lv2jI3Umviql4em9HxXcoIKjrpp4_pewGrVvOtQvlL87b_vcVleV8C_h8pYo-cchPM32vo88gtXsEeNCOA48aCWlsK4EZMBzT38npQc0ZlMhEFZZH3ZRcHqo4Y2E-ycN6dO26KiV04mFqk-TUhcZ6-sxiXEOaFiag5s96FAtioE4EbsTixG_6MGHiF8vsZ8fiwcASQG7AOUxioSNBkQMGzO3QqG6cHo8SMAucS-BcWUvOp4Oa_2hUxMQoSwp4jgJMQ66uKI7uiOUkMaWSUaMcC8X0iq4aQCQoVwohah5eQhAgVUKaQBXqV2ChbcKIL29w-mTSpqtOyaFaMiOaBUFc7GdAIho4YhwhhY4hUmShlUmu0Y9BsoBOfAusZk_oIAc8McfBwEteOhLhzSWhAmUhXU02Thh00Ykg_hZ0FaOae-W-Dah8Oafo2RbaJBLCImT2YYo6FCU8mAUKOhlR_81AMAOoYAKCEYymxB_8KI04KQqEyCVR_ag66mpK1Ymh4h9RqCC0EkOAtgYoAAjqEBAF0IsDYWYNkeJgIYMikVcH2gkLUVodpDFPTjunnvurAWAU1BGDmqekoLrOeuwf3kjubDYnoDgVQcVKaLQPPh3H-i7IXFQeJuweBgCSjgEscTAeQB8TAF8UVOsAHrbgIMHk7pZOMGiOImpPRukpXtsQwhghYEpkeFcMCWUrUX4DODAOwY9O0lCqMUKJSZtsNvojcYYvceJgXhkMhhgc8TbPYi-pqD8a4rYbzqyZhuyWnoVGuI0TQG-ngG9l4e3D4d3MJl0j0jKRrmTowBKRmLmooe3JhIEfwK4PwL4G9i1KqWAGWhdsAVdhqY6JKdqSYQQBaSsUXGCQuqccKYhshggUyeemRlABRvhoRk8Q-tgbbCAK6XBg9LoF2MtKFPABUGkNIZFtVtGS8MtFVBMEIGMM6GMGeEhrSUeLkljHoimogUYpxOkcYmgWbHelyU-iAKAgAAJ3rsAtlwJUEdE-zeJkFBzwAwZQQtn0TEaNnZwiDLQAhdA0aM65S0HlybHHLrAE5XCV7UmuHxHX6YrwD34WibzP6wBv4Tzq5miSA9kXzrAkxxDdioBLA35bloA7lP4v4HnOhHmSgnm-K9lwDrD4nlK3l373mP4VBPnv6vkEDvkByfnrAlTuBpDsE3mbn_kP67nAWHn_rgUzDkHwDrAGxK5QoRCOZ4BaijhbLZDwW37bmAV7mv4gVoWnnBzrDzztzJpCaMCV7hEOmYSKotSKqYQmnAA4U3ROlFz-E4DFHBzLoWACVgDjFwA4CNHNGtHtF9H_yTHubuw9qoJwB-DzBFSdxDG1G5IyVyXOgKXextGdmyVaWRy6WQrqVjqqX6WLmg4Bp2UULyUtFmVKXkL_wE69HeWaWogFCOVbriQiXrHcalGSXGJK7Ym7FQWGU6Y4lQpLlyhBrTphWt7n6BbtD-GglQHSK86UQjD-EFT-GQGqJun3TUHGLenKDMko7SCVUEDsGckhkvFhlUE5SdjMgsHlkmJdUnCoCSBpYwYgy9UGxGxYzDU3owZahsDwmhITWSBzXx7mIjV_FBIhLjXIFhLATTVJIbVuwAAS4oU4i1O1J1HYGQ-1voh14cs651FZZiN13BgSbszgrAs421FZH1KQL1lB_E144QEQ5gvVYUsAvQWI3EwN1A_1d19oDQqAMw4QJElWYNQCWwDC8AkgiNyNYFqNHB61YcCNSN4QOo4QIF6NENWNXEuN4Qkg5NBA7-cNxNUwAstgRG2EGc4NmNUN7NKILNb1V0_NBATY2coSPNkN2NItONtAXwRNQt9oItYtRA14TgEMxG3NGNUtXEMtKt3E6tgtVBzgP2qAzoKGmtHoktNNkgJtaA5tRt_Elgz-Xiltkg1tUNztHgXEXtllM1gGL6EAcwqcvVYAWAkg0MwdhN_trNPQkJeo2QBGAAigyHCK7VzaRjEP6RCeKLQAnSwK4CnRkBAH2QHW7DoenYxB6DoXlRVZGUqR4UKHkmpInYXanSXeYTnVkPncne3fADtCZOsANdQFCjxFCitfCVCjmlCpdVOFCmYlCr9YPdWEDTcCPeCKTQQATVCnTQQIze_lCiLYfRzSrcfSiCrWregIkIvabebVCr7cvRYJHWSGiSFYyXVeektcPUNWlsGVge1TyeXa0r1RnH6d8LkrXdAU1T0LkjCdWOtitg3RYGfl5HKCMqcNsDFEDGZJ2AUGrWvUQFcICiuDgxZCkJYB7EQyKn2OZAUIgnKClA5EZNQ6QwUCIu0Iw45FCttpXF_EgzQ7gzOPg8YlQyQ7QzOBQzMKIzjKwzOPQ8QzI-IykCIgo6KlCrXPwuarIykPI1NvAlDA6gQKttoyo3owyWWUtcbL_QBG1dyc-kA5Xe6KwZIGA4qpA_aOCbA4Mgg01JGiuCg9pGgO_uaOgzsFgzWOpJpNpHpDgEmNgOExYNo9E6sFAOQBGDgFZAABzYDsAADU7ANkWAHICT7Ao8wosQ8Q1MRq2kRAXA6Avo3D6jn8UAfjOMkTaA0jajrC9DM27TqA8jjTwihjrTQMfTKjgzh01xH9SBFZE9U4L1f9QEAD9jV0iqsSmd5Gbj8NkELeq1v6IDbBDVNd5VUD9diqcDyDTV-cIzNYXgCMGQ0TJT9qyMjz1DdzU4kj1yzKPgcAQCXAqKMg8Jl-EzyDIgtA6Aq27zGQ1zqVYL2Qq0PDmM4C7-NzFgfTnTNY2jnzm62DSjAzYjgjKQwjkQGLiTSj4z6wPDaA4CRj5qfT9D7QAA7GTI5Ho57jbvkC_qthyxAB4NAC8Kg-0DYJ2HQAixlFM7cTMyYqgdY1oP_XY7gas8A27aA1neAyHCcx49A-c941c4gzNnFAQO5LU0kN5CAG4OYD9O4OQLYFQCFOwPwCdVAKPDEHEOwDvDAAyPa_wCKJQF4BEN6-azACkJQN0AAKoND2tEhwDmjgL9BgAlOGu2raScPMMriGsS4wDDNyhWQ6Q6QlOwA3DQtRQFDRPEpLJcMrjv4nXZvtBkyFMlNQZQwindHaQewxC1NJRCzPB8vjzySNsGZEVUCZBXnaRTzOjhM8NxvdKovvo0DGueRmuwTwS3SLHsBzWr6JD2tq2UDbBRDXkwTxDRBoCUBLAADiMAQozwrgRSxdCbIL7AYUU8kUEoyUBrbkHkprzM7Q_AAsjmXArg7AFrdgKCIw_QtAAggbf7Nr6AgH-uGNgb8HcEX5IASw_AOUGA8Q3Qeo4UgbOHqAEolAiHhwJdRwHrIw9rjgfQpHoU4UL70UEz6woQcwGQcQ4Cs7TblgmQjOcuhDcozHsIbHvE1DhbEHJtEopbcoYKjLFbab1YiLFIKL_D6LOLmLSjxLfHqjanhL2LWnZLhL-LijhLFL8nUKRA4Q2Qs7HsEn8kZbVkJT0eAgzgfqkoY7jRk7tR-gDz_DTbVTey2kCIegAgHni5BAJUlnPnhWFyowyT3zE4KQ_yZMSySySwSXKXSKyXQK4KVkxTD7z7LntLUEjnznENtL7Q47vEbLOm08sws7IwNgtA4nCIbnYHswA7TSOoZTYAJMVyco8448dwtgJTI8GQ3XMXcowrmAK0D7rXUj_DI3AgY3IwEuM82kHgpo2w5oIwQo6AJT23CMK3tXaDG3W3O3IX1YeAY0mwjOq2l3Mw135h7QYQEQYr35BmPTK4vn48_ncosAEs53ICmKMq6weAKUs7Sbcy2kAAnEw4m8BJm7W994QAniJxPDWy83KDD5WzjKJ8WxJ8ie0OaClDgLJ-dxYHgGTOD8BMm3KHZD8nDzQAjxj-0EjxBwW2j1m8z3T9j0DLj05yWwT-aGCqTw-8mFT_FJDzm5kzzzWBm5z46jm3m-z86Ojwr-0FkzLzw3gFZOLxJpL-0EmA29Q3L7W7m_m6jyr_L2V7mzLxYHz015J7pOCiL5S1CngEsrrzT3W0b-m_D1b9ZErxbzAKr2V0mCy3J10xd3ZJ7_r2TOHwzwQEz2r0soH1Wxz7W2H7b-wPbwLykGWylC76Z-um8DEEzTAGD_wxD0lCm7D0HyH9pPW1nyb8z2bwW6OGJ7n_n4X5HxYPSB4KX7AJT5X9T_r2lFn9W_73KGTPT8b377Wyn-b1W-33jzawT3ypr1Cl4FfUP--xL9Xwwz7zj-n8z9P033Py36nzj8v_z_j3n1J8Shv-sB4DDVpMP3v8lBw4f7z8f2r6fxH7L-f2T6X9ee1_B3mvwf7_8eGcQGYKOzf5699-HDePnX0n51sZ-vvRnigNb4idQBnfe_l_yq4LclOu_eAR_xShoCj-lvWtn_wT5J9rewAmsDn1v4ptH-kzWqpKz6pcRZ611WVnWVeL8Q1mBzFxmqy2aSJ8qu6bVl43WA-NYAC2cVmwMMRLVnqPA2xvWSoICCVWGzbOhA22aIp_AjdAQI4xIySA4kRzLQlOSkhQQzIsIYXPoLgCClpyE4NoBgEcA8wMgWSTICwDyCa5BkULAQBpzriURPB5hDwRADyCb8duGQDTrgkCGhDghHYWIeEPuYCBJGAQ-IXkCuAhCwhT_CIckI9jRC0hcQoIXINEF111EMDazLq0jIwsZs88JwegBcHm1rMBvRyMMSBhnJEojvXwSE28AlNMYOwRCHULcJlgaGsIFhhFDTLUBtIXQOCDEFHhk8egA3VbAtyW7aRJuorKrshVgAQt5uJbWzngJKaCh7yGQM8KPBoCPcKuDnONiVy2RucJ2ovL9KtlqHIR6hQoRoY-HzZ6E3eX6DTpCxyH-DhYMQ9IVJ2DS-CohhjQEY93zZVdRY6AHphjD-FgtIgqQoIa83hFJCUhAIgoY82hFfpsWUEXwRiIlgQjURBIvIeCKxHAicRiubNviIREEN8hKI4EUsFJEzAGRsQ7ETw1NDoAdQqAU1vw0OFBcTh-gc4e52obFcCutw4Tq707R1DZ2Tw5wa8LcGPgU-AAUlfAPtB4mAbYTUMUKDDFRBgx8OTDzasARg6o6UdWFRDuAX2YYQrozH6Gaihh2kS0Yzm_z6BXurA7WD6SlZcRfqCzGxvK1UH8DlWGdYwZoPVbuNxBZzSQfAz1a-N-GZTV1pU2-6v92gtTTsA03NEWBQm2wWdgEzQYXlMGEzcxl6Pdra0baq9EGn6LlZLMFWag4MVXWcauNtBsdKCE232YaCL0ZSAEOIQjEnEqqOrKQbGJkH8N4gRqFWo90C5s83mOQqXOgCtSqcsxOQx0eMAMzUNegBg9QnKAFFTj_GmVQVkEwnjmhuu8Tahs8zV4a9_-FgdQHkBiDpIdcLldoJOJR4rhamqAevlLyz77AlO5XUUQSzIa6cWG6nREZp0AkGdNGHDWvn-LYa1tU2JTTNh4G2AvBnaMwI6g6lZ7Lj2gzo60W6OoYEBZgqE2GOhP2JygsJroiJGKKuESi5QFwh9s90oDviZsZ4srnRPmHZihYo8FpvwzzHtBjxl4i1HOLwAps82aoh9pDHYT8igJBDUlgI3_GUMFxMkuhpoz04KSZwJnHvvzDhHaNdGPDEhDSJUnKNs2ekHhnBA0hvsVwTE7SEskgltM0A749oFZKz5aTwJmfPiSYwz5IDMxewCmhPFnZ9DtgAw54U6O47YTyJK4XwQ31si_Nx4u3acVgGVSdCch3QyAcOiiB8NGJKAlySU1fF2TMpoEshgy2l6uTyWtbQqfMITEVNOJBrWAFgDmpdAlokwuUMTH7TTdzRxY6ZqWOppQ1d6rMcBFWN4EdUgxhgjOMNLDEiCXSYgvsVMAHExiqh-rMKRKH8maigpVosiS-GnFJDJRJTbidmKeaYDSp1DL8T5Oom_ijOskubspKckSxpJ2jH4fJLckY8tO9JCVoYg9rY1up-9CeH1JUF8CHG6zUMUIM2bNjxppQ04tNMuazS4xM2cKQw0il_MYpYUnIcSLlAGQipOnOSRdLxZKS8peDYCddOKkPSxh-QWAfKBmFsApRRfD0e_XYGvTdaHNL6QGJ-lKshpjY4QUDOUQgz-x0Y8GeomqEvjoEr_DGWjLm7q9HJkkkRjm1FlgSrpd0_GQr0elNM2EaUqCRI3RnYy5GWM5WUS1xkyzjOhk0SS8FukzYbp2s-WawjxGayAJrU56eehpmSA9actemTWMDG_TBBqrQGRqxKGnMyhYMyabzJxiji9k44gLl52C7UNuJvE9niiHzgoJNp1DFToLLOl4ypZtLBOTjKkk6yyGaksxtbLYi2z7Z2cA2lfUdmPpGZ0iesU43-kjSAZWgj2cDK9mgyuZvsuaTjHDnVTE21U2qVsmWgBcgEzU9udgDPZZkrgKUNWeQzkmIDJZZDW6RPNRn5TwJsE0eewwXmeSnxwwmbAHNQBBzGpIc-YWJKVmnSCglsg-erOlmpyhGJsxeXrM8mQxDZms26abP0bmzj5Y886RqJgBlN2OlfDuYsS7kNTHxvcogKgD_wfzyZ6kuAKlMqkWzx5-A_TlPO1kizkpzFeQTbLLFQ07aZtbgVPn9FOzS5OzTzNKH3gYRfYI5MKFeQnKvU6xzM_6U2NrlfZeckUGBMpHwU_54ANyasDpBVE-dgpvHDISICyAAou8IQQJMe2oCBx-QBQI8YtFgG9A-W5AEJjAFwikcAUJPdLmCh0iZciUdkGTllxShQ8ysveetpwpmxYSeFjgvCbQAjBQ882mAFIIIvcD8gRFQCjthItUrSK3gsQeRYosjBgoyYBfLLnZBHlEokwGilKPovWBkCOFXCq0aYqEDmKYAEYFKJk2sXBswlqALVJ7IKoODTwznP6PoBiTlxfBs4iYEUjmSqFxCQmC5kIocWwC1UwABhYdFSg4A7IdgGRR4sCBeLy8wvXlCTyWChKUskAXmLQGFTZCkhRSvAIkKnAadlxMREZR8w9jTL4isyjIHXAwmkTuYOEpZQIFwSrLgpq08Jr4JhbtAopXAfZYjIpH2SOFpyuKR0IJ5dDqg4TCyQ1FKXrAcQAkq4DKihQ4gEg9gUkmkGWk8chQ1oYoXXK1ZRiKhg4iGcOPXnJit5j4neWHL3GBNeRh4iOcb2_l1TiZTUwBSU2vEogC094srqvIOGUAjhAgIUWcNjkkNxhxM6YcezmEPs2J78-cLO0FBEzu5coF2r3NoCNtVZS_U-dOPTnKT-gBMq2cgtzmoLsavtTOC7WkxYLqxJcgaS7I7E0LexnjcFTNJ5nNygYrck8SvJDmztcVt4xIASuDlBd5hwqhXjNkNX4rQy2kXieaEwzmqmVBgsyTjF4mdz6pKYrMsArcGgLs5YqyQGHQjpB0X6xc0MoAyZl_SVVmrSMd7MbnSDXV2qxFfmIwa7SYJwk4brsNQbKSsJEwlMdZxtbyQiUWTOwJHj9UWBxRpXSlTjFeXziOGGa6hl8qgA_KYKH_AtQK3mE2BCJNIlcO2r2F8o7IRYnOdXO-Dx1W6RdNOoswVURr7QAnDIK5EWJSRvEJMWDlpRcYscBAC6gwQBljriZrwG3bcUNMkDrdxQ2wQ9QElcXLQ46udGAD3TboZBEgEYV8aFFcAkhOcXmBupFifWMK5oOxKAOwESzTJYsykP9VVGbzfrzAs0ZSHpEA2vrgNiVBcFVDJx_rxUhbdgPMQfUFRXx60IVPEH_WVBCor4rbpakEmopXxXyDkMUHYDaQ8NfoZUoRrg3VZf1OJKqBhoEDJBD8TyNjYkEwgEan1r64jW8rI2vqKN6SldFaR9TsBesiQfrOhtTrJAPsGS2NacQjAnrXAZ6klWcIKh7qD1mmggHABqRP9dN95WSksUczxLcsalNTRpvvJLBTYRTJ6DNhkTJZlImWL6J5mszWbtxdmLSt0gIA7RJsDSAzPutPXQQ9NBULzXppCz2a8mqUcLDjBkRzqBAAAaUswFQktW6lEHVi5yBbec2G5SJFvvLSb4tyeBwUBpA3BaNuYW-8jhrc04BBs1mQ5CFvU3VaaAPmmwBLEejmhUo1GhDVAEmxk4ZsFgVuG5mobDaY4XdPOuOvk0QaX1b6zzK0OhStxJtt66bQ-oORJVH2r6pYMUGiBCx_ABAJ5EltS08bigi2oGMtrHUF0J1j659X1p23RAcOKII7RupO2X5zt1hUzipDansD7iOhKdeGrAjfYwY3MDjXKAADErkHKFqHsBWRXIfoYHQ4vY0pRG0kO1yGeCsk5QEdvOfsEjsSAUxD44O6HTDyS7mCpg4CaMqDtR0pRGWaUaHdjocEU7qAsHZHajqWT1tXIUOsnSuLAyE6rIaUAXQzqkiAszqh8LlICgl0txGGxTewVJCsFil2gkO-wK5GV32AhdUweXQIBR2E6oduurHYXG-yzoCdEOs8KbrN3q6RhGQJMKjrPA6Rbdtu7nfSDyzxlUdUPFKPYDPCMsoeFuhXLzBnCo7XISYOyK5BSjXhudBmTIBJVSjaRId0OzJvYDJjhMh-iuznZ7o93hMkwMezna5Dsj2BF-1YHXhDuz1agQ94TD3ibqh6uQyY6eqFNHwh1ag7IZ4ePfDqhSMsY99gJMPYCh6w7wmmTGPU3rN3e6oUUPGPVqEyZngtQZ4FveEp0j97ldSyVyIy3CYpQK-KezJq5BL1nhl9ye8HfYCWSe7F9y-zPRDuvA6RrwUPa8NPurBpR-9UPLUJPrD1QoC-We8fXbsf3hK69iu8gHZBgA6QwA9nadGYFSRY0cAO6eQrCRB3saoUuO8GCPIgN46yYj9BqFsGZ2g7h0KBzDsjqQNNsoUIuqdOJDJajDYSs6OA6ZCN3QHZ0iyAgw1EcwIgFy1YX3c7kXJNJMg06MsjQoB3LMGymKE4D7CngTAw80eHIHLgaiJAaAfgHwF2rwDfcYgM4dmfXKqppYnoaWANWA0K1nDODCrCMmUOUzrBLBwwZ0EQyq6tiqKtLOnkZKhRQQ4IMAuSTDwsN6HrocAbYBEDm7kwklxh1sgMREBCBX-ui6fno3i06woo2wLGObGoD9SGAgyfgARyPD8Arg_AH4MWGqAZAHVWAb0C_RCjrB-AH85aHEYdYgA1FOAHSJkerD8BygEJIOleTyPocnlv4aEGkbqOYAyQlARILmDyB8x_05oRI38FLAlGLA_AKIGgGqMqBLE5sPo_kaaMikJIHdPIzNjKMyRhjMwpiqhxXD8B_0ixrICiHGP9GQAdFLCkgHyNLGtjKxnGPwBIVjlYaw7RkAcf4AAA9MgUUZwBQ9tjhxpwP4DwAbHaAxx6hmsc1CWhIgnx5Y5S2TQGIejuAXQJABSBhH9E30sMqpBABy1a0tAOIwkchJ_4zQ5oWYDMH4DyAFAPeIAA",mdxType:"Playground"},Object(t.b)(n.b,{primary:!0,fitRight:!0,hardRight:!0,mdxType:"Bage"},"A bage"),Object(t.b)(n.b,{color12:!0,fitAll:!0,hard:!0,mdxType:"Bage"},"A bage"),Object(t.b)(n.b,{warning:!0,fitLeft:!0,hardLeft:!0,mdxType:"Bage"},"A bage")))}B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/atoms/Bage/Bage.mdx"}}),B.isMDXComponent=!0},"./src/atoms/Bage/index.jsx":function(e,A,g){"use strict";g.d(A,"a",function(){return B});var o=g("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=g("./node_modules/react/index.js"),a=g.n(t),n=g("./src/atoms/Paper/index.jsx"),s=g("./src/Theme/withStyle.jsx"),r=function(e){e.fitAll,e.fitLeft,e.fitRight;var A=Object(o.a)(e,["fitAll","fitLeft","fitRight"]);return a.a.createElement(n.a,Object.assign({rounded:!0,overline:!0,nowrap:!0},A))};r.displayName="Bage",r.defaultProps={fitAll:!1,fitLeft:!1,fitRight:!1};var B=r;"undefined"!==typeof B&&B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RawBage",filename:"src/atoms/Bage/index.jsx"}}),A.b=Object(s.a)(r)},"./src/atoms/Font/index.jsx":function(e,A,g){"use strict";var o=g("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=g("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),a=g("./node_modules/react/index.js"),n=g.n(a),s=g("./src/atoms/Atom/index.jsx"),r=g("./src/Theme/withStyle.jsx"),B=function(e){var A=e.children,g=e.getColor,a=e.color,r=Object(o.a)(e,["children","getColor","color"]);return n.a.createElement(s.b,Object.assign({element:"span"},function(e,A,g){var o=Object(t.a)({},g.css,{color:A(e)});return Object(t.a)({},g,{css:o})}(a,g,r)),A)};B.displayName="Font",B.defaultProps={children:null,color:""},A.a=Object(r.a)(B)},"./src/atoms/Paper/index.jsx":function(e,A,g){"use strict";var o=g("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),t=g("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=g("./node_modules/react/index.js"),n=g.n(a),s=g("./src/atoms/Font/index.jsx"),r=g("./src/Theme/withStyle.jsx"),B=.2,c=.14,i=.12;var m=[[0,1,3,0,0,1,1,0,0,2,1,-1],[0,1,5,0,0,2,2,0,0,3,1,-2],[0,1,8,0,0,3,4,0,0,3,3,-2],[0,2,4,-1,0,4,5,0,0,1,10,0],[0,3,5,-1,0,5,8,0,0,1,14,0],[0,3,5,-1,0,6,10,0,0,1,18,0],[0,4,5,-2,0,7,10,1,0,2,16,1],[0,5,5,-3,0,8,10,1,0,3,14,2],[0,5,6,-3,0,9,12,1,0,3,16,2],[0,6,6,-3,0,10,14,1,0,4,18,3],[0,6,7,-4,0,11,15,1,0,4,20,3],[0,7,8,-4,0,12,17,2,0,5,22,4],[0,7,8,-4,0,13,19,2,0,5,24,4],[0,7,9,-4,0,14,21,2,0,5,26,4],[0,8,9,-5,0,15,22,2,0,6,28,5],[0,8,10,-5,0,16,24,2,0,6,30,5],[0,8,11,-5,0,17,26,2,0,6,32,5],[0,9,11,-5,0,18,28,2,0,7,34,6],[0,9,12,-6,0,19,29,2,0,7,36,6],[0,10,13,-6,0,20,31,3,0,8,38,7],[0,10,13,-6,0,21,33,3,0,8,40,7],[0,10,14,-6,0,22,35,3,0,8,42,7],[0,11,14,-7,0,23,36,3,0,9,44,8],[0,11,15,-7,0,24,38,3,0,9,46,8]].map(function(e){return["".concat(e[0],"px ").concat(e[1],"px ").concat(e[2],"px ").concat(e[3],"px rgba(0,0,0,").concat(B,")"),"".concat(e[4],"px ").concat(e[5],"px ").concat(e[6],"px ").concat(e[7],"px rgba(0,0,0,").concat(c,")"),"".concat(e[8],"px ").concat(e[9],"px ").concat(e[10],"px ").concat(e[11],"px rgba(0,0,0,").concat(i,")")].join(",")}),w=function(e){return n.a.createElement(s.a,function(e){var A=e.css,g=e.rize,a=e.size,n=(e.theme,Object(t.a)(e,["css","rize","size","theme"])),s={};if(g&&g<m.length-1&&Object.assign(s,{boxShadow:m[g]}),a){var r="".concat(a,"px");Object.assign(s,{width:r,height:r})}return Object(o.a)({element:"div"},n,{css:Object(o.a)({},s,A)})}(e))};w.displayName="Paper",w.defaultProps={rize:0,size:0};A.a=Object(r.a)(w)}}]);
//# sourceMappingURL=atoms-bage-bage.e35a2c34828c513f0b9b.js.map