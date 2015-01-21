// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('cljs.core.async')) {
goog.provide('cljs.core.async');
}
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t17396 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17396 = (function (f,fn_handler,meta17397){
this.f = f;
this.fn_handler = fn_handler;
this.meta17397 = meta17397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17396.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17398){
var self__ = this;
var _17398__$1 = this;
return self__.meta17397;
});

cljs.core.async.t17396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17398,meta17397__$1){
var self__ = this;
var _17398__$1 = this;
return (new cljs.core.async.t17396(self__.f,self__.fn_handler,meta17397__$1));
});

cljs.core.async.t17396.cljs$lang$type = true;

cljs.core.async.t17396.cljs$lang$ctorStr = "cljs.core.async/t17396";

cljs.core.async.t17396.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cljs.core.async/t17396");
});

cljs.core.async.__GT_t17396 = (function __GT_t17396(f__$1,fn_handler__$1,meta17397){
return (new cljs.core.async.t17396(f__$1,fn_handler__$1,meta17397));
});

}

return (new cljs.core.async.t17396(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Users\\Hussam\\Dev\\acme\\resources\\public\\js\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__17400 = buff;
if(G__17400){
var bit__4427__auto__ = null;
if(cljs.core.truth_((function (){var or__3746__auto__ = bit__4427__auto__;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return G__17400.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17400.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17400);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17400);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17401 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17401);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17401,ret){
return (function (){
return fn1.call(null,val_17401);
});})(val_17401,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4633__auto___17402 = n;
var x_17403 = (0);
while(true){
if((x_17403 < n__4633__auto___17402)){
(a[x_17403] = (0));

var G__17404 = (x_17403 + (1));
x_17403 = G__17404;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17405 = (i + (1));
i = G__17405;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t17409 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17409 = (function (flag,alt_flag,meta17410){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17410 = meta17410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17409.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t17409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t17409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17411){
var self__ = this;
var _17411__$1 = this;
return self__.meta17410;
});})(flag))
;

cljs.core.async.t17409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17411,meta17410__$1){
var self__ = this;
var _17411__$1 = this;
return (new cljs.core.async.t17409(self__.flag,self__.alt_flag,meta17410__$1));
});})(flag))
;

cljs.core.async.t17409.cljs$lang$type = true;

cljs.core.async.t17409.cljs$lang$ctorStr = "cljs.core.async/t17409";

cljs.core.async.t17409.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cljs.core.async/t17409");
});})(flag))
;

cljs.core.async.__GT_t17409 = ((function (flag){
return (function __GT_t17409(flag__$1,alt_flag__$1,meta17410){
return (new cljs.core.async.t17409(flag__$1,alt_flag__$1,meta17410));
});})(flag))
;

}

return (new cljs.core.async.t17409(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Users\\Hussam\\Dev\\acme\\resources\\public\\js\\out\\cljs\\core\\async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t17415 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17415 = (function (cb,flag,alt_handler,meta17416){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17416 = meta17416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17415.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t17415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t17415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17417){
var self__ = this;
var _17417__$1 = this;
return self__.meta17416;
});

cljs.core.async.t17415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17417,meta17416__$1){
var self__ = this;
var _17417__$1 = this;
return (new cljs.core.async.t17415(self__.cb,self__.flag,self__.alt_handler,meta17416__$1));
});

cljs.core.async.t17415.cljs$lang$type = true;

cljs.core.async.t17415.cljs$lang$ctorStr = "cljs.core.async/t17415";

cljs.core.async.t17415.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cljs.core.async/t17415");
});

cljs.core.async.__GT_t17415 = (function __GT_t17415(cb__$1,flag__$1,alt_handler__$1,meta17416){
return (new cljs.core.async.t17415(cb__$1,flag__$1,alt_handler__$1,meta17416));
});

}

