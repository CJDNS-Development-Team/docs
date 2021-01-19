(function() {var implementors = {};
implementors["cjdns_bytes"] = [{"text":"impl Copy for ParseError","synthetic":false,"types":[]},{"text":"impl Copy for SerializeError","synthetic":false,"types":[]}];
implementors["cjdns_core"] = [{"text":"impl Copy for EncodingSchemeForm","synthetic":false,"types":[]},{"text":"impl&lt;L:&nbsp;Copy + LabelBits&gt; Copy for RoutingLabel&lt;L&gt;","synthetic":false,"types":[]},{"text":"impl Copy for LabelError","synthetic":false,"types":[]}];
implementors["cjdns_ctrl"] = [{"text":"impl Copy for CtrlMessageType","synthetic":false,"types":[]},{"text":"impl Copy for ErrorMessageType","synthetic":false,"types":[]}];
implementors["cjdns_hdr"] = [{"text":"impl Copy for ContentType","synthetic":false,"types":[]}];
implementors["cjdns_snode"] = [{"text":"impl Copy for PeerType","synthetic":false,"types":[]},{"text":"impl Copy for NodeType","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()