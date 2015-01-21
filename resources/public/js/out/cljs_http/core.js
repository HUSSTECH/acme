// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('cljs_http.core')) {
goog.provide('cljs_http.core');
}
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){
var temp__4126__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4126__auto__)){
var xhr = temp__4126__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

return xhr.abort();
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.request = (function request(p__17087){
var map__17114 = p__17087;
var map__17114__$1 = ((cljs.core.seq_QMARK_.call(null,map__17114))?cljs.core.apply.call(null,cljs.core.hash_map,map__17114):map__17114);
var request__$1 = map__17114__$1;
var cancel = cljs.core.get.call(null,map__17114__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__17114__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var body = cljs.core.get.call(null,map__17114__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__17114__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var request_method = cljs.core.get.call(null,map__17114__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request__$1);
var method = cljs.core.name.call(null,(function (){var or__3746__auto__ = request_method;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var timeout = (function (){var or__3746__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return (0);
}
})();
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var xhr = (function (){var G__17115 = (new goog.net.XhrIo());
G__17115.setTimeoutInterval(timeout);

G__17115.setWithCredentials(send_credentials);

return G__17115;
})();
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__17114,map__17114__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponseText(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null);
if(!(cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__17114,map__17114__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__6633__auto___17140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___17140,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__17114,map__17114__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___17140,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__17114,map__17114__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_17126){
var state_val_17127 = (state_17126[(1)]);
if((state_val_17127 === (5))){
var inst_17124 = (state_17126[(2)]);
var state_17126__$1 = state_17126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17126__$1,inst_17124);
} else {
if((state_val_17127 === (4))){
var state_17126__$1 = state_17126;
var statearr_17128_17141 = state_17126__$1;
(statearr_17128_17141[(2)] = null);

(statearr_17128_17141[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (3))){
var inst_17121 = xhr.abort();
var state_17126__$1 = state_17126;
var statearr_17129_17142 = state_17126__$1;
(statearr_17129_17142[(2)] = inst_17121);

(statearr_17129_17142[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (2))){
var inst_17117 = (state_17126[(2)]);
var inst_17118 = xhr.isComplete();
var inst_17119 = cljs.core.not.call(null,inst_17118);
var state_17126__$1 = (function (){var statearr_17130 = state_17126;
(statearr_17130[(7)] = inst_17117);

return statearr_17130;
})();
if(inst_17119){
var statearr_17131_17143 = state_17126__$1;
(statearr_17131_17143[(1)] = (3));

} else {
var statearr_17132_17144 = state_17126__$1;
(statearr_17132_17144[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (1))){
var state_17126__$1 = state_17126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17126__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__6633__auto___17140,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__17114,map__17114__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__6577__auto__,c__6633__auto___17140,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__17114,map__17114__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_17136 = [null,null,null,null,null,null,null,null];
(statearr_17136[(0)] = state_machine__6578__auto__);

(statearr_17136[(1)] = (1));

return statearr_17136;
});
var state_machine__6578__auto____1 = (function (state_17126){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_17126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e17137){if((e17137 instanceof Object)){
var ex__6581__auto__ = e17137;
var statearr_17138_17145 = state_17126;
(statearr_17138_17145[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17146 = state_17126;
state_17126 = G__17146;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_17126){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_17126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___17140,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__17114,map__17114__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__6635__auto__ = (function (){var statearr_17139 = f__6634__auto__.call(null);
(statearr_17139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___17140);

return statearr_17139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___17140,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__17114,map__17114__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});

//# sourceMappingURL=core.js.map