(function() {var implementors = {};
implementors["cjdns_admin"] = [{"text":"impl Unpin for Opts","synthetic":true,"types":[]},{"text":"impl Unpin for Connection","synthetic":true,"types":[]},{"text":"impl Unpin for ArgValues","synthetic":true,"types":[]},{"text":"impl Unpin for Arg","synthetic":true,"types":[]},{"text":"impl Unpin for Args","synthetic":true,"types":[]},{"text":"impl Unpin for Func","synthetic":true,"types":[]},{"text":"impl Unpin for Funcs","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl Unpin for ArgValue","synthetic":true,"types":[]},{"text":"impl Unpin for ArgType","synthetic":true,"types":[]},{"text":"impl Unpin for ReturnValue","synthetic":true,"types":[]},{"text":"impl Unpin for Empty","synthetic":true,"types":[]}];
implementors["cjdns_ann"] = [{"text":"impl Unpin for AnnHash","synthetic":true,"types":[]},{"text":"impl Unpin for Announcement","synthetic":true,"types":[]},{"text":"impl Unpin for AnnouncementHeader","synthetic":true,"types":[]},{"text":"impl Unpin for LinkStateData","synthetic":true,"types":[]},{"text":"impl Unpin for PeerData","synthetic":true,"types":[]},{"text":"impl Unpin for AnnouncementPacket","synthetic":true,"types":[]},{"text":"impl Unpin for Entity","synthetic":true,"types":[]}];
implementors["cjdns_bencode"] = [{"text":"impl Unpin for BValue","synthetic":true,"types":[]}];
implementors["cjdns_bytes"] = [{"text":"impl&lt;'a&gt; Unpin for Reader&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Writer","synthetic":true,"types":[]},{"text":"impl Unpin for ParseError","synthetic":true,"types":[]},{"text":"impl Unpin for SerializeError","synthetic":true,"types":[]},{"text":"impl Unpin for ExpectedSize","synthetic":true,"types":[]}];
implementors["cjdns_core"] = [{"text":"impl Unpin for EncodingScheme","synthetic":true,"types":[]},{"text":"impl Unpin for EncodingSchemeForm","synthetic":true,"types":[]},{"text":"impl&lt;'a, L&gt; Unpin for PathHop&lt;'a, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;L&gt; Unpin for RoutingLabel&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for SchemeValidationError","synthetic":true,"types":[]},{"text":"impl Unpin for EncodingSerializationError","synthetic":true,"types":[]},{"text":"impl Unpin for LabelError","synthetic":true,"types":[]},{"text":"impl Unpin for F4","synthetic":true,"types":[]},{"text":"impl Unpin for F8","synthetic":true,"types":[]},{"text":"impl Unpin for V48","synthetic":true,"types":[]},{"text":"impl Unpin for V358","synthetic":true,"types":[]},{"text":"impl Unpin for V37","synthetic":true,"types":[]},{"text":"impl Unpin for SpliceError","synthetic":true,"types":[]}];
implementors["cjdns_ctrl"] = [{"text":"impl Unpin for CtrlMessage","synthetic":true,"types":[]},{"text":"impl Unpin for ErrorData","synthetic":true,"types":[]},{"text":"impl Unpin for PingData","synthetic":true,"types":[]},{"text":"impl Unpin for CtrlMessageData","synthetic":true,"types":[]},{"text":"impl Unpin for CtrlMessageType","synthetic":true,"types":[]},{"text":"impl Unpin for ErrorMessageType","synthetic":true,"types":[]}];
implementors["cjdns_hdr"] = [{"text":"impl Unpin for DataHeader","synthetic":true,"types":[]},{"text":"impl Unpin for RouteHeader","synthetic":true,"types":[]},{"text":"impl Unpin for SwitchHeader","synthetic":true,"types":[]},{"text":"impl Unpin for ContentType","synthetic":true,"types":[]}];
implementors["cjdns_keys"] = [{"text":"impl Unpin for CJDNSKeys","synthetic":true,"types":[]},{"text":"impl Unpin for CJDNSKeysApi","synthetic":true,"types":[]},{"text":"impl Unpin for CJDNS_IP6","synthetic":true,"types":[]},{"text":"impl Unpin for CJDNSPrivateKey","synthetic":true,"types":[]},{"text":"impl Unpin for CJDNSPublicKey","synthetic":true,"types":[]}];
implementors["cjdns_sniff"] = [{"text":"impl Unpin for Sniffer","synthetic":true,"types":[]},{"text":"impl Unpin for Message","synthetic":true,"types":[]},{"text":"impl Unpin for Content","synthetic":true,"types":[]},{"text":"impl Unpin for ConnectError","synthetic":true,"types":[]},{"text":"impl Unpin for SendError","synthetic":true,"types":[]},{"text":"impl Unpin for ReceiveError","synthetic":true,"types":[]}];
implementors["cjdns_snode"] = [{"text":"impl Unpin for Opts","synthetic":true,"types":[]},{"text":"impl Unpin for Config","synthetic":true,"types":[]},{"text":"impl Unpin for Message","synthetic":true,"types":[]},{"text":"impl Unpin for MessageData","synthetic":true,"types":[]},{"text":"impl Unpin for EncodingError","synthetic":true,"types":[]},{"text":"impl Unpin for DecodingError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for PathSearchTree&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, W&gt; Unpin for Dijkstra&lt;T, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, W&gt; Unpin for Frontier&lt;T, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Peers","synthetic":true,"types":[]},{"text":"impl Unpin for AnnList","synthetic":true,"types":[]},{"text":"impl Unpin for PeersInfo","synthetic":true,"types":[]},{"text":"impl Unpin for PeerInfo","synthetic":true,"types":[]},{"text":"impl Unpin for Peer","synthetic":true,"types":[]},{"text":"impl Unpin for PeerConnectionClosed","synthetic":true,"types":[]},{"text":"impl Unpin for PeerType","synthetic":true,"types":[]},{"text":"impl Unpin for PeerList","synthetic":true,"types":[]},{"text":"impl Unpin for Server","synthetic":true,"types":[]},{"text":"impl Unpin for ServerMut","synthetic":true,"types":[]},{"text":"impl Unpin for ReplyError","synthetic":true,"types":[]},{"text":"impl Unpin for Link","synthetic":true,"types":[]},{"text":"impl Unpin for LinkStateMut","synthetic":true,"types":[]},{"text":"impl Unpin for LinkStateEntry","synthetic":true,"types":[]},{"text":"impl Unpin for Nodes","synthetic":true,"types":[]},{"text":"impl Unpin for Node","synthetic":true,"types":[]},{"text":"impl Unpin for NodeMut","synthetic":true,"types":[]},{"text":"impl Unpin for NodeType","synthetic":true,"types":[]},{"text":"impl Unpin for Routing","synthetic":true,"types":[]},{"text":"impl Unpin for CacheKey","synthetic":true,"types":[]},{"text":"impl Unpin for Route","synthetic":true,"types":[]},{"text":"impl Unpin for Hop","synthetic":true,"types":[]},{"text":"impl Unpin for RoutingError","synthetic":true,"types":[]},{"text":"impl Unpin for CoreNodeInfoPayload","synthetic":true,"types":[]},{"text":"impl Unpin for EncForm","synthetic":true,"types":[]},{"text":"impl Unpin for WebServerError","synthetic":true,"types":[]},{"text":"impl Unpin for Json","synthetic":true,"types":[]},{"text":"impl Unpin for NodesInfo","synthetic":true,"types":[]},{"text":"impl Unpin for NodeShortInfo","synthetic":true,"types":[]},{"text":"impl Unpin for NODE_NAME_RE","synthetic":true,"types":[]},{"text":"impl Unpin for Seq","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()