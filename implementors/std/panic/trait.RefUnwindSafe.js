(function() {var implementors = {};
implementors["cjdns_admin"] = [{"text":"impl RefUnwindSafe for Opts","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Connection","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ArgValues","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Arg","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Args","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Func","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Funcs","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ArgValue","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ArgType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReturnValue","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Empty","synthetic":true,"types":[]}];
implementors["cjdns_ann"] = [{"text":"impl RefUnwindSafe for AnnHash","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Announcement","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AnnouncementHeader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LinkStateData","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PeerData","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AnnouncementPacket","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Entity","synthetic":true,"types":[]}];
implementors["cjdns_bencode"] = [{"text":"impl RefUnwindSafe for BValue","synthetic":true,"types":[]}];
implementors["cjdns_bytes"] = [{"text":"impl&lt;'a&gt; RefUnwindSafe for Reader&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Writer","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ParseError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SerializeError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExpectedSize","synthetic":true,"types":[]}];
implementors["cjdns_core"] = [{"text":"impl RefUnwindSafe for EncodingScheme","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EncodingSchemeForm","synthetic":true,"types":[]},{"text":"impl&lt;'a, L&gt; RefUnwindSafe for PathHop&lt;'a, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;L&gt; RefUnwindSafe for RoutingLabel&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SchemeValidationError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EncodingSerializationError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LabelError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for F4","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for F8","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for V48","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for V358","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for V37","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SpliceError","synthetic":true,"types":[]}];
implementors["cjdns_ctrl"] = [{"text":"impl RefUnwindSafe for CtrlMessage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ErrorData","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PingData","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CtrlMessageData","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CtrlMessageType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ErrorMessageType","synthetic":true,"types":[]}];
implementors["cjdns_hdr"] = [{"text":"impl RefUnwindSafe for DataHeader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RouteHeader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SwitchHeader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ContentType","synthetic":true,"types":[]}];
implementors["cjdns_keys"] = [{"text":"impl RefUnwindSafe for CJDNSKeys","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CJDNSKeysApi","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CJDNS_IP6","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CJDNSPrivateKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CJDNSPublicKey","synthetic":true,"types":[]}];
implementors["cjdns_sniff"] = [{"text":"impl !RefUnwindSafe for Sniffer","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Message","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Content","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ConnectError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for SendError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ReceiveError","synthetic":true,"types":[]}];
implementors["cjdns_snode"] = [{"text":"impl RefUnwindSafe for Opts","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Message","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageData","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EncodingError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DecodingError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Peers","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AnnList","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PeersInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PeerInfo","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Peer","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PeerConnectionClosed","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PeerType","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PeerList","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Server","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ServerMut","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReplyError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Link","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LinkStateMut","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LinkStateEntry","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Nodes","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Node","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NodeMut","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NodeType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Routing","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CacheKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Route","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Hop","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RoutingError","synthetic":true,"types":[]},{"text":"impl&lt;T, W&gt; RefUnwindSafe for Dijkstra&lt;T, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, W&gt; RefUnwindSafe for Frontier&lt;T, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CoreNodeInfoPayload","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EncForm","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WebServerError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Json","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NodesInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NodeShortInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NODE_NAME_RE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Seq","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()