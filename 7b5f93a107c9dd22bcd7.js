/*! For license information please see 7b5f93a107c9dd22bcd7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{261:function(t,e,a){},269:function(t,e,a){"use strict";const i={shopping_cart:{en_us:"Shopping cart",pt_br:"Carrinho de compras"},my_cart:{en_us:"My cart",pt_br:"Meu carrinho"},close:{en_us:"Close",pt_br:"Fechar"},remove:{en_us:"Remove",pt_br:"Remover"},checkout:{en_us:"Checkout",pt_br:"Finalizar compra"},see_cart:{en_us:"See shopping cart",pt_br:"Ver carrinho"},empty_cart:{en_us:"Your shopping cart is empty",pt_br:"Seu carrinho de compras está vazio"},continue_shopping:{en_us:"Continue shopping",pt_br:"Continuar comprando"}};e.a=function(t,e){return e||(e=this&&this.lang||"en_us"),i[t]&&i[t][e]||""}},271:function(t,e,a){"use strict";var i=a(39),r=a(56),s=a(126),n=a(115),c=a(269),o={name:"EcCartItem",props:{lang:{type:String,default:i.$ecomConfig.get("lang")},item:{type:Object,required:!0},inputType:{type:String,default:"select"},resetQnt:{type:Boolean}},data:()=>({quantity:1,skipSelect:!1}),computed:{price(){return Object(r.a)(this.item)},img(){return Object(s.a)(this.item,null,"small")}},methods:{dictionary:c.a,formatMoney:n.a,updateQnt(){this.quantity=this.item.quantity,this.skipSelect=!Number.isInteger(this.item.quantity)||this.item.quantity>10}},created(){this.updateQnt()},watch:{quantity(t,e){("number"!=typeof t||isNaN(t))&&(this.quantity=0),this.quantity!==this.item.quantity&&(this.$emit("increase",this.quantity-e),this.quantity=this.item.quantity),t>10&&e<=10&&(this.skipSelect=!0,setTimeout(()=>{this.$refs.input.focus()},300))},resetQnt(t){t&&this.updateQnt()}}},u=(a(281),a(90)),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"ec-cart-item"},[a("div",{staticClass:"ec-cart-item__name"},[t.item.slug?a("a",{attrs:{href:"/"+t.item.slug}},[t._v(" "+t._s(t.item.name)+" ")]):[t._v(" "+t._s(t.item.name)+" ")]],2),a("div",{staticClass:"ec-cart-item__row"},[t.item.picture&&Object.keys(t.item.picture).length?a(t.item.slug?"a":"span",{tag:"component",attrs:{href:"/"+t.item.slug}},[a("img",{staticClass:"ec-cart-item__picture",attrs:{src:t.img.url,alt:t.img.alt||t.item.name}})]):t._e(),a("div",{staticClass:"ec-cart-item__edit"},[t.skipSelect||"select"!==t.inputType?a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],ref:"input",staticClass:"ec-cart-item__quantity form-control",attrs:{type:t.inputType&&"select"!==t.inputType?t.inputType:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}):a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var a="_value"in e?e._value:e.value;return t._n(a)}));t.quantity=e.target.multiple?a:a[0]}}},[t._l(t.item.max_quantity||10,(function(e){return a("option",{domProps:{value:e,selected:e===t.quantity}},[t._v(" "+t._s(e)+" ")])})),a("option",{domProps:{value:11}},[t._v(" 11+ ")])],2),a("a",{staticClass:"ec-cart-item__remove",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("remove")}}},[t._v(" "+t._s(t.dictionary("remove"))+" ")])]),a("div",{staticClass:"ec-cart-item__prices"},[t.item.quantity>1?a("div",{staticClass:"ec-cart-item__price-un"},[t._v(" "+t._s(t.formatMoney(t.price))+" "),a("small",[t._v("/un")])]):t._e(),t._v(" "+t._s(t.formatMoney(t.price*t.item.quantity))+" ")])],1)])}),[],!1,null,null,null);e.a=l.exports},281:function(t,e,a){"use strict";var i=a(261);a.n(i).a},282:function(t,e,a){},318:function(t,e,a){"use strict";var i=a(282);a.n(i).a},350:function(t,e,a){"use strict";a.r(e);a(12),a(21),a(8);var i=a(50),r=(a(202),a(39)),s=a(115),n=a(27),c=a(269),o={name:"EcMinicart",components:{EcCartItem:a(271).a},props:{lang:{type:String,default:r.$ecomConfig.get("lang")},ecomCart:{type:Object,default:()=>n.a},showCart:{type:Boolean,default:!1},showOnItemAdded:{type:Boolean,default:!0},checkoutUrl:{type:String,default:"/app/#/checkout"},cartUrl:{type:String,default:"/app/#/cart"}},computed:{cart(){return this.ecomCart.data}},methods:{dictionary:c.a,formatMoney:s.a,show(){this.$emit("update:showCart",!0)},hide(){this.$emit("update:showCart",!1)}},created(){this.showOnItemAdded&&n.a.on("addItem",({data:t})=>{this.$set(this.ecomCart,"data",t),this.show()})},mounted(){document.querySelector("body").appendChild(this.$refs.sidebar)}},u=(a(318),a(90)),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ec-minicart"},[t._t("button",[a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"ec-minicart__button btn btn-lg btn-light",attrs:{type:"button",title:t.dictionary("shopping_cart")},on:{click:t.show}},[a("i",{staticClass:"fas fa-shopping-bag"}),a("span",{staticClass:"badge badge-sm badge-primary"},[t._v(" "+t._s(t.cart.items.length)+" ")])])]),a("div",{ref:"sidebar"},[a("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[a("aside",{directives:[{name:"show",rawName:"v-show",value:t.showCart,expression:"showCart"}],staticClass:"ec-minicart__sidebar card shadow"},[t._t("header",[a("header",{staticClass:"card-header"},[t._v(" "+t._s(t.dictionary("my_cart"))+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":t.dictionary("close")},on:{click:t.hide}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),a("article",{staticClass:"card-body"},[a("transition-group",{attrs:{"enter-active-class":"animated fadeIn slow"}},[t.cart.items.length?a("div",{key:"list",staticClass:"ec-minicart__list"},[t._t("list",[a("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp faster"}},t._l(t.cart.items,(function(e){return a("ec-cart-item",{key:e._id,attrs:{item:e,resetQnt:t.showCart},on:{increase:function(a){return t.ecomCart.increaseItemQnt(e._id,a)},remove:function(a){return t.ecomCart.removeItem(e._id)}}})})),1)],null,{items:t.cart.items})],2):a("div",{key:"empty",staticClass:"ec-minicart__empty"},[t._t("empty",[a("p",{staticClass:"lead text-muted"},[t._v(" "+t._s(t.dictionary("empty_cart"))+" ... ")]),a("a",{staticClass:"btn btn-block btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.hide(e)}}},[a("span",{staticClass:"mr-1"},[a("i",{staticClass:"fas fa-arrow-left"})]),t._v(" "+t._s(t.dictionary("continue_shopping"))+" ")])])],2)])],1),t._t("footer",[t.cart.subtotal||t.cart.items.length?a("footer",{staticClass:"card-footer"},[a("div",{staticClass:"ec-minicart__summary"},[a("span",[t._v("Subtotal")]),a("strong",{staticClass:"ec-minicart__subtotal"},[t._v(" "+t._s(t.formatMoney(t.cart.subtotal))+" ")])]),a("a",{staticClass:"ec-minicart__btn-checkout btn btn-block btn-primary",attrs:{role:"button",href:t.checkoutUrl}},[a("span",{staticClass:"mr-1"},[a("i",{staticClass:"fas fa-check"})]),t._v(" "+t._s(t.dictionary("checkout"))+" ")]),a("a",{staticClass:"ec-minicart__btn-cart btn btn-block btn-outline-secondary",attrs:{role:"button",href:t.cartUrl}},[t._v(" "+t._s(t.dictionary("see_cart"))+" ")])]):t._e()])],2)])],1)],2)}),[],!1,null,null,null).exports;function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e.default=(t={},e="cart-button")=>{const a=document.getElementById(e);if(a){const r=window.storefront.$overlay;new i.default({data:{showCart:!1},render(a){const i=this;return a(l,{attrs:{id:e},props:p({},t.props,{showCart:i.showCart}),on:{"update:showCart"(t){i.showCart=t,r&&(t?(r.show(),r.once("hide",()=>{i.showCart=!1})):r.hide())}}})}}).$mount(a)}}}}]);
//# sourceMappingURL=7b5f93a107c9dd22bcd7.js.map