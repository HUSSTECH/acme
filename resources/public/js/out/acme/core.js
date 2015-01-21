// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('acme.core')) {
goog.provide('acme.core');
}
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
acme.core.fetch_widgets = (function fetch_widgets(url){
var c = cljs.core.async.chan.call(null);
var c__6633__auto___10703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___10703,c){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___10703,c){
return (function (state_10689){
var state_val_10690 = (state_10689[(1)]);
if((state_val_10690 === (6))){
var inst_10687 = (state_10689[(2)]);
var state_10689__$1 = state_10689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10689__$1,inst_10687);
} else {
if((state_val_10690 === (5))){
var inst_10683 = (state_10689[(2)]);
var inst_10684 = cljs.core.get.call(null,inst_10683,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_10685 = cljs.core.vec.call(null,inst_10684);
var state_10689__$1 = state_10689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10689__$1,(6),c,inst_10685);
} else {
if((state_val_10690 === (4))){
var inst_10677 = (state_10689[(7)]);
var state_10689__$1 = state_10689;
var statearr_10691_10704 = state_10689__$1;
(statearr_10691_10704[(2)] = inst_10677);

(statearr_10691_10704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10690 === (3))){
var inst_10677 = (state_10689[(7)]);
var inst_10680 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10677);
var state_10689__$1 = state_10689;
var statearr_10692_10705 = state_10689__$1;
(statearr_10692_10705[(2)] = inst_10680);

(statearr_10692_10705[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10690 === (2))){
var inst_10677 = (state_10689[(7)]);
var inst_10677__$1 = (state_10689[(2)]);
var inst_10678 = cljs.core.seq_QMARK_.call(null,inst_10677__$1);
var state_10689__$1 = (function (){var statearr_10693 = state_10689;
(statearr_10693[(7)] = inst_10677__$1);

return statearr_10693;
})();
if(inst_10678){
var statearr_10694_10706 = state_10689__$1;
(statearr_10694_10706[(1)] = (3));

} else {
var statearr_10695_10707 = state_10689__$1;
(statearr_10695_10707[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10690 === (1))){
var inst_10675 = cljs_http.client.get.call(null,url);
var state_10689__$1 = state_10689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10689__$1,(2),inst_10675);
} else {
return null;
}
}
}
}
}
}
});})(c__6633__auto___10703,c))
;
return ((function (switch__6577__auto__,c__6633__auto___10703,c){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_10699 = [null,null,null,null,null,null,null,null];
(statearr_10699[(0)] = state_machine__6578__auto__);

(statearr_10699[(1)] = (1));

return statearr_10699;
});
var state_machine__6578__auto____1 = (function (state_10689){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_10689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e10700){if((e10700 instanceof Object)){
var ex__6581__auto__ = e10700;
var statearr_10701_10708 = state_10689;
(statearr_10701_10708[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10709 = state_10689;
state_10689 = G__10709;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_10689){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_10689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___10703,c))
})();
var state__6635__auto__ = (function (){var statearr_10702 = f__6634__auto__.call(null);
(statearr_10702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___10703);

return statearr_10702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___10703,c))
);


return c;
});
acme.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
acme.core.widget = (function widget(p__10710,owner,opts){
var map__10715 = p__10710;
var map__10715__$1 = ((cljs.core.seq_QMARK_.call(null,map__10715))?cljs.core.apply.call(null,cljs.core.hash_map,map__10715):map__10715);
var name = cljs.core.get.call(null,map__10715__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(typeof acme.core.t10716 !== 'undefined'){
} else {

/**
* @constructor
*/
acme.core.t10716 = (function (name,map__10715,opts,owner,p__10710,widget,meta10717){
this.name = name;
this.map__10715 = map__10715;
this.opts = opts;
this.owner = owner;
this.p__10710 = p__10710;
this.widget = widget;
this.meta10717 = meta10717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t10716.prototype.om$core$IRender$ = true;

acme.core.t10716.prototype.om$core$IRender$render$arity$1 = ((function (map__10715,map__10715__$1,name){
return (function (this__10458__auto__){
var self__ = this;
var this__10458__auto____$1 = this;
return React.DOM.li(null,self__.name);
});})(map__10715,map__10715__$1,name))
;

acme.core.t10716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10715,map__10715__$1,name){
return (function (_10718){
var self__ = this;
var _10718__$1 = this;
return self__.meta10717;
});})(map__10715,map__10715__$1,name))
;

acme.core.t10716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10715,map__10715__$1,name){
return (function (_10718,meta10717__$1){
var self__ = this;
var _10718__$1 = this;
return (new acme.core.t10716(self__.name,self__.map__10715,self__.opts,self__.owner,self__.p__10710,self__.widget,meta10717__$1));
});})(map__10715,map__10715__$1,name))
;

acme.core.t10716.cljs$lang$type = true;

acme.core.t10716.cljs$lang$ctorStr = "acme.core/t10716";

