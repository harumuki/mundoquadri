(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{200:function(t,e,i){"use strict";const s={from:{en_us:"from",pt_br:"de"},to:{en_us:"to",pt_br:"por"},unavailable:{en_us:"Unavailable",pt_br:"Indisponível"},out_of_stock:{en_us:"Out of stock",pt_br:"Sem estoque"},buy:{en_us:"Buy",pt_br:"Comprar"},up_to:{en_us:"up to",pt_br:"até"},zip:{en_us:"Zip code",pt_br:"CEP"},calculate_shipping:{en_us:"Calculate shipping",pt_br:"Calcular frete e prazo"},days:{en_us:"days",pt_br:"dias"},working_days:{en_us:"working days",pt_br:"dias úteis"},free_shipping:{en_us:"free shipping",pt_br:"frete grátis"},interest_free:{en_us:"interest free",pt_br:"sem juros"},discount_of:{en_us:"discount of",pt_br:"desconto de"},select_variation:{en_us:"Please select an option in each field above",pt_br:"Por favor selecione uma opção em cada campo acima"}};e.a=function(t,e){return e||(e=this&&this.lang||"en_us"),s[t]&&s[t][e]||""}},201:function(t,e,i){},227:function(t,e,i){"use strict";var s=i(39),n=i(115),a=i(56),o=i(57),r=i(200);const c=(t,e)=>{const i=e.type,s=e.value;if(s)return"percentage"===i?t*(100-s)/100:t-s};var p={name:"EcPrices",props:{lang:{type:String,default:s.$ecomConfig.get("lang")},product:{type:Object,required:!0},literal:{type:Boolean},big:{type:Boolean},installmentsOption:{type:Object},discountOption:{type:Object},discountText:{type:[String,Boolean],default:""}},data(){return{interestFreeInstallments:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},methods:{dictionary:r.a,formatMoney:n.a,updateInstallments(t){if(t&&!t.monthly_interest){const e=t.min_installment||5,i=parseInt(this.price/e,10);this.interestFreeInstallments=Math.min(i,t.max_number)}},updateDiscount(t){t&&(!t.min_amount||t.min_amount<=this.price)&&(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},computed:{price(){const t=Object(a.a)(this.product);return this.extraDiscount.value?c(t,this.extraDiscount):t},comparePrice(){return Object(o.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(a.a)(this.product):void 0},priceWithDiscount(){return c(this.price,this.discount)}},created(){if(this.installmentsOption||this.discountOption)this.updateInstallments(this.installmentsOption),this.updateDiscount(this.discountOption);else{const t=window.storefront;if(t){const e=()=>{const e=t.info&&t.info.list_payments;return!!e&&(this.updateInstallments(e.installments_option),this.updateDiscount(e.discount_option),Object.keys(e).length>0)};e()||t.on("info:list_payments",e);const i=()=>{const e=t.info&&t.info.apply_discount;if(e){const t=e.available_extra_discount;return t&&(this.extraDiscount=t),Object.keys(e).length>0}return!1};i()||t.on("info:apply_discount",i)}}}},u=(i(235),i(90)),l=Object(u.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ec-prices",class:{"ec-prices--literal":t.literal,"ec-prices--big":t.big}},[t.comparePrice?i("span",{staticClass:"ec-prices__compare"},[t.literal?[t._v(" "+t._s(t.dictionary("from"))+" "),i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),t._v(" "+t._s(t.dictionary("to"))+" ")]:i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),i("strong",{staticClass:"ec-prices__value"},[t._v(" "+t._s(t.formatMoney(t.price))+" ")]),i("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.interestFreeInstallments>1?i("div",{key:"installments",staticClass:"ec-prices__installments"},[t._v(" "+t._s(t.interestFreeInstallments)+"x "),i("span",[t._v(" "+t._s(t.formatMoney(t.price/t.interestFreeInstallments))+" ")]),t.literal?i("small",[t._v(" "+t._s(t.dictionary("interest_free"))+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?i("div",{key:"discount",staticClass:"ec-prices__discount"},[i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),"string"==typeof t.discountLabel?i("small",[t._v(" "+t._s(t.discountLabel)+" ")]):t._e()]):t._e()])],1)}),[],!1,null,null,null);e.a=l.exports},235:function(t,e,i){"use strict";var s=i(201);i.n(s).a},260:function(t,e,i){},261:function(t,e,i){},269:function(t,e,i){"use strict";const s={shopping_cart:{en_us:"Shopping cart",pt_br:"Carrinho de compras"},my_cart:{en_us:"My cart",pt_br:"Meu carrinho"},close:{en_us:"Close",pt_br:"Fechar"},remove:{en_us:"Remove",pt_br:"Remover"},checkout:{en_us:"Checkout",pt_br:"Finalizar compra"},see_cart:{en_us:"See shopping cart",pt_br:"Ver carrinho"},empty_cart:{en_us:"Your shopping cart is empty",pt_br:"Seu carrinho de compras está vazio"},continue_shopping:{en_us:"Continue shopping",pt_br:"Continuar comprando"}};e.a=function(t,e){return e||(e=this&&this.lang||"en_us"),s[t]&&s[t][e]||""}},270:function(t,e,i){"use strict";var s=i(3),n=i(115),a=i(200),o={name:"EcShippingLine",props:{lang:{type:String,default:s.a.get("lang")},shippingLine:{type:Object,required:!0}},computed:{isWorkingDays(){const t=this.shippingLine;return t.posting_deadline&&t.posting_deadline.working_days||t.delivery_time&&t.delivery_time.working_days},deadline(){const t=this.shippingLine;let e=t.posting_deadline?t.posting_deadline.days:0;return t.delivery_time&&(e+=t.delivery_time.days),e}},methods:{dictionary:a.a,formatMoney:n.a}},r=i(90),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ec-shipping-line"},[i("strong",[t._v(" "+t._s(t.dictionary("up_to")+" "+t.deadline)+" "+t._s(t.dictionary(t.isWorkingDays?"working_days":"days"))+" ")]),i("span",{staticClass:"mx-2"},[t.shippingLine.total_price?[t._v(" "+t._s(t.formatMoney(t.shippingLine.total_price))+" ")]:[t._v(" "+t._s(t.dictionary("free_shipping"))+" ")]],2)])}),[],!1,null,null,null);e.a=c.exports},271:function(t,e,i){"use strict";var s=i(39),n=i(56),a=i(126),o=i(115),r=i(269),c={name:"EcCartItem",props:{lang:{type:String,default:s.$ecomConfig.get("lang")},item:{type:Object,required:!0},inputType:{type:String,default:"select"},resetQnt:{type:Boolean}},data:()=>({quantity:1,skipSelect:!1}),computed:{price(){return Object(n.a)(this.item)},img(){return Object(a.a)(this.item,null,"small")}},methods:{dictionary:r.a,formatMoney:o.a,updateQnt(){this.quantity=this.item.quantity,this.skipSelect=!Number.isInteger(this.item.quantity)||this.item.quantity>10}},created(){this.updateQnt()},watch:{quantity(t,e){("number"!=typeof t||isNaN(t))&&(this.quantity=0),this.quantity!==this.item.quantity&&(this.$emit("increase",this.quantity-e),this.quantity=this.item.quantity),t>10&&e<=10&&(this.skipSelect=!0,setTimeout(()=>{this.$refs.input.focus()},300))},resetQnt(t){t&&this.updateQnt()}}},p=(i(281),i(90)),u=Object(p.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"ec-cart-item"},[i("div",{staticClass:"ec-cart-item__name"},[t.item.slug?i("a",{attrs:{href:"/"+t.item.slug}},[t._v(" "+t._s(t.item.name)+" ")]):[t._v(" "+t._s(t.item.name)+" ")]],2),i("div",{staticClass:"ec-cart-item__row"},[t.item.picture&&Object.keys(t.item.picture).length?i(t.item.slug?"a":"span",{tag:"component",attrs:{href:"/"+t.item.slug}},[i("img",{staticClass:"ec-cart-item__picture",attrs:{src:t.img.url,alt:t.img.alt||t.item.name}})]):t._e(),i("div",{staticClass:"ec-cart-item__edit"},[t.skipSelect||"select"!==t.inputType?i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],ref:"input",staticClass:"ec-cart-item__quantity form-control",attrs:{type:t.inputType&&"select"!==t.inputType?t.inputType:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}):i("select",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],staticClass:"custom-select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var i="_value"in e?e._value:e.value;return t._n(i)}));t.quantity=e.target.multiple?i:i[0]}}},[t._l(t.item.max_quantity||10,(function(e){return i("option",{domProps:{value:e,selected:e===t.quantity}},[t._v(" "+t._s(e)+" ")])})),i("option",{domProps:{value:11}},[t._v(" 11+ ")])],2),i("a",{staticClass:"ec-cart-item__remove",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("remove")}}},[t._v(" "+t._s(t.dictionary("remove"))+" ")])]),i("div",{staticClass:"ec-cart-item__prices"},[t.item.quantity>1?i("div",{staticClass:"ec-cart-item__price-un"},[t._v(" "+t._s(t.formatMoney(t.price))+" "),i("small",[t._v("/un")])]):t._e(),t._v(" "+t._s(t.formatMoney(t.price*t.item.quantity))+" ")])],1)])}),[],!1,null,null,null);e.a=u.exports},272:function(t,e,i){"use strict";i(12),i(66),i(21),i(29),i(145),i(8);var s=i(39),n=i(115),a=i(56),o=i(14),r=i(270),c=i(259),p=i.n(c),u=i(200);function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){m(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const h=window.localStorage,_=t=>{const e={};return["product_id","variation_id","sku","name","quantity","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach(i=>{void 0!==t[i]&&(e[i]=t[i])}),e};var f={name:"EcShipping",components:{EcShippingLine:r.a,CleaveInput:p.a},props:{lang:{type:String,default:s.$ecomConfig.get("lang")},countryCode:{type:String,default:s.$ecomConfig.get("country_code")},storeId:{type:Number,default:s.$ecomConfig.get("store_id")},zipInput:{type:Boolean,default:!0},zipCode:{type:String},selectServices:{type:Boolean},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})}},data(){return{zipCodeValue:this.zipCode,shippingServices:[],selectedService:null,waiting:!1}},methods:{dictionary:u.a,formatMoney:n.a,updateZipCode(){this.$emit("update:zipCode",this.zipCodeValue)},parseShippingOptions(t=[],e){let i;this.shippingServices=[],t.length&&(t.forEach(t=>{const s=t.validated,n=t.error,a=t.response;s&&!n?a.shipping_services.forEach(e=>{this.shippingServices.push(d({app_id:t.app_id},e))}):!0===e||a&&a.error||(i=!0)}),this.shippingServices.length?this.setSelectedService(0):i&&this.fetchShippingServices(!0))},fetchShippingServices(t){const e=this.storeId,i=d({},this.shippingData,{to:d({zip:this.zipCodeValue},this.shippingData.to)});if(this.shippedItems.length){i.items=this.shippedItems.map(_);const t=(t,e)=>t+Object(a.a)(e)*e.quantity;i.subtotal=i.items.reduce(t,0)}this.waiting=!0,Object(o.b)({url:"/calculate_shipping.json",method:"POST",storeId:e,data:i}).then(({data:e})=>this.parseShippingOptions(e.result,t)).catch(console.error).finally(()=>{this.waiting=!1})},submitZipCode(t){this.updateZipCode(),h&&h.setItem("ec-shipping-zip",this.zipCodeValue),this.fetchShippingServices()},setSelectedService(t){this.selectServices&&(this.$emit("serviceSelected",this.shippingServices[t]),this.selectedService=t)}},created(){if(h){if(!this.zipCode){const t=h.getItem("ec-shipping-zip");t&&(this.zipCodeValue=t,this.updateZipCode())}this.shippingResult.length?this.parseShippingOptions(this.shippingResult):this.zipCodeValue&&this.fetchShippingServices()}}},g=(i(276),i(90)),y=Object(g.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ec-shipping"},[t.zipInput?i("form",{staticClass:"ec-shipping__form",on:{submit:function(e){return e.preventDefault(),t.submitZipCode(e)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"ec-shipping-zip"}},[t._v(" "+t._s(t.dictionary("calculate_shipping"))+" ")]),i("div",{staticClass:"input-group"},[i("cleave-input",{staticClass:"form-control ec-shipping__input",attrs:{type:"tel",id:"ec-shipping-zip",placeholder:t.dictionary("zip"),"aria-label":t.dictionary("zip"),options:"BR"===t.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},model:{value:t.zipCodeValue,callback:function(e){t.zipCodeValue=e},expression:"zipCodeValue"}}),t._m(0)],1)])]):t._e(),i("div",{staticClass:"ec-shipping__services"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[t.waiting?i("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):i("div",{key:"services",staticClass:"list-group"},t._l(t.shippingServices,(function(e,s){return i(t.selectServices?"a":"div",{key:s,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":t.selectServices,active:t.selectServices&&t.selectedService===s},attrs:{href:t.selectServices&&"#"},on:{click:function(e){return e.preventDefault(),t.setSelectedService(s)}}},[i("span",{staticClass:"ec-shipping__option"},[i("ec-shipping-line",{attrs:{shippingLine:e.shipping_line,lang:t.lang}}),i("small",[t._v(t._s(e.label))])],1)])})),1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit"}},[e("i",{staticClass:"fas fa-shipping-fast"})])])}],!1,null,null,null);e.a=y.exports},276:function(t,e,i){"use strict";var s=i(260);i.n(s).a},281:function(t,e,i){"use strict";var s=i(261);i.n(s).a},283:function(t,e,i){},308:function(t,e,i){"use strict";i(12),i(21),i(29),i(145),i(8);var s=i(55),n=i(14),a=i(146),o=i(231),r=i(353);function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={name:"EcDiscount",props:{amount:Object,couponCode:String,hasCouponInput:{type:Boolean,default:!0},isFormAlwaysVisible:Boolean,isCouponApplied:Boolean,isAttentionWanted:Boolean},data(){return{alertText:null,alertVariant:null,isFormVisible:this.isFormAlwaysVisible||this.couponCode,isLoading:!1,localCouponCode:this.couponCode}},computed:{i19add:()=>Object(s.a)(r.d),i19addDiscountCoupon:()=>Object(s.a)(r.e),i19code:()=>Object(s.a)(r.h),i19couponAppliedMsg:()=>"Cupom de desconto aplicado com sucesso.",i19discountCoupon:()=>Object(s.a)(r.o),i19hasCouponOrVoucherQn:()=>Object(s.a)(r.t),i19invalidCouponMsg:()=>"O cupom de desconto inserido é inválido.",i19campaignAppliedMsg:()=>"Campanha de desconto aplicada com sucesso.",canAddCoupon(){return!this.couponCode||!this.isCouponApplied||this.couponCode!==this.localCouponCode}},methods:{parseDiscountOptions(t=[]){if(t.length){let e,i,s;t.forEach(t=>{const n=t.validated,a=t.error,o=t.response;if(n&&!a){const n=o.discount_rule;if(n){const s=n.extra_discount.value;i>s||(i=s,e=p({app_id:t.app_id},n))}else o.invalid_coupon_message&&(s=o.invalid_coupon_message)}}),i?(this.localCouponCode?(this.$emit("update:couponCode",this.localCouponCode),this.alertText=this.i19couponAppliedMsg):this.alertText=this.i19campaignAppliedMsg,this.$emit("setDiscountRule",e),this.alertVariant="info"):(this.localCouponCode&&(this.alertText=s||this.i19invalidCouponMsg,this.alertVariant="warning"),this.$emit("setDiscountRule",{}))}},fetchDiscountOptions(t){this.isLoading=!0,Object(n.b)({url:"/apply_discount.json",method:"POST",data:t}).then(({data:t})=>this.parseDiscountOptions(t.result)).catch(t=>{this.alertText=null,console.error(t),this.$bvToast.toast(this.i19discountCoupon,{title:Object(s.a)(r.r),variant:"warning",solid:!0})}).finally(()=>{this.isLoading=!1})},submitCoupon(){if(this.canAddCoupon){const t=this.amount,e=p({discount_coupon:this.localCouponCode,amount:t},o.a);if(a.a.checkLogin()){const t=a.a.getCustomer();e.customer={_id:t._id},t.display_name&&(e.customer.display_name=t.display_name)}this.fetchDiscountOptions(e)}}},watch:{couponCode(t){t!==this.couponCode&&(this.localCouponCode=t,t&&!this.isFormVisible&&(this.isFormVisible=!0))},isFormAlwaysVisible(t){t&&(this.isFormVisible=!0)},isFormVisible(t){t&&this.$nextTick(()=>{this.$refs.input.focus()})}},created(){const t=o.a.utm;this.couponCode&&!this.isCouponApplied?this.submitCoupon():t&&Object.keys(t).length&&this.amount&&this.fetchDiscountOptions(p({amount:this.amount},o.a))}},d=(i(321),i(90)),m=Object(d.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ec-discount"},[t.hasCouponInput?[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[t.isFormVisible?i("form",{key:"form",staticClass:"ec-discount__form",on:{submit:function(e){return e.preventDefault(),t.submitCoupon(e)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"ec-discount-coupon"}},[t._v(" "+t._s(t.i19discountCoupon)+" ")]),i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.localCouponCode,expression:"localCouponCode"}],ref:"input",staticClass:"form-control ec-discount__input",attrs:{type:"text",id:"ec-discount-coupon",required:"",readonly:t.isLoading,placeholder:t.i19code,"aria-label":t.i19code},domProps:{value:t.localCouponCode},on:{input:function(e){e.target.composing||(t.localCouponCode=e.target.value)}}}),i("div",{staticClass:"input-group-append"},[t.isLoading?i("span",{staticClass:"input-group-text"},[i("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}}),i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t.canAddCoupon?i("button",{key:"add",staticClass:"btn btn-outline-secondary",attrs:{type:"submit"}},[t._v(" "+t._s(t.i19add)+" ")]):i("button",{key:"applied",staticClass:"btn btn-outline-success",attrs:{disabled:"",type:"button"}},[i("i",{staticClass:"fas fa-check-circle"})])])])])]):i("div",{key:"button"},[t.isAttentionWanted?i("h6",{staticClass:"ec-discount__intro"},[t._v(" "+t._s(t.i19hasCouponOrVoucherQn)+" ")]):t._e(),i("button",{staticClass:"ec-discount__coupon-btn btn btn-sm",class:"btn-"+(t.isAttentionWanted?"secondary":"light"),attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.isFormVisible=!t.isFormVisible}}},[i("i",{staticClass:"fas fa-tag mr-1"}),t._v(" "+t._s(t.i19addDiscountCoupon)+" ")])])])]:t._e(),i("b-alert",{staticClass:"ec-discount__alert",attrs:{variant:t.alertVariant,dismissible:"",fade:"",show:!t.isLoading&&t.alertText},on:{dismissed:function(e){t.alertText=null}}},[t._v(" "+t._s(t.alertText)+" ")])],2)}),[],!1,null,null,null);e.a=m.exports},321:function(t,e,i){"use strict";var s=i(283);i.n(s).a}}]);
//# sourceMappingURL=da3055c92023aaf921a3.js.map