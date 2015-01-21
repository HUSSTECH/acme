// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('cljs_http.client')) {
goog.provide('cljs_http.client');
}
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function if_pos(v){
if(cljs.core.truth_((function (){var and__3734__auto__ = v;
if(cljs.core.truth_(and__3734__auto__)){
return (v > (0));
} else {
return and__3734__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__16641_SHARP_,p2__16640_SHARP_){
var vec__16643 = clojure.string.split.call(null,p2__16640_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__16643,(0),null);
var v = cljs.core.nth.call(null,vec__16643,(1),null);
return cljs.core.assoc.call(null,p1__16641_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__16644_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__16644_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__16645){
var vec__16647 = p__16645;
var k = cljs.core.nth.call(null,vec__16647,(0),null);
var v = cljs.core.nth.call(null,vec__16647,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__16648_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__16648_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__3734__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__3734__auto__){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3734__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__16649_SHARP_){
return cljs_http.client.decode_body.call(null,p1__16649_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__16650){
var vec__16652 = p__16650;
var accept = cljs.core.nth.call(null,vec__16652,(0),null);
return ((function (vec__16652,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3746__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__16652,accept))
};
var wrap_accept = function (client,var_args){
var p__16650 = null;
if (arguments.length > 1) {
var G__16653__i = 0, G__16653__a = new Array(arguments.length -  1);
while (G__16653__i < G__16653__a.length) {G__16653__a[G__16653__i] = arguments[G__16653__i + 1]; ++G__16653__i;}
  p__16650 = new cljs.core.IndexedSeq(G__16653__a,0);
} 
return wrap_accept__delegate.call(this,client,p__16650);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__16654){
var client = cljs.core.first(arglist__16654);
var p__16650 = cljs.core.rest(arglist__16654);
return wrap_accept__delegate(client,p__16650);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__16655){
var vec__16657 = p__16655;
var content_type = cljs.core.nth.call(null,vec__16657,(0),null);
return ((function (vec__16657,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3746__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__16657,content_type))
};
var wrap_content_type = function (client,var_args){
var p__16655 = null;
if (arguments.length > 1) {
var G__16658__i = 0, G__16658__a = new Array(arguments.length -  1);
while (G__16658__i < G__16658__a.length) {G__16658__a[G__16658__i] = arguments[G__16658__i + 1]; ++G__16658__i;}
  p__16655 = new cljs.core.IndexedSeq(G__16658__a,0);
} 
return wrap_content_type__delegate.call(this,client,p__16655);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__16659){
var client = cljs.core.first(arglist__16659);
var p__16655 = cljs.core.rest(arglist__16659);
return wrap_content_type__delegate(client,p__16655);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__16661 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__16661__$1 = ((cljs.core.seq_QMARK_.call(null,map__16661))?cljs.core.apply.call(null,cljs.core.hash_map,map__16661):map__16661);
var encoding_opts = cljs.core.get.call(null,map__16661__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var encoding = cljs.core.get.call(null,map__16661__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__16665 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__16665__$1 = ((cljs.core.seq_QMARK_.call(null,map__16665))?cljs.core.apply.call(null,cljs.core.hash_map,map__16665):map__16665);
var decoding_opts = cljs.core.get.call(null,map__16665__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var decoding = cljs.core.get.call(null,map__16665__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var transit_decode = ((function (map__16665,map__16665__$1,decoding_opts,decoding){
return (function (p1__16662_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__16662_SHARP_,decoding,decoding_opts);
});})(map__16665,map__16665__$1,decoding_opts,decoding))
;
return cljs.core.async.map.call(null,((function (map__16665,map__16665__$1,decoding_opts,decoding,transit_decode){
return (function (p1__16663_SHARP_){
return cljs_http.client.decode_body.call(null,p1__16663_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__16665,map__16665__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__16666_SHARP_){
return cljs_http.client.decode_body.call(null,p1__16666_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__16669){
var map__16670 = p__16669;
var map__16670__$1 = ((cljs.core.seq_QMARK_.call(null,map__16670))?cljs.core.apply.call(null,cljs.core.hash_map,map__16670):map__16670);
var req = map__16670__$1;
var query_params = cljs.core.get.call(null,map__16670__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__16673){
var map__16674 = p__16673;
var map__16674__$1 = ((cljs.core.seq_QMARK_.call(null,map__16674))?cljs.core.apply.call(null,cljs.core.hash_map,map__16674):map__16674);
var request = map__16674__$1;
var request_method = cljs.core.get.call(null,map__16674__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var form_params = cljs.core.get.call(null,map__16674__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
if(cljs.core.truth_((function (){var and__3734__auto__ = form_params;
if(cljs.core.truth_(and__3734__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3734__auto__;
}
})())){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__16681_16687 = cljs.core.seq.call(null,params);
var chunk__16682_16688 = null;
var count__16683_16689 = (0);
var i__16684_16690 = (0);
while(true){
if((i__16684_16690 < count__16683_16689)){
var vec__16685_16691 = cljs.core._nth.call(null,chunk__16682_16688,i__16684_16690);
var k_16692 = cljs.core.nth.call(null,vec__16685_16691,(0),null);
var v_16693 = cljs.core.nth.call(null,vec__16685_16691,(1),null);
form_data.append(cljs.core.name.call(null,k_16692),v_16693);

var G__16694 = seq__16681_16687;
var G__16695 = chunk__16682_16688;
var G__16696 = count__16683_16689;
var G__16697 = (i__16684_16690 + (1));
seq__16681_16687 = G__16694;
chunk__16682_16688 = G__16695;
count__16683_16689 = G__16696;
i__16684_16690 = G__16697;
continue;
} else {
var temp__4126__auto___16698 = cljs.core.seq.call(null,seq__16681_16687);
if(temp__4126__auto___16698){
var seq__16681_16699__$1 = temp__4126__auto___16698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16681_16699__$1)){
var c__4533__auto___16700 = cljs.core.chunk_first.call(null,seq__16681_16699__$1);
var G__16701 = cljs.core.chunk_rest.call(null,seq__16681_16699__$1);
var G__16702 = c__4533__auto___16700;
var G__16703 = cljs.core.count.call(null,c__4533__auto___16700);
var G__16704 = (0);
seq__16681_16687 = G__16701;
chunk__16682_16688 = G__16702;
count__16683_16689 = G__16703;
i__16684_16690 = G__16704;
continue;
} else {
var vec__16686_16705 = cljs.core.first.call(null,seq__16681_16699__$1);
var k_16706 = cljs.core.nth.call(null,vec__16686_16705,(0),null);
var v_16707 = cljs.core.nth.call(null,vec__16686_16705,(1),null);
form_data.append(cljs.core.name.call(null,k_16706),v_16707);

var G__16708 = cljs.core.next.call(null,seq__16681_16699__$1);
var G__16709 = null;
var G__16710 = (0);
var G__16711 = (0);
seq__16681_16687 = G__16708;
chunk__16682_16688 = G__16709;
count__16683_16689 = G__16710;
i__16684_16690 = G__16711;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function wrap_multipart_params(client){
return (function (p__16714){
var map__16715 = p__16714;
var map__16715__$1 = ((cljs.core.seq_QMARK_.call(null,map__16715))?cljs.core.apply.call(null,cljs.core.hash_map,map__16715):map__16715);
var request = map__16715__$1;
var request_method = cljs.core.get.call(null,map__16715__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var multipart_params = cljs.core.get.call(null,map__16715__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
if(cljs.core.truth_((function (){var and__3734__auto__ = multipart_params;
if(cljs.core.truth_(and__3734__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3734__auto__;
}
})())){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"multipart/form-data"));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__16716_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__16716_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__16720){
var map__16721 = p__16720;
var map__16721__$1 = ((cljs.core.seq_QMARK_.call(null,map__16721))?cljs.core.apply.call(null,cljs.core.hash_map,map__16721):map__16721);
var req = map__16721__$1;
var query_params = cljs.core.get.call(null,map__16721__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__16721,map__16721__$1,req,query_params){
return (function (p1__16717_SHARP_){
return cljs.core.merge.call(null,p1__16717_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__16721,map__16721__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__16722){
var vec__16724 = p__16722;
var credentials = cljs.core.nth.call(null,vec__16724,(0),null);
return ((function (vec__16724,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3746__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__16724,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__16722 = null;
if (arguments.length > 1) {
var G__16725__i = 0, G__16725__a = new Array(arguments.length -  1);
while (G__16725__i < G__16725__a.length) {G__16725__a[G__16725__i] = arguments[G__16725__i + 1]; ++G__16725__i;}
  p__16722 = new cljs.core.IndexedSeq(G__16725__a,0);
} 
return wrap_basic_auth__delegate.call(this,client,p__16722);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__16726){
var client = cljs.core.first(arglist__16726);
var p__16722 = cljs.core.rest(arglist__16726);
return wrap_basic_auth__delegate(client,p__16722);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){
return cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request))))))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__16727){
var vec__16729 = p__16727;
var req = cljs.core.nth.call(null,vec__16729,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__16727 = null;
if (arguments.length > 1) {
var G__16730__i = 0, G__16730__a = new Array(arguments.length -  1);
while (G__16730__i < G__16730__a.length) {G__16730__a[G__16730__i] = arguments[G__16730__i + 1]; ++G__16730__i;}
  p__16727 = new cljs.core.IndexedSeq(G__16730__a,0);
} 
return delete$__delegate.call(this,url,p__16727);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__16731){
var url = cljs.core.first(arglist__16731);
var p__16727 = cljs.core.rest(arglist__16731);
return delete$__delegate(url,p__16727);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__16732){
var vec__16734 = p__16732;
var req = cljs.core.nth.call(null,vec__16734,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__16732 = null;
if (arguments.length > 1) {
var G__16735__i = 0, G__16735__a = new Array(arguments.length -  1);
while (G__16735__i < G__16735__a.length) {G__16735__a[G__16735__i] = arguments[G__16735__i + 1]; ++G__16735__i;}
  p__16732 = new cljs.core.IndexedSeq(G__16735__a,0);
} 
return get__delegate.call(this,url,p__16732);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__16736){
var url = cljs.core.first(arglist__16736);
var p__16732 = cljs.core.rest(arglist__16736);
return get__delegate(url,p__16732);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__16737){
var vec__16739 = p__16737;
var req = cljs.core.nth.call(null,vec__16739,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__16737 = null;
if (arguments.length > 1) {
var G__16740__i = 0, G__16740__a = new Array(arguments.length -  1);
while (G__16740__i < G__16740__a.length) {G__16740__a[G__16740__i] = arguments[G__16740__i + 1]; ++G__16740__i;}
  p__16737 = new cljs.core.IndexedSeq(G__16740__a,0);
} 
return head__delegate.call(this,url,p__16737);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__16741){
var url = cljs.core.first(arglist__16741);
var p__16737 = cljs.core.rest(arglist__16741);
return head__delegate(url,p__16737);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__16742){
var vec__16744 = p__16742;
var req = cljs.core.nth.call(null,vec__16744,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__16742 = null;
if (arguments.length > 1) {
var G__16745__i = 0, G__16745__a = new Array(arguments.length -  1);
while (G__16745__i < G__16745__a.length) {G__16745__a[G__16745__i] = arguments[G__16745__i + 1]; ++G__16745__i;}
  p__16742 = new cljs.core.IndexedSeq(G__16745__a,0);
} 
return move__delegate.call(this,url,p__16742);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__16746){
var url = cljs.core.first(arglist__16746);
var p__16742 = cljs.core.rest(arglist__16746);
return move__delegate(url,p__16742);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__16747){
var vec__16749 = p__16747;
var req = cljs.core.nth.call(null,vec__16749,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__16747 = null;
if (arguments.length > 1) {
var G__16750__i = 0, G__16750__a = new Array(arguments.length -  1);
while (G__16750__i < G__16750__a.length) {G__16750__a[G__16750__i] = arguments[G__16750__i + 1]; ++G__16750__i;}
  p__16747 = new cljs.core.IndexedSeq(G__16750__a,0);
} 
return options__delegate.call(this,url,p__16747);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__16751){
var url = cljs.core.first(arglist__16751);
var p__16747 = cljs.core.rest(arglist__16751);
return options__delegate(url,p__16747);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__16752){
var vec__16754 = p__16752;
var req = cljs.core.nth.call(null,vec__16754,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__16752 = null;
if (arguments.length > 1) {
var G__16755__i = 0, G__16755__a = new Array(arguments.length -  1);
while (G__16755__i < G__16755__a.length) {G__16755__a[G__16755__i] = arguments[G__16755__i + 1]; ++G__16755__i;}
  p__16752 = new cljs.core.IndexedSeq(G__16755__a,0);
} 
return patch__delegate.call(this,url,p__16752);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__16756){
var url = cljs.core.first(arglist__16756);
var p__16752 = cljs.core.rest(arglist__16756);
return patch__delegate(url,p__16752);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__16757){
var vec__16759 = p__16757;
var req = cljs.core.nth.call(null,vec__16759,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__16757 = null;
if (arguments.length > 1) {
var G__16760__i = 0, G__16760__a = new Array(arguments.length -  1);
while (G__16760__i < G__16760__a.length) {G__16760__a[G__16760__i] = arguments[G__16760__i + 1]; ++G__16760__i;}
  p__16757 = new cljs.core.IndexedSeq(G__16760__a,0);
} 
return post__delegate.call(this,url,p__16757);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__16761){
var url = cljs.core.first(arglist__16761);
var p__16757 = cljs.core.rest(arglist__16761);
return post__delegate(url,p__16757);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__16762){
var vec__16764 = p__16762;
var req = cljs.core.nth.call(null,vec__16764,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__16762 = null;
if (arguments.length > 1) {
var G__16765__i = 0, G__16765__a = new Array(arguments.length -  1);
while (G__16765__i < G__16765__a.length) {G__16765__a[G__16765__i] = arguments[G__16765__i + 1]; ++G__16765__i;}
  p__16762 = new cljs.core.IndexedSeq(G__16765__a,0);
} 
return put__delegate.call(this,url,p__16762);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__16766){
var url = cljs.core.first(arglist__16766);
var p__16762 = cljs.core.rest(arglist__16766);
return put__delegate(url,p__16762);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map