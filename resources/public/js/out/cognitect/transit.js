// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('cognitect.transit')) {
goog.provide('cognitect.transit');
}
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__16916_16920 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__16917_16921 = null;
var count__16918_16922 = (0);
var i__16919_16923 = (0);
while(true){
if((i__16919_16923 < count__16918_16922)){
var k_16924 = cljs.core._nth.call(null,chunk__16917_16921,i__16919_16923);
var v_16925 = (b[k_16924]);
(a[k_16924] = v_16925);

var G__16926 = seq__16916_16920;
var G__16927 = chunk__16917_16921;
var G__16928 = count__16918_16922;
var G__16929 = (i__16919_16923 + (1));
seq__16916_16920 = G__16926;
chunk__16917_16921 = G__16927;
count__16918_16922 = G__16928;
i__16919_16923 = G__16929;
continue;
} else {
var temp__4126__auto___16930 = cljs.core.seq.call(null,seq__16916_16920);
if(temp__4126__auto___16930){
var seq__16916_16931__$1 = temp__4126__auto___16930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16916_16931__$1)){
var c__4533__auto___16932 = cljs.core.chunk_first.call(null,seq__16916_16931__$1);
var G__16933 = cljs.core.chunk_rest.call(null,seq__16916_16931__$1);
var G__16934 = c__4533__auto___16932;
var G__16935 = cljs.core.count.call(null,c__4533__auto___16932);
var G__16936 = (0);
seq__16916_16920 = G__16933;
chunk__16917_16921 = G__16934;
count__16918_16922 = G__16935;
i__16919_16923 = G__16936;
continue;
} else {
var k_16937 = cljs.core.first.call(null,seq__16916_16931__$1);
var v_16938 = (b[k_16937]);
(a[k_16937] = v_16938);

var G__16939 = cljs.core.next.call(null,seq__16916_16931__$1);
var G__16940 = null;
var G__16941 = (0);
var G__16942 = (0);
seq__16916_16920 = G__16939;
chunk__16917_16921 = G__16940;
count__16918_16922 = G__16941;
i__16919_16923 = G__16942;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__16943 = (i + (2));
var G__16944 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__16943;
ret = G__16944;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16945_16949 = cljs.core.seq.call(null,v);
var chunk__16946_16950 = null;
var count__16947_16951 = (0);
var i__16948_16952 = (0);
while(true){
if((i__16948_16952 < count__16947_16951)){
var x_16953 = cljs.core._nth.call(null,chunk__16946_16950,i__16948_16952);
ret.push(x_16953);

var G__16954 = seq__16945_16949;
var G__16955 = chunk__16946_16950;
var G__16956 = count__16947_16951;
var G__16957 = (i__16948_16952 + (1));
seq__16945_16949 = G__16954;
chunk__16946_16950 = G__16955;
count__16947_16951 = G__16956;
i__16948_16952 = G__16957;
continue;
} else {
var temp__4126__auto___16958 = cljs.core.seq.call(null,seq__16945_16949);
if(temp__4126__auto___16958){
var seq__16945_16959__$1 = temp__4126__auto___16958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16945_16959__$1)){
var c__4533__auto___16960 = cljs.core.chunk_first.call(null,seq__16945_16959__$1);
var G__16961 = cljs.core.chunk_rest.call(null,seq__16945_16959__$1);
var G__16962 = c__4533__auto___16960;
var G__16963 = cljs.core.count.call(null,c__4533__auto___16960);
var G__16964 = (0);
seq__16945_16949 = G__16961;
chunk__16946_16950 = G__16962;
count__16947_16951 = G__16963;
i__16948_16952 = G__16964;
continue;
} else {
var x_16965 = cljs.core.first.call(null,seq__16945_16959__$1);
ret.push(x_16965);

var G__16966 = cljs.core.next.call(null,seq__16945_16959__$1);
var G__16967 = null;
var G__16968 = (0);
var G__16969 = (0);
seq__16945_16949 = G__16966;
chunk__16946_16950 = G__16967;
count__16947_16951 = G__16968;
i__16948_16952 = G__16969;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16970_16974 = cljs.core.seq.call(null,v);
var chunk__16971_16975 = null;
var count__16972_16976 = (0);
var i__16973_16977 = (0);
while(true){
if((i__16973_16977 < count__16972_16976)){
var x_16978 = cljs.core._nth.call(null,chunk__16971_16975,i__16973_16977);
ret.push(x_16978);

var G__16979 = seq__16970_16974;
var G__16980 = chunk__16971_16975;
var G__16981 = count__16972_16976;
var G__16982 = (i__16973_16977 + (1));
seq__16970_16974 = G__16979;
chunk__16971_16975 = G__16980;
count__16972_16976 = G__16981;
i__16973_16977 = G__16982;
continue;
} else {
var temp__4126__auto___16983 = cljs.core.seq.call(null,seq__16970_16974);
if(temp__4126__auto___16983){
var seq__16970_16984__$1 = temp__4126__auto___16983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16970_16984__$1)){
var c__4533__auto___16985 = cljs.core.chunk_first.call(null,seq__16970_16984__$1);
var G__16986 = cljs.core.chunk_rest.call(null,seq__16970_16984__$1);
var G__16987 = c__4533__auto___16985;
var G__16988 = cljs.core.count.call(null,c__4533__auto___16985);
var G__16989 = (0);
seq__16970_16974 = G__16986;
chunk__16971_16975 = G__16987;
count__16972_16976 = G__16988;
i__16973_16977 = G__16989;
continue;
} else {
var x_16990 = cljs.core.first.call(null,seq__16970_16984__$1);
ret.push(x_16990);

var G__16991 = cljs.core.next.call(null,seq__16970_16984__$1);
var G__16992 = null;
var G__16993 = (0);
var G__16994 = (0);
seq__16970_16974 = G__16991;
chunk__16971_16975 = G__16992;
count__16972_16976 = G__16993;
i__16973_16977 = G__16994;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16995_16999 = cljs.core.seq.call(null,v);
var chunk__16996_17000 = null;
var count__16997_17001 = (0);
var i__16998_17002 = (0);
while(true){
if((i__16998_17002 < count__16997_17001)){
var x_17003 = cljs.core._nth.call(null,chunk__16996_17000,i__16998_17002);
ret.push(x_17003);

var G__17004 = seq__16995_16999;
var G__17005 = chunk__16996_17000;
var G__17006 = count__16997_17001;
var G__17007 = (i__16998_17002 + (1));
seq__16995_16999 = G__17004;
chunk__16996_17000 = G__17005;
count__16997_17001 = G__17006;
i__16998_17002 = G__17007;
continue;
} else {
var temp__4126__auto___17008 = cljs.core.seq.call(null,seq__16995_16999);
if(temp__4126__auto___17008){
var seq__16995_17009__$1 = temp__4126__auto___17008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16995_17009__$1)){
var c__4533__auto___17010 = cljs.core.chunk_first.call(null,seq__16995_17009__$1);
var G__17011 = cljs.core.chunk_rest.call(null,seq__16995_17009__$1);
var G__17012 = c__4533__auto___17010;
var G__17013 = cljs.core.count.call(null,c__4533__auto___17010);
var G__17014 = (0);
seq__16995_16999 = G__17011;
chunk__16996_17000 = G__17012;
count__16997_17001 = G__17013;
i__16998_17002 = G__17014;
continue;
} else {
var x_17015 = cljs.core.first.call(null,seq__16995_17009__$1);
ret.push(x_17015);

var G__17016 = cljs.core.next.call(null,seq__16995_17009__$1);
var G__17017 = null;
var G__17018 = (0);
var G__17019 = (0);
seq__16995_16999 = G__17016;
chunk__16996_17000 = G__17017;
count__16997_17001 = G__17018;
i__16998_17002 = G__17019;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x17029 = cljs.core.clone.call(null,handlers);
x17029.forEach = ((function (x17029,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__17030 = cljs.core.seq.call(null,coll);
var chunk__17031 = null;
var count__17032 = (0);
var i__17033 = (0);
while(true){
if((i__17033 < count__17032)){
var vec__17034 = cljs.core._nth.call(null,chunk__17031,i__17033);
var k = cljs.core.nth.call(null,vec__17034,(0),null);
var v = cljs.core.nth.call(null,vec__17034,(1),null);
f.call(null,v,k);

var G__17036 = seq__17030;
var G__17037 = chunk__17031;
var G__17038 = count__17032;
var G__17039 = (i__17033 + (1));
seq__17030 = G__17036;
chunk__17031 = G__17037;
count__17032 = G__17038;
i__17033 = G__17039;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17030);
if(temp__4126__auto__){
var seq__17030__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17030__$1)){
var c__4533__auto__ = cljs.core.chunk_first.call(null,seq__17030__$1);
var G__17040 = cljs.core.chunk_rest.call(null,seq__17030__$1);
var G__17041 = c__4533__auto__;
var G__17042 = cljs.core.count.call(null,c__4533__auto__);
var G__17043 = (0);
seq__17030 = G__17040;
chunk__17031 = G__17041;
count__17032 = G__17042;
i__17033 = G__17043;
continue;
} else {
var vec__17035 = cljs.core.first.call(null,seq__17030__$1);
var k = cljs.core.nth.call(null,vec__17035,(0),null);
var v = cljs.core.nth.call(null,vec__17035,(1),null);
f.call(null,v,k);

var G__17044 = cljs.core.next.call(null,seq__17030__$1);
var G__17045 = null;
var G__17046 = (0);
var G__17047 = (0);
seq__17030 = G__17044;
chunk__17031 = G__17045;
count__17032 = G__17046;
i__17033 = G__17047;
continue;
}
} else {
return null;
}
}
break;
}
});})(x17029,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x17029;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__17028 = obj;
G__17028.push(kfn.call(null,k),vfn.call(null,v));

return G__17028;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t17051 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t17051 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta17052){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta17052 = meta17052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t17051.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t17051.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t17051.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t17051.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t17051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17053){
var self__ = this;
var _17053__$1 = this;
return self__.meta17052;
});

cognitect.transit.t17051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17053,meta17052__$1){
var self__ = this;
var _17053__$1 = this;
return (new cognitect.transit.t17051(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta17052__$1));
});

cognitect.transit.t17051.cljs$lang$type = true;

cognitect.transit.t17051.cljs$lang$ctorStr = "cognitect.transit/t17051";

cognitect.transit.t17051.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cognitect.transit/t17051");
});

cognitect.transit.__GT_t17051 = (function __GT_t17051(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta17052){
return (new cognitect.transit.t17051(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta17052));
});

}

return (new cognitect.transit.t17051(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),259,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),254,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Users\\Hussam\\Dev\\acme\\resources\\public\\js\\out\\cognitect\\transit.cljs"], null)));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map