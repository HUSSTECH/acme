// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('om.core')) {
goog.provide('om.core');
}
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj20602 = {};
return obj20602;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core.display_name[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core.display_name["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj20604 = {};
return obj20604;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core.init_state[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core.init_state["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj20606 = {};
return obj20606;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core.should_update[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core.should_update["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj20608 = {};
return obj20608;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core.will_mount[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core.will_mount["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj20610 = {};
return obj20610;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core.did_mount[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core.did_mount["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj20612 = {};
return obj20612;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core.will_unmount[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core.will_unmount["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj20614 = {};
return obj20614;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core.will_update[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core.will_update["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj20616 = {};
return obj20616;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core.did_update[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core.did_update["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj20618 = {};
return obj20618;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core.will_receive_props[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core.will_receive_props["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj20620 = {};
return obj20620;
})();

om.core.render = (function render(this$){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core.render[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core.render["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj20622 = {};
return obj20622;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core.render_props[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core.render_props["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj20624 = {};
return obj20624;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core.render_state[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core.render_state["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj20626 = {};
return obj20626;
})();


om.core.IOmSwap = (function (){var obj20628 = {};
return obj20628;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj20630 = {};
return obj20630;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._get_state[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._get_state["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._get_state[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._get_state["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj20632 = {};
return obj20632;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._get_render_state[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._get_render_state["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._get_render_state[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._get_render_state["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj20634 = {};
return obj20634;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj20636 = {};
return obj20636;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._get_queue[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._get_queue["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj20638 = {};
return obj20638;
})();

om.core._value = (function _value(x){
if((function (){var and__3734__auto__ = x;
if(and__3734__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__3734__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4390__auto__ = (((x == null))?null:x);
return (function (){var or__3746__auto__ = (om.core._value[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._value["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj20640 = {};
return obj20640;
})();

om.core._path = (function _path(cursor){
if((function (){var and__3734__auto__ = cursor;
if(and__3734__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__3734__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4390__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3746__auto__ = (om.core._path[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._path["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__3734__auto__ = cursor;
if(and__3734__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__3734__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4390__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3746__auto__ = (om.core._state[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._state["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj20642 = {};
return obj20642;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__3734__auto__ = value;
if(and__3734__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__3734__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4390__auto__ = (((value == null))?null:value);
return (function (){var or__3746__auto__ = (om.core._to_cursor[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._to_cursor["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__3734__auto__ = value;
if(and__3734__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__3734__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4390__auto__ = (((value == null))?null:value);
return (function (){var or__3746__auto__ = (om.core._to_cursor[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._to_cursor["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj20644 = {};
return obj20644;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__3734__auto__ = cursor;
if(and__3734__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__3734__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4390__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3746__auto__ = (om.core._derive[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._derive["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj20646 = {};
return obj20646;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__3734__auto__ = cursor;
if(and__3734__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__3734__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4390__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3746__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj20648 = {};
return obj20648;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__3734__auto__ = x;
if(and__3734__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__3734__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4390__auto__ = (((x == null))?null:x);
return (function (){var or__3746__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__3734__auto__ = x;
if(and__3734__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__3734__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4390__auto__ = (((x == null))?null:x);
return (function (){var or__3746__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__3734__auto__ = x;
if(and__3734__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__3734__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4390__auto__ = (((x == null))?null:x);
return (function (){var or__3746__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj20650 = {};
return obj20650;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._get_property[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._get_property["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj20652 = {};
return obj20652;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__3734__auto__ = cursor;
if(and__3734__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__3734__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4390__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3746__auto__ = (om.core._root_key[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._root_key["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj20654 = {};
return obj20654;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._adapt[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._adapt["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj20656 = {};
return obj20656;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__3734__auto__ = this$;
if(and__3734__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__3734__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3746__auto__ = (om.core._get_deps[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (om.core._get_deps["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__20658 = state;
if(G__20658){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20658.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__20658.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__20658);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__20658);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__20660 = x;
if(G__20660){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20660.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__20660.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__20660);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__20660);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__20662 = state;
(G__20662["__om_prev_state"] = (state["__om_state"]));

(G__20662["__om_state"] = pending_state);

(G__20662["__om_pending_state"] = null);

return G__20662;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__3746__auto__ = props;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__3746__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__20664 = c;
if(G__20664){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20664.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__20664.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__20664);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__20664);
}
})()){
var state_20685 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__3746__auto__ = (state_20685["__om_prev_state"]);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return (state_20685["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__20665 = c;
if(G__20665){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20665.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__20665.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__20665);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__20665);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__20666 = cljs.core.seq.call(null,refs);
var chunk__20667 = null;
var count__20668 = (0);
var i__20669 = (0);
while(true){
if((i__20669 < count__20668)){
var ref = cljs.core._nth.call(null,chunk__20667,i__20669);
om.core.unobserve.call(null,this$,ref);

var G__20686 = seq__20666;
var G__20687 = chunk__20667;
var G__20688 = count__20668;
var G__20689 = (i__20669 + (1));
seq__20666 = G__20686;
chunk__20667 = G__20687;
count__20668 = G__20688;
i__20669 = G__20689;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__20666);
if(temp__4126__auto____$1){
var seq__20666__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20666__$1)){
var c__4533__auto__ = cljs.core.chunk_first.call(null,seq__20666__$1);
var G__20690 = cljs.core.chunk_rest.call(null,seq__20666__$1);
var G__20691 = c__4533__auto__;
var G__20692 = cljs.core.count.call(null,c__4533__auto__);
var G__20693 = (0);
seq__20666 = G__20690;
chunk__20667 = G__20691;
count__20668 = G__20692;
i__20669 = G__20693;
continue;
} else {
var ref = cljs.core.first.call(null,seq__20666__$1);
om.core.unobserve.call(null,this$,ref);

var G__20694 = cljs.core.next.call(null,seq__20666__$1);
var G__20695 = null;
var G__20696 = (0);
var G__20697 = (0);
seq__20666 = G__20694;
chunk__20667 = G__20695;
count__20668 = G__20696;
i__20669 = G__20697;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__20670 = c;
if(G__20670){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20670.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__20670.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__20670);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__20670);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__20671 = c;
if(G__20671){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20671.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__20671.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__20671);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__20671);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__3734__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__3734__auto__){
return cljs.core.some.call(null,((function (and__3734__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__20663_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__20663_SHARP_);
});})(and__3734__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__3734__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_20672 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_20673 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_20674 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_20675 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_20676 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

if((function (){var G__20677 = c;
if(G__20677){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20677.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__20677.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__20677);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__20677);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__20678 = c;
if(G__20678){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20678.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__20678.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__20678);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__20678);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__20679 = c;
if(G__20679){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20679.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__20679.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__20679);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__20679);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_20676;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_20675;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_20674;

om.core._STAR_state_STAR_ = _STAR_state_STAR_20673;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_20672;
}}),(function (next_props,next_state){
var this$ = this;
var c_20698 = om.core.children.call(null,this$);
if((function (){var G__20680 = c_20698;
if(G__20680){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20680.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__20680.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__20680);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__20680);
}
})()){
var state_20699 = this$.state;
om.core.will_update.call(null,c_20698,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__3746__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__20681 = c;
if(G__20681){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20681.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__20681.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__20681);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__20681);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__3746__auto__ = id;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__20682 = c;
if(G__20682){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20682.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__20682.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__20682);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__20682);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__20683 = c;
if(G__20683){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20683.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__20683.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__20683);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__20683);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_20700 = om.core.children.call(null,this$);
if((function (){var G__20684 = c_20700;
if(G__20684){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20684.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__20684.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__20684);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__20684);
}
})()){
om.core.will_mount.call(null,c_20700);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x20702 = obj;
x20702.om$core$IGetState$ = true;

x20702.om$core$IGetState$_get_state$arity$1 = ((function (x20702){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3746__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return (state["__om_state"]);
}
});})(x20702))
;

x20702.om$core$IGetState$_get_state$arity$2 = ((function (x20702){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x20702))
;

x20702.om$core$IGetRenderState$ = true;

x20702.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x20702){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x20702))
;

x20702.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x20702){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x20702))
;

x20702.om$core$ISetState$ = true;

x20702.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x20702){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__3734__auto__ = !((app_state == null));
if(and__3734__auto__){
return render;
} else {
return and__3734__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x20702))
;

x20702.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x20702){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__3734__auto__ = !((app_state == null));
if(and__3734__auto__){
return render;
} else {
return and__3734__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x20702))
;

return x20702;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__3746__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__3746__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__20703 = c;
if(G__20703){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20703.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__20703.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__20703);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__20703);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_20712 = om.core.children.call(null,this$);
if((function (){var G__20704 = c_20712;
if(G__20704){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20704.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__20704.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__20704);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__20704);
}
})()){
om.core.will_mount.call(null,c_20712);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__20705 = c;
if(G__20705){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20705.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__20705.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__20705);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__20705);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.dissoc,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$));

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__20706 = cljs.core.seq.call(null,refs);
var chunk__20707 = null;
var count__20708 = (0);
var i__20709 = (0);
while(true){
if((i__20709 < count__20708)){
var ref = cljs.core._nth.call(null,chunk__20707,i__20709);
om.core.unobserve.call(null,this$,ref);

var G__20713 = seq__20706;
var G__20714 = chunk__20707;
var G__20715 = count__20708;
var G__20716 = (i__20709 + (1));
seq__20706 = G__20713;
chunk__20707 = G__20714;
count__20708 = G__20715;
i__20709 = G__20716;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__20706);
if(temp__4126__auto____$1){
var seq__20706__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20706__$1)){
var c__4533__auto__ = cljs.core.chunk_first.call(null,seq__20706__$1);
var G__20717 = cljs.core.chunk_rest.call(null,seq__20706__$1);
var G__20718 = c__4533__auto__;
var G__20719 = cljs.core.count.call(null,c__4533__auto__);
var G__20720 = (0);
seq__20706 = G__20717;
chunk__20707 = G__20718;
count__20708 = G__20719;
i__20709 = G__20720;
continue;
} else {
var ref = cljs.core.first.call(null,seq__20706__$1);
om.core.unobserve.call(null,this$,ref);

var G__20721 = cljs.core.next.call(null,seq__20706__$1);
var G__20722 = null;
var G__20723 = (0);
var G__20724 = (0);
seq__20706 = G__20721;
chunk__20707 = G__20722;
count__20708 = G__20723;
i__20709 = G__20724;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_20725 = this$.props;
var c_20726 = om.core.children.call(null,this$);
if((function (){var G__20710 = c_20726;
if(G__20710){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20710.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__20710.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__20710);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__20710);
}
})()){
var state_20727 = this$.state;
om.core.will_update.call(null,c_20726,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__20711 = c;
if(G__20711){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20711.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__20711.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__20711);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__20711);
}
})()){
var state_20728 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__3746__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x20730 = cljs.core.clj__GT_js.call(null,methods$);
x20730.om$core$IGetState$ = true;

x20730.om$core$IGetState$_get_state$arity$1 = ((function (x20730){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__3746__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x20730))
;

x20730.om$core$IGetState$_get_state$arity$2 = ((function (x20730){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x20730))
;

x20730.om$core$IGetRenderState$ = true;

x20730.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x20730){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x20730))
;

x20730.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x20730){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x20730))
;

x20730.om$core$ISetState$ = true;

x20730.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x20730){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__3734__auto__ = !((gstate == null));
if(and__3734__auto__){
return render;
} else {
return and__3734__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x20730))
;

x20730.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x20730){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x20730))
;

return x20730;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__20732 = x;
if(G__20732){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20732.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__20732.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__20732);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__20732);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__20734){
var vec__20735 = p__20734;
var k = cljs.core.nth.call(null,vec__20735,(0),null);
var v = cljs.core.nth.call(null,vec__20735,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__20736 = null;
var G__20736__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__20736__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__20736 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20736__2.call(this,self__,k);
case 3:
return G__20736__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20736.cljs$core$IFn$_invoke$arity$2 = G__20736__2;
G__20736.cljs$core$IFn$_invoke$arity$3 = G__20736__3;
return G__20736;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args20733){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20733)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__20738 = null;
var G__20738__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__20738__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__20738 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20738__2.call(this,self__,k);
case 3:
return G__20738__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20738.cljs$core$IFn$_invoke$arity$2 = G__20738__2;
G__20738.cljs$core$IFn$_invoke$arity$3 = G__20738__3;
return G__20738;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args20737){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20737)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x20740 = cljs.core.clone.call(null,val);
x20740.cljs$core$IEquiv$ = true;

x20740.cljs$core$IEquiv$_equiv$arity$2 = ((function (x20740){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x20740))
;

x20740.om$core$ITransact$ = true;

x20740.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x20740){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x20740))
;

x20740.om$core$ICursor$ = true;

x20740.om$core$ICursor$_path$arity$1 = ((function (x20740){
return (function (_){
var ___$1 = this;
return path;
});})(x20740))
;

x20740.om$core$ICursor$_state$arity$1 = ((function (x20740){
return (function (_){
var ___$1 = this;
return state;
});})(x20740))
;

x20740.cljs$core$IDeref$ = true;

x20740.cljs$core$IDeref$_deref$arity$1 = ((function (x20740){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x20740))
;

return x20740;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_.call(null,val)){
return val;
} else {
if((function (){var G__20743 = val;
if(G__20743){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20743.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__20743.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__20743);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__20743);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__20744 = val;
if(G__20744){
var bit__4427__auto__ = (G__20744.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4427__auto__) || (G__20744.cljs$core$ICloneable$)){
return true;
} else {
if((!G__20744.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__20744);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__20744);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__20746 = atom;
if(G__20746){
var bit__4427__auto__ = (G__20746.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4427__auto__) || (G__20746.cljs$core$IDeref$)){
return true;
} else {
if((!G__20746.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__20746);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__20746);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x20748 = cljs.core.clone.call(null,x);
x20748.om$core$ITransact$ = true;

x20748.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x20748){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x20748))
;

x20748.om$core$ICursorDerive$ = true;

x20748.om$core$ICursorDerive$_derive$arity$4 = ((function (x20748){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x20748))
;

x20748.om$core$IAdapt$ = true;

x20748.om$core$IAdapt$_adapt$arity$2 = ((function (x20748){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x20748))
;

x20748.cljs$core$ICloneable$ = true;

x20748.cljs$core$ICloneable$_clone$arity$1 = ((function (x20748){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x20748))
;

return x20748;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__20755 = cursor;
if(G__20755){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20755.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__20755.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__20755);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__20755);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x20756 = cljs.core.clone.call(null,cursor);
x20756.om$core$ITransact$ = true;

x20756.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x20756,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x20756,path,storage))
;

x20756.om$core$IOmRef$ = true;

x20756.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x20756,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x20756,path,storage))
;

x20756.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x20756,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x20756,path,storage))
;

x20756.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x20756,path,storage){
return (function (_){
var ___$1 = this;
var seq__20757 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__20758 = null;
var count__20759 = (0);
var i__20760 = (0);
while(true){
if((i__20760 < count__20759)){
var c = cljs.core._nth.call(null,chunk__20758,i__20760);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__20761 = seq__20757;
var G__20762 = chunk__20758;
var G__20763 = count__20759;
var G__20764 = (i__20760 + (1));
seq__20757 = G__20761;
chunk__20758 = G__20762;
count__20759 = G__20763;
i__20760 = G__20764;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20757);
if(temp__4126__auto__){
var seq__20757__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20757__$1)){
var c__4533__auto__ = cljs.core.chunk_first.call(null,seq__20757__$1);
var G__20765 = cljs.core.chunk_rest.call(null,seq__20757__$1);
var G__20766 = c__4533__auto__;
var G__20767 = cljs.core.count.call(null,c__4533__auto__);
var G__20768 = (0);
seq__20757 = G__20765;
chunk__20758 = G__20766;
count__20759 = G__20767;
i__20760 = G__20768;
continue;
} else {
var c = cljs.core.first.call(null,seq__20757__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__20769 = cljs.core.next.call(null,seq__20757__$1);
var G__20770 = null;
var G__20771 = (0);
var G__20772 = (0);
seq__20757 = G__20769;
chunk__20758 = G__20770;
count__20759 = G__20771;
i__20760 = G__20772;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20756,path,storage))
;

x20756.om$core$IOmRef$_get_deps$arity$1 = ((function (x20756,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x20756,path,storage))
;

x20756.om$core$ICursorDerive$ = true;

x20756.om$core$ICursorDerive$_derive$arity$4 = ((function (x20756,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x20756,path,storage))
;

return x20756;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__3746__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(om.core.cursor_QMARK_.call(null,ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){
var or__3746__auto__ = state.om$render$T;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.call(null,null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__20777_20781 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__20778_20782 = null;
var count__20779_20783 = (0);
var i__20780_20784 = (0);
while(true){
if((i__20780_20784 < count__20779_20783)){
var f_20785 = cljs.core._nth.call(null,chunk__20778_20782,i__20780_20784);
f_20785.call(null);

var G__20786 = seq__20777_20781;
var G__20787 = chunk__20778_20782;
var G__20788 = count__20779_20783;
var G__20789 = (i__20780_20784 + (1));
seq__20777_20781 = G__20786;
chunk__20778_20782 = G__20787;
count__20779_20783 = G__20788;
i__20780_20784 = G__20789;
continue;
} else {
var temp__4126__auto___20790 = cljs.core.seq.call(null,seq__20777_20781);
if(temp__4126__auto___20790){
var seq__20777_20791__$1 = temp__4126__auto___20790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20777_20791__$1)){
var c__4533__auto___20792 = cljs.core.chunk_first.call(null,seq__20777_20791__$1);
var G__20793 = cljs.core.chunk_rest.call(null,seq__20777_20791__$1);
var G__20794 = c__4533__auto___20792;
var G__20795 = cljs.core.count.call(null,c__4533__auto___20792);
var G__20796 = (0);
seq__20777_20781 = G__20793;
chunk__20778_20782 = G__20794;
count__20779_20783 = G__20795;
i__20780_20784 = G__20796;
continue;
} else {
var f_20797 = cljs.core.first.call(null,seq__20777_20791__$1);
f_20797.call(null);

var G__20798 = cljs.core.next.call(null,seq__20777_20791__$1);
var G__20799 = null;
var G__20800 = (0);
var G__20801 = (0);
seq__20777_20781 = G__20798;
chunk__20778_20782 = G__20799;
count__20779_20783 = G__20800;
i__20780_20784 = G__20801;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__3746__auto__ = (function (){var G__20808 = x;
if(G__20808){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20808.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__20808.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__20808);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__20808);
}
})();
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (function (){var G__20810 = x;
if(G__20810){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto____$1 = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto____$1)){
return or__3746__auto____$1;
} else {
return G__20810.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__20810.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__20810);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__20810);
}
})();
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
var G__20811 = x;
if(G__20811){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto____$2 = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto____$2)){
return or__3746__auto____$2;
} else {
return G__20811.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__20811.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__20811);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__20811);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__3746__auto__ = descriptor;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__3746__auto____$1)){
return or__3746__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(om.core.valid_opts_QMARK_.call(null,m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__20813 = m;
var map__20813__$1 = ((cljs.core.seq_QMARK_.call(null,map__20813))?cljs.core.apply.call(null,cljs.core.hash_map,map__20813):map__20813);
var opts = cljs.core.get.call(null,map__20813__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__20813__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__20813__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__20813__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__20813__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__3746__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__20813,map__20813__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__20813,map__20813__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__20813,map__20813__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__20813,map__20813__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__3746__auto__ = rkey;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){
return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__20822 = state;
if(G__20822){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20822.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__20822.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__20822);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__20822);
}
})()){
} else {
var properties_20830 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_20831 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_20832 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x20823_20833 = state;
x20823_20833.om$core$IRenderQueue$ = true;

x20823_20833.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x20823_20833,properties_20830,listeners_20831,render_queue_20832){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_20832);
});})(x20823_20833,properties_20830,listeners_20831,render_queue_20832))
;

x20823_20833.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x20823_20833,properties_20830,listeners_20831,render_queue_20832){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_20832),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_20832,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x20823_20833,properties_20830,listeners_20831,render_queue_20832))
;

x20823_20833.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x20823_20833,properties_20830,listeners_20831,render_queue_20832){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_20832,cljs.core.empty);
});})(x20823_20833,properties_20830,listeners_20831,render_queue_20832))
;

x20823_20833.om$core$INotify$ = true;

x20823_20833.om$core$INotify$_listen_BANG_$arity$3 = ((function (x20823_20833,properties_20830,listeners_20831,render_queue_20832){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_20831,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x20823_20833,properties_20830,listeners_20831,render_queue_20832))
;

x20823_20833.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x20823_20833,properties_20830,listeners_20831,render_queue_20832){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_20831,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x20823_20833,properties_20830,listeners_20831,render_queue_20832))
;

x20823_20833.om$core$INotify$_notify_BANG_$arity$3 = ((function (x20823_20833,properties_20830,listeners_20831,render_queue_20832){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__20824_20834 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_20831));
var chunk__20825_20835 = null;
var count__20826_20836 = (0);
var i__20827_20837 = (0);
while(true){
if((i__20827_20837 < count__20826_20836)){
var vec__20828_20838 = cljs.core._nth.call(null,chunk__20825_20835,i__20827_20837);
var __20839 = cljs.core.nth.call(null,vec__20828_20838,(0),null);
var f_20840 = cljs.core.nth.call(null,vec__20828_20838,(1),null);
f_20840.call(null,tx_data,root_cursor);

var G__20841 = seq__20824_20834;
var G__20842 = chunk__20825_20835;
var G__20843 = count__20826_20836;
var G__20844 = (i__20827_20837 + (1));
seq__20824_20834 = G__20841;
chunk__20825_20835 = G__20842;
count__20826_20836 = G__20843;
i__20827_20837 = G__20844;
continue;
} else {
var temp__4126__auto___20845 = cljs.core.seq.call(null,seq__20824_20834);
if(temp__4126__auto___20845){
var seq__20824_20846__$1 = temp__4126__auto___20845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20824_20846__$1)){
var c__4533__auto___20847 = cljs.core.chunk_first.call(null,seq__20824_20846__$1);
var G__20848 = cljs.core.chunk_rest.call(null,seq__20824_20846__$1);
var G__20849 = c__4533__auto___20847;
var G__20850 = cljs.core.count.call(null,c__4533__auto___20847);
var G__20851 = (0);
seq__20824_20834 = G__20848;
chunk__20825_20835 = G__20849;
count__20826_20836 = G__20850;
i__20827_20837 = G__20851;
continue;
} else {
var vec__20829_20852 = cljs.core.first.call(null,seq__20824_20846__$1);
var __20853 = cljs.core.nth.call(null,vec__20829_20852,(0),null);
var f_20854 = cljs.core.nth.call(null,vec__20829_20852,(1),null);
f_20854.call(null,tx_data,root_cursor);

var G__20855 = cljs.core.next.call(null,seq__20824_20846__$1);
var G__20856 = null;
var G__20857 = (0);
var G__20858 = (0);
seq__20824_20834 = G__20855;
chunk__20825_20835 = G__20856;
count__20826_20836 = G__20857;
i__20827_20837 = G__20858;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x20823_20833,properties_20830,listeners_20831,render_queue_20832))
;

x20823_20833.om$core$IRootProperties$ = true;

x20823_20833.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x20823_20833,properties_20830,listeners_20831,render_queue_20832){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_20830,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x20823_20833,properties_20830,listeners_20831,render_queue_20832))
;

x20823_20833.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x20823_20833,properties_20830,listeners_20831,render_queue_20832){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_20830,cljs.core.dissoc,id,k);
});})(x20823_20833,properties_20830,listeners_20831,render_queue_20832))
;

x20823_20833.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x20823_20833,properties_20830,listeners_20831,render_queue_20832){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_20830,cljs.core.dissoc,id);
});})(x20823_20833,properties_20830,listeners_20831,render_queue_20832))
;

x20823_20833.om$core$IRootProperties$_get_property$arity$3 = ((function (x20823_20833,properties_20830,listeners_20831,render_queue_20832){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_20830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x20823_20833,properties_20830,listeners_20831,render_queue_20832))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x20860 = cljs.core.clone.call(null,cursor);
x20860.om$core$IRootKey$ = true;

x20860.om$core$IRootKey$_root_key$arity$1 = ((function (x20860){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x20860))
;

x20860.om$core$IAdapt$ = true;

x20860.om$core$IAdapt$_adapt$arity$2 = ((function (x20860){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x20860))
;

x20860.cljs$core$ICloneable$ = true;

x20860.cljs$core$ICloneable$_clone$arity$1 = ((function (x20860){
return (function (this$){
var this$__$1 = this;
return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x20860))
;

return x20860;
} else {
return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__20861){
var map__20924 = p__20861;
var map__20924__$1 = ((cljs.core.seq_QMARK_.call(null,map__20924))?cljs.core.apply.call(null,cljs.core.hash_map,map__20924):map__20924);
var options = map__20924__$1;
var raf = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__20986 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__20986,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__20986,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__20925 = value;
if(G__20925){
var bit__4427__auto__ = (G__20925.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4427__auto__) || (G__20925.cljs$core$IAtom$)){
return true;
} else {
if((!G__20925.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__20925);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__20925);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__3746__auto__ = adapt;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__20924,map__20924__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_20987 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_20956 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_20957 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_20958 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_20959 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_20959;

om.core._STAR_state_STAR_ = _STAR_state_STAR_20958;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_20957;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_20956;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_20987);
} else {
}
}

var queue_20988 = om.core._get_queue.call(null,state__$1);
if(cljs.core.empty_QMARK_.call(null,queue_20988)){
} else {
var seq__20960_20989 = cljs.core.seq.call(null,queue_20988);
var chunk__20961_20990 = null;
var count__20962_20991 = (0);
var i__20963_20992 = (0);
while(true){
if((i__20963_20992 < count__20962_20991)){
var c_20993 = cljs.core._nth.call(null,chunk__20961_20990,i__20963_20992);
if(cljs.core.truth_(c_20993.isMounted())){
var temp__4126__auto___20994 = (c_20993.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___20994)){
var next_props_20995 = temp__4126__auto___20994;
(c_20993.props["__om_cursor"] = next_props_20995);

(c_20993.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3746__auto__ = !((function (){var G__20965 = om.core.children.call(null,c_20993);
if(G__20965){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20965.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__20965.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__20965);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__20965);
}
})());
if(or__3746__auto__){
return or__3746__auto__;
} else {
return c_20993.shouldComponentUpdate(c_20993.props,c_20993.state);
}
})())){
c_20993.forceUpdate();
} else {
}
} else {
}

var G__20996 = seq__20960_20989;
var G__20997 = chunk__20961_20990;
var G__20998 = count__20962_20991;
var G__20999 = (i__20963_20992 + (1));
seq__20960_20989 = G__20996;
chunk__20961_20990 = G__20997;
count__20962_20991 = G__20998;
i__20963_20992 = G__20999;
continue;
} else {
var temp__4126__auto___21000 = cljs.core.seq.call(null,seq__20960_20989);
if(temp__4126__auto___21000){
var seq__20960_21001__$1 = temp__4126__auto___21000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20960_21001__$1)){
var c__4533__auto___21002 = cljs.core.chunk_first.call(null,seq__20960_21001__$1);
var G__21003 = cljs.core.chunk_rest.call(null,seq__20960_21001__$1);
var G__21004 = c__4533__auto___21002;
var G__21005 = cljs.core.count.call(null,c__4533__auto___21002);
var G__21006 = (0);
seq__20960_20989 = G__21003;
chunk__20961_20990 = G__21004;
count__20962_20991 = G__21005;
i__20963_20992 = G__21006;
continue;
} else {
var c_21007 = cljs.core.first.call(null,seq__20960_21001__$1);
if(cljs.core.truth_(c_21007.isMounted())){
var temp__4126__auto___21008__$1 = (c_21007.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___21008__$1)){
var next_props_21009 = temp__4126__auto___21008__$1;
(c_21007.props["__om_cursor"] = next_props_21009);

(c_21007.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3746__auto__ = !((function (){var G__20967 = om.core.children.call(null,c_21007);
if(G__20967){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__20967.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__20967.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__20967);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__20967);
}
})());
if(or__3746__auto__){
return or__3746__auto__;
} else {
return c_21007.shouldComponentUpdate(c_21007.props,c_21007.state);
}
})())){
c_21007.forceUpdate();
} else {
}
} else {
}

var G__21010 = cljs.core.next.call(null,seq__20960_21001__$1);
var G__21011 = null;
var G__21012 = (0);
var G__21013 = (0);
seq__20960_20989 = G__21010;
chunk__20961_20990 = G__21011;
count__20962_20991 = G__21012;
i__20963_20992 = G__21013;
continue;
}
} else {
}
}
break;
}

om.core._empty_queue_BANG_.call(null,state__$1);
}

var _refs_21014 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_21014)){
} else {
var seq__20968_21015 = cljs.core.seq.call(null,_refs_21014);
var chunk__20969_21016 = null;
var count__20970_21017 = (0);
var i__20971_21018 = (0);
while(true){
if((i__20971_21018 < count__20970_21017)){
var vec__20972_21019 = cljs.core._nth.call(null,chunk__20969_21016,i__20971_21018);
var path_21020__$1 = cljs.core.nth.call(null,vec__20972_21019,(0),null);
var cs_21021 = cljs.core.nth.call(null,vec__20972_21019,(1),null);
var cs_21022__$1 = cljs.core.deref.call(null,cs_21021);
var seq__20973_21023 = cljs.core.seq.call(null,cs_21022__$1);
var chunk__20974_21024 = null;
var count__20975_21025 = (0);
var i__20976_21026 = (0);
while(true){
if((i__20976_21026 < count__20975_21025)){
var vec__20977_21027 = cljs.core._nth.call(null,chunk__20974_21024,i__20976_21026);
var id_21028 = cljs.core.nth.call(null,vec__20977_21027,(0),null);
var c_21029 = cljs.core.nth.call(null,vec__20977_21027,(1),null);
if(cljs.core.truth_(c_21029.shouldComponentUpdate(c_21029.props,c_21029.state))){
c_21029.forceUpdate();
} else {
}

var G__21030 = seq__20973_21023;
var G__21031 = chunk__20974_21024;
var G__21032 = count__20975_21025;
var G__21033 = (i__20976_21026 + (1));
seq__20973_21023 = G__21030;
chunk__20974_21024 = G__21031;
count__20975_21025 = G__21032;
i__20976_21026 = G__21033;
continue;
} else {
var temp__4126__auto___21034 = cljs.core.seq.call(null,seq__20973_21023);
if(temp__4126__auto___21034){
var seq__20973_21035__$1 = temp__4126__auto___21034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20973_21035__$1)){
var c__4533__auto___21036 = cljs.core.chunk_first.call(null,seq__20973_21035__$1);
var G__21037 = cljs.core.chunk_rest.call(null,seq__20973_21035__$1);
var G__21038 = c__4533__auto___21036;
var G__21039 = cljs.core.count.call(null,c__4533__auto___21036);
var G__21040 = (0);
seq__20973_21023 = G__21037;
chunk__20974_21024 = G__21038;
count__20975_21025 = G__21039;
i__20976_21026 = G__21040;
continue;
} else {
var vec__20978_21041 = cljs.core.first.call(null,seq__20973_21035__$1);
var id_21042 = cljs.core.nth.call(null,vec__20978_21041,(0),null);
var c_21043 = cljs.core.nth.call(null,vec__20978_21041,(1),null);
if(cljs.core.truth_(c_21043.shouldComponentUpdate(c_21043.props,c_21043.state))){
c_21043.forceUpdate();
} else {
}

var G__21044 = cljs.core.next.call(null,seq__20973_21035__$1);
var G__21045 = null;
var G__21046 = (0);
var G__21047 = (0);
seq__20973_21023 = G__21044;
chunk__20974_21024 = G__21045;
count__20975_21025 = G__21046;
i__20976_21026 = G__21047;
continue;
}
} else {
}
}
break;
}

var G__21048 = seq__20968_21015;
var G__21049 = chunk__20969_21016;
var G__21050 = count__20970_21017;
var G__21051 = (i__20971_21018 + (1));
seq__20968_21015 = G__21048;
chunk__20969_21016 = G__21049;
count__20970_21017 = G__21050;
i__20971_21018 = G__21051;
continue;
} else {
var temp__4126__auto___21052 = cljs.core.seq.call(null,seq__20968_21015);
if(temp__4126__auto___21052){
var seq__20968_21053__$1 = temp__4126__auto___21052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20968_21053__$1)){
var c__4533__auto___21054 = cljs.core.chunk_first.call(null,seq__20968_21053__$1);
var G__21055 = cljs.core.chunk_rest.call(null,seq__20968_21053__$1);
var G__21056 = c__4533__auto___21054;
var G__21057 = cljs.core.count.call(null,c__4533__auto___21054);
var G__21058 = (0);
seq__20968_21015 = G__21055;
chunk__20969_21016 = G__21056;
count__20970_21017 = G__21057;
i__20971_21018 = G__21058;
continue;
} else {
var vec__20979_21059 = cljs.core.first.call(null,seq__20968_21053__$1);
var path_21060__$1 = cljs.core.nth.call(null,vec__20979_21059,(0),null);
var cs_21061 = cljs.core.nth.call(null,vec__20979_21059,(1),null);
var cs_21062__$1 = cljs.core.deref.call(null,cs_21061);
var seq__20980_21063 = cljs.core.seq.call(null,cs_21062__$1);
var chunk__20981_21064 = null;
var count__20982_21065 = (0);
var i__20983_21066 = (0);
while(true){
if((i__20983_21066 < count__20982_21065)){
var vec__20984_21067 = cljs.core._nth.call(null,chunk__20981_21064,i__20983_21066);
var id_21068 = cljs.core.nth.call(null,vec__20984_21067,(0),null);
var c_21069 = cljs.core.nth.call(null,vec__20984_21067,(1),null);
if(cljs.core.truth_(c_21069.shouldComponentUpdate(c_21069.props,c_21069.state))){
c_21069.forceUpdate();
} else {
}

var G__21070 = seq__20980_21063;
var G__21071 = chunk__20981_21064;
var G__21072 = count__20982_21065;
var G__21073 = (i__20983_21066 + (1));
seq__20980_21063 = G__21070;
chunk__20981_21064 = G__21071;
count__20982_21065 = G__21072;
i__20983_21066 = G__21073;
continue;
} else {
var temp__4126__auto___21074__$1 = cljs.core.seq.call(null,seq__20980_21063);
if(temp__4126__auto___21074__$1){
var seq__20980_21075__$1 = temp__4126__auto___21074__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20980_21075__$1)){
var c__4533__auto___21076 = cljs.core.chunk_first.call(null,seq__20980_21075__$1);
var G__21077 = cljs.core.chunk_rest.call(null,seq__20980_21075__$1);
var G__21078 = c__4533__auto___21076;
var G__21079 = cljs.core.count.call(null,c__4533__auto___21076);
var G__21080 = (0);
seq__20980_21063 = G__21077;
chunk__20981_21064 = G__21078;
count__20982_21065 = G__21079;
i__20983_21066 = G__21080;
continue;
} else {
var vec__20985_21081 = cljs.core.first.call(null,seq__20980_21075__$1);
var id_21082 = cljs.core.nth.call(null,vec__20985_21081,(0),null);
var c_21083 = cljs.core.nth.call(null,vec__20985_21081,(1),null);
if(cljs.core.truth_(c_21083.shouldComponentUpdate(c_21083.props,c_21083.state))){
c_21083.forceUpdate();
} else {
}

var G__21084 = cljs.core.next.call(null,seq__20980_21075__$1);
var G__21085 = null;
var G__21086 = (0);
var G__21087 = (0);
seq__20980_21063 = G__21084;
chunk__20981_21064 = G__21085;
count__20982_21065 = G__21086;
i__20983_21066 = G__21087;
continue;
}
} else {
}
}
break;
}

var G__21088 = cljs.core.next.call(null,seq__20968_21053__$1);
var G__21089 = null;
var G__21090 = (0);
var G__21091 = (0);
seq__20968_21015 = G__21088;
chunk__20969_21016 = G__21089;
count__20970_21017 = G__21090;
i__20971_21018 = G__21091;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__20924,map__20924__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20924,map__20924__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20924,map__20924__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20924,map__20924__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20924,map__20924__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20924,map__20924__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20924,map__20924__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20924,map__20924__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20924,map__20924__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__21093 = x;
if(G__21093){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__21093.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__21093.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__21093);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__21093);
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__21095 = cursor;
if(G__21095){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__21095.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__21095.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__21095);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__21095);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;

//# sourceMappingURL=core.js.map