acme.core.t10716.cljs$lang$ctorPrWriter = ((function (map__10715,map__10715__$1,name){
return (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"acme.core/t10716");
});})(map__10715,map__10715__$1,name))
;

acme.core.__GT_t10716 = ((function (map__10715,map__10715__$1,name){
return (function __GT_t10716(name__$1,map__10715__$2,opts__$1,owner__$1,p__10710__$1,widget__$1,meta10717){
return (new acme.core.t10716(name__$1,map__10715__$2,opts__$1,owner__$1,p__10710__$1,widget__$1,meta10717));
});})(map__10715,map__10715__$1,name))
;

}

return (new acme.core.t10716(name,map__10715__$1,opts,owner,p__10710,widget,null));
});
acme.core.widget_list = (function widget_list(p__10719){
var map__10724 = p__10719;
var map__10724__$1 = ((cljs.core.seq_QMARK_.call(null,map__10724))?cljs.core.apply.call(null,cljs.core.hash_map,map__10724):map__10724);
var widgets = cljs.core.get.call(null,map__10724__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));
if(typeof acme.core.t10725 !== 'undefined'){
} else {

/**
* @constructor
*/
acme.core.t10725 = (function (widgets,map__10724,p__10719,widget_list,meta10726){
this.widgets = widgets;
this.map__10724 = map__10724;
this.p__10719 = p__10719;
this.widget_list = widget_list;
this.meta10726 = meta10726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t10725.prototype.om$core$IRender$ = true;

acme.core.t10725.prototype.om$core$IRender$render$arity$1 = ((function (map__10724,map__10724__$1,widgets){
return (function (this__10458__auto__){
var self__ = this;
var this__10458__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,acme.core.widget,self__.widgets));
});})(map__10724,map__10724__$1,widgets))
;

acme.core.t10725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10724,map__10724__$1,widgets){
return (function (_10727){
var self__ = this;
var _10727__$1 = this;
return self__.meta10726;
});})(map__10724,map__10724__$1,widgets))
;

acme.core.t10725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10724,map__10724__$1,widgets){
return (function (_10727,meta10726__$1){
var self__ = this;
var _10727__$1 = this;
return (new acme.core.t10725(self__.widgets,self__.map__10724,self__.p__10719,self__.widget_list,meta10726__$1));
});})(map__10724,map__10724__$1,widgets))
;

acme.core.t10725.cljs$lang$type = true;

acme.core.t10725.cljs$lang$ctorStr = "acme.core/t10725";

acme.core.t10725.cljs$lang$ctorPrWriter = ((function (map__10724,map__10724__$1,widgets){
return (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"acme.core/t10725");
});})(map__10724,map__10724__$1,widgets))
;

acme.core.__GT_t10725 = ((function (map__10724,map__10724__$1,widgets){
return (function __GT_t10725(widgets__$1,map__10724__$2,p__10719__$1,widget_list__$1,meta10726){
return (new acme.core.t10725(widgets__$1,map__10724__$2,p__10719__$1,widget_list__$1,meta10726));
});})(map__10724,map__10724__$1,widgets))
;

}

