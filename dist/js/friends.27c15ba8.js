"use strict";(self["webpackChunkhomework_pinia_1"]=self["webpackChunkhomework_pinia_1"]||[]).push([[267],{6604:function(e,n,t){t.d(n,{k:function(){return i},t:function(){return s}});const s=[{id:1,name:{ua:"Баба Галя",en:"Baba Galya"}},{id:2,name:{ua:"Дід Петро",en:"Did Petro"}},{id:3,name:{ua:"Онука Оленка",en:"Onuka Olena"}}],i=[{id:1,name:{ua:"Торт",en:"Cake"}},{id:2,name:{ua:"Листівка",en:"Postcard"}},{id:3,name:{ua:"Шовдарь",en:"Шовдарь він і в англії Шовдарь)"}}]},5897:function(e,n,t){t.d(n,{$:function(){return d}});t(560);var s=t(2578),i=t(2707),a=t(3384);const d=(0,s.Q_)("assignments",{state:()=>({assignmentsList:[]}),getters:{doubleCount:e=>2*e.count,getFilledAssignmentsList:e=>{const n=(0,i.C)(),t=(0,a.d)();return e.assignmentsList.map((e=>{const s=n.friends.find((n=>n.id==e.friendId)),i=t.presents.find((n=>n.id==e.presentId));return{id:e.id,friendName:s?s.name:"Friend not found",presentName:i?i.name:"Friend not found"}}))}},actions:{addItem(e){this.assignmentsList.push({id:(new Date).getTime(),...e})}}})},2707:function(e,n,t){t.d(n,{C:function(){return d}});var s=t(2578),i=t(7155),a=t(6604);const d=(0,s.Q_)("friends",{...(0,i.H)("friends",a.t)})},7155:function(e,n,t){t.d(n,{H:function(){return i}});t(560);var s=t(5897);function i(e,n){return{state:()=>({[e]:[],[n]:[]}),getters:{getItemById:n=>t=>n[e].find((e=>e.id==t))},actions:{setItemsList(){this[e]=n,console.log(n)},addItem(n){this[e].push({id:(new Date).getTime(),...n})},deleteItem(n,t){this[e].splice(n,1);const i=(0,s.$)();"friends"===e?(i.assignmentsList=i.assignmentsList.filter((e=>e.friendId!==t)),console.log(e),console.log(t),console.log(i.assignmentsList)):"presents"===e&&(i.assignmentsList=i.assignmentsList.filter((e=>e.presentId!==t)))}}}}},3384:function(e,n,t){t.d(n,{d:function(){return d}});var s=t(2578),i=t(7155),a=t(6604);const d=(0,s.Q_)("presents",{...(0,i.H)("presents",a.k)})},9785:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var s=t(3396),i=t(7139);const a={class:"friends"},d={class:"friends__container container"},r={class:"friends__title small-title"},l={class:"friends__list list"},o={class:"friends__item item"},u={class:"friends__name item__name"},m={class:"friend__add add"},c={class:"add-items"},f={class:"add-item"},_={class:"add-item"},g={key:0,class:"err-msg"};function w(e,n,t,w,h,p){const v=(0,s.up)("v-btn"),k=(0,s.up)("v-text-field");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",d,[(0,s._)("h3",r,(0,i.zw)(e.$t("titles.friendsTitle")),1),(0,s._)("ol",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.friends,((n,t)=>((0,s.wg)(),(0,s.iD)("li",{key:n.id},[(0,s._)("div",o,[(0,s._)("h6",u,(0,i.zw)(p.nameLang(n)),1),(0,s.Wm)(v,{elevation:"2",onClick:s=>e.deleteItem(t,n.id)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("buttonActions.buttonDelete")),1)])),_:2},1032,["onClick"])])])))),128))]),(0,s._)("div",m,[(0,s._)("div",c,[(0,s._)("div",f,[(0,s._)("label",null,[(0,s.Wm)(k,{modelValue:h.newFriend.name.ua,"onUpdate:modelValue":n[0]||(n[0]=e=>h.newFriend.name.ua=e),label:e.$t("labelsInput.newFriendUA"),rules:e.rules,"hide-details":"auto",type:"text"},null,8,["modelValue","label","rules"])])]),(0,s._)("div",_,[(0,s._)("label",null,[(0,s.Wm)(k,{modelValue:h.newFriend.name.en,"onUpdate:modelValue":n[1]||(n[1]=e=>h.newFriend.name.en=e),label:e.$t("labelsInput.newFriendEN"),rules:e.rules,"hide-details":"auto",type:"text"},null,8,["modelValue","label","rules"])])])]),(0,s.Wm)(v,{elevation:"8",onClick:p.onAdd},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("buttonActions.buttonAdd")),1)])),_:1},8,["onClick"]),h.errorMessage?((0,s.wg)(),(0,s.iD)("div",g,(0,i.zw)(e.$t("errors.invalidAddError")),1)):(0,s.kq)("",!0)])])])}var h=t(2578),p=t(2707),v={name:"FriendsView",data(){return{newFriend:{name:{ua:"",en:""}},errorMessage:!1}},computed:{...(0,h.rn)(p.C,["friends"]),nameLang(){return e=>"ua"===this.$i18n.locale?e.name.ua:e.name.en}},created(){this.setItemsList()},methods:{...(0,h.nv)(p.C,["setItemsList","deleteItem","addItem"]),onAdd(){this.newFriend.name.ua&&this.newFriend.name.en?(this.addItem(this.newFriend),this.newFriend.name={ua:"",en:""},this.errorMessage=!1):this.errorMessage=!0}}},k=t(89);const I=(0,k.Z)(v,[["render",w]]);var b=I}}]);
//# sourceMappingURL=friends.27c15ba8.js.map