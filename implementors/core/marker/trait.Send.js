(function() {var implementors = {};
implementors["cjdns_admin"] = [{"text":"impl Send for Opts","synthetic":true,"types":[]},{"text":"impl Send for Connection","synthetic":true,"types":[]},{"text":"impl Send for ArgValues","synthetic":true,"types":[]},{"text":"impl Send for Arg","synthetic":true,"types":[]},{"text":"impl Send for Args","synthetic":true,"types":[]},{"text":"impl Send for Func","synthetic":true,"types":[]},{"text":"impl Send for Funcs","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for ArgValue","synthetic":true,"types":[]},{"text":"impl Send for ArgType","synthetic":true,"types":[]},{"text":"impl Send for ReturnValue","synthetic":true,"types":[]},{"text":"impl Send for Empty","synthetic":true,"types":[]}];
implementors["cjdns_ann"] = [{"text":"impl Send for Announcement","synthetic":true,"types":[]},{"text":"impl Send for AnnouncementHeader","synthetic":true,"types":[]},{"text":"impl Send for AnnouncementPacket","synthetic":true,"types":[]},{"text":"impl Send for Entity","synthetic":true,"types":[]}];
implementors["cjdns_bencode"] = [{"text":"impl Send for BValue","synthetic":true,"types":[]}];
implementors["cjdns_bytes"] = [{"text":"impl&lt;'a&gt; Send for Reader&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Writer","synthetic":true,"types":[]},{"text":"impl Send for ParseError","synthetic":true,"types":[]},{"text":"impl Send for SerializeError","synthetic":true,"types":[]},{"text":"impl Send for ExpectedSize","synthetic":true,"types":[]}];
implementors["cjdns_core"] = [{"text":"impl Send for EncodingScheme","synthetic":true,"types":[]},{"text":"impl Send for EncodingSchemeForm","synthetic":true,"types":[]},{"text":"impl&lt;'a, L&gt; Send for PathHop&lt;'a, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;L&gt; Send for RoutingLabel&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for SchemeValidationError","synthetic":true,"types":[]},{"text":"impl Send for EncodingSerializationError","synthetic":true,"types":[]},{"text":"impl Send for LabelError","synthetic":true,"types":[]},{"text":"impl Send for F4","synthetic":true,"types":[]},{"text":"impl Send for F8","synthetic":true,"types":[]},{"text":"impl Send for V48","synthetic":true,"types":[]},{"text":"impl Send for V358","synthetic":true,"types":[]},{"text":"impl Send for V37","synthetic":true,"types":[]},{"text":"impl Send for SpliceError","synthetic":true,"types":[]}];
implementors["cjdns_ctrl"] = [{"text":"impl Send for CtrlMessage","synthetic":true,"types":[]},{"text":"impl Send for ErrorData","synthetic":true,"types":[]},{"text":"impl Send for PingData","synthetic":true,"types":[]},{"text":"impl Send for CtrlMessageData","synthetic":true,"types":[]},{"text":"impl Send for CtrlMessageType","synthetic":true,"types":[]},{"text":"impl Send for ErrorMessageType","synthetic":true,"types":[]}];
implementors["cjdns_hdr"] = [{"text":"impl Send for DataHeader","synthetic":true,"types":[]},{"text":"impl Send for RouteHeader","synthetic":true,"types":[]},{"text":"impl Send for SwitchHeader","synthetic":true,"types":[]},{"text":"impl Send for ContentType","synthetic":true,"types":[]}];
implementors["cjdns_keys"] = [{"text":"impl Send for CJDNSKeys","synthetic":true,"types":[]},{"text":"impl Send for CJDNSKeysApi","synthetic":true,"types":[]},{"text":"impl Send for CJDNS_IP6","synthetic":true,"types":[]},{"text":"impl Send for CJDNSPrivateKey","synthetic":true,"types":[]},{"text":"impl Send for CJDNSPublicKey","synthetic":true,"types":[]}];
implementors["cjdns_sniff"] = [{"text":"impl Send for Sniffer","synthetic":true,"types":[]},{"text":"impl Send for Message","synthetic":true,"types":[]},{"text":"impl Send for Content","synthetic":true,"types":[]},{"text":"impl Send for ConnectError","synthetic":true,"types":[]},{"text":"impl Send for SendError","synthetic":true,"types":[]},{"text":"impl Send for ReceiveError","synthetic":true,"types":[]}];
implementors["cjdns_snode"] = [{"text":"impl Send for Opts","synthetic":true,"types":[]},{"text":"impl Send for Config","synthetic":true,"types":[]},{"text":"impl Send for NODE_NAME_RE","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()