return (new acme.core.t10725(widgets,map__10724__$1,p__10719,widget_list,null));
});
acme.core.widget_box = (function widget_box(app,owner,opts){
if(typeof acme.core.t10771 !== 'undefined'){
} else {

/**
* @constructor
*/
acme.core.t10771 = (function (opts,owner,app,widget_box,meta10772){
this.opts = opts;
this.owner = owner;
this.app = app;
this.widget_box = widget_box;
this.meta10772 = meta10772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t10771.prototype.om$core$IRender$ = true;

acme.core.t10771.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
React.DOM.h1(null,"Widgets");

return om.core.build.call(null,acme.core.widget_list,self__.app);
});

acme.core.t10771.prototype.om$core$IWillMount$ = true;

acme.core.t10771.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
om.core.transact_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",-159098978)], null),((function (___$1){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(___$1))
);

var c__6633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto__,___$1){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto__,___$1){
return (function (state_10797){
var state_val_10798 = (state_10797[(1)]);
if((state_val_10798 === (8))){
var inst_10789 = (state_10797[(2)]);
var state_10797__$1 = (function (){var statearr_10799 = state_10797;
(statearr_10799[(7)] = inst_10789);

return statearr_10799;
})();
var statearr_10800_10814 = state_10797__$1;
(statearr_10800_10814[(2)] = null);

(statearr_10800_10814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10798 === (7))){
var inst_10779 = (state_10797[(2)]);
var inst_10780 = cljs.core.pr_str.call(null,inst_10779);
var inst_10781 = console.log(inst_10780);
var inst_10782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10783 = [new cljs.core.Keyword(null,"widgets","widgets",-159098978)];
var inst_10784 = (new cljs.core.PersistentVector(null,1,(5),inst_10782,inst_10783,null));
var inst_10785 = om.core.update_BANG_.call(null,self__.app,inst_10784,inst_10779);
var inst_10786 = new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570).cljs$core$IFn$_invoke$arity$1(self__.opts);
var inst_10787 = cljs.core.async.timeout.call(null,inst_10786);
var state_10797__$1 = (function (){var statearr_10801 = state_10797;
(statearr_10801[(8)] = inst_10781);

(statearr_10801[(9)] = inst_10785);

return statearr_10801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10797__$1,(8),inst_10787);
} else {
if((state_val_10798 === (6))){
var inst_10793 = (state_10797[(2)]);
var state_10797__$1 = state_10797;
var statearr_10802_10815 = state_10797__$1;
(statearr_10802_10815[(2)] = inst_10793);

(statearr_10802_10815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10798 === (5))){
var state_10797__$1 = state_10797;
var statearr_10803_10816 = state_10797__$1;
(statearr_10803_10816[(2)] = null);

(statearr_10803_10816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10798 === (4))){
var inst_10776 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.opts);
var inst_10777 = acme.core.fetch_widgets.call(null,inst_10776);
var state_10797__$1 = state_10797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10797__$1,(7),inst_10777);
} else {
if((state_val_10798 === (3))){
var inst_10795 = (state_10797[(2)]);
var state_10797__$1 = state_10797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10797__$1,inst_10795);
} else {
if((state_val_10798 === (2))){
var state_10797__$1 = state_10797;
var statearr_10804_10817 = state_10797__$1;
(statearr_10804_10817[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10798 === (1))){
var state_10797__$1 = state_10797;
var statearr_10806_10818 = state_10797__$1;
(statearr_10806_10818[(2)] = null);

(statearr_10806_10818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__6633__auto__,___$1))
;
return ((function (switch__6577__auto__,c__6633__auto__,___$1){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_10810 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10810[(0)] = state_machine__6578__auto__);

(statearr_10810[(1)] = (1));

return statearr_10810;
});
var state_machine__6578__auto____1 = (function (state_10797){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_10797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e10811){if((e10811 instanceof Object)){
var ex__6581__auto__ = e10811;
var statearr_10812_10819 = state_10797;
(statearr_10812_10819[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10820 = state_10797;
state_10797 = G__10820;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_10797){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_10797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto__,___$1))
})();
var state__6635__auto__ = (function (){var statearr_10813 = f__6634__auto__.call(null);
(statearr_10813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto__);

return statearr_10813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto__,___$1))
);

return c__6633__auto__;
});

acme.core.t10771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10773){
var self__ = this;
var _10773__$1 = this;
return self__.meta10772;
});

acme.core.t10771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10773,meta10772__$1){
var self__ = this;
var _10773__$1 = this;
return (new acme.core.t10771(self__.opts,self__.owner,self__.app,self__.widget_box,meta10772__$1));
});

acme.core.t10771.cljs$lang$type = true;

acme.core.t10771.cljs$lang$ctorStr = "acme.core/t10771";

acme.core.t10771.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"acme.core/t10771");
});

acme.core.__GT_t10771 = (function __GT_t10771(opts__$1,owner__$1,app__$1,widget_box__$1,meta10772){
return (new acme.core.t10771(opts__$1,owner__$1,app__$1,widget_box__$1,meta10772));
});

}

return (new acme.core.t10771(opts,owner,app,widget_box,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),41,new cljs.core.Keyword(null,"end-line","end-line",1837326455),44,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),32,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Users\\Hussam\\Dev\\acme\\src\\cljs\\acme\\core.cljs"], null)));
});
acme.core.om_app = (function om_app(app,owner){
if(typeof acme.core.t10824 !== 'undefined'){
} else {

/**
* @constructor
*/
acme.core.t10824 = (function (owner,app,om_app,meta10825){
this.owner = owner;
this.app = app;
this.om_app = om_app;
this.meta10825 = meta10825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t10824.prototype.om$core$IRender$ = true;

acme.core.t10824.prototype.om$core$IRender$render$arity$1 = (function (this__10458__auto__){
var self__ = this;
var this__10458__auto____$1 = this;
return React.DOM.div(null,om.core.build.call(null,acme.core.widget_box,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/widgets",new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570),(2000)], null)], null)));
});

acme.core.t10824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10826){
var self__ = this;
var _10826__$1 = this;
return self__.meta10825;
});

acme.core.t10824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10826,meta10825__$1){
var self__ = this;
var _10826__$1 = this;
return (new acme.core.t10824(self__.owner,self__.app,self__.om_app,meta10825__$1));
});

acme.core.t10824.cljs$lang$type = true;

acme.core.t10824.cljs$lang$ctorStr = "acme.core/t10824";

acme.core.t10824.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"acme.core/t10824");
});

acme.core.__GT_t10824 = (function __GT_t10824(owner__$1,app__$1,om_app__$1,meta10825){
return (new acme.core.t10824(owner__$1,app__$1,om_app__$1,meta10825));
});

}

return (new acme.core.t10824(owner,app,om_app,null));
});
om.core.root.call(null,acme.core.om_app,acme.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));

//# sourceMappingURL=core.js.map