return (new cljs.core.async.t17415(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Users\\Hussam\\Dev\\acme\\resources\\public\\js\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17418_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17418_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17419_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17419_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3746__auto__ = wport;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17420 = (i + (1));
i = G__17420;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3746__auto__ = ret;
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3734__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3734__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3734__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__17421){
var map__17423 = p__17421;
var map__17423__$1 = ((cljs.core.seq_QMARK_.call(null,map__17423))?cljs.core.apply.call(null,cljs.core.hash_map,map__17423):map__17423);
var opts = map__17423__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__17421 = null;
if (arguments.length > 1) {
var G__17424__i = 0, G__17424__a = new Array(arguments.length -  1);
while (G__17424__i < G__17424__a.length) {G__17424__a[G__17424__i] = arguments[G__17424__i + 1]; ++G__17424__i;}
  p__17421 = new cljs.core.IndexedSeq(G__17424__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__17421);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17425){
var ports = cljs.core.first(arglist__17425);
var p__17421 = cljs.core.rest(arglist__17425);
return alts_BANG___delegate(ports,p__17421);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6633__auto___17520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___17520){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___17520){
return (function (state_17496){
var state_val_17497 = (state_17496[(1)]);
if((state_val_17497 === (7))){
var inst_17492 = (state_17496[(2)]);
var state_17496__$1 = state_17496;
var statearr_17498_17521 = state_17496__$1;
(statearr_17498_17521[(2)] = inst_17492);

(statearr_17498_17521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (1))){
var state_17496__$1 = state_17496;
var statearr_17499_17522 = state_17496__$1;
(statearr_17499_17522[(2)] = null);

(statearr_17499_17522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (4))){
var inst_17475 = (state_17496[(7)]);
var inst_17475__$1 = (state_17496[(2)]);
var inst_17476 = (inst_17475__$1 == null);
var state_17496__$1 = (function (){var statearr_17500 = state_17496;
(statearr_17500[(7)] = inst_17475__$1);

return statearr_17500;
})();
if(cljs.core.truth_(inst_17476)){
var statearr_17501_17523 = state_17496__$1;
(statearr_17501_17523[(1)] = (5));

} else {
var statearr_17502_17524 = state_17496__$1;
(statearr_17502_17524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (13))){
var state_17496__$1 = state_17496;
var statearr_17503_17525 = state_17496__$1;
(statearr_17503_17525[(2)] = null);

(statearr_17503_17525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (6))){
var inst_17475 = (state_17496[(7)]);
var state_17496__$1 = state_17496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17496__$1,(11),to,inst_17475);
} else {
if((state_val_17497 === (3))){
var inst_17494 = (state_17496[(2)]);
var state_17496__$1 = state_17496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17496__$1,inst_17494);
} else {
if((state_val_17497 === (12))){
var state_17496__$1 = state_17496;
var statearr_17504_17526 = state_17496__$1;
(statearr_17504_17526[(2)] = null);

(statearr_17504_17526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (2))){
var state_17496__$1 = state_17496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17496__$1,(4),from);
} else {
if((state_val_17497 === (11))){
var inst_17485 = (state_17496[(2)]);
var state_17496__$1 = state_17496;
if(cljs.core.truth_(inst_17485)){
var statearr_17505_17527 = state_17496__$1;
(statearr_17505_17527[(1)] = (12));

} else {
var statearr_17506_17528 = state_17496__$1;
(statearr_17506_17528[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (9))){
var state_17496__$1 = state_17496;
var statearr_17507_17529 = state_17496__$1;
(statearr_17507_17529[(2)] = null);

(statearr_17507_17529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (5))){
var state_17496__$1 = state_17496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17508_17530 = state_17496__$1;
(statearr_17508_17530[(1)] = (8));

} else {
var statearr_17509_17531 = state_17496__$1;
(statearr_17509_17531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (14))){
var inst_17490 = (state_17496[(2)]);
var state_17496__$1 = state_17496;
var statearr_17510_17532 = state_17496__$1;
(statearr_17510_17532[(2)] = inst_17490);

(statearr_17510_17532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (10))){
var inst_17482 = (state_17496[(2)]);
var state_17496__$1 = state_17496;
var statearr_17511_17533 = state_17496__$1;
(statearr_17511_17533[(2)] = inst_17482);

(statearr_17511_17533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (8))){
var inst_17479 = cljs.core.async.close_BANG_.call(null,to);
var state_17496__$1 = state_17496;
var statearr_17512_17534 = state_17496__$1;
(statearr_17512_17534[(2)] = inst_17479);

(statearr_17512_17534[(1)] = (10));


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
}
}
}
}
}
}
});})(c__6633__auto___17520))
;
return ((function (switch__6577__auto__,c__6633__auto___17520){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_17516 = [null,null,null,null,null,null,null,null];
(statearr_17516[(0)] = state_machine__6578__auto__);

(statearr_17516[(1)] = (1));

return statearr_17516;
});
var state_machine__6578__auto____1 = (function (state_17496){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_17496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e17517){if((e17517 instanceof Object)){
var ex__6581__auto__ = e17517;
var statearr_17518_17535 = state_17496;
(statearr_17518_17535[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17536 = state_17496;
state_17496 = G__17536;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_17496){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_17496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___17520))
})();
var state__6635__auto__ = (function (){var statearr_17519 = f__6634__auto__.call(null);
(statearr_17519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___17520);

return statearr_17519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___17520))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__17720){
var vec__17721 = p__17720;
var v = cljs.core.nth.call(null,vec__17721,(0),null);
var p = cljs.core.nth.call(null,vec__17721,(1),null);
var job = vec__17721;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6633__auto___17903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___17903,res,vec__17721,v,p,job,jobs,results){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___17903,res,vec__17721,v,p,job,jobs,results){
return (function (state_17726){
var state_val_17727 = (state_17726[(1)]);
if((state_val_17727 === (2))){
var inst_17723 = (state_17726[(2)]);
var inst_17724 = cljs.core.async.close_BANG_.call(null,res);
var state_17726__$1 = (function (){var statearr_17728 = state_17726;
(statearr_17728[(7)] = inst_17723);

return statearr_17728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17726__$1,inst_17724);
} else {
if((state_val_17727 === (1))){
var state_17726__$1 = state_17726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17726__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6633__auto___17903,res,vec__17721,v,p,job,jobs,results))
;
return ((function (switch__6577__auto__,c__6633__auto___17903,res,vec__17721,v,p,job,jobs,results){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_17732 = [null,null,null,null,null,null,null,null];
(statearr_17732[(0)] = state_machine__6578__auto__);

(statearr_17732[(1)] = (1));

return statearr_17732;
});
var state_machine__6578__auto____1 = (function (state_17726){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_17726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e17733){if((e17733 instanceof Object)){
var ex__6581__auto__ = e17733;
var statearr_17734_17904 = state_17726;
(statearr_17734_17904[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17905 = state_17726;
state_17726 = G__17905;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_17726){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_17726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___17903,res,vec__17721,v,p,job,jobs,results))
})();
var state__6635__auto__ = (function (){var statearr_17735 = f__6634__auto__.call(null);
(statearr_17735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___17903);

return statearr_17735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___17903,res,vec__17721,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17736){
var vec__17737 = p__17736;
var v = cljs.core.nth.call(null,vec__17737,(0),null);
var p = cljs.core.nth.call(null,vec__17737,(1),null);
var job = vec__17737;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4633__auto___17906 = n;
var __17907 = (0);
while(true){
if((__17907 < n__4633__auto___17906)){
var G__17738_17908 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17738_17908) {
case "async":
var c__6633__auto___17910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17907,c__6633__auto___17910,G__17738_17908,n__4633__auto___17906,jobs,results,process,async){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (__17907,c__6633__auto___17910,G__17738_17908,n__4633__auto___17906,jobs,results,process,async){
return (function (state_17751){
var state_val_17752 = (state_17751[(1)]);
if((state_val_17752 === (7))){
var inst_17747 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17753_17911 = state_17751__$1;
(statearr_17753_17911[(2)] = inst_17747);

(statearr_17753_17911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (6))){
var state_17751__$1 = state_17751;
var statearr_17754_17912 = state_17751__$1;
(statearr_17754_17912[(2)] = null);

(statearr_17754_17912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (5))){
var state_17751__$1 = state_17751;
var statearr_17755_17913 = state_17751__$1;
(statearr_17755_17913[(2)] = null);

(statearr_17755_17913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (4))){
var inst_17741 = (state_17751[(2)]);
var inst_17742 = async.call(null,inst_17741);
var state_17751__$1 = state_17751;
if(cljs.core.truth_(inst_17742)){
var statearr_17756_17914 = state_17751__$1;
(statearr_17756_17914[(1)] = (5));

} else {
var statearr_17757_17915 = state_17751__$1;
(statearr_17757_17915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (3))){
var inst_17749 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17751__$1,inst_17749);
} else {
if((state_val_17752 === (2))){
var state_17751__$1 = state_17751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17751__$1,(4),jobs);
} else {
if((state_val_17752 === (1))){
var state_17751__$1 = state_17751;
var statearr_17758_17916 = state_17751__$1;
(statearr_17758_17916[(2)] = null);

(statearr_17758_17916[(1)] = (2));


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
});})(__17907,c__6633__auto___17910,G__17738_17908,n__4633__auto___17906,jobs,results,process,async))
;
return ((function (__17907,switch__6577__auto__,c__6633__auto___17910,G__17738_17908,n__4633__auto___17906,jobs,results,process,async){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_17762 = [null,null,null,null,null,null,null];
(statearr_17762[(0)] = state_machine__6578__auto__);

(statearr_17762[(1)] = (1));

return statearr_17762;
});
var state_machine__6578__auto____1 = (function (state_17751){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_17751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e17763){if((e17763 instanceof Object)){
var ex__6581__auto__ = e17763;
var statearr_17764_17917 = state_17751;
(statearr_17764_17917[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17918 = state_17751;
state_17751 = G__17918;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_17751){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_17751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(__17907,switch__6577__auto__,c__6633__auto___17910,G__17738_17908,n__4633__auto___17906,jobs,results,process,async))
})();
var state__6635__auto__ = (function (){var statearr_17765 = f__6634__auto__.call(null);
(statearr_17765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___17910);

return statearr_17765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(__17907,c__6633__auto___17910,G__17738_17908,n__4633__auto___17906,jobs,results,process,async))
);


break;
case "compute":
var c__6633__auto___17919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17907,c__6633__auto___17919,G__17738_17908,n__4633__auto___17906,jobs,results,process,async){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (__17907,c__6633__auto___17919,G__17738_17908,n__4633__auto___17906,jobs,results,process,async){
return (function (state_17778){
var state_val_17779 = (state_17778[(1)]);
if((state_val_17779 === (7))){
var inst_17774 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
var statearr_17780_17920 = state_17778__$1;
(statearr_17780_17920[(2)] = inst_17774);

(statearr_17780_17920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (6))){
var state_17778__$1 = state_17778;
var statearr_17781_17921 = state_17778__$1;
(statearr_17781_17921[(2)] = null);

(statearr_17781_17921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (5))){
var state_17778__$1 = state_17778;
var statearr_17782_17922 = state_17778__$1;
(statearr_17782_17922[(2)] = null);

(statearr_17782_17922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (4))){
var inst_17768 = (state_17778[(2)]);
var inst_17769 = process.call(null,inst_17768);
var state_17778__$1 = state_17778;
if(cljs.core.truth_(inst_17769)){
var statearr_17783_17923 = state_17778__$1;
(statearr_17783_17923[(1)] = (5));

} else {
var statearr_17784_17924 = state_17778__$1;
(statearr_17784_17924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (3))){
var inst_17776 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17778__$1,inst_17776);
} else {
if((state_val_17779 === (2))){
var state_17778__$1 = state_17778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17778__$1,(4),jobs);
} else {
if((state_val_17779 === (1))){
var state_17778__$1 = state_17778;
var statearr_17785_17925 = state_17778__$1;
(statearr_17785_17925[(2)] = null);

(statearr_17785_17925[(1)] = (2));


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
});})(__17907,c__6633__auto___17919,G__17738_17908,n__4633__auto___17906,jobs,results,process,async))
;
return ((function (__17907,switch__6577__auto__,c__6633__auto___17919,G__17738_17908,n__4633__auto___17906,jobs,results,process,async){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_17789 = [null,null,null,null,null,null,null];
(statearr_17789[(0)] = state_machine__6578__auto__);

(statearr_17789[(1)] = (1));

return statearr_17789;
});
var state_machine__6578__auto____1 = (function (state_17778){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_17778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e17790){if((e17790 instanceof Object)){
var ex__6581__auto__ = e17790;
var statearr_17791_17926 = state_17778;
(statearr_17791_17926[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17927 = state_17778;
state_17778 = G__17927;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_17778){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_17778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(__17907,switch__6577__auto__,c__6633__auto___17919,G__17738_17908,n__4633__auto___17906,jobs,results,process,async))
})();
var state__6635__auto__ = (function (){var statearr_17792 = f__6634__auto__.call(null);
(statearr_17792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___17919);

return statearr_17792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(__17907,c__6633__auto___17919,G__17738_17908,n__4633__auto___17906,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17928 = (__17907 + (1));
__17907 = G__17928;
continue;
} else {
}
break;
}

var c__6633__auto___17929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___17929,jobs,results,process,async){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___17929,jobs,results,process,async){
return (function (state_17814){
var state_val_17815 = (state_17814[(1)]);
if((state_val_17815 === (9))){
var inst_17807 = (state_17814[(2)]);
var state_17814__$1 = (function (){var statearr_17816 = state_17814;
(statearr_17816[(7)] = inst_17807);

return statearr_17816;
})();
var statearr_17817_17930 = state_17814__$1;
(statearr_17817_17930[(2)] = null);

(statearr_17817_17930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17815 === (8))){
var inst_17800 = (state_17814[(8)]);
var inst_17805 = (state_17814[(2)]);
var state_17814__$1 = (function (){var statearr_17818 = state_17814;
(statearr_17818[(9)] = inst_17805);

return statearr_17818;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17814__$1,(9),results,inst_17800);
} else {
if((state_val_17815 === (7))){
var inst_17810 = (state_17814[(2)]);
var state_17814__$1 = state_17814;
var statearr_17819_17931 = state_17814__$1;
(statearr_17819_17931[(2)] = inst_17810);

(statearr_17819_17931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17815 === (6))){
var inst_17800 = (state_17814[(8)]);
var inst_17795 = (state_17814[(10)]);
var inst_17800__$1 = cljs.core.async.chan.call(null,(1));
var inst_17801 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17802 = [inst_17795,inst_17800__$1];
var inst_17803 = (new cljs.core.PersistentVector(null,2,(5),inst_17801,inst_17802,null));
var state_17814__$1 = (function (){var statearr_17820 = state_17814;
(statearr_17820[(8)] = inst_17800__$1);

return statearr_17820;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17814__$1,(8),jobs,inst_17803);
} else {
if((state_val_17815 === (5))){
var inst_17798 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17814__$1 = state_17814;
var statearr_17821_17932 = state_17814__$1;
(statearr_17821_17932[(2)] = inst_17798);

(statearr_17821_17932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17815 === (4))){
var inst_17795 = (state_17814[(10)]);
var inst_17795__$1 = (state_17814[(2)]);
var inst_17796 = (inst_17795__$1 == null);
var state_17814__$1 = (function (){var statearr_17822 = state_17814;
(statearr_17822[(10)] = inst_17795__$1);

return statearr_17822;
})();
if(cljs.core.truth_(inst_17796)){
var statearr_17823_17933 = state_17814__$1;
(statearr_17823_17933[(1)] = (5));

} else {
var statearr_17824_17934 = state_17814__$1;
(statearr_17824_17934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17815 === (3))){
var inst_17812 = (state_17814[(2)]);
var state_17814__$1 = state_17814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17814__$1,inst_17812);
} else {
if((state_val_17815 === (2))){
var state_17814__$1 = state_17814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17814__$1,(4),from);
} else {
if((state_val_17815 === (1))){
var state_17814__$1 = state_17814;
var statearr_17825_17935 = state_17814__$1;
(statearr_17825_17935[(2)] = null);

(statearr_17825_17935[(1)] = (2));


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
}
});})(c__6633__auto___17929,jobs,results,process,async))
;
return ((function (switch__6577__auto__,c__6633__auto___17929,jobs,results,process,async){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_17829 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17829[(0)] = state_machine__6578__auto__);

(statearr_17829[(1)] = (1));

return statearr_17829;
});
var state_machine__6578__auto____1 = (function (state_17814){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_17814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e17830){if((e17830 instanceof Object)){
var ex__6581__auto__ = e17830;
var statearr_17831_17936 = state_17814;
(statearr_17831_17936[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17937 = state_17814;
state_17814 = G__17937;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_17814){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_17814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___17929,jobs,results,process,async))
})();
var state__6635__auto__ = (function (){var statearr_17832 = f__6634__auto__.call(null);
(statearr_17832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___17929);

return statearr_17832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___17929,jobs,results,process,async))
);


var c__6633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto__,jobs,results,process,async){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto__,jobs,results,process,async){
return (function (state_17870){
var state_val_17871 = (state_17870[(1)]);
if((state_val_17871 === (7))){
var inst_17866 = (state_17870[(2)]);
var state_17870__$1 = state_17870;
var statearr_17872_17938 = state_17870__$1;
(statearr_17872_17938[(2)] = inst_17866);

(statearr_17872_17938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (20))){
var state_17870__$1 = state_17870;
var statearr_17873_17939 = state_17870__$1;
(statearr_17873_17939[(2)] = null);

(statearr_17873_17939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (1))){
var state_17870__$1 = state_17870;
var statearr_17874_17940 = state_17870__$1;
(statearr_17874_17940[(2)] = null);

(statearr_17874_17940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (4))){
var inst_17835 = (state_17870[(7)]);
var inst_17835__$1 = (state_17870[(2)]);
var inst_17836 = (inst_17835__$1 == null);
var state_17870__$1 = (function (){var statearr_17875 = state_17870;
(statearr_17875[(7)] = inst_17835__$1);

return statearr_17875;
})();
if(cljs.core.truth_(inst_17836)){
var statearr_17876_17941 = state_17870__$1;
(statearr_17876_17941[(1)] = (5));

} else {
var statearr_17877_17942 = state_17870__$1;
(statearr_17877_17942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (15))){
var inst_17848 = (state_17870[(8)]);
var state_17870__$1 = state_17870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17870__$1,(18),to,inst_17848);
} else {
if((state_val_17871 === (21))){
var inst_17861 = (state_17870[(2)]);
var state_17870__$1 = state_17870;
var statearr_17878_17943 = state_17870__$1;
(statearr_17878_17943[(2)] = inst_17861);

(statearr_17878_17943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (13))){
var inst_17863 = (state_17870[(2)]);
var state_17870__$1 = (function (){var statearr_17879 = state_17870;
(statearr_17879[(9)] = inst_17863);

return statearr_17879;
})();
var statearr_17880_17944 = state_17870__$1;
(statearr_17880_17944[(2)] = null);

(statearr_17880_17944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (6))){
var inst_17835 = (state_17870[(7)]);
var state_17870__$1 = state_17870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17870__$1,(11),inst_17835);
} else {
if((state_val_17871 === (17))){
var inst_17856 = (state_17870[(2)]);
var state_17870__$1 = state_17870;
if(cljs.core.truth_(inst_17856)){
var statearr_17881_17945 = state_17870__$1;
(statearr_17881_17945[(1)] = (19));

} else {
var statearr_17882_17946 = state_17870__$1;
(statearr_17882_17946[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (3))){
var inst_17868 = (state_17870[(2)]);
var state_17870__$1 = state_17870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17870__$1,inst_17868);
} else {
if((state_val_17871 === (12))){
var inst_17845 = (state_17870[(10)]);
var state_17870__$1 = state_17870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17870__$1,(14),inst_17845);
} else {
if((state_val_17871 === (2))){
var state_17870__$1 = state_17870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17870__$1,(4),results);
} else {
if((state_val_17871 === (19))){
var state_17870__$1 = state_17870;
var statearr_17883_17947 = state_17870__$1;
(statearr_17883_17947[(2)] = null);

(statearr_17883_17947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (11))){
var inst_17845 = (state_17870[(2)]);
var state_17870__$1 = (function (){var statearr_17884 = state_17870;
(statearr_17884[(10)] = inst_17845);

return statearr_17884;
})();
var statearr_17885_17948 = state_17870__$1;
(statearr_17885_17948[(2)] = null);

(statearr_17885_17948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (9))){
var state_17870__$1 = state_17870;
var statearr_17886_17949 = state_17870__$1;
(statearr_17886_17949[(2)] = null);

(statearr_17886_17949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (5))){
var state_17870__$1 = state_17870;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17887_17950 = state_17870__$1;
(statearr_17887_17950[(1)] = (8));

} else {
var statearr_17888_17951 = state_17870__$1;
(statearr_17888_17951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (14))){
var inst_17848 = (state_17870[(8)]);
var inst_17850 = (state_17870[(11)]);
var inst_17848__$1 = (state_17870[(2)]);
var inst_17849 = (inst_17848__$1 == null);
var inst_17850__$1 = cljs.core.not.call(null,inst_17849);
var state_17870__$1 = (function (){var statearr_17889 = state_17870;
(statearr_17889[(8)] = inst_17848__$1);

(statearr_17889[(11)] = inst_17850__$1);

return statearr_17889;
})();
if(inst_17850__$1){
var statearr_17890_17952 = state_17870__$1;
(statearr_17890_17952[(1)] = (15));

} else {
var statearr_17891_17953 = state_17870__$1;
(statearr_17891_17953[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (16))){
var inst_17850 = (state_17870[(11)]);
var state_17870__$1 = state_17870;
var statearr_17892_17954 = state_17870__$1;
(statearr_17892_17954[(2)] = inst_17850);

(statearr_17892_17954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (10))){
var inst_17842 = (state_17870[(2)]);
var state_17870__$1 = state_17870;
var statearr_17893_17955 = state_17870__$1;
(statearr_17893_17955[(2)] = inst_17842);

(statearr_17893_17955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (18))){
var inst_17853 = (state_17870[(2)]);
var state_17870__$1 = state_17870;
var statearr_17894_17956 = state_17870__$1;
(statearr_17894_17956[(2)] = inst_17853);

(statearr_17894_17956[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (8))){
var inst_17839 = cljs.core.async.close_BANG_.call(null,to);
var state_17870__$1 = state_17870;
var statearr_17895_17957 = state_17870__$1;
(statearr_17895_17957[(2)] = inst_17839);

(statearr_17895_17957[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6633__auto__,jobs,results,process,async))
;
return ((function (switch__6577__auto__,c__6633__auto__,jobs,results,process,async){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_17899 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17899[(0)] = state_machine__6578__auto__);

(statearr_17899[(1)] = (1));

return statearr_17899;
});
var state_machine__6578__auto____1 = (function (state_17870){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_17870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e17900){if((e17900 instanceof Object)){
var ex__6581__auto__ = e17900;
var statearr_17901_17958 = state_17870;
(statearr_17901_17958[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17959 = state_17870;
state_17870 = G__17959;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_17870){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_17870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto__,jobs,results,process,async))
})();
var state__6635__auto__ = (function (){var statearr_17902 = f__6634__auto__.call(null);
(statearr_17902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto__);

return statearr_17902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto__,jobs,results,process,async))
);

return c__6633__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6633__auto___18060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___18060,tc,fc){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___18060,tc,fc){
return (function (state_18035){
var state_val_18036 = (state_18035[(1)]);
if((state_val_18036 === (7))){
var inst_18031 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
var statearr_18037_18061 = state_18035__$1;
(statearr_18037_18061[(2)] = inst_18031);

(statearr_18037_18061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (1))){
var state_18035__$1 = state_18035;
var statearr_18038_18062 = state_18035__$1;
(statearr_18038_18062[(2)] = null);

(statearr_18038_18062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (4))){
var inst_18012 = (state_18035[(7)]);
var inst_18012__$1 = (state_18035[(2)]);
var inst_18013 = (inst_18012__$1 == null);
var state_18035__$1 = (function (){var statearr_18039 = state_18035;
(statearr_18039[(7)] = inst_18012__$1);

return statearr_18039;
})();
if(cljs.core.truth_(inst_18013)){
var statearr_18040_18063 = state_18035__$1;
(statearr_18040_18063[(1)] = (5));

} else {
var statearr_18041_18064 = state_18035__$1;
(statearr_18041_18064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (13))){
var state_18035__$1 = state_18035;
var statearr_18042_18065 = state_18035__$1;
(statearr_18042_18065[(2)] = null);

(statearr_18042_18065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (6))){
var inst_18012 = (state_18035[(7)]);
var inst_18018 = p.call(null,inst_18012);
var state_18035__$1 = state_18035;
if(cljs.core.truth_(inst_18018)){
var statearr_18043_18066 = state_18035__$1;
(statearr_18043_18066[(1)] = (9));

} else {
var statearr_18044_18067 = state_18035__$1;
(statearr_18044_18067[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (3))){
var inst_18033 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18035__$1,inst_18033);
} else {
if((state_val_18036 === (12))){
var state_18035__$1 = state_18035;
var statearr_18045_18068 = state_18035__$1;
(statearr_18045_18068[(2)] = null);

(statearr_18045_18068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (2))){
var state_18035__$1 = state_18035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18035__$1,(4),ch);
} else {
if((state_val_18036 === (11))){
var inst_18012 = (state_18035[(7)]);
var inst_18022 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18035__$1,(8),inst_18022,inst_18012);
} else {
if((state_val_18036 === (9))){
var state_18035__$1 = state_18035;
var statearr_18046_18069 = state_18035__$1;
(statearr_18046_18069[(2)] = tc);

(statearr_18046_18069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (5))){
var inst_18015 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18016 = cljs.core.async.close_BANG_.call(null,fc);
var state_18035__$1 = (function (){var statearr_18047 = state_18035;
(statearr_18047[(8)] = inst_18015);

return statearr_18047;
})();
var statearr_18048_18070 = state_18035__$1;
(statearr_18048_18070[(2)] = inst_18016);

(statearr_18048_18070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (14))){
var inst_18029 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
var statearr_18049_18071 = state_18035__$1;
(statearr_18049_18071[(2)] = inst_18029);

(statearr_18049_18071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (10))){
var state_18035__$1 = state_18035;
var statearr_18050_18072 = state_18035__$1;
(statearr_18050_18072[(2)] = fc);

(statearr_18050_18072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (8))){
var inst_18024 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
if(cljs.core.truth_(inst_18024)){
var statearr_18051_18073 = state_18035__$1;
(statearr_18051_18073[(1)] = (12));

} else {
var statearr_18052_18074 = state_18035__$1;
(statearr_18052_18074[(1)] = (13));

}

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
}
}
}
}
}
}
});})(c__6633__auto___18060,tc,fc))
;
return ((function (switch__6577__auto__,c__6633__auto___18060,tc,fc){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_18056 = [null,null,null,null,null,null,null,null,null];
(statearr_18056[(0)] = state_machine__6578__auto__);

(statearr_18056[(1)] = (1));

return statearr_18056;
});
var state_machine__6578__auto____1 = (function (state_18035){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_18035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e18057){if((e18057 instanceof Object)){
var ex__6581__auto__ = e18057;
var statearr_18058_18075 = state_18035;
(statearr_18058_18075[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18076 = state_18035;
state_18035 = G__18076;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_18035){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_18035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___18060,tc,fc))
})();
var state__6635__auto__ = (function (){var statearr_18059 = f__6634__auto__.call(null);
(statearr_18059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___18060);

return statearr_18059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___18060,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto__){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto__){
return (function (state_18123){
var state_val_18124 = (state_18123[(1)]);
if((state_val_18124 === (7))){
var inst_18119 = (state_18123[(2)]);
var state_18123__$1 = state_18123;
var statearr_18125_18141 = state_18123__$1;
(statearr_18125_18141[(2)] = inst_18119);

(statearr_18125_18141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (6))){
var inst_18112 = (state_18123[(7)]);
var inst_18109 = (state_18123[(8)]);
var inst_18116 = f.call(null,inst_18109,inst_18112);
var inst_18109__$1 = inst_18116;
var state_18123__$1 = (function (){var statearr_18126 = state_18123;
(statearr_18126[(8)] = inst_18109__$1);

return statearr_18126;
})();
var statearr_18127_18142 = state_18123__$1;
(statearr_18127_18142[(2)] = null);

(statearr_18127_18142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (5))){
var inst_18109 = (state_18123[(8)]);
var state_18123__$1 = state_18123;
var statearr_18128_18143 = state_18123__$1;
(statearr_18128_18143[(2)] = inst_18109);

(statearr_18128_18143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (4))){
var inst_18112 = (state_18123[(7)]);
var inst_18112__$1 = (state_18123[(2)]);
var inst_18113 = (inst_18112__$1 == null);
var state_18123__$1 = (function (){var statearr_18129 = state_18123;
(statearr_18129[(7)] = inst_18112__$1);

return statearr_18129;
})();
if(cljs.core.truth_(inst_18113)){
var statearr_18130_18144 = state_18123__$1;
(statearr_18130_18144[(1)] = (5));

} else {
var statearr_18131_18145 = state_18123__$1;
(statearr_18131_18145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (3))){
var inst_18121 = (state_18123[(2)]);
var state_18123__$1 = state_18123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18123__$1,inst_18121);
} else {
if((state_val_18124 === (2))){
var state_18123__$1 = state_18123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18123__$1,(4),ch);
} else {
if((state_val_18124 === (1))){
var inst_18109 = init;
var state_18123__$1 = (function (){var statearr_18132 = state_18123;
(statearr_18132[(8)] = inst_18109);

return statearr_18132;
})();
var statearr_18133_18146 = state_18123__$1;
(statearr_18133_18146[(2)] = null);

(statearr_18133_18146[(1)] = (2));


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
});})(c__6633__auto__))
;
return ((function (switch__6577__auto__,c__6633__auto__){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_18137 = [null,null,null,null,null,null,null,null,null];
(statearr_18137[(0)] = state_machine__6578__auto__);

(statearr_18137[(1)] = (1));

return statearr_18137;
});
var state_machine__6578__auto____1 = (function (state_18123){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_18123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e18138){if((e18138 instanceof Object)){
var ex__6581__auto__ = e18138;
var statearr_18139_18147 = state_18123;
(statearr_18139_18147[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18148 = state_18123;
state_18123 = G__18148;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_18123){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_18123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto__))
})();
var state__6635__auto__ = (function (){var statearr_18140 = f__6634__auto__.call(null);
(statearr_18140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto__);

return statearr_18140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto__))
);

return c__6633__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto__){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto__){
return (function (state_18222){
var state_val_18223 = (state_18222[(1)]);
if((state_val_18223 === (7))){
var inst_18204 = (state_18222[(2)]);
var state_18222__$1 = state_18222;
var statearr_18224_18247 = state_18222__$1;
(statearr_18224_18247[(2)] = inst_18204);

(statearr_18224_18247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (1))){
var inst_18198 = cljs.core.seq.call(null,coll);
var inst_18199 = inst_18198;
var state_18222__$1 = (function (){var statearr_18225 = state_18222;
(statearr_18225[(7)] = inst_18199);

return statearr_18225;
})();
var statearr_18226_18248 = state_18222__$1;
(statearr_18226_18248[(2)] = null);

(statearr_18226_18248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (4))){
var inst_18199 = (state_18222[(7)]);
var inst_18202 = cljs.core.first.call(null,inst_18199);
var state_18222__$1 = state_18222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18222__$1,(7),ch,inst_18202);
} else {
if((state_val_18223 === (13))){
var inst_18216 = (state_18222[(2)]);
var state_18222__$1 = state_18222;
var statearr_18227_18249 = state_18222__$1;
(statearr_18227_18249[(2)] = inst_18216);

(statearr_18227_18249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (6))){
var inst_18207 = (state_18222[(2)]);
var state_18222__$1 = state_18222;
if(cljs.core.truth_(inst_18207)){
var statearr_18228_18250 = state_18222__$1;
(statearr_18228_18250[(1)] = (8));

} else {
var statearr_18229_18251 = state_18222__$1;
(statearr_18229_18251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (3))){
var inst_18220 = (state_18222[(2)]);
var state_18222__$1 = state_18222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18222__$1,inst_18220);
} else {
if((state_val_18223 === (12))){
var state_18222__$1 = state_18222;
var statearr_18230_18252 = state_18222__$1;
(statearr_18230_18252[(2)] = null);

(statearr_18230_18252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (2))){
var inst_18199 = (state_18222[(7)]);
var state_18222__$1 = state_18222;
if(cljs.core.truth_(inst_18199)){
var statearr_18231_18253 = state_18222__$1;
(statearr_18231_18253[(1)] = (4));

} else {
var statearr_18232_18254 = state_18222__$1;
(statearr_18232_18254[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (11))){
var inst_18213 = cljs.core.async.close_BANG_.call(null,ch);
var state_18222__$1 = state_18222;
var statearr_18233_18255 = state_18222__$1;
(statearr_18233_18255[(2)] = inst_18213);

(statearr_18233_18255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (9))){
var state_18222__$1 = state_18222;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18234_18256 = state_18222__$1;
(statearr_18234_18256[(1)] = (11));

} else {
var statearr_18235_18257 = state_18222__$1;
(statearr_18235_18257[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (5))){
var inst_18199 = (state_18222[(7)]);
var state_18222__$1 = state_18222;
var statearr_18236_18258 = state_18222__$1;
(statearr_18236_18258[(2)] = inst_18199);

(statearr_18236_18258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (10))){
var inst_18218 = (state_18222[(2)]);
var state_18222__$1 = state_18222;
var statearr_18237_18259 = state_18222__$1;
(statearr_18237_18259[(2)] = inst_18218);

(statearr_18237_18259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (8))){
var inst_18199 = (state_18222[(7)]);
var inst_18209 = cljs.core.next.call(null,inst_18199);
var inst_18199__$1 = inst_18209;
var state_18222__$1 = (function (){var statearr_18238 = state_18222;
(statearr_18238[(7)] = inst_18199__$1);

return statearr_18238;
})();
var statearr_18239_18260 = state_18222__$1;
(statearr_18239_18260[(2)] = null);

(statearr_18239_18260[(1)] = (2));


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
}
}
}
}
}
});})(c__6633__auto__))
;
return ((function (switch__6577__auto__,c__6633__auto__){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_18243 = [null,null,null,null,null,null,null,null];
(statearr_18243[(0)] = state_machine__6578__auto__);

(statearr_18243[(1)] = (1));

return statearr_18243;
});
var state_machine__6578__auto____1 = (function (state_18222){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_18222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e18244){if((e18244 instanceof Object)){
var ex__6581__auto__ = e18244;
var statearr_18245_18261 = state_18222;
(statearr_18245_18261[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18262 = state_18222;
state_18222 = G__18262;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_18222){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_18222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto__))
})();
var state__6635__auto__ = (function (){var statearr_18246 = f__6634__auto__.call(null);
(statearr_18246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto__);

return statearr_18246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto__))
);

return c__6633__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj18264 = {};
return obj18264;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3734__auto__ = _;
if(and__3734__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3734__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4390__auto__ = (((_ == null))?null:_);
return (function (){var or__3746__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj18266 = {};
return obj18266;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3734__auto__ = m;
if(and__3734__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3734__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4390__auto__ = (((m == null))?null:m);
return (function (){var or__3746__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3734__auto__ = m;
if(and__3734__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3734__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4390__auto__ = (((m == null))?null:m);
return (function (){var or__3746__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3734__auto__ = m;
if(and__3734__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3734__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4390__auto__ = (((m == null))?null:m);
return (function (){var or__3746__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t18488 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18488 = (function (cs,ch,mult,meta18489){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18489 = meta18489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18488.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18488.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18488.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18488.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t18488.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18488.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18490){
var self__ = this;
var _18490__$1 = this;
return self__.meta18489;
});})(cs))
;

cljs.core.async.t18488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18490,meta18489__$1){
var self__ = this;
var _18490__$1 = this;
return (new cljs.core.async.t18488(self__.cs,self__.ch,self__.mult,meta18489__$1));
});})(cs))
;

cljs.core.async.t18488.cljs$lang$type = true;

cljs.core.async.t18488.cljs$lang$ctorStr = "cljs.core.async/t18488";

cljs.core.async.t18488.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cljs.core.async/t18488");
});})(cs))
;

cljs.core.async.__GT_t18488 = ((function (cs){
return (function __GT_t18488(cs__$1,ch__$1,mult__$1,meta18489){
return (new cljs.core.async.t18488(cs__$1,ch__$1,mult__$1,meta18489));
});})(cs))
;

}

return (new cljs.core.async.t18488(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Users\\Hussam\\Dev\\acme\\resources\\public\\js\\out\\cljs\\core\\async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6633__auto___18709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___18709,cs,m,dchan,dctr,done){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___18709,cs,m,dchan,dctr,done){
return (function (state_18621){
var state_val_18622 = (state_18621[(1)]);
if((state_val_18622 === (7))){
var inst_18617 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18623_18710 = state_18621__$1;
(statearr_18623_18710[(2)] = inst_18617);

(statearr_18623_18710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (20))){
var inst_18522 = (state_18621[(7)]);
var inst_18532 = cljs.core.first.call(null,inst_18522);
var inst_18533 = cljs.core.nth.call(null,inst_18532,(0),null);
var inst_18534 = cljs.core.nth.call(null,inst_18532,(1),null);
var state_18621__$1 = (function (){var statearr_18624 = state_18621;
(statearr_18624[(8)] = inst_18533);

return statearr_18624;
})();
if(cljs.core.truth_(inst_18534)){
var statearr_18625_18711 = state_18621__$1;
(statearr_18625_18711[(1)] = (22));

} else {
var statearr_18626_18712 = state_18621__$1;
(statearr_18626_18712[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (27))){
var inst_18493 = (state_18621[(9)]);
var inst_18564 = (state_18621[(10)]);
var inst_18562 = (state_18621[(11)]);
var inst_18569 = (state_18621[(12)]);
var inst_18569__$1 = cljs.core._nth.call(null,inst_18562,inst_18564);
var inst_18570 = cljs.core.async.put_BANG_.call(null,inst_18569__$1,inst_18493,done);
var state_18621__$1 = (function (){var statearr_18627 = state_18621;
(statearr_18627[(12)] = inst_18569__$1);

return statearr_18627;
})();
if(cljs.core.truth_(inst_18570)){
var statearr_18628_18713 = state_18621__$1;
(statearr_18628_18713[(1)] = (30));

} else {
var statearr_18629_18714 = state_18621__$1;
(statearr_18629_18714[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (1))){
var state_18621__$1 = state_18621;
var statearr_18630_18715 = state_18621__$1;
(statearr_18630_18715[(2)] = null);

(statearr_18630_18715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (24))){
var inst_18522 = (state_18621[(7)]);
var inst_18539 = (state_18621[(2)]);
var inst_18540 = cljs.core.next.call(null,inst_18522);
var inst_18502 = inst_18540;
var inst_18503 = null;
var inst_18504 = (0);
var inst_18505 = (0);
var state_18621__$1 = (function (){var statearr_18631 = state_18621;
(statearr_18631[(13)] = inst_18502);

(statearr_18631[(14)] = inst_18539);

(statearr_18631[(15)] = inst_18505);

(statearr_18631[(16)] = inst_18503);

(statearr_18631[(17)] = inst_18504);

return statearr_18631;
})();
var statearr_18632_18716 = state_18621__$1;
(statearr_18632_18716[(2)] = null);

(statearr_18632_18716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (39))){
var state_18621__$1 = state_18621;
var statearr_18636_18717 = state_18621__$1;
(statearr_18636_18717[(2)] = null);

(statearr_18636_18717[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (4))){
var inst_18493 = (state_18621[(9)]);
var inst_18493__$1 = (state_18621[(2)]);
var inst_18494 = (inst_18493__$1 == null);
var state_18621__$1 = (function (){var statearr_18637 = state_18621;
(statearr_18637[(9)] = inst_18493__$1);

return statearr_18637;
})();
if(cljs.core.truth_(inst_18494)){
var statearr_18638_18718 = state_18621__$1;
(statearr_18638_18718[(1)] = (5));

} else {
var statearr_18639_18719 = state_18621__$1;
(statearr_18639_18719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (15))){
var inst_18502 = (state_18621[(13)]);
var inst_18505 = (state_18621[(15)]);
var inst_18503 = (state_18621[(16)]);
var inst_18504 = (state_18621[(17)]);
var inst_18518 = (state_18621[(2)]);
var inst_18519 = (inst_18505 + (1));
var tmp18633 = inst_18502;
var tmp18634 = inst_18503;
var tmp18635 = inst_18504;
var inst_18502__$1 = tmp18633;
var inst_18503__$1 = tmp18634;
var inst_18504__$1 = tmp18635;
var inst_18505__$1 = inst_18519;
var state_18621__$1 = (function (){var statearr_18640 = state_18621;
(statearr_18640[(13)] = inst_18502__$1);

(statearr_18640[(15)] = inst_18505__$1);

(statearr_18640[(16)] = inst_18503__$1);

(statearr_18640[(17)] = inst_18504__$1);

(statearr_18640[(18)] = inst_18518);

return statearr_18640;
})();
var statearr_18641_18720 = state_18621__$1;
(statearr_18641_18720[(2)] = null);

(statearr_18641_18720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (21))){
var inst_18543 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18645_18721 = state_18621__$1;
(statearr_18645_18721[(2)] = inst_18543);

(statearr_18645_18721[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (31))){
var inst_18569 = (state_18621[(12)]);
var inst_18573 = done.call(null,null);
var inst_18574 = cljs.core.async.untap_STAR_.call(null,m,inst_18569);
var state_18621__$1 = (function (){var statearr_18646 = state_18621;
(statearr_18646[(19)] = inst_18573);

return statearr_18646;
})();
var statearr_18647_18722 = state_18621__$1;
(statearr_18647_18722[(2)] = inst_18574);

(statearr_18647_18722[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (32))){
var inst_18564 = (state_18621[(10)]);
var inst_18561 = (state_18621[(20)]);
var inst_18563 = (state_18621[(21)]);
var inst_18562 = (state_18621[(11)]);
var inst_18576 = (state_18621[(2)]);
var inst_18577 = (inst_18564 + (1));
var tmp18642 = inst_18561;
var tmp18643 = inst_18563;
var tmp18644 = inst_18562;
var inst_18561__$1 = tmp18642;
var inst_18562__$1 = tmp18644;
var inst_18563__$1 = tmp18643;
var inst_18564__$1 = inst_18577;
var state_18621__$1 = (function (){var statearr_18648 = state_18621;
(statearr_18648[(10)] = inst_18564__$1);

(statearr_18648[(20)] = inst_18561__$1);

(statearr_18648[(21)] = inst_18563__$1);

(statearr_18648[(11)] = inst_18562__$1);

(statearr_18648[(22)] = inst_18576);

return statearr_18648;
})();
var statearr_18649_18723 = state_18621__$1;
(statearr_18649_18723[(2)] = null);

(statearr_18649_18723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (40))){
var inst_18589 = (state_18621[(23)]);
var inst_18593 = done.call(null,null);
var inst_18594 = cljs.core.async.untap_STAR_.call(null,m,inst_18589);
var state_18621__$1 = (function (){var statearr_18650 = state_18621;
(statearr_18650[(24)] = inst_18593);

return statearr_18650;
})();
var statearr_18651_18724 = state_18621__$1;
(statearr_18651_18724[(2)] = inst_18594);

(statearr_18651_18724[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (33))){
var inst_18580 = (state_18621[(25)]);
var inst_18582 = cljs.core.chunked_seq_QMARK_.call(null,inst_18580);
var state_18621__$1 = state_18621;
if(inst_18582){
var statearr_18652_18725 = state_18621__$1;
(statearr_18652_18725[(1)] = (36));

} else {
var statearr_18653_18726 = state_18621__$1;
(statearr_18653_18726[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (13))){
var inst_18512 = (state_18621[(26)]);
var inst_18515 = cljs.core.async.close_BANG_.call(null,inst_18512);
var state_18621__$1 = state_18621;
var statearr_18654_18727 = state_18621__$1;
(statearr_18654_18727[(2)] = inst_18515);

(statearr_18654_18727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (22))){
var inst_18533 = (state_18621[(8)]);
var inst_18536 = cljs.core.async.close_BANG_.call(null,inst_18533);
var state_18621__$1 = state_18621;
var statearr_18655_18728 = state_18621__$1;
(statearr_18655_18728[(2)] = inst_18536);

(statearr_18655_18728[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (36))){
var inst_18580 = (state_18621[(25)]);
var inst_18584 = cljs.core.chunk_first.call(null,inst_18580);
var inst_18585 = cljs.core.chunk_rest.call(null,inst_18580);
var inst_18586 = cljs.core.count.call(null,inst_18584);
var inst_18561 = inst_18585;
var inst_18562 = inst_18584;
var inst_18563 = inst_18586;
var inst_18564 = (0);
var state_18621__$1 = (function (){var statearr_18656 = state_18621;
(statearr_18656[(10)] = inst_18564);

(statearr_18656[(20)] = inst_18561);

(statearr_18656[(21)] = inst_18563);

(statearr_18656[(11)] = inst_18562);

return statearr_18656;
})();
var statearr_18657_18729 = state_18621__$1;
(statearr_18657_18729[(2)] = null);

(statearr_18657_18729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (41))){
var inst_18580 = (state_18621[(25)]);
var inst_18596 = (state_18621[(2)]);
var inst_18597 = cljs.core.next.call(null,inst_18580);
var inst_18561 = inst_18597;
var inst_18562 = null;
var inst_18563 = (0);
var inst_18564 = (0);
var state_18621__$1 = (function (){var statearr_18658 = state_18621;
(statearr_18658[(10)] = inst_18564);

(statearr_18658[(27)] = inst_18596);

(statearr_18658[(20)] = inst_18561);

(statearr_18658[(21)] = inst_18563);

(statearr_18658[(11)] = inst_18562);

return statearr_18658;
})();
var statearr_18659_18730 = state_18621__$1;
(statearr_18659_18730[(2)] = null);

(statearr_18659_18730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (43))){
var state_18621__$1 = state_18621;
var statearr_18660_18731 = state_18621__$1;
(statearr_18660_18731[(2)] = null);

(statearr_18660_18731[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (29))){
var inst_18605 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18661_18732 = state_18621__$1;
(statearr_18661_18732[(2)] = inst_18605);

(statearr_18661_18732[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (44))){
var inst_18614 = (state_18621[(2)]);
var state_18621__$1 = (function (){var statearr_18662 = state_18621;
(statearr_18662[(28)] = inst_18614);

return statearr_18662;
})();
var statearr_18663_18733 = state_18621__$1;
(statearr_18663_18733[(2)] = null);

(statearr_18663_18733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (6))){
var inst_18553 = (state_18621[(29)]);
var inst_18552 = cljs.core.deref.call(null,cs);
var inst_18553__$1 = cljs.core.keys.call(null,inst_18552);
var inst_18554 = cljs.core.count.call(null,inst_18553__$1);
var inst_18555 = cljs.core.reset_BANG_.call(null,dctr,inst_18554);
var inst_18560 = cljs.core.seq.call(null,inst_18553__$1);
var inst_18561 = inst_18560;
var inst_18562 = null;
var inst_18563 = (0);
var inst_18564 = (0);
var state_18621__$1 = (function (){var statearr_18664 = state_18621;
(statearr_18664[(10)] = inst_18564);

(statearr_18664[(29)] = inst_18553__$1);

(statearr_18664[(20)] = inst_18561);

(statearr_18664[(21)] = inst_18563);

(statearr_18664[(11)] = inst_18562);

(statearr_18664[(30)] = inst_18555);

return statearr_18664;
})();
var statearr_18665_18734 = state_18621__$1;
(statearr_18665_18734[(2)] = null);

(statearr_18665_18734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (28))){
var inst_18580 = (state_18621[(25)]);
var inst_18561 = (state_18621[(20)]);
var inst_18580__$1 = cljs.core.seq.call(null,inst_18561);
var state_18621__$1 = (function (){var statearr_18666 = state_18621;
(statearr_18666[(25)] = inst_18580__$1);

return statearr_18666;
})();
if(inst_18580__$1){
var statearr_18667_18735 = state_18621__$1;
(statearr_18667_18735[(1)] = (33));

} else {
var statearr_18668_18736 = state_18621__$1;
(statearr_18668_18736[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (25))){
var inst_18564 = (state_18621[(10)]);
var inst_18563 = (state_18621[(21)]);
var inst_18566 = (inst_18564 < inst_18563);
var inst_18567 = inst_18566;
var state_18621__$1 = state_18621;
if(cljs.core.truth_(inst_18567)){
var statearr_18669_18737 = state_18621__$1;
(statearr_18669_18737[(1)] = (27));

} else {
var statearr_18670_18738 = state_18621__$1;
(statearr_18670_18738[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (34))){
var state_18621__$1 = state_18621;
var statearr_18671_18739 = state_18621__$1;
(statearr_18671_18739[(2)] = null);

(statearr_18671_18739[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (17))){
var state_18621__$1 = state_18621;
var statearr_18672_18740 = state_18621__$1;
(statearr_18672_18740[(2)] = null);

(statearr_18672_18740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (3))){
var inst_18619 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18621__$1,inst_18619);
} else {
if((state_val_18622 === (12))){
var inst_18548 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18673_18741 = state_18621__$1;
(statearr_18673_18741[(2)] = inst_18548);

(statearr_18673_18741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (2))){
var state_18621__$1 = state_18621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18621__$1,(4),ch);
} else {
if((state_val_18622 === (23))){
var state_18621__$1 = state_18621;
var statearr_18674_18742 = state_18621__$1;
(statearr_18674_18742[(2)] = null);

(statearr_18674_18742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (35))){
var inst_18603 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18675_18743 = state_18621__$1;
(statearr_18675_18743[(2)] = inst_18603);

(statearr_18675_18743[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (19))){
var inst_18522 = (state_18621[(7)]);
var inst_18526 = cljs.core.chunk_first.call(null,inst_18522);
var inst_18527 = cljs.core.chunk_rest.call(null,inst_18522);
var inst_18528 = cljs.core.count.call(null,inst_18526);
var inst_18502 = inst_18527;
var inst_18503 = inst_18526;
var inst_18504 = inst_18528;
var inst_18505 = (0);
var state_18621__$1 = (function (){var statearr_18676 = state_18621;
(statearr_18676[(13)] = inst_18502);

(statearr_18676[(15)] = inst_18505);

(statearr_18676[(16)] = inst_18503);

(statearr_18676[(17)] = inst_18504);

return statearr_18676;
})();
var statearr_18677_18744 = state_18621__$1;
(statearr_18677_18744[(2)] = null);

(statearr_18677_18744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (11))){
var inst_18502 = (state_18621[(13)]);
var inst_18522 = (state_18621[(7)]);
var inst_18522__$1 = cljs.core.seq.call(null,inst_18502);
var state_18621__$1 = (function (){var statearr_18678 = state_18621;
(statearr_18678[(7)] = inst_18522__$1);

return statearr_18678;
})();
if(inst_18522__$1){
var statearr_18679_18745 = state_18621__$1;
(statearr_18679_18745[(1)] = (16));

} else {
var statearr_18680_18746 = state_18621__$1;
(statearr_18680_18746[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (9))){
var inst_18550 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18681_18747 = state_18621__$1;
(statearr_18681_18747[(2)] = inst_18550);

(statearr_18681_18747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (5))){
var inst_18500 = cljs.core.deref.call(null,cs);
var inst_18501 = cljs.core.seq.call(null,inst_18500);
var inst_18502 = inst_18501;
var inst_18503 = null;
var inst_18504 = (0);
var inst_18505 = (0);
var state_18621__$1 = (function (){var statearr_18682 = state_18621;
(statearr_18682[(13)] = inst_18502);

(statearr_18682[(15)] = inst_18505);

(statearr_18682[(16)] = inst_18503);

(statearr_18682[(17)] = inst_18504);

return statearr_18682;
})();
var statearr_18683_18748 = state_18621__$1;
(statearr_18683_18748[(2)] = null);

(statearr_18683_18748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (14))){
var state_18621__$1 = state_18621;
var statearr_18684_18749 = state_18621__$1;
(statearr_18684_18749[(2)] = null);

(statearr_18684_18749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (45))){
var inst_18611 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18685_18750 = state_18621__$1;
(statearr_18685_18750[(2)] = inst_18611);

(statearr_18685_18750[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (26))){
var inst_18553 = (state_18621[(29)]);
var inst_18607 = (state_18621[(2)]);
var inst_18608 = cljs.core.seq.call(null,inst_18553);
var state_18621__$1 = (function (){var statearr_18686 = state_18621;
(statearr_18686[(31)] = inst_18607);

return statearr_18686;
})();
if(inst_18608){
var statearr_18687_18751 = state_18621__$1;
(statearr_18687_18751[(1)] = (42));

} else {
var statearr_18688_18752 = state_18621__$1;
(statearr_18688_18752[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (16))){
var inst_18522 = (state_18621[(7)]);
var inst_18524 = cljs.core.chunked_seq_QMARK_.call(null,inst_18522);
var state_18621__$1 = state_18621;
if(inst_18524){
var statearr_18689_18753 = state_18621__$1;
(statearr_18689_18753[(1)] = (19));

} else {
var statearr_18690_18754 = state_18621__$1;
(statearr_18690_18754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (38))){
var inst_18600 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18691_18755 = state_18621__$1;
(statearr_18691_18755[(2)] = inst_18600);

(statearr_18691_18755[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (30))){
var state_18621__$1 = state_18621;
var statearr_18692_18756 = state_18621__$1;
(statearr_18692_18756[(2)] = null);

(statearr_18692_18756[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (10))){
var inst_18505 = (state_18621[(15)]);
var inst_18503 = (state_18621[(16)]);
var inst_18511 = cljs.core._nth.call(null,inst_18503,inst_18505);
var inst_18512 = cljs.core.nth.call(null,inst_18511,(0),null);
var inst_18513 = cljs.core.nth.call(null,inst_18511,(1),null);
var state_18621__$1 = (function (){var statearr_18693 = state_18621;
(statearr_18693[(26)] = inst_18512);

return statearr_18693;
})();
if(cljs.core.truth_(inst_18513)){
var statearr_18694_18757 = state_18621__$1;
(statearr_18694_18757[(1)] = (13));

} else {
var statearr_18695_18758 = state_18621__$1;
(statearr_18695_18758[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (18))){
var inst_18546 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18696_18759 = state_18621__$1;
(statearr_18696_18759[(2)] = inst_18546);

(statearr_18696_18759[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (42))){
var state_18621__$1 = state_18621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18621__$1,(45),dchan);
} else {
if((state_val_18622 === (37))){
var inst_18580 = (state_18621[(25)]);
var inst_18493 = (state_18621[(9)]);
var inst_18589 = (state_18621[(23)]);
var inst_18589__$1 = cljs.core.first.call(null,inst_18580);
var inst_18590 = cljs.core.async.put_BANG_.call(null,inst_18589__$1,inst_18493,done);
var state_18621__$1 = (function (){var statearr_18697 = state_18621;
(statearr_18697[(23)] = inst_18589__$1);

return statearr_18697;
})();
if(cljs.core.truth_(inst_18590)){
var statearr_18698_18760 = state_18621__$1;
(statearr_18698_18760[(1)] = (39));

} else {
var statearr_18699_18761 = state_18621__$1;
(statearr_18699_18761[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18622 === (8))){
var inst_18505 = (state_18621[(15)]);
var inst_18504 = (state_18621[(17)]);
var inst_18507 = (inst_18505 < inst_18504);
var inst_18508 = inst_18507;
var state_18621__$1 = state_18621;
if(cljs.core.truth_(inst_18508)){
var statearr_18700_18762 = state_18621__$1;
(statearr_18700_18762[(1)] = (10));

} else {
var statearr_18701_18763 = state_18621__$1;
(statearr_18701_18763[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6633__auto___18709,cs,m,dchan,dctr,done))
;
return ((function (switch__6577__auto__,c__6633__auto___18709,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_18705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18705[(0)] = state_machine__6578__auto__);

(statearr_18705[(1)] = (1));

return statearr_18705;
});
var state_machine__6578__auto____1 = (function (state_18621){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_18621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e18706){if((e18706 instanceof Object)){
var ex__6581__auto__ = e18706;
var statearr_18707_18764 = state_18621;
(statearr_18707_18764[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18765 = state_18621;
state_18621 = G__18765;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_18621){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_18621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___18709,cs,m,dchan,dctr,done))
})();
var state__6635__auto__ = (function (){var statearr_18708 = f__6634__auto__.call(null);
(statearr_18708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___18709);

return statearr_18708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___18709,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj18767 = {};
return obj18767;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3734__auto__ = m;
if(and__3734__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3734__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4390__auto__ = (((m == null))?null:m);
return (function (){var or__3746__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3734__auto__ = m;
if(and__3734__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3734__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4390__auto__ = (((m == null))?null:m);
return (function (){var or__3746__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3734__auto__ = m;
if(and__3734__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3734__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4390__auto__ = (((m == null))?null:m);
return (function (){var or__3746__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3734__auto__ = m;
if(and__3734__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3734__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4390__auto__ = (((m == null))?null:m);
return (function (){var or__3746__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3734__auto__ = m;
if(and__3734__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3734__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4390__auto__ = (((m == null))?null:m);
return (function (){var or__3746__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18768){
var map__18773 = p__18768;
var map__18773__$1 = ((cljs.core.seq_QMARK_.call(null,map__18773))?cljs.core.apply.call(null,cljs.core.hash_map,map__18773):map__18773);
var opts = map__18773__$1;
var statearr_18774_18777 = state;
(statearr_18774_18777[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18773,map__18773__$1,opts){
return (function (val){
var statearr_18775_18778 = state;
(statearr_18775_18778[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18773,map__18773__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18776_18779 = state;
(statearr_18776_18779[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18768 = null;
if (arguments.length > 3) {
var G__18780__i = 0, G__18780__a = new Array(arguments.length -  3);
while (G__18780__i < G__18780__a.length) {G__18780__a[G__18780__i] = arguments[G__18780__i + 3]; ++G__18780__i;}
  p__18768 = new cljs.core.IndexedSeq(G__18780__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18768);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18781){
var state = cljs.core.first(arglist__18781);
arglist__18781 = cljs.core.next(arglist__18781);
var cont_block = cljs.core.first(arglist__18781);
arglist__18781 = cljs.core.next(arglist__18781);
var ports = cljs.core.first(arglist__18781);
var p__18768 = cljs.core.rest(arglist__18781);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18768);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t18901 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18901 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18902){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18902 = meta18902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18901.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18901.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18901.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18901.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18901.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18901.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18901.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18903){
var self__ = this;
var _18903__$1 = this;
return self__.meta18902;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18903,meta18902__$1){
var self__ = this;
var _18903__$1 = this;
return (new cljs.core.async.t18901(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18902__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18901.cljs$lang$type = true;

cljs.core.async.t18901.cljs$lang$ctorStr = "cljs.core.async/t18901";

cljs.core.async.t18901.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cljs.core.async/t18901");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18901 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18901(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18902){
return (new cljs.core.async.t18901(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18902));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18901(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Users\\Hussam\\Dev\\acme\\resources\\public\\js\\out\\cljs\\core\\async.cljs"], null)));
})()
;
var c__6633__auto___19020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___19020,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___19020,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18973){
var state_val_18974 = (state_18973[(1)]);
if((state_val_18974 === (7))){
var inst_18917 = (state_18973[(7)]);
var inst_18922 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18917);
var state_18973__$1 = state_18973;
var statearr_18975_19021 = state_18973__$1;
(statearr_18975_19021[(2)] = inst_18922);

(statearr_18975_19021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (20))){
var inst_18932 = (state_18973[(8)]);
var state_18973__$1 = state_18973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18973__$1,(23),out,inst_18932);
} else {
if((state_val_18974 === (1))){
var inst_18907 = (state_18973[(9)]);
var inst_18907__$1 = calc_state.call(null);
var inst_18908 = cljs.core.seq_QMARK_.call(null,inst_18907__$1);
var state_18973__$1 = (function (){var statearr_18976 = state_18973;
(statearr_18976[(9)] = inst_18907__$1);

return statearr_18976;
})();
if(inst_18908){
var statearr_18977_19022 = state_18973__$1;
(statearr_18977_19022[(1)] = (2));

} else {
var statearr_18978_19023 = state_18973__$1;
(statearr_18978_19023[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (24))){
var inst_18925 = (state_18973[(10)]);
var inst_18917 = inst_18925;
var state_18973__$1 = (function (){var statearr_18979 = state_18973;
(statearr_18979[(7)] = inst_18917);

return statearr_18979;
})();
var statearr_18980_19024 = state_18973__$1;
(statearr_18980_19024[(2)] = null);

(statearr_18980_19024[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (4))){
var inst_18907 = (state_18973[(9)]);
var inst_18913 = (state_18973[(2)]);
var inst_18914 = cljs.core.get.call(null,inst_18913,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18915 = cljs.core.get.call(null,inst_18913,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18916 = cljs.core.get.call(null,inst_18913,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18917 = inst_18907;
var state_18973__$1 = (function (){var statearr_18981 = state_18973;
(statearr_18981[(11)] = inst_18915);

(statearr_18981[(12)] = inst_18914);

(statearr_18981[(7)] = inst_18917);

(statearr_18981[(13)] = inst_18916);

return statearr_18981;
})();
var statearr_18982_19025 = state_18973__$1;
(statearr_18982_19025[(2)] = null);

(statearr_18982_19025[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (15))){
var state_18973__$1 = state_18973;
var statearr_18983_19026 = state_18973__$1;
(statearr_18983_19026[(2)] = null);

(statearr_18983_19026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (21))){
var inst_18925 = (state_18973[(10)]);
var inst_18917 = inst_18925;
var state_18973__$1 = (function (){var statearr_18984 = state_18973;
(statearr_18984[(7)] = inst_18917);

return statearr_18984;
})();
var statearr_18985_19027 = state_18973__$1;
(statearr_18985_19027[(2)] = null);

(statearr_18985_19027[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (13))){
var inst_18969 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
var statearr_18986_19028 = state_18973__$1;
(statearr_18986_19028[(2)] = inst_18969);

(statearr_18986_19028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (22))){
var inst_18967 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
var statearr_18987_19029 = state_18973__$1;
(statearr_18987_19029[(2)] = inst_18967);

(statearr_18987_19029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (6))){
var inst_18971 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18973__$1,inst_18971);
} else {
if((state_val_18974 === (25))){
var state_18973__$1 = state_18973;
var statearr_18988_19030 = state_18973__$1;
(statearr_18988_19030[(2)] = null);

(statearr_18988_19030[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (17))){
var inst_18947 = (state_18973[(14)]);
var state_18973__$1 = state_18973;
var statearr_18989_19031 = state_18973__$1;
(statearr_18989_19031[(2)] = inst_18947);

(statearr_18989_19031[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (3))){
var inst_18907 = (state_18973[(9)]);
var state_18973__$1 = state_18973;
var statearr_18990_19032 = state_18973__$1;
(statearr_18990_19032[(2)] = inst_18907);

(statearr_18990_19032[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (12))){
var inst_18928 = (state_18973[(15)]);
var inst_18947 = (state_18973[(14)]);
var inst_18933 = (state_18973[(16)]);
var inst_18947__$1 = inst_18928.call(null,inst_18933);
var state_18973__$1 = (function (){var statearr_18991 = state_18973;
(statearr_18991[(14)] = inst_18947__$1);

return statearr_18991;
})();
if(cljs.core.truth_(inst_18947__$1)){
var statearr_18992_19033 = state_18973__$1;
(statearr_18992_19033[(1)] = (17));

} else {
var statearr_18993_19034 = state_18973__$1;
(statearr_18993_19034[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (2))){
var inst_18907 = (state_18973[(9)]);
var inst_18910 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18907);
var state_18973__$1 = state_18973;
var statearr_18994_19035 = state_18973__$1;
(statearr_18994_19035[(2)] = inst_18910);

(statearr_18994_19035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (23))){
var inst_18958 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
if(cljs.core.truth_(inst_18958)){
var statearr_18995_19036 = state_18973__$1;
(statearr_18995_19036[(1)] = (24));

} else {
var statearr_18996_19037 = state_18973__$1;
(statearr_18996_19037[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (19))){
var inst_18955 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
if(cljs.core.truth_(inst_18955)){
var statearr_18997_19038 = state_18973__$1;
(statearr_18997_19038[(1)] = (20));

} else {
var statearr_18998_19039 = state_18973__$1;
(statearr_18998_19039[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (11))){
var inst_18932 = (state_18973[(8)]);
var inst_18938 = (inst_18932 == null);
var state_18973__$1 = state_18973;
if(cljs.core.truth_(inst_18938)){
var statearr_18999_19040 = state_18973__$1;
(statearr_18999_19040[(1)] = (14));

} else {
var statearr_19000_19041 = state_18973__$1;
(statearr_19000_19041[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (9))){
var inst_18925 = (state_18973[(10)]);
var inst_18925__$1 = (state_18973[(2)]);
var inst_18926 = cljs.core.get.call(null,inst_18925__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18927 = cljs.core.get.call(null,inst_18925__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18928 = cljs.core.get.call(null,inst_18925__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18973__$1 = (function (){var statearr_19001 = state_18973;
(statearr_19001[(15)] = inst_18928);

(statearr_19001[(10)] = inst_18925__$1);

(statearr_19001[(17)] = inst_18927);

return statearr_19001;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18973__$1,(10),inst_18926);
} else {
if((state_val_18974 === (5))){
var inst_18917 = (state_18973[(7)]);
var inst_18920 = cljs.core.seq_QMARK_.call(null,inst_18917);
var state_18973__$1 = state_18973;
if(inst_18920){
var statearr_19002_19042 = state_18973__$1;
(statearr_19002_19042[(1)] = (7));

} else {
var statearr_19003_19043 = state_18973__$1;
(statearr_19003_19043[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (14))){
var inst_18933 = (state_18973[(16)]);
var inst_18940 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18933);
var state_18973__$1 = state_18973;
var statearr_19004_19044 = state_18973__$1;
(statearr_19004_19044[(2)] = inst_18940);

(statearr_19004_19044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (26))){
var inst_18963 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
var statearr_19005_19045 = state_18973__$1;
(statearr_19005_19045[(2)] = inst_18963);

(statearr_19005_19045[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (16))){
var inst_18943 = (state_18973[(2)]);
var inst_18944 = calc_state.call(null);
var inst_18917 = inst_18944;
var state_18973__$1 = (function (){var statearr_19006 = state_18973;
(statearr_19006[(18)] = inst_18943);

(statearr_19006[(7)] = inst_18917);

return statearr_19006;
})();
var statearr_19007_19046 = state_18973__$1;
(statearr_19007_19046[(2)] = null);

(statearr_19007_19046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (10))){
var inst_18932 = (state_18973[(8)]);
var inst_18933 = (state_18973[(16)]);
var inst_18931 = (state_18973[(2)]);
var inst_18932__$1 = cljs.core.nth.call(null,inst_18931,(0),null);
var inst_18933__$1 = cljs.core.nth.call(null,inst_18931,(1),null);
var inst_18934 = (inst_18932__$1 == null);
var inst_18935 = cljs.core._EQ_.call(null,inst_18933__$1,change);
var inst_18936 = (inst_18934) || (inst_18935);
var state_18973__$1 = (function (){var statearr_19008 = state_18973;
(statearr_19008[(8)] = inst_18932__$1);

(statearr_19008[(16)] = inst_18933__$1);

return statearr_19008;
})();
if(cljs.core.truth_(inst_18936)){
var statearr_19009_19047 = state_18973__$1;
(statearr_19009_19047[(1)] = (11));

} else {
var statearr_19010_19048 = state_18973__$1;
(statearr_19010_19048[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (18))){
var inst_18928 = (state_18973[(15)]);
var inst_18927 = (state_18973[(17)]);
var inst_18933 = (state_18973[(16)]);
var inst_18950 = cljs.core.empty_QMARK_.call(null,inst_18928);
var inst_18951 = inst_18927.call(null,inst_18933);
var inst_18952 = cljs.core.not.call(null,inst_18951);
var inst_18953 = (inst_18950) && (inst_18952);
var state_18973__$1 = state_18973;
var statearr_19011_19049 = state_18973__$1;
(statearr_19011_19049[(2)] = inst_18953);

(statearr_19011_19049[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (8))){
var inst_18917 = (state_18973[(7)]);
var state_18973__$1 = state_18973;
var statearr_19012_19050 = state_18973__$1;
(statearr_19012_19050[(2)] = inst_18917);

(statearr_19012_19050[(1)] = (9));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6633__auto___19020,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6577__auto__,c__6633__auto___19020,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_19016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19016[(0)] = state_machine__6578__auto__);

(statearr_19016[(1)] = (1));

return statearr_19016;
});
var state_machine__6578__auto____1 = (function (state_18973){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_18973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e19017){if((e19017 instanceof Object)){
var ex__6581__auto__ = e19017;
var statearr_19018_19051 = state_18973;
(statearr_19018_19051[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19052 = state_18973;
state_18973 = G__19052;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_18973){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_18973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___19020,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6635__auto__ = (function (){var statearr_19019 = f__6634__auto__.call(null);
(statearr_19019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___19020);

return statearr_19019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___19020,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj19054 = {};
return obj19054;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3734__auto__ = p;
if(and__3734__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3734__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4390__auto__ = (((p == null))?null:p);
return (function (){var or__3746__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3734__auto__ = p;
if(and__3734__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3734__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4390__auto__ = (((p == null))?null:p);
return (function (){var or__3746__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3734__auto__ = p;
if(and__3734__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3734__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4390__auto__ = (((p == null))?null:p);
return (function (){var or__3746__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3734__auto__ = p;
if(and__3734__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3734__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4390__auto__ = (((p == null))?null:p);
return (function (){var or__3746__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4390__auto__)]);
if(or__3746__auto__){
return or__3746__auto__;
} else {
var or__3746__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3746__auto____$1){
return or__3746__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3746__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3746__auto__)){
return or__3746__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3746__auto__,mults){
return (function (p1__19055_SHARP_){
if(cljs.core.truth_(p1__19055_SHARP_.call(null,topic))){
return p1__19055_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19055_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3746__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19178 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19178 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19179){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19179 = meta19179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19178.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19178.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19178.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t19178.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t19178.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19178.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19178.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19180){
var self__ = this;
var _19180__$1 = this;
return self__.meta19179;
});})(mults,ensure_mult))
;

cljs.core.async.t19178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19180,meta19179__$1){
var self__ = this;
var _19180__$1 = this;
return (new cljs.core.async.t19178(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19179__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19178.cljs$lang$type = true;

cljs.core.async.t19178.cljs$lang$ctorStr = "cljs.core.async/t19178";

cljs.core.async.t19178.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cljs.core.async/t19178");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19178 = ((function (mults,ensure_mult){
return (function __GT_t19178(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19179){
return (new cljs.core.async.t19178(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19179));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19178(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Users\\Hussam\\Dev\\acme\\resources\\public\\js\\out\\cljs\\core\\async.cljs"], null)));
})()
;
var c__6633__auto___19300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___19300,mults,ensure_mult,p){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___19300,mults,ensure_mult,p){
return (function (state_19252){
var state_val_19253 = (state_19252[(1)]);
if((state_val_19253 === (7))){
var inst_19248 = (state_19252[(2)]);
var state_19252__$1 = state_19252;
var statearr_19254_19301 = state_19252__$1;
(statearr_19254_19301[(2)] = inst_19248);

(statearr_19254_19301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (20))){
var state_19252__$1 = state_19252;
var statearr_19255_19302 = state_19252__$1;
(statearr_19255_19302[(2)] = null);

(statearr_19255_19302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (1))){
var state_19252__$1 = state_19252;
var statearr_19256_19303 = state_19252__$1;
(statearr_19256_19303[(2)] = null);

(statearr_19256_19303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (24))){
var inst_19231 = (state_19252[(7)]);
var inst_19240 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19231);
var state_19252__$1 = state_19252;
var statearr_19257_19304 = state_19252__$1;
(statearr_19257_19304[(2)] = inst_19240);

(statearr_19257_19304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (4))){
var inst_19183 = (state_19252[(8)]);
var inst_19183__$1 = (state_19252[(2)]);
var inst_19184 = (inst_19183__$1 == null);
var state_19252__$1 = (function (){var statearr_19258 = state_19252;
(statearr_19258[(8)] = inst_19183__$1);

return statearr_19258;
})();
if(cljs.core.truth_(inst_19184)){
var statearr_19259_19305 = state_19252__$1;
(statearr_19259_19305[(1)] = (5));

} else {
var statearr_19260_19306 = state_19252__$1;
(statearr_19260_19306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (15))){
var inst_19225 = (state_19252[(2)]);
var state_19252__$1 = state_19252;
var statearr_19261_19307 = state_19252__$1;
(statearr_19261_19307[(2)] = inst_19225);

(statearr_19261_19307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (21))){
var inst_19245 = (state_19252[(2)]);
var state_19252__$1 = (function (){var statearr_19262 = state_19252;
(statearr_19262[(9)] = inst_19245);

return statearr_19262;
})();
var statearr_19263_19308 = state_19252__$1;
(statearr_19263_19308[(2)] = null);

(statearr_19263_19308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (13))){
var inst_19207 = (state_19252[(10)]);
var inst_19209 = cljs.core.chunked_seq_QMARK_.call(null,inst_19207);
var state_19252__$1 = state_19252;
if(inst_19209){
var statearr_19264_19309 = state_19252__$1;
(statearr_19264_19309[(1)] = (16));

} else {
var statearr_19265_19310 = state_19252__$1;
(statearr_19265_19310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (22))){
var inst_19237 = (state_19252[(2)]);
var state_19252__$1 = state_19252;
if(cljs.core.truth_(inst_19237)){
var statearr_19266_19311 = state_19252__$1;
(statearr_19266_19311[(1)] = (23));

} else {
var statearr_19267_19312 = state_19252__$1;
(statearr_19267_19312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (6))){
var inst_19231 = (state_19252[(7)]);
var inst_19183 = (state_19252[(8)]);
var inst_19233 = (state_19252[(11)]);
var inst_19231__$1 = topic_fn.call(null,inst_19183);
var inst_19232 = cljs.core.deref.call(null,mults);
var inst_19233__$1 = cljs.core.get.call(null,inst_19232,inst_19231__$1);
var state_19252__$1 = (function (){var statearr_19268 = state_19252;
(statearr_19268[(7)] = inst_19231__$1);

(statearr_19268[(11)] = inst_19233__$1);

return statearr_19268;
})();
if(cljs.core.truth_(inst_19233__$1)){
var statearr_19269_19313 = state_19252__$1;
(statearr_19269_19313[(1)] = (19));

} else {
var statearr_19270_19314 = state_19252__$1;
(statearr_19270_19314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (25))){
var inst_19242 = (state_19252[(2)]);
var state_19252__$1 = state_19252;
var statearr_19271_19315 = state_19252__$1;
(statearr_19271_19315[(2)] = inst_19242);

(statearr_19271_19315[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (17))){
var inst_19207 = (state_19252[(10)]);
var inst_19216 = cljs.core.first.call(null,inst_19207);
var inst_19217 = cljs.core.async.muxch_STAR_.call(null,inst_19216);
var inst_19218 = cljs.core.async.close_BANG_.call(null,inst_19217);
var inst_19219 = cljs.core.next.call(null,inst_19207);
var inst_19193 = inst_19219;
var inst_19194 = null;
var inst_19195 = (0);
var inst_19196 = (0);
var state_19252__$1 = (function (){var statearr_19272 = state_19252;
(statearr_19272[(12)] = inst_19195);

(statearr_19272[(13)] = inst_19218);

(statearr_19272[(14)] = inst_19194);

(statearr_19272[(15)] = inst_19196);

(statearr_19272[(16)] = inst_19193);

return statearr_19272;
})();
var statearr_19273_19316 = state_19252__$1;
(statearr_19273_19316[(2)] = null);

(statearr_19273_19316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (3))){
var inst_19250 = (state_19252[(2)]);
var state_19252__$1 = state_19252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19252__$1,inst_19250);
} else {
if((state_val_19253 === (12))){
var inst_19227 = (state_19252[(2)]);
var state_19252__$1 = state_19252;
var statearr_19274_19317 = state_19252__$1;
(statearr_19274_19317[(2)] = inst_19227);

(statearr_19274_19317[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (2))){
var state_19252__$1 = state_19252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19252__$1,(4),ch);
} else {
if((state_val_19253 === (23))){
var state_19252__$1 = state_19252;
var statearr_19275_19318 = state_19252__$1;
(statearr_19275_19318[(2)] = null);

(statearr_19275_19318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (19))){
var inst_19183 = (state_19252[(8)]);
var inst_19233 = (state_19252[(11)]);
var inst_19235 = cljs.core.async.muxch_STAR_.call(null,inst_19233);
var state_19252__$1 = state_19252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19252__$1,(22),inst_19235,inst_19183);
} else {
if((state_val_19253 === (11))){
var inst_19207 = (state_19252[(10)]);
var inst_19193 = (state_19252[(16)]);
var inst_19207__$1 = cljs.core.seq.call(null,inst_19193);
var state_19252__$1 = (function (){var statearr_19276 = state_19252;
(statearr_19276[(10)] = inst_19207__$1);

return statearr_19276;
})();
if(inst_19207__$1){
var statearr_19277_19319 = state_19252__$1;
(statearr_19277_19319[(1)] = (13));

} else {
var statearr_19278_19320 = state_19252__$1;
(statearr_19278_19320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (9))){
var inst_19229 = (state_19252[(2)]);
var state_19252__$1 = state_19252;
var statearr_19279_19321 = state_19252__$1;
(statearr_19279_19321[(2)] = inst_19229);

(statearr_19279_19321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (5))){
var inst_19190 = cljs.core.deref.call(null,mults);
var inst_19191 = cljs.core.vals.call(null,inst_19190);
var inst_19192 = cljs.core.seq.call(null,inst_19191);
var inst_19193 = inst_19192;
var inst_19194 = null;
var inst_19195 = (0);
var inst_19196 = (0);
var state_19252__$1 = (function (){var statearr_19280 = state_19252;
(statearr_19280[(12)] = inst_19195);

(statearr_19280[(14)] = inst_19194);

(statearr_19280[(15)] = inst_19196);

(statearr_19280[(16)] = inst_19193);

return statearr_19280;
})();
var statearr_19281_19322 = state_19252__$1;
(statearr_19281_19322[(2)] = null);

(statearr_19281_19322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (14))){
var state_19252__$1 = state_19252;
var statearr_19285_19323 = state_19252__$1;
(statearr_19285_19323[(2)] = null);

(statearr_19285_19323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (16))){
var inst_19207 = (state_19252[(10)]);
var inst_19211 = cljs.core.chunk_first.call(null,inst_19207);
var inst_19212 = cljs.core.chunk_rest.call(null,inst_19207);
var inst_19213 = cljs.core.count.call(null,inst_19211);
var inst_19193 = inst_19212;
var inst_19194 = inst_19211;
var inst_19195 = inst_19213;
var inst_19196 = (0);
var state_19252__$1 = (function (){var statearr_19286 = state_19252;
(statearr_19286[(12)] = inst_19195);

(statearr_19286[(14)] = inst_19194);

(statearr_19286[(15)] = inst_19196);

(statearr_19286[(16)] = inst_19193);

return statearr_19286;
})();
var statearr_19287_19324 = state_19252__$1;
(statearr_19287_19324[(2)] = null);

(statearr_19287_19324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (10))){
var inst_19195 = (state_19252[(12)]);
var inst_19194 = (state_19252[(14)]);
var inst_19196 = (state_19252[(15)]);
var inst_19193 = (state_19252[(16)]);
var inst_19201 = cljs.core._nth.call(null,inst_19194,inst_19196);
var inst_19202 = cljs.core.async.muxch_STAR_.call(null,inst_19201);
var inst_19203 = cljs.core.async.close_BANG_.call(null,inst_19202);
var inst_19204 = (inst_19196 + (1));
var tmp19282 = inst_19195;
var tmp19283 = inst_19194;
var tmp19284 = inst_19193;
var inst_19193__$1 = tmp19284;
var inst_19194__$1 = tmp19283;
var inst_19195__$1 = tmp19282;
var inst_19196__$1 = inst_19204;
var state_19252__$1 = (function (){var statearr_19288 = state_19252;
(statearr_19288[(17)] = inst_19203);

(statearr_19288[(12)] = inst_19195__$1);

(statearr_19288[(14)] = inst_19194__$1);

(statearr_19288[(15)] = inst_19196__$1);

(statearr_19288[(16)] = inst_19193__$1);

return statearr_19288;
})();
var statearr_19289_19325 = state_19252__$1;
(statearr_19289_19325[(2)] = null);

(statearr_19289_19325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (18))){
var inst_19222 = (state_19252[(2)]);
var state_19252__$1 = state_19252;
var statearr_19290_19326 = state_19252__$1;
(statearr_19290_19326[(2)] = inst_19222);

(statearr_19290_19326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19253 === (8))){
var inst_19195 = (state_19252[(12)]);
var inst_19196 = (state_19252[(15)]);
var inst_19198 = (inst_19196 < inst_19195);
var inst_19199 = inst_19198;
var state_19252__$1 = state_19252;
if(cljs.core.truth_(inst_19199)){
var statearr_19291_19327 = state_19252__$1;
(statearr_19291_19327[(1)] = (10));

} else {
var statearr_19292_19328 = state_19252__$1;
(statearr_19292_19328[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6633__auto___19300,mults,ensure_mult,p))
;
return ((function (switch__6577__auto__,c__6633__auto___19300,mults,ensure_mult,p){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_19296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19296[(0)] = state_machine__6578__auto__);

(statearr_19296[(1)] = (1));

return statearr_19296;
});
var state_machine__6578__auto____1 = (function (state_19252){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_19252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e19297){if((e19297 instanceof Object)){
var ex__6581__auto__ = e19297;
var statearr_19298_19329 = state_19252;
(statearr_19298_19329[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19330 = state_19252;
state_19252 = G__19330;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_19252){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_19252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___19300,mults,ensure_mult,p))
})();
var state__6635__auto__ = (function (){var statearr_19299 = f__6634__auto__.call(null);
(statearr_19299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___19300);

return statearr_19299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___19300,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6633__auto___19467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___19467,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___19467,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19437){
var state_val_19438 = (state_19437[(1)]);
if((state_val_19438 === (7))){
var state_19437__$1 = state_19437;
var statearr_19439_19468 = state_19437__$1;
(statearr_19439_19468[(2)] = null);

(statearr_19439_19468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (1))){
var state_19437__$1 = state_19437;
var statearr_19440_19469 = state_19437__$1;
(statearr_19440_19469[(2)] = null);

(statearr_19440_19469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (4))){
var inst_19401 = (state_19437[(7)]);
var inst_19403 = (inst_19401 < cnt);
var state_19437__$1 = state_19437;
if(cljs.core.truth_(inst_19403)){
var statearr_19441_19470 = state_19437__$1;
(statearr_19441_19470[(1)] = (6));

} else {
var statearr_19442_19471 = state_19437__$1;
(statearr_19442_19471[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (15))){
var inst_19433 = (state_19437[(2)]);
var state_19437__$1 = state_19437;
var statearr_19443_19472 = state_19437__$1;
(statearr_19443_19472[(2)] = inst_19433);

(statearr_19443_19472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (13))){
var inst_19426 = cljs.core.async.close_BANG_.call(null,out);
var state_19437__$1 = state_19437;
var statearr_19444_19473 = state_19437__$1;
(statearr_19444_19473[(2)] = inst_19426);

(statearr_19444_19473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (6))){
var state_19437__$1 = state_19437;
var statearr_19445_19474 = state_19437__$1;
(statearr_19445_19474[(2)] = null);

(statearr_19445_19474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (3))){
var inst_19435 = (state_19437[(2)]);
var state_19437__$1 = state_19437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19437__$1,inst_19435);
} else {
if((state_val_19438 === (12))){
var inst_19423 = (state_19437[(8)]);
var inst_19423__$1 = (state_19437[(2)]);
var inst_19424 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19423__$1);
var state_19437__$1 = (function (){var statearr_19446 = state_19437;
(statearr_19446[(8)] = inst_19423__$1);

return statearr_19446;
})();
if(cljs.core.truth_(inst_19424)){
var statearr_19447_19475 = state_19437__$1;
(statearr_19447_19475[(1)] = (13));

} else {
var statearr_19448_19476 = state_19437__$1;
(statearr_19448_19476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (2))){
var inst_19400 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19401 = (0);
var state_19437__$1 = (function (){var statearr_19449 = state_19437;
(statearr_19449[(9)] = inst_19400);

(statearr_19449[(7)] = inst_19401);

return statearr_19449;
})();
var statearr_19450_19477 = state_19437__$1;
(statearr_19450_19477[(2)] = null);

(statearr_19450_19477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (11))){
var inst_19401 = (state_19437[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19437,(10),Object,null,(9));
var inst_19410 = chs__$1.call(null,inst_19401);
var inst_19411 = done.call(null,inst_19401);
var inst_19412 = cljs.core.async.take_BANG_.call(null,inst_19410,inst_19411);
var state_19437__$1 = state_19437;
var statearr_19451_19478 = state_19437__$1;
(statearr_19451_19478[(2)] = inst_19412);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19437__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (9))){
var inst_19401 = (state_19437[(7)]);
var inst_19414 = (state_19437[(2)]);
var inst_19415 = (inst_19401 + (1));
var inst_19401__$1 = inst_19415;
var state_19437__$1 = (function (){var statearr_19452 = state_19437;
(statearr_19452[(7)] = inst_19401__$1);

(statearr_19452[(10)] = inst_19414);

return statearr_19452;
})();
var statearr_19453_19479 = state_19437__$1;
(statearr_19453_19479[(2)] = null);

(statearr_19453_19479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (5))){
var inst_19421 = (state_19437[(2)]);
var state_19437__$1 = (function (){var statearr_19454 = state_19437;
(statearr_19454[(11)] = inst_19421);

return statearr_19454;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19437__$1,(12),dchan);
} else {
if((state_val_19438 === (14))){
var inst_19423 = (state_19437[(8)]);
var inst_19428 = cljs.core.apply.call(null,f,inst_19423);
var state_19437__$1 = state_19437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19437__$1,(16),out,inst_19428);
} else {
if((state_val_19438 === (16))){
var inst_19430 = (state_19437[(2)]);
var state_19437__$1 = (function (){var statearr_19455 = state_19437;
(statearr_19455[(12)] = inst_19430);

return statearr_19455;
})();
var statearr_19456_19480 = state_19437__$1;
(statearr_19456_19480[(2)] = null);

(statearr_19456_19480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (10))){
var inst_19405 = (state_19437[(2)]);
var inst_19406 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19437__$1 = (function (){var statearr_19457 = state_19437;
(statearr_19457[(13)] = inst_19405);

return statearr_19457;
})();
var statearr_19458_19481 = state_19437__$1;
(statearr_19458_19481[(2)] = inst_19406);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19437__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (8))){
var inst_19419 = (state_19437[(2)]);
var state_19437__$1 = state_19437;
var statearr_19459_19482 = state_19437__$1;
(statearr_19459_19482[(2)] = inst_19419);

(statearr_19459_19482[(1)] = (5));


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
}
}
}
}
}
}
}
}
});})(c__6633__auto___19467,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6577__auto__,c__6633__auto___19467,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_19463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19463[(0)] = state_machine__6578__auto__);

(statearr_19463[(1)] = (1));

return statearr_19463;
});
var state_machine__6578__auto____1 = (function (state_19437){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_19437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e19464){if((e19464 instanceof Object)){
var ex__6581__auto__ = e19464;
var statearr_19465_19483 = state_19437;
(statearr_19465_19483[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19484 = state_19437;
state_19437 = G__19484;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_19437){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_19437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___19467,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6635__auto__ = (function (){var statearr_19466 = f__6634__auto__.call(null);
(statearr_19466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___19467);

return statearr_19466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___19467,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6633__auto___19592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___19592,out){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___19592,out){
return (function (state_19568){
var state_val_19569 = (state_19568[(1)]);
if((state_val_19569 === (7))){
var inst_19548 = (state_19568[(7)]);
var inst_19547 = (state_19568[(8)]);
var inst_19547__$1 = (state_19568[(2)]);
var inst_19548__$1 = cljs.core.nth.call(null,inst_19547__$1,(0),null);
var inst_19549 = cljs.core.nth.call(null,inst_19547__$1,(1),null);
var inst_19550 = (inst_19548__$1 == null);
var state_19568__$1 = (function (){var statearr_19570 = state_19568;
(statearr_19570[(7)] = inst_19548__$1);

(statearr_19570[(9)] = inst_19549);

(statearr_19570[(8)] = inst_19547__$1);

return statearr_19570;
})();
if(cljs.core.truth_(inst_19550)){
var statearr_19571_19593 = state_19568__$1;
(statearr_19571_19593[(1)] = (8));

} else {
var statearr_19572_19594 = state_19568__$1;
(statearr_19572_19594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (1))){
var inst_19539 = cljs.core.vec.call(null,chs);
var inst_19540 = inst_19539;
var state_19568__$1 = (function (){var statearr_19573 = state_19568;
(statearr_19573[(10)] = inst_19540);

return statearr_19573;
})();
var statearr_19574_19595 = state_19568__$1;
(statearr_19574_19595[(2)] = null);

(statearr_19574_19595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (4))){
var inst_19540 = (state_19568[(10)]);
var state_19568__$1 = state_19568;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19568__$1,(7),inst_19540);
} else {
if((state_val_19569 === (6))){
var inst_19564 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19575_19596 = state_19568__$1;
(statearr_19575_19596[(2)] = inst_19564);

(statearr_19575_19596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (3))){
var inst_19566 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19568__$1,inst_19566);
} else {
if((state_val_19569 === (2))){
var inst_19540 = (state_19568[(10)]);
var inst_19542 = cljs.core.count.call(null,inst_19540);
var inst_19543 = (inst_19542 > (0));
var state_19568__$1 = state_19568;
if(cljs.core.truth_(inst_19543)){
var statearr_19577_19597 = state_19568__$1;
(statearr_19577_19597[(1)] = (4));

} else {
var statearr_19578_19598 = state_19568__$1;
(statearr_19578_19598[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (11))){
var inst_19540 = (state_19568[(10)]);
var inst_19557 = (state_19568[(2)]);
var tmp19576 = inst_19540;
var inst_19540__$1 = tmp19576;
var state_19568__$1 = (function (){var statearr_19579 = state_19568;
(statearr_19579[(10)] = inst_19540__$1);

(statearr_19579[(11)] = inst_19557);

return statearr_19579;
})();
var statearr_19580_19599 = state_19568__$1;
(statearr_19580_19599[(2)] = null);

(statearr_19580_19599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (9))){
var inst_19548 = (state_19568[(7)]);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19568__$1,(11),out,inst_19548);
} else {
if((state_val_19569 === (5))){
var inst_19562 = cljs.core.async.close_BANG_.call(null,out);
var state_19568__$1 = state_19568;
var statearr_19581_19600 = state_19568__$1;
(statearr_19581_19600[(2)] = inst_19562);

(statearr_19581_19600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (10))){
var inst_19560 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19582_19601 = state_19568__$1;
(statearr_19582_19601[(2)] = inst_19560);

(statearr_19582_19601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (8))){
var inst_19548 = (state_19568[(7)]);
var inst_19540 = (state_19568[(10)]);
var inst_19549 = (state_19568[(9)]);
var inst_19547 = (state_19568[(8)]);
var inst_19552 = (function (){var c = inst_19549;
var v = inst_19548;
var vec__19545 = inst_19547;
var cs = inst_19540;
return ((function (c,v,vec__19545,cs,inst_19548,inst_19540,inst_19549,inst_19547,state_val_19569,c__6633__auto___19592,out){
return (function (p1__19485_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19485_SHARP_);
});
;})(c,v,vec__19545,cs,inst_19548,inst_19540,inst_19549,inst_19547,state_val_19569,c__6633__auto___19592,out))
})();
var inst_19553 = cljs.core.filterv.call(null,inst_19552,inst_19540);
var inst_19540__$1 = inst_19553;
var state_19568__$1 = (function (){var statearr_19583 = state_19568;
(statearr_19583[(10)] = inst_19540__$1);

return statearr_19583;
})();
var statearr_19584_19602 = state_19568__$1;
(statearr_19584_19602[(2)] = null);

(statearr_19584_19602[(1)] = (2));


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
}
}
}
});})(c__6633__auto___19592,out))
;
return ((function (switch__6577__auto__,c__6633__auto___19592,out){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_19588 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19588[(0)] = state_machine__6578__auto__);

(statearr_19588[(1)] = (1));

return statearr_19588;
});
var state_machine__6578__auto____1 = (function (state_19568){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_19568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e19589){if((e19589 instanceof Object)){
var ex__6581__auto__ = e19589;
var statearr_19590_19603 = state_19568;
(statearr_19590_19603[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19604 = state_19568;
state_19568 = G__19604;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_19568){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_19568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___19592,out))
})();
var state__6635__auto__ = (function (){var statearr_19591 = f__6634__auto__.call(null);
(statearr_19591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___19592);

return statearr_19591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___19592,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6633__auto___19697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___19697,out){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___19697,out){
return (function (state_19674){
var state_val_19675 = (state_19674[(1)]);
if((state_val_19675 === (7))){
var inst_19656 = (state_19674[(7)]);
var inst_19656__$1 = (state_19674[(2)]);
var inst_19657 = (inst_19656__$1 == null);
var inst_19658 = cljs.core.not.call(null,inst_19657);
var state_19674__$1 = (function (){var statearr_19676 = state_19674;
(statearr_19676[(7)] = inst_19656__$1);

return statearr_19676;
})();
if(inst_19658){
var statearr_19677_19698 = state_19674__$1;
(statearr_19677_19698[(1)] = (8));

} else {
var statearr_19678_19699 = state_19674__$1;
(statearr_19678_19699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (1))){
var inst_19651 = (0);
var state_19674__$1 = (function (){var statearr_19679 = state_19674;
(statearr_19679[(8)] = inst_19651);

return statearr_19679;
})();
var statearr_19680_19700 = state_19674__$1;
(statearr_19680_19700[(2)] = null);

(statearr_19680_19700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (4))){
var state_19674__$1 = state_19674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19674__$1,(7),ch);
} else {
if((state_val_19675 === (6))){
var inst_19669 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19681_19701 = state_19674__$1;
(statearr_19681_19701[(2)] = inst_19669);

(statearr_19681_19701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (3))){
var inst_19671 = (state_19674[(2)]);
var inst_19672 = cljs.core.async.close_BANG_.call(null,out);
var state_19674__$1 = (function (){var statearr_19682 = state_19674;
(statearr_19682[(9)] = inst_19671);

return statearr_19682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19674__$1,inst_19672);
} else {
if((state_val_19675 === (2))){
var inst_19651 = (state_19674[(8)]);
var inst_19653 = (inst_19651 < n);
var state_19674__$1 = state_19674;
if(cljs.core.truth_(inst_19653)){
var statearr_19683_19702 = state_19674__$1;
(statearr_19683_19702[(1)] = (4));

} else {
var statearr_19684_19703 = state_19674__$1;
(statearr_19684_19703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (11))){
var inst_19651 = (state_19674[(8)]);
var inst_19661 = (state_19674[(2)]);
var inst_19662 = (inst_19651 + (1));
var inst_19651__$1 = inst_19662;
var state_19674__$1 = (function (){var statearr_19685 = state_19674;
(statearr_19685[(8)] = inst_19651__$1);

(statearr_19685[(10)] = inst_19661);

return statearr_19685;
})();
var statearr_19686_19704 = state_19674__$1;
(statearr_19686_19704[(2)] = null);

(statearr_19686_19704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (9))){
var state_19674__$1 = state_19674;
var statearr_19687_19705 = state_19674__$1;
(statearr_19687_19705[(2)] = null);

(statearr_19687_19705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (5))){
var state_19674__$1 = state_19674;
var statearr_19688_19706 = state_19674__$1;
(statearr_19688_19706[(2)] = null);

(statearr_19688_19706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (10))){
var inst_19666 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19689_19707 = state_19674__$1;
(statearr_19689_19707[(2)] = inst_19666);

(statearr_19689_19707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (8))){
var inst_19656 = (state_19674[(7)]);
var state_19674__$1 = state_19674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19674__$1,(11),out,inst_19656);
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
}
}
}
});})(c__6633__auto___19697,out))
;
return ((function (switch__6577__auto__,c__6633__auto___19697,out){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_19693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19693[(0)] = state_machine__6578__auto__);

(statearr_19693[(1)] = (1));

return statearr_19693;
});
var state_machine__6578__auto____1 = (function (state_19674){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_19674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e19694){if((e19694 instanceof Object)){
var ex__6581__auto__ = e19694;
var statearr_19695_19708 = state_19674;
(statearr_19695_19708[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19709 = state_19674;
state_19674 = G__19709;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_19674){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_19674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___19697,out))
})();
var state__6635__auto__ = (function (){var statearr_19696 = f__6634__auto__.call(null);
(statearr_19696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___19697);

return statearr_19696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___19697,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t19717 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19717 = (function (ch,f,map_LT_,meta19718){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19718 = meta19718;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19717.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19717.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19717.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19717.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19720 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19720 = (function (fn1,_,meta19718,map_LT_,f,ch,meta19721){
this.fn1 = fn1;
this._ = _;
this.meta19718 = meta19718;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19721 = meta19721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19720.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19720.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19720.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19710_SHARP_){
return f1.call(null,(((p1__19710_SHARP_ == null))?null:self__.f.call(null,p1__19710_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19722){
var self__ = this;
var _19722__$1 = this;
return self__.meta19721;
});})(___$1))
;

cljs.core.async.t19720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19722,meta19721__$1){
var self__ = this;
var _19722__$1 = this;
return (new cljs.core.async.t19720(self__.fn1,self__._,self__.meta19718,self__.map_LT_,self__.f,self__.ch,meta19721__$1));
});})(___$1))
;

cljs.core.async.t19720.cljs$lang$type = true;

cljs.core.async.t19720.cljs$lang$ctorStr = "cljs.core.async/t19720";

cljs.core.async.t19720.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cljs.core.async/t19720");
});})(___$1))
;

cljs.core.async.__GT_t19720 = ((function (___$1){
return (function __GT_t19720(fn1__$1,___$2,meta19718__$1,map_LT___$1,f__$1,ch__$1,meta19721){
return (new cljs.core.async.t19720(fn1__$1,___$2,meta19718__$1,map_LT___$1,f__$1,ch__$1,meta19721));
});})(___$1))
;

}

return (new cljs.core.async.t19720(fn1,___$1,self__.meta19718,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Users\\Hussam\\Dev\\acme\\resources\\public\\js\\out\\cljs\\core\\async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3734__auto__ = ret;
if(cljs.core.truth_(and__3734__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3734__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t19717.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19717.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19717.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19719){
var self__ = this;
var _19719__$1 = this;
return self__.meta19718;
});

cljs.core.async.t19717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19719,meta19718__$1){
var self__ = this;
var _19719__$1 = this;
return (new cljs.core.async.t19717(self__.ch,self__.f,self__.map_LT_,meta19718__$1));
});

cljs.core.async.t19717.cljs$lang$type = true;

cljs.core.async.t19717.cljs$lang$ctorStr = "cljs.core.async/t19717";

cljs.core.async.t19717.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cljs.core.async/t19717");
});

cljs.core.async.__GT_t19717 = (function __GT_t19717(ch__$1,f__$1,map_LT___$1,meta19718){
return (new cljs.core.async.t19717(ch__$1,f__$1,map_LT___$1,meta19718));
});

}

return (new cljs.core.async.t19717(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Users\\Hussam\\Dev\\acme\\resources\\public\\js\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19726 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19726 = (function (ch,f,map_GT_,meta19727){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19727 = meta19727;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19726.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19726.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19726.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19726.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19726.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19726.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19728){
var self__ = this;
var _19728__$1 = this;
return self__.meta19727;
});

cljs.core.async.t19726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19728,meta19727__$1){
var self__ = this;
var _19728__$1 = this;
return (new cljs.core.async.t19726(self__.ch,self__.f,self__.map_GT_,meta19727__$1));
});

cljs.core.async.t19726.cljs$lang$type = true;

cljs.core.async.t19726.cljs$lang$ctorStr = "cljs.core.async/t19726";

cljs.core.async.t19726.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cljs.core.async/t19726");
});

cljs.core.async.__GT_t19726 = (function __GT_t19726(ch__$1,f__$1,map_GT___$1,meta19727){
return (new cljs.core.async.t19726(ch__$1,f__$1,map_GT___$1,meta19727));
});

}

return (new cljs.core.async.t19726(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Users\\Hussam\\Dev\\acme\\resources\\public\\js\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19732 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19732 = (function (ch,p,filter_GT_,meta19733){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19733 = meta19733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19732.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19732.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19732.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19732.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19732.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19732.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19732.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19734){
var self__ = this;
var _19734__$1 = this;
return self__.meta19733;
});

cljs.core.async.t19732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19734,meta19733__$1){
var self__ = this;
var _19734__$1 = this;
return (new cljs.core.async.t19732(self__.ch,self__.p,self__.filter_GT_,meta19733__$1));
});

cljs.core.async.t19732.cljs$lang$type = true;

cljs.core.async.t19732.cljs$lang$ctorStr = "cljs.core.async/t19732";

cljs.core.async.t19732.cljs$lang$ctorPrWriter = (function (this__4333__auto__,writer__4334__auto__,opt__4335__auto__){
return cljs.core._write.call(null,writer__4334__auto__,"cljs.core.async/t19732");
});

cljs.core.async.__GT_t19732 = (function __GT_t19732(ch__$1,p__$1,filter_GT___$1,meta19733){
return (new cljs.core.async.t19732(ch__$1,p__$1,filter_GT___$1,meta19733));
});

}

return (new cljs.core.async.t19732(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Users\\Hussam\\Dev\\acme\\resources\\public\\js\\out\\cljs\\core\\async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6633__auto___19817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___19817,out){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___19817,out){
return (function (state_19796){
var state_val_19797 = (state_19796[(1)]);
if((state_val_19797 === (7))){
var inst_19792 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19798_19818 = state_19796__$1;
(statearr_19798_19818[(2)] = inst_19792);

(statearr_19798_19818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (1))){
var state_19796__$1 = state_19796;
var statearr_19799_19819 = state_19796__$1;
(statearr_19799_19819[(2)] = null);

(statearr_19799_19819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (4))){
var inst_19778 = (state_19796[(7)]);
var inst_19778__$1 = (state_19796[(2)]);
var inst_19779 = (inst_19778__$1 == null);
var state_19796__$1 = (function (){var statearr_19800 = state_19796;
(statearr_19800[(7)] = inst_19778__$1);

return statearr_19800;
})();
if(cljs.core.truth_(inst_19779)){
var statearr_19801_19820 = state_19796__$1;
(statearr_19801_19820[(1)] = (5));

} else {
var statearr_19802_19821 = state_19796__$1;
(statearr_19802_19821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (6))){
var inst_19778 = (state_19796[(7)]);
var inst_19783 = p.call(null,inst_19778);
var state_19796__$1 = state_19796;
if(cljs.core.truth_(inst_19783)){
var statearr_19803_19822 = state_19796__$1;
(statearr_19803_19822[(1)] = (8));

} else {
var statearr_19804_19823 = state_19796__$1;
(statearr_19804_19823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (3))){
var inst_19794 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19796__$1,inst_19794);
} else {
if((state_val_19797 === (2))){
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19796__$1,(4),ch);
} else {
if((state_val_19797 === (11))){
var inst_19786 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19805_19824 = state_19796__$1;
(statearr_19805_19824[(2)] = inst_19786);

(statearr_19805_19824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (9))){
var state_19796__$1 = state_19796;
var statearr_19806_19825 = state_19796__$1;
(statearr_19806_19825[(2)] = null);

(statearr_19806_19825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (5))){
var inst_19781 = cljs.core.async.close_BANG_.call(null,out);
var state_19796__$1 = state_19796;
var statearr_19807_19826 = state_19796__$1;
(statearr_19807_19826[(2)] = inst_19781);

(statearr_19807_19826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (10))){
var inst_19789 = (state_19796[(2)]);
var state_19796__$1 = (function (){var statearr_19808 = state_19796;
(statearr_19808[(8)] = inst_19789);

return statearr_19808;
})();
var statearr_19809_19827 = state_19796__$1;
(statearr_19809_19827[(2)] = null);

(statearr_19809_19827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (8))){
var inst_19778 = (state_19796[(7)]);
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19796__$1,(11),out,inst_19778);
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
}
}
}
});})(c__6633__auto___19817,out))
;
return ((function (switch__6577__auto__,c__6633__auto___19817,out){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_19813 = [null,null,null,null,null,null,null,null,null];
(statearr_19813[(0)] = state_machine__6578__auto__);

(statearr_19813[(1)] = (1));

return statearr_19813;
});
var state_machine__6578__auto____1 = (function (state_19796){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_19796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e19814){if((e19814 instanceof Object)){
var ex__6581__auto__ = e19814;
var statearr_19815_19828 = state_19796;
(statearr_19815_19828[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19829 = state_19796;
state_19796 = G__19829;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_19796){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_19796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___19817,out))
})();
var state__6635__auto__ = (function (){var statearr_19816 = f__6634__auto__.call(null);
(statearr_19816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___19817);

return statearr_19816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___19817,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto__){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto__){
return (function (state_19995){
var state_val_19996 = (state_19995[(1)]);
if((state_val_19996 === (7))){
var inst_19991 = (state_19995[(2)]);
var state_19995__$1 = state_19995;
var statearr_19997_20038 = state_19995__$1;
(statearr_19997_20038[(2)] = inst_19991);

(statearr_19997_20038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (20))){
var inst_19961 = (state_19995[(7)]);
var inst_19972 = (state_19995[(2)]);
var inst_19973 = cljs.core.next.call(null,inst_19961);
var inst_19947 = inst_19973;
var inst_19948 = null;
var inst_19949 = (0);
var inst_19950 = (0);
var state_19995__$1 = (function (){var statearr_19998 = state_19995;
(statearr_19998[(8)] = inst_19947);

(statearr_19998[(9)] = inst_19948);

(statearr_19998[(10)] = inst_19972);

(statearr_19998[(11)] = inst_19949);

(statearr_19998[(12)] = inst_19950);

return statearr_19998;
})();
var statearr_19999_20039 = state_19995__$1;
(statearr_19999_20039[(2)] = null);

(statearr_19999_20039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (1))){
var state_19995__$1 = state_19995;
var statearr_20000_20040 = state_19995__$1;
(statearr_20000_20040[(2)] = null);

(statearr_20000_20040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (4))){
var inst_19936 = (state_19995[(13)]);
var inst_19936__$1 = (state_19995[(2)]);
var inst_19937 = (inst_19936__$1 == null);
var state_19995__$1 = (function (){var statearr_20001 = state_19995;
(statearr_20001[(13)] = inst_19936__$1);

return statearr_20001;
})();
if(cljs.core.truth_(inst_19937)){
var statearr_20002_20041 = state_19995__$1;
(statearr_20002_20041[(1)] = (5));

} else {
var statearr_20003_20042 = state_19995__$1;
(statearr_20003_20042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (15))){
var state_19995__$1 = state_19995;
var statearr_20007_20043 = state_19995__$1;
(statearr_20007_20043[(2)] = null);

(statearr_20007_20043[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (21))){
var state_19995__$1 = state_19995;
var statearr_20008_20044 = state_19995__$1;
(statearr_20008_20044[(2)] = null);

(statearr_20008_20044[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (13))){
var inst_19947 = (state_19995[(8)]);
var inst_19948 = (state_19995[(9)]);
var inst_19949 = (state_19995[(11)]);
var inst_19950 = (state_19995[(12)]);
var inst_19957 = (state_19995[(2)]);
var inst_19958 = (inst_19950 + (1));
var tmp20004 = inst_19947;
var tmp20005 = inst_19948;
var tmp20006 = inst_19949;
var inst_19947__$1 = tmp20004;
var inst_19948__$1 = tmp20005;
var inst_19949__$1 = tmp20006;
var inst_19950__$1 = inst_19958;
var state_19995__$1 = (function (){var statearr_20009 = state_19995;
(statearr_20009[(8)] = inst_19947__$1);

(statearr_20009[(9)] = inst_19948__$1);

(statearr_20009[(14)] = inst_19957);

(statearr_20009[(11)] = inst_19949__$1);

(statearr_20009[(12)] = inst_19950__$1);

return statearr_20009;
})();
var statearr_20010_20045 = state_19995__$1;
(statearr_20010_20045[(2)] = null);

(statearr_20010_20045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (22))){
var state_19995__$1 = state_19995;
var statearr_20011_20046 = state_19995__$1;
(statearr_20011_20046[(2)] = null);

(statearr_20011_20046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (6))){
var inst_19936 = (state_19995[(13)]);
var inst_19945 = f.call(null,inst_19936);
var inst_19946 = cljs.core.seq.call(null,inst_19945);
var inst_19947 = inst_19946;
var inst_19948 = null;
var inst_19949 = (0);
var inst_19950 = (0);
var state_19995__$1 = (function (){var statearr_20012 = state_19995;
(statearr_20012[(8)] = inst_19947);

(statearr_20012[(9)] = inst_19948);

(statearr_20012[(11)] = inst_19949);

(statearr_20012[(12)] = inst_19950);

return statearr_20012;
})();
var statearr_20013_20047 = state_19995__$1;
(statearr_20013_20047[(2)] = null);

(statearr_20013_20047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (17))){
var inst_19961 = (state_19995[(7)]);
var inst_19965 = cljs.core.chunk_first.call(null,inst_19961);
var inst_19966 = cljs.core.chunk_rest.call(null,inst_19961);
var inst_19967 = cljs.core.count.call(null,inst_19965);
var inst_19947 = inst_19966;
var inst_19948 = inst_19965;
var inst_19949 = inst_19967;
var inst_19950 = (0);
var state_19995__$1 = (function (){var statearr_20014 = state_19995;
(statearr_20014[(8)] = inst_19947);

(statearr_20014[(9)] = inst_19948);

(statearr_20014[(11)] = inst_19949);

(statearr_20014[(12)] = inst_19950);

return statearr_20014;
})();
var statearr_20015_20048 = state_19995__$1;
(statearr_20015_20048[(2)] = null);

(statearr_20015_20048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (3))){
var inst_19993 = (state_19995[(2)]);
var state_19995__$1 = state_19995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19995__$1,inst_19993);
} else {
if((state_val_19996 === (12))){
var inst_19981 = (state_19995[(2)]);
var state_19995__$1 = state_19995;
var statearr_20016_20049 = state_19995__$1;
(statearr_20016_20049[(2)] = inst_19981);

(statearr_20016_20049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (2))){
var state_19995__$1 = state_19995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19995__$1,(4),in$);
} else {
if((state_val_19996 === (23))){
var inst_19989 = (state_19995[(2)]);
var state_19995__$1 = state_19995;
var statearr_20017_20050 = state_19995__$1;
(statearr_20017_20050[(2)] = inst_19989);

(statearr_20017_20050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (19))){
var inst_19976 = (state_19995[(2)]);
var state_19995__$1 = state_19995;
var statearr_20018_20051 = state_19995__$1;
(statearr_20018_20051[(2)] = inst_19976);

(statearr_20018_20051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (11))){
var inst_19947 = (state_19995[(8)]);
var inst_19961 = (state_19995[(7)]);
var inst_19961__$1 = cljs.core.seq.call(null,inst_19947);
var state_19995__$1 = (function (){var statearr_20019 = state_19995;
(statearr_20019[(7)] = inst_19961__$1);

return statearr_20019;
})();
if(inst_19961__$1){
var statearr_20020_20052 = state_19995__$1;
(statearr_20020_20052[(1)] = (14));

} else {
var statearr_20021_20053 = state_19995__$1;
(statearr_20021_20053[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (9))){
var inst_19983 = (state_19995[(2)]);
var inst_19984 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19995__$1 = (function (){var statearr_20022 = state_19995;
(statearr_20022[(15)] = inst_19983);

return statearr_20022;
})();
if(cljs.core.truth_(inst_19984)){
var statearr_20023_20054 = state_19995__$1;
(statearr_20023_20054[(1)] = (21));

} else {
var statearr_20024_20055 = state_19995__$1;
(statearr_20024_20055[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (5))){
var inst_19939 = cljs.core.async.close_BANG_.call(null,out);
var state_19995__$1 = state_19995;
var statearr_20025_20056 = state_19995__$1;
(statearr_20025_20056[(2)] = inst_19939);

(statearr_20025_20056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (14))){
var inst_19961 = (state_19995[(7)]);
var inst_19963 = cljs.core.chunked_seq_QMARK_.call(null,inst_19961);
var state_19995__$1 = state_19995;
if(inst_19963){
var statearr_20026_20057 = state_19995__$1;
(statearr_20026_20057[(1)] = (17));

} else {
var statearr_20027_20058 = state_19995__$1;
(statearr_20027_20058[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (16))){
var inst_19979 = (state_19995[(2)]);
var state_19995__$1 = state_19995;
var statearr_20028_20059 = state_19995__$1;
(statearr_20028_20059[(2)] = inst_19979);

(statearr_20028_20059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (10))){
var inst_19948 = (state_19995[(9)]);
var inst_19950 = (state_19995[(12)]);
var inst_19955 = cljs.core._nth.call(null,inst_19948,inst_19950);
var state_19995__$1 = state_19995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19995__$1,(13),out,inst_19955);
} else {
if((state_val_19996 === (18))){
var inst_19961 = (state_19995[(7)]);
var inst_19970 = cljs.core.first.call(null,inst_19961);
var state_19995__$1 = state_19995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19995__$1,(20),out,inst_19970);
} else {
if((state_val_19996 === (8))){
var inst_19949 = (state_19995[(11)]);
var inst_19950 = (state_19995[(12)]);
var inst_19952 = (inst_19950 < inst_19949);
var inst_19953 = inst_19952;
var state_19995__$1 = state_19995;
if(cljs.core.truth_(inst_19953)){
var statearr_20029_20060 = state_19995__$1;
(statearr_20029_20060[(1)] = (10));

} else {
var statearr_20030_20061 = state_19995__$1;
(statearr_20030_20061[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6633__auto__))
;
return ((function (switch__6577__auto__,c__6633__auto__){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_20034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20034[(0)] = state_machine__6578__auto__);

(statearr_20034[(1)] = (1));

return statearr_20034;
});
var state_machine__6578__auto____1 = (function (state_19995){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_19995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e20035){if((e20035 instanceof Object)){
var ex__6581__auto__ = e20035;
var statearr_20036_20062 = state_19995;
(statearr_20036_20062[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20063 = state_19995;
state_19995 = G__20063;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_19995){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_19995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto__))
})();
var state__6635__auto__ = (function (){var statearr_20037 = f__6634__auto__.call(null);
(statearr_20037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto__);

return statearr_20037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto__))
);

return c__6633__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6633__auto___20160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___20160,out){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___20160,out){
return (function (state_20135){
var state_val_20136 = (state_20135[(1)]);
if((state_val_20136 === (7))){
var inst_20130 = (state_20135[(2)]);
var state_20135__$1 = state_20135;
var statearr_20137_20161 = state_20135__$1;
(statearr_20137_20161[(2)] = inst_20130);

(statearr_20137_20161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20136 === (1))){
var inst_20112 = null;
var state_20135__$1 = (function (){var statearr_20138 = state_20135;
(statearr_20138[(7)] = inst_20112);

return statearr_20138;
})();
var statearr_20139_20162 = state_20135__$1;
(statearr_20139_20162[(2)] = null);

(statearr_20139_20162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20136 === (4))){
var inst_20115 = (state_20135[(8)]);
var inst_20115__$1 = (state_20135[(2)]);
var inst_20116 = (inst_20115__$1 == null);
var inst_20117 = cljs.core.not.call(null,inst_20116);
var state_20135__$1 = (function (){var statearr_20140 = state_20135;
(statearr_20140[(8)] = inst_20115__$1);

return statearr_20140;
})();
if(inst_20117){
var statearr_20141_20163 = state_20135__$1;
(statearr_20141_20163[(1)] = (5));

} else {
var statearr_20142_20164 = state_20135__$1;
(statearr_20142_20164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20136 === (6))){
var state_20135__$1 = state_20135;
var statearr_20143_20165 = state_20135__$1;
(statearr_20143_20165[(2)] = null);

(statearr_20143_20165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20136 === (3))){
var inst_20132 = (state_20135[(2)]);
var inst_20133 = cljs.core.async.close_BANG_.call(null,out);
var state_20135__$1 = (function (){var statearr_20144 = state_20135;
(statearr_20144[(9)] = inst_20132);

return statearr_20144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20135__$1,inst_20133);
} else {
if((state_val_20136 === (2))){
var state_20135__$1 = state_20135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20135__$1,(4),ch);
} else {
if((state_val_20136 === (11))){
var inst_20115 = (state_20135[(8)]);
var inst_20124 = (state_20135[(2)]);
var inst_20112 = inst_20115;
var state_20135__$1 = (function (){var statearr_20145 = state_20135;
(statearr_20145[(7)] = inst_20112);

(statearr_20145[(10)] = inst_20124);

return statearr_20145;
})();
var statearr_20146_20166 = state_20135__$1;
(statearr_20146_20166[(2)] = null);

(statearr_20146_20166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20136 === (9))){
var inst_20115 = (state_20135[(8)]);
var state_20135__$1 = state_20135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20135__$1,(11),out,inst_20115);
} else {
if((state_val_20136 === (5))){
var inst_20112 = (state_20135[(7)]);
var inst_20115 = (state_20135[(8)]);
var inst_20119 = cljs.core._EQ_.call(null,inst_20115,inst_20112);
var state_20135__$1 = state_20135;
if(inst_20119){
var statearr_20148_20167 = state_20135__$1;
(statearr_20148_20167[(1)] = (8));

} else {
var statearr_20149_20168 = state_20135__$1;
(statearr_20149_20168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20136 === (10))){
var inst_20127 = (state_20135[(2)]);
var state_20135__$1 = state_20135;
var statearr_20150_20169 = state_20135__$1;
(statearr_20150_20169[(2)] = inst_20127);

(statearr_20150_20169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20136 === (8))){
var inst_20112 = (state_20135[(7)]);
var tmp20147 = inst_20112;
var inst_20112__$1 = tmp20147;
var state_20135__$1 = (function (){var statearr_20151 = state_20135;
(statearr_20151[(7)] = inst_20112__$1);

return statearr_20151;
})();
var statearr_20152_20170 = state_20135__$1;
(statearr_20152_20170[(2)] = null);

(statearr_20152_20170[(1)] = (2));


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
}
}
}
});})(c__6633__auto___20160,out))
;
return ((function (switch__6577__auto__,c__6633__auto___20160,out){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_20156 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20156[(0)] = state_machine__6578__auto__);

(statearr_20156[(1)] = (1));

return statearr_20156;
});
var state_machine__6578__auto____1 = (function (state_20135){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_20135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e20157){if((e20157 instanceof Object)){
var ex__6581__auto__ = e20157;
var statearr_20158_20171 = state_20135;
(statearr_20158_20171[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20172 = state_20135;
state_20135 = G__20172;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_20135){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_20135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___20160,out))
})();
var state__6635__auto__ = (function (){var statearr_20159 = f__6634__auto__.call(null);
(statearr_20159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___20160);

return statearr_20159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___20160,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6633__auto___20307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___20307,out){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___20307,out){
return (function (state_20277){
var state_val_20278 = (state_20277[(1)]);
if((state_val_20278 === (7))){
var inst_20273 = (state_20277[(2)]);
var state_20277__$1 = state_20277;
var statearr_20279_20308 = state_20277__$1;
(statearr_20279_20308[(2)] = inst_20273);

(statearr_20279_20308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (1))){
var inst_20240 = (new Array(n));
var inst_20241 = inst_20240;
var inst_20242 = (0);
var state_20277__$1 = (function (){var statearr_20280 = state_20277;
(statearr_20280[(7)] = inst_20241);

(statearr_20280[(8)] = inst_20242);

return statearr_20280;
})();
var statearr_20281_20309 = state_20277__$1;
(statearr_20281_20309[(2)] = null);

(statearr_20281_20309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (4))){
var inst_20245 = (state_20277[(9)]);
var inst_20245__$1 = (state_20277[(2)]);
var inst_20246 = (inst_20245__$1 == null);
var inst_20247 = cljs.core.not.call(null,inst_20246);
var state_20277__$1 = (function (){var statearr_20282 = state_20277;
(statearr_20282[(9)] = inst_20245__$1);

return statearr_20282;
})();
if(inst_20247){
var statearr_20283_20310 = state_20277__$1;
(statearr_20283_20310[(1)] = (5));

} else {
var statearr_20284_20311 = state_20277__$1;
(statearr_20284_20311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (15))){
var inst_20267 = (state_20277[(2)]);
var state_20277__$1 = state_20277;
var statearr_20285_20312 = state_20277__$1;
(statearr_20285_20312[(2)] = inst_20267);

(statearr_20285_20312[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (13))){
var state_20277__$1 = state_20277;
var statearr_20286_20313 = state_20277__$1;
(statearr_20286_20313[(2)] = null);

(statearr_20286_20313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (6))){
var inst_20242 = (state_20277[(8)]);
var inst_20263 = (inst_20242 > (0));
var state_20277__$1 = state_20277;
if(cljs.core.truth_(inst_20263)){
var statearr_20287_20314 = state_20277__$1;
(statearr_20287_20314[(1)] = (12));

} else {
var statearr_20288_20315 = state_20277__$1;
(statearr_20288_20315[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (3))){
var inst_20275 = (state_20277[(2)]);
var state_20277__$1 = state_20277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20277__$1,inst_20275);
} else {
if((state_val_20278 === (12))){
var inst_20241 = (state_20277[(7)]);
var inst_20265 = cljs.core.vec.call(null,inst_20241);
var state_20277__$1 = state_20277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20277__$1,(15),out,inst_20265);
} else {
if((state_val_20278 === (2))){
var state_20277__$1 = state_20277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20277__$1,(4),ch);
} else {
if((state_val_20278 === (11))){
var inst_20257 = (state_20277[(2)]);
var inst_20258 = (new Array(n));
var inst_20241 = inst_20258;
var inst_20242 = (0);
var state_20277__$1 = (function (){var statearr_20289 = state_20277;
(statearr_20289[(7)] = inst_20241);

(statearr_20289[(8)] = inst_20242);

(statearr_20289[(10)] = inst_20257);

return statearr_20289;
})();
var statearr_20290_20316 = state_20277__$1;
(statearr_20290_20316[(2)] = null);

(statearr_20290_20316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (9))){
var inst_20241 = (state_20277[(7)]);
var inst_20255 = cljs.core.vec.call(null,inst_20241);
var state_20277__$1 = state_20277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20277__$1,(11),out,inst_20255);
} else {
if((state_val_20278 === (5))){
var inst_20241 = (state_20277[(7)]);
var inst_20250 = (state_20277[(11)]);
var inst_20242 = (state_20277[(8)]);
var inst_20245 = (state_20277[(9)]);
var inst_20249 = (inst_20241[inst_20242] = inst_20245);
var inst_20250__$1 = (inst_20242 + (1));
var inst_20251 = (inst_20250__$1 < n);
var state_20277__$1 = (function (){var statearr_20291 = state_20277;
(statearr_20291[(11)] = inst_20250__$1);

(statearr_20291[(12)] = inst_20249);

return statearr_20291;
})();
if(cljs.core.truth_(inst_20251)){
var statearr_20292_20317 = state_20277__$1;
(statearr_20292_20317[(1)] = (8));

} else {
var statearr_20293_20318 = state_20277__$1;
(statearr_20293_20318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (14))){
var inst_20270 = (state_20277[(2)]);
var inst_20271 = cljs.core.async.close_BANG_.call(null,out);
var state_20277__$1 = (function (){var statearr_20295 = state_20277;
(statearr_20295[(13)] = inst_20270);

return statearr_20295;
})();
var statearr_20296_20319 = state_20277__$1;
(statearr_20296_20319[(2)] = inst_20271);

(statearr_20296_20319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (10))){
var inst_20261 = (state_20277[(2)]);
var state_20277__$1 = state_20277;
var statearr_20297_20320 = state_20277__$1;
(statearr_20297_20320[(2)] = inst_20261);

(statearr_20297_20320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (8))){
var inst_20241 = (state_20277[(7)]);
var inst_20250 = (state_20277[(11)]);
var tmp20294 = inst_20241;
var inst_20241__$1 = tmp20294;
var inst_20242 = inst_20250;
var state_20277__$1 = (function (){var statearr_20298 = state_20277;
(statearr_20298[(7)] = inst_20241__$1);

(statearr_20298[(8)] = inst_20242);

return statearr_20298;
})();
var statearr_20299_20321 = state_20277__$1;
(statearr_20299_20321[(2)] = null);

(statearr_20299_20321[(1)] = (2));


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
}
}
}
}
}
}
}
});})(c__6633__auto___20307,out))
;
return ((function (switch__6577__auto__,c__6633__auto___20307,out){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_20303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20303[(0)] = state_machine__6578__auto__);

(statearr_20303[(1)] = (1));

return statearr_20303;
});
var state_machine__6578__auto____1 = (function (state_20277){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_20277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e20304){if((e20304 instanceof Object)){
var ex__6581__auto__ = e20304;
var statearr_20305_20322 = state_20277;
(statearr_20305_20322[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20323 = state_20277;
state_20277 = G__20323;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_20277){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_20277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___20307,out))
})();
var state__6635__auto__ = (function (){var statearr_20306 = f__6634__auto__.call(null);
(statearr_20306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___20307);

return statearr_20306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___20307,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6633__auto___20466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6633__auto___20466,out){
return (function (){
var f__6634__auto__ = (function (){var switch__6577__auto__ = ((function (c__6633__auto___20466,out){
return (function (state_20436){
var state_val_20437 = (state_20436[(1)]);
if((state_val_20437 === (7))){
var inst_20432 = (state_20436[(2)]);
var state_20436__$1 = state_20436;
var statearr_20438_20467 = state_20436__$1;
(statearr_20438_20467[(2)] = inst_20432);

(statearr_20438_20467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20437 === (1))){
var inst_20395 = [];
var inst_20396 = inst_20395;
var inst_20397 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20436__$1 = (function (){var statearr_20439 = state_20436;
(statearr_20439[(7)] = inst_20396);

(statearr_20439[(8)] = inst_20397);

return statearr_20439;
})();
var statearr_20440_20468 = state_20436__$1;
(statearr_20440_20468[(2)] = null);

(statearr_20440_20468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20437 === (4))){
var inst_20400 = (state_20436[(9)]);
var inst_20400__$1 = (state_20436[(2)]);
var inst_20401 = (inst_20400__$1 == null);
var inst_20402 = cljs.core.not.call(null,inst_20401);
var state_20436__$1 = (function (){var statearr_20441 = state_20436;
(statearr_20441[(9)] = inst_20400__$1);

return statearr_20441;
})();
if(inst_20402){
var statearr_20442_20469 = state_20436__$1;
(statearr_20442_20469[(1)] = (5));

} else {
var statearr_20443_20470 = state_20436__$1;
(statearr_20443_20470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20437 === (15))){
var inst_20426 = (state_20436[(2)]);
var state_20436__$1 = state_20436;
var statearr_20444_20471 = state_20436__$1;
(statearr_20444_20471[(2)] = inst_20426);

(statearr_20444_20471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20437 === (13))){
var state_20436__$1 = state_20436;
var statearr_20445_20472 = state_20436__$1;
(statearr_20445_20472[(2)] = null);

(statearr_20445_20472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20437 === (6))){
var inst_20396 = (state_20436[(7)]);
var inst_20421 = inst_20396.length;
var inst_20422 = (inst_20421 > (0));
var state_20436__$1 = state_20436;
if(cljs.core.truth_(inst_20422)){
var statearr_20446_20473 = state_20436__$1;
(statearr_20446_20473[(1)] = (12));

} else {
var statearr_20447_20474 = state_20436__$1;
(statearr_20447_20474[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20437 === (3))){
var inst_20434 = (state_20436[(2)]);
var state_20436__$1 = state_20436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20436__$1,inst_20434);
} else {
if((state_val_20437 === (12))){
var inst_20396 = (state_20436[(7)]);
var inst_20424 = cljs.core.vec.call(null,inst_20396);
var state_20436__$1 = state_20436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20436__$1,(15),out,inst_20424);
} else {
if((state_val_20437 === (2))){
var state_20436__$1 = state_20436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20436__$1,(4),ch);
} else {
if((state_val_20437 === (11))){
var inst_20404 = (state_20436[(10)]);
var inst_20400 = (state_20436[(9)]);
var inst_20414 = (state_20436[(2)]);
var inst_20415 = [];
var inst_20416 = inst_20415.push(inst_20400);
var inst_20396 = inst_20415;
var inst_20397 = inst_20404;
var state_20436__$1 = (function (){var statearr_20448 = state_20436;
(statearr_20448[(7)] = inst_20396);

(statearr_20448[(11)] = inst_20416);

(statearr_20448[(12)] = inst_20414);

(statearr_20448[(8)] = inst_20397);

return statearr_20448;
})();
var statearr_20449_20475 = state_20436__$1;
(statearr_20449_20475[(2)] = null);

(statearr_20449_20475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20437 === (9))){
var inst_20396 = (state_20436[(7)]);
var inst_20412 = cljs.core.vec.call(null,inst_20396);
var state_20436__$1 = state_20436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20436__$1,(11),out,inst_20412);
} else {
if((state_val_20437 === (5))){
var inst_20404 = (state_20436[(10)]);
var inst_20400 = (state_20436[(9)]);
var inst_20397 = (state_20436[(8)]);
var inst_20404__$1 = f.call(null,inst_20400);
var inst_20405 = cljs.core._EQ_.call(null,inst_20404__$1,inst_20397);
var inst_20406 = cljs.core.keyword_identical_QMARK_.call(null,inst_20397,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20407 = (inst_20405) || (inst_20406);
var state_20436__$1 = (function (){var statearr_20450 = state_20436;
(statearr_20450[(10)] = inst_20404__$1);

return statearr_20450;
})();
if(cljs.core.truth_(inst_20407)){
var statearr_20451_20476 = state_20436__$1;
(statearr_20451_20476[(1)] = (8));

} else {
var statearr_20452_20477 = state_20436__$1;
(statearr_20452_20477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20437 === (14))){
var inst_20429 = (state_20436[(2)]);
var inst_20430 = cljs.core.async.close_BANG_.call(null,out);
var state_20436__$1 = (function (){var statearr_20454 = state_20436;
(statearr_20454[(13)] = inst_20429);

return statearr_20454;
})();
var statearr_20455_20478 = state_20436__$1;
(statearr_20455_20478[(2)] = inst_20430);

(statearr_20455_20478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20437 === (10))){
var inst_20419 = (state_20436[(2)]);
var state_20436__$1 = state_20436;
var statearr_20456_20479 = state_20436__$1;
(statearr_20456_20479[(2)] = inst_20419);

(statearr_20456_20479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20437 === (8))){
var inst_20404 = (state_20436[(10)]);
var inst_20396 = (state_20436[(7)]);
var inst_20400 = (state_20436[(9)]);
var inst_20409 = inst_20396.push(inst_20400);
var tmp20453 = inst_20396;
var inst_20396__$1 = tmp20453;
var inst_20397 = inst_20404;
var state_20436__$1 = (function (){var statearr_20457 = state_20436;
(statearr_20457[(14)] = inst_20409);

(statearr_20457[(7)] = inst_20396__$1);

(statearr_20457[(8)] = inst_20397);

return statearr_20457;
})();
var statearr_20458_20480 = state_20436__$1;
(statearr_20458_20480[(2)] = null);

(statearr_20458_20480[(1)] = (2));


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
}
}
}
}
}
}
}
});})(c__6633__auto___20466,out))
;
return ((function (switch__6577__auto__,c__6633__auto___20466,out){
return (function() {
var state_machine__6578__auto__ = null;
var state_machine__6578__auto____0 = (function (){
var statearr_20462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20462[(0)] = state_machine__6578__auto__);

(statearr_20462[(1)] = (1));

return statearr_20462;
});
var state_machine__6578__auto____1 = (function (state_20436){
while(true){
var ret_value__6579__auto__ = (function (){try{while(true){
var result__6580__auto__ = switch__6577__auto__.call(null,state_20436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6580__auto__;
}
break;
}
}catch (e20463){if((e20463 instanceof Object)){
var ex__6581__auto__ = e20463;
var statearr_20464_20481 = state_20436;
(statearr_20464_20481[(5)] = ex__6581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20482 = state_20436;
state_20436 = G__20482;
continue;
} else {
return ret_value__6579__auto__;
}
break;
}
});
state_machine__6578__auto__ = function(state_20436){
switch(arguments.length){
case 0:
return state_machine__6578__auto____0.call(this);
case 1:
return state_machine__6578__auto____1.call(this,state_20436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6578__auto____0;
state_machine__6578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6578__auto____1;
return state_machine__6578__auto__;
})()
;})(switch__6577__auto__,c__6633__auto___20466,out))
})();
var state__6635__auto__ = (function (){var statearr_20465 = f__6634__auto__.call(null);
(statearr_20465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6633__auto___20466);

return statearr_20465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6635__auto__);
});})(c__6633__auto___20466,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map