webpackJsonp([1],{"+EkP":function(e,t,n){var s=n("VU/8")(n("3PS0"),n("3rCu"),!1,null,null,null);e.exports=s.exports},"3PS0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"eventList",components:{EventItem:function(){return n.e(3).then(n.bind(null,"iejg"))}},data:function(){return{events:[]}},props:{userId:Number,eventsList:Array,feed:{type:Boolean,default:!1}},methods:{loadEvents:function(){var e=this;this.feed?url="/api/feed/events":this.userId?url="/api/user/"+this.userId+"/events":url="/api/user/events",axios.get(url).then(function(t){t.data&&Array.isArray(t.data)&&(e.events=t.data)})}},mounted:function(){this.loadEvents()}}},"3rCu":function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"events-list"},this._l(this.events,function(e){return t("event-item",{key:e.id,attrs:{"event-data":e}})}))},staticRenderFns:[]}}});
//# sourceMappingURL=1.js.map