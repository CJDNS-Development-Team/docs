(function() {var implementors = {};
implementors["cjdns_core"] = [{"text":"impl&lt;'_&gt; TryFrom&lt;&amp;'_ str&gt; for RoutingLabel&lt;u32&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; TryFrom&lt;&amp;'_ str&gt; for RoutingLabel&lt;u64&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; TryFrom&lt;&amp;'_ str&gt; for RoutingLabel&lt;u128&gt;","synthetic":false,"types":[]}];
implementors["cjdns_ctrl"] = [{"text":"impl TryFrom&lt;u16&gt; for CtrlMessageType","synthetic":false,"types":[]}];
implementors["cjdns_keys"] = [{"text":"impl&lt;'_&gt; TryFrom&lt;&amp;'_ CJDNSPublicKey&gt; for CJDNS_IP6","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; TryFrom&lt;&amp;'_ [u8]&gt; for CJDNS_IP6","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; TryFrom&lt;&amp;'_ str&gt; for CJDNS_IP6","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; TryFrom&lt;&amp;'_ str&gt; for CJDNSPrivateKey","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; TryFrom&lt;&amp;'_ str&gt; for CJDNSPublicKey","synthetic":false,"types":[]}];
implementors["cjdns_snode"] = [{"text":"impl TryFrom&lt;EncForm&gt; for EncodingSchemeForm","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()