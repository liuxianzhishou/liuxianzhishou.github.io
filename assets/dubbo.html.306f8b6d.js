import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as l,e as r}from"./app.5aebcaaa.js";var a="/assets/img.e00b38e9.png";const d={},o=r('<h1 id="dubbo" tabindex="-1"><a class="header-anchor" href="#dubbo" aria-hidden="true">#</a> \u{1F356} Dubbo</h1><h2 id="_1-\u603B\u4F53\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#_1-\u603B\u4F53\u67B6\u6784" aria-hidden="true">#</a> 1. \u603B\u4F53\u67B6\u6784</h2><h3 id="_1-\u7ED3\u6784\u56FE" tabindex="-1"><a class="header-anchor" href="#_1-\u7ED3\u6784\u56FE" aria-hidden="true">#</a> 1) \u7ED3\u6784\u56FE</h3><p><img src="'+a+'" alt="img.png"></p><h3 id="_2-\u8282\u70B9\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-\u8282\u70B9\u8BF4\u660E" aria-hidden="true">#</a> 2) \u8282\u70B9\u8BF4\u660E</h3><table><thead><tr><th>\u8282\u70B9</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>Provider</code></td><td>\u66B4\u9732\u670D\u52A1\u7684 \u670D\u52A1\u63D0\u4F9B\u8005</td></tr><tr><td><code>Consumer</code></td><td>\u8FDC\u7A0B\u8C03\u7528\u670D\u52A1\u7684 \u670D\u52A1\u6D88\u8D39\u8005</td></tr><tr><td><code>Registry</code></td><td>\u670D\u52A1\u6CE8\u518C &amp; \u53D1\u73B0\u7684 \u6CE8\u518C\u4E2D\u5FC3</td></tr><tr><td><code>Monitor</code></td><td>\u7EDF\u8BA1 \u670D\u52A1\u8C03\u7528\u6B21\u6570 &amp; \u8C03\u7528\u65F6\u95F4 \u7684 \u76D1\u63A7\u4E2D\u5FC3</td></tr><tr><td><code>Container</code></td><td>\u670D\u52A1\u8FD0\u884C\u5BB9\u5668</td></tr></tbody></table><h3 id="_3-\u6D41\u7A0B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_3-\u6D41\u7A0B\u8BF4\u660E" aria-hidden="true">#</a> 3) \u6D41\u7A0B\u8BF4\u660E</h3><ol><li><code>Container</code> \u8D1F\u8D23\u542F\u52A8\uFF0C\u52A0\u8F7D\uFF0C\u8FD0\u884C <code>Provider</code></li><li><code>Provider</code> \u5728\u542F\u52A8\u65F6\uFF0C\u5411 <code>Registry</code> \u6CE8\u518C\u81EA\u5DF1\u63D0\u4F9B\u7684\u670D\u52A1</li><li><code>Consumer</code> \u5728\u542F\u52A8\u65F6\uFF0C\u5411 <code>Registry</code> \u8BA2\u9605\u81EA\u5DF1\u6240\u9700\u7684\u670D\u52A1</li><li><code>Registry</code> \u8FD4\u56DE <code>Provider</code> <strong>\u5730\u5740\u5217\u8868</strong> \u7ED9 <code>Consumer</code><ul><li>\u5982\u679C\u6709\u53D8\u66F4\uFF0C<code>Registry</code> \u5C06\u57FA\u4E8E <mark>\u957F\u8FDE\u63A5</mark> \u63A8\u9001\u53D8\u66F4\u6570\u636E\u7ED9 <code>Consumer</code></li></ul></li><li><code>Consumer</code> \u4ECE <code>Provider</code> <strong>\u5730\u5740\u5217\u8868</strong> \u4E2D\uFF0C\u57FA\u4E8E <mark>\u8F6F\u8D1F\u8F7D\u5747\u8861</mark> \u7B97\u6CD5\uFF0C\u9009\u4E00\u53F0 <code>Provider</code> \u8FDB\u884C\u8C03\u7528 <ul><li>\u5982\u679C\u8C03\u7528\u5931\u8D25\uFF0C\u518D\u9009\u53E6\u4E00\u53F0\u8C03\u7528</li></ul></li><li><code>Provider</code> &amp; <code>Consumer</code> \u5728\u5185\u5B58\u4E2D\u7D2F\u8BA1 <strong>\u8C03\u7528\u6B21\u6570</strong> \u548C <strong>\u8C03\u7528\u65F6\u95F4</strong>\uFF0C<mark>\u5B9A\u65F6</mark> \u6BCF\u5206\u949F\u53D1\u9001\u4E00\u6B21\u7EDF\u8BA1\u6570\u636E\u5230 <code>Monitor</code></li></ol><hr><h2 id="_2-\u5206\u5C42" tabindex="-1"><a class="header-anchor" href="#_2-\u5206\u5C42" aria-hidden="true">#</a> 2. \u5206\u5C42</h2><ul><li><strong>Business</strong><ul><li><code>service</code> \u4E1A\u52A1\u903B\u8F91\u5C42 <ul><li>\u63D0\u4F9B \u63A5\u53E3 &amp; \u5B9E\u73B0</li></ul></li></ul></li><li><strong>RPC</strong><ul><li><code>config</code> \u914D\u7F6E\u5C42 <ul><li>\u521D\u59CB\u5316 \u914D\u7F6E\u4FE1\u606F\uFF0C\u6CE8\u610F\u56F4\u7ED5 ServiceConfig &amp; ReferenceConfig</li></ul></li><li><code>proxy</code> \u4EE3\u7406\u5C42 <ul><li>Provider &amp; Consumer \u90FD\u4F1A\u751F\u6210\u4EE3\u7406\u7C7B\uFF0C\u4F7F\u5F97 \u670D\u52A1\u63A5\u53E3\u900F\u660E\u5316</li><li>\u63D0\u4F9B\u8FDC\u7A0B\u8C03\u7528 &amp; \u8FD4\u56DE\u7ED3\u679C</li></ul></li><li><code>registry</code> \u6CE8\u518C\u4E2D\u5FC3\u5C42 <ul><li>\u63D0\u4F9B \u670D\u52A1\u5730\u5740\u7684\u6CE8\u518C\u4E0E\u53D1\u73B0</li></ul></li><li><code>cluster</code> \u8DEF\u7531\u5C42 <ul><li>\u63D0\u4F9B \u8D1F\u8F7D\u5747\u8861 &amp; \u8FDC\u7A0B\u8C03\u7528\u5931\u8D25\u7684\u5BB9\u9519\u63AA\u65BD</li></ul></li><li><code>monitor</code> \u76D1\u63A7\u5C42 <ul><li>\u8BB0\u5F55 RPC \u8C03\u7528\u6B21\u6570 &amp; \u8C03\u7528\u65F6\u95F4</li></ul></li><li><code>protocol</code> \u8FDC\u7A0B\u8C03\u7528\u5C42 <ul><li>\u5C01\u88C5 RPC \u8C03\u7528\uFF0C\u4E3B\u8981\u8D1F\u8F7D\u7BA1\u7406 Invoker</li></ul></li><li><code>exchange</code> \u4FE1\u606F\u4EA4\u6362\u5C42 <ul><li>\u5C01\u88C5\u8BF7\u6C42\u54CD\u5E94\u6A21\u5F0F\uFF0C\u540C\u6B65\u8F6C\u5F02\u6B65</li></ul></li></ul></li><li><strong>Remoting</strong><ul><li><code>transport</code> \u7F51\u7EDC\u4F20\u8F93\u5C42 <ul><li>\u62BD\u8C61\u7F51\u7EDC\u4F20\u8F93\u7684 \u7EDF\u4E00\u63A5\u53E3</li><li>\u63D0\u4F9B Netty &amp; Mina \u4E24\u79CD\u4F20\u8F93\u6A21\u5F0F</li></ul></li><li><code>serialize</code> \u6570\u636E\u5E8F\u5217\u5316\u5C42 <ul><li>\u5BF9 \u9700\u8981\u5728\u7F51\u7EDC\u4F20\u8F93\u7684\u6570\u636E \u8FDB\u884C\u5E8F\u5217\u5316 &amp; \u53CD\u5E8F\u5217\u5316</li></ul></li></ul></li></ul><h3 id="\u5FAE\u5185\u6838-spi-\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u5185\u6838-spi-\u673A\u5236" aria-hidden="true">#</a> \u5FAE\u5185\u6838 &amp; SPI \u673A\u5236</h3><h4 id="spi" tabindex="-1"><a class="header-anchor" href="#spi" aria-hidden="true">#</a> SPI</h4><ul><li>JDK \u5185\u7F6E\u7684\u4E00\u4E2A <strong>\u670D\u52A1\u53D1\u73B0\u673A\u5236</strong></li><li>\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4F1A\u8BFB\u53D6 \u914D\u7F6E\u6587\u4EF6\uFF0C\u901A\u8FC7 <strong>\u53CD\u5C04</strong> \u52A0\u8F7D\u5B9E\u73B0\u7C7B\uFF0C\u5F53\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u65F6\uFF0C\u5C31\u4F1A \u52A8\u6001\u66FF\u6362\u63A5\u53E3\u7684\u5B9E\u73B0\u7C7B</li><li>\u4F7F\u5F97 \u63A5\u53E3 &amp; \u5177\u4F53\u5B9E\u73B0 \u5B8C\u5168\u89E3\u8026\uFF0C\u53EA\u9700\u8981\u58F0\u660E \u63A5\u53E3\uFF0C\u5177\u4F53\u5B9E\u73B0\u53EF\u4EE5\u5728 \u914D\u7F6E \u4E2D\u9009\u62E9 <ul><li>\u5728 <code>META-INF/dubbo/</code> \u76EE\u5F55\u4E0B\u653E\u7F6E\u4E00\u4E2A\u4E0E \u63A5\u53E3 \u540C\u540D\u7684 \u6587\u672C\u6587\u4EF6\uFF0C\u6587\u672C\u7684\u5185\u5BB9\u4E3A <mark>\u63A5\u53E3\u7684\u5B9E\u73B0\u7C7B\u7684\u5168\u9650\u5B9A\u540D</mark>\uFF0C\u591A\u4E2A\u5B9E\u73B0\u7C7B\u7528 \u6362\u884C\u7B26 \u5206\u9694</li><li>\u4F8B\uFF1A <ul><li>\u5B9E\u73B0\u4E86 Dubbo \u7684\u8D1F\u8F7D\u5747\u8861\u7C7B\uFF0C\u5177\u4F53\u5B9E\u73B0\u7C7B\u4E3A <code>MyLoadBalance implements LoadBalance</code></li><li>\u5728 <code>META-INF/dubbo/</code> \u76EE\u5F55\u4E0B\u6DFB\u52A0 \u6587\u4EF6 <code>org.apache.dubbo.rpc.cluster.LoadBalance</code></li><li>\u6587\u672C\u5185\u5BB9\u4E3A <code>xxx=com.example.MyLoadBalance</code></li></ul></li></ul></li></ul><h4 id="dubbo-\u81EA\u5DF1\u5B9E\u73B0\u4E86-spi-\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#dubbo-\u81EA\u5DF1\u5B9E\u73B0\u4E86-spi-\u673A\u5236" aria-hidden="true">#</a> Dubbo \u81EA\u5DF1\u5B9E\u73B0\u4E86 SPI \u673A\u5236</h4><ul><li>Java \u7684 SPI \u5728\u67E5\u627E\u6269\u5C55\u5B9E\u73B0\u7C7B\u65F6\uFF0C\u4F1A\u904D\u5386 SPI \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u5C06 <mark>\u5B9E\u73B0\u7C7B\u5168\u90E8\u5B9E\u4F8B\u5316</mark><ul><li>\u82E5\u67D0\u4E2A \u5B9E\u73B0\u7C7B \u521D\u59CB\u5316\u8FC7\u7A0B\u5341\u5206\u8017\u65F6 &amp; \u6D88\u8017\u8D44\u6E90\uFF0C\u800C\u5B9E\u9645\u53C8\u6682\u65F6\u7528\u4E0D\u5230\uFF0C\u5219\u4F1A\u4EA7\u751F\u6D6A\u8D39</li></ul></li><li>Dubbo \u7684 SPI \u673A\u5236\u53EA\u6709\u9700\u8981\u7528\u5230\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u53BB\u914D\u7F6E\u6587\u4EF6\u4E2D\u67E5\u627E\u8BE5 \u5177\u4F53\u5B9E\u73B0\u7C7B\uFF0C\u7136\u540E\u5B9E\u4F8B\u5316\uFF0C<mark>\u6309\u9700\u52A0\u8F7D</mark></li></ul><hr><h2 id="_3-\u670D\u52A1\u66B4\u9732\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-\u670D\u52A1\u66B4\u9732\u8FC7\u7A0B" aria-hidden="true">#</a> 3. \u670D\u52A1\u66B4\u9732\u8FC7\u7A0B</h2><ol><li>Spring IoC \u5BB9\u5668 refresh \u5B8C\u6BD5\u540E\uFF0CListener \u6536\u5230\u8BE5\u5E7F\u64AD\uFF0C\u8FDB\u884C \u670D\u52A1\u7684\u66B4\u9732</li><li>\u901A\u8FC7 ServiceConfig \u7EC4\u88C5 Dubbo \u7684 <code>URL</code> \u6807\u7B7E</li><li>\u901A\u8FC7 ProxyFactory.getInvoker() \u83B7\u53D6 <code>Invoker</code><ul><li>Invoker \u901A\u8FC7 javassist | JDK <strong>\u52A8\u6001\u4EE3\u7406</strong> \u751F\u6210</li></ul></li><li>\u901A\u8FC7 <code>DubboProtocol</code> \u5C06 Invoker \u8F6C\u6362\u6210 <code>Exporter</code>\uFF0C</li><li>\u542F\u52A8\u670D\u52A1\u5668 Server\uFF0C\u76D1\u542C\u7AEF\u53E3</li><li><code>RegistryProtocol</code> \u4FDD\u5B58 URL \u548C Exporter \u7684\u6620\u5C04\u5173\u7CFB</li><li>\u5411 \u6CE8\u518C\u4E2D\u5FC3 <strong>\u6CE8\u518C</strong> \u670D\u52A1\u63D0\u4F9B\u8005 \u7684\u4FE1\u606F</li></ol><hr><h2 id="_4-\u670D\u52A1\u5F15\u7528\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-\u670D\u52A1\u5F15\u7528\u6D41\u7A0B" aria-hidden="true">#</a> 4. \u670D\u52A1\u5F15\u7528\u6D41\u7A0B</h2><ul><li>\u5206\u4E3A \u997F\u6C49\u5F0F &amp; \u61D2\u6C49\u5F0F <ul><li>default = <strong>\u61D2\u6C49\u5F0F</strong></li></ul></li></ul><ol><li><code>\u670D\u52A1\u6D88\u8D39\u8005</code> \u6839\u636E <code>\u914D\u7F6E\u6587\u4EF6\u4FE1\u606F</code> \u5411 <code>\u6CE8\u518C\u4E2D\u5FC3</code> \u8BA2\u9605\u670D\u52A1</li><li>\u901A\u8FC7 <code>DubboProtocol</code> \u6839\u636E \u8BA2\u9605\u5F97\u5230\u7684 \u670D\u52A1\u63D0\u4F9B\u8005\u5730\u5740 &amp; \u63A5\u53E3\u4FE1\u606F \u521B\u5EFA <code>Invoker</code></li><li>\u901A\u8FC7 <code>Invoker</code> \u4E3A \u670D\u52A1\u63A5\u53E3\u751F\u6210 <code>\u4EE3\u7406\u5BF9\u8C61</code>\uFF0C\u901A\u8FC7\u8BE5 \u4EE3\u7406\u5BF9\u8C61 \u8FDB\u884C\u8FDC\u7A0B\u8C03\u7528 \u670D\u52A1\u63D0\u4F9B\u8005</li></ol><hr><h2 id="_5-\u670D\u52A1\u8C03\u7528\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_5-\u670D\u52A1\u8C03\u7528\u6D41\u7A0B" aria-hidden="true">#</a> 5. \u670D\u52A1\u8C03\u7528\u6D41\u7A0B</h2><ol><li>\u670D\u52A1\u6D88\u8D39\u8005 \u901A\u8FC7 <code>Invoker</code> \u751F\u6210\u4EE3\u7406\u7C7B\uFF0C\u8BB0\u5F55 \u8BE5\u8BF7\u6C42 &amp; \u8BF7\u6C42 ID \u7B49\u5F85 \u670D\u52A1\u63D0\u4F9B\u8005\u7684\u54CD\u5E94</li><li>\u670D\u52A1\u63D0\u4F9B\u8005 \u63A5\u6536\u8BF7\u6C42\u540E\uFF0C\u6839\u636E URL \u627E\u5230\u5BF9\u5E94\u7684 <code>Exporter</code>\uFF0C\u8C03\u7528\u771F\u6B63\u7684\u5B9E\u73B0\u7C7B\uFF0C\u8FDB\u884C\u8C03\u7528\uFF0C\u7EC4\u88C5\u7ED3\u679C\u540E\u8FD4\u56DE\u7ED9 \u670D\u52A1\u6D88\u8D39\u8005\uFF0C\u643A\u5E26\u8BF7\u6C42ID</li><li>\u670D\u52A1\u6D88\u8D39\u8005 \u5F97\u5230\u8BE5\u54CD\u5E94\u540E\uFF0C\u6839\u636E \u8BF7\u6C42ID \u627E\u4E4B\u524D\u5B58\u653E\u7684\u8BB0\u5F55\uFF0C\u7136\u540E\u5C06 \u54CD\u5E94\u7ED3\u679C \u653E\u5165\u5BF9\u5E94\u7684 <code>Future</code> \u4E2D\uFF0C\u5524\u9192\u7B49\u5F85\u7684\u7EBF\u7A0B\uFF0C\u6D88\u8D39\u8005\u5F97\u5230\u54CD\u5E94\uFF0C\u6D41\u7A0B\u5B8C\u6BD5</li></ol><hr><h2 id="_6-\u8D1F\u8F7D\u5747\u8861\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_6-\u8D1F\u8F7D\u5747\u8861\u7B56\u7565" aria-hidden="true">#</a> 6. \u8D1F\u8F7D\u5747\u8861\u7B56\u7565</h2><h3 id="_1-\u52A0\u6743\u968F\u673A" tabindex="-1"><a class="header-anchor" href="#_1-\u52A0\u6743\u968F\u673A" aria-hidden="true">#</a> 1) \u52A0\u6743\u968F\u673A</h3><ul><li>\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u7EC4\u670D\u52A1\u5668 servers = [A, B, C]\uFF0C\u4ED6\u4EEC\u5BF9\u5E94\u7684\u6743\u91CD\u4E3A weights = [5, 3, 2]\uFF0C\u6743\u91CD\u603B\u548C\u4E3A10\u3002</li><li>\u73B0\u5728\u628A\u8FD9\u4E9B\u6743\u91CD\u503C\u5E73\u94FA\u5728\u4E00\u7EF4\u5750\u6807\u503C\u4E0A\uFF0C[0, 5) \u533A\u95F4\u5C5E\u4E8E\u670D\u52A1\u5668 A\uFF0C[5, 8) \u533A\u95F4\u5C5E\u4E8E\u670D\u52A1\u5668 B\uFF0C[8, 10) \u533A\u95F4\u5C5E\u4E8E\u670D\u52A1\u5668 C\u3002</li><li>\u901A\u8FC7\u968F\u673A\u6570\u751F\u6210\u5668\u751F\u6210\u4E00\u4E2A\u8303\u56F4\u5728 [0, 10) \u4E4B\u95F4\u7684\u968F\u673A\u6570\uFF0C</li><li>\u8BA1\u7B97\u8FD9\u4E2A\u968F\u673A\u6570\u4F1A\u843D\u5230\u54EA\u4E2A\u533A\u95F4\u4E0A\u5C31\u53EF\u4EE5\u4E86</li></ul><h3 id="_2-\u52A0\u6743\u8F6E\u8BE2" tabindex="-1"><a class="header-anchor" href="#_2-\u52A0\u6743\u8F6E\u8BE2" aria-hidden="true">#</a> 2) \u52A0\u6743\u8F6E\u8BE2</h3><ul><li>\u6BD4\u5982\u670D\u52A1\u5668 A\u3001B\u3001C \u6743\u91CD\u6BD4\u4E3A 5, 3, 2\uFF0C</li><li>\u90A3\u4E48\u5728 10 \u6B21\u8BF7\u6C42\u4E2D\uFF0C\u670D\u52A1\u5668 A \u5C06\u6536\u5230\u5176\u4E2D\u7684 5 \u6B21\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668 B \u4F1A\u6536\u5230\u5176\u4E2D\u7684 3 \u6B21\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668 C \u5219\u6536\u5230\u5176\u4E2D\u7684 2 \u6B21\u8BF7\u6C42</li></ul><h3 id="_3-\u6700\u5C0F\u6D3B\u8DC3\u6570" tabindex="-1"><a class="header-anchor" href="#_3-\u6700\u5C0F\u6D3B\u8DC3\u6570" aria-hidden="true">#</a> 3) \u6700\u5C0F\u6D3B\u8DC3\u6570</h3><ul><li>\u6BCF\u4E2A\u670D\u52A1\u63D0\u4F9B\u8005\u5BF9\u5E94\u4E00\u4E2A\u6D3B\u8DC3\u6570 active\uFF0C\u521D\u59CB\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u670D\u52A1\u63D0\u4F9B\u8005\u6D3B\u8DC3\u6570\u5747\u4E3A0\u3002</li><li>\u6BCF\u6536\u5230\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u6D3B\u8DC3\u6570\u52A0 1\uFF0C\u5B8C\u6210\u8BF7\u6C42\u540E\u5219\u5C06\u6D3B\u8DC3\u6570\u51CF 1\u3002</li><li>\u5728\u670D\u52A1\u8FD0\u884C\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0C\u6027\u80FD\u597D\u7684\u670D\u52A1\u63D0\u4F9B\u8005\u5904\u7406\u8BF7\u6C42\u7684\u901F\u5EA6\u66F4\u5FEB\uFF0C\u56E0\u6B64\u6D3B\u8DC3\u6570\u4E0B\u964D\u7684\u4E5F\u8D8A\u5FEB\uFF0C\u6B64\u65F6\u8FD9\u6837\u7684\u670D\u52A1\u63D0\u4F9B\u8005\u80FD\u591F\u4F18\u5148\u83B7\u53D6\u5230\u65B0\u7684\u670D\u52A1\u8BF7\u6C42\u3002</li><li>\u5982\u679C\u6709\u591A\u4E2A Invoker \u5177\u6709\u76F8\u540C\u7684\u6700\u5C0F\u6D3B\u8DC3\u6570\uFF0C\u5219\u6B64\u65F6\u7EE7\u7EED\u8D70 <strong>\u52A0\u6743\u968F\u673A</strong> \u7B56\u7565</li></ul><h3 id="_4-\u4E00\u81F4\u6027hash" tabindex="-1"><a class="header-anchor" href="#_4-\u4E00\u81F4\u6027hash" aria-hidden="true">#</a> 4) \u4E00\u81F4\u6027hash</h3><ul><li>\u901A\u8FC7 hash \u7B97\u6CD5\uFF0C\u628A provider \u7684 invoke \u548C \u968F\u673A\u8282\u70B9\u751F\u6210 hash\uFF0C\u5E76\u5C06\u8FD9\u4E2A hash \u6295\u5C04\u5230 [0, 2^32 - 1] \u7684\u5706\u73AF\u4E0A\uFF0C</li><li>\u67E5\u8BE2\u7684\u65F6\u5019\u6839\u636E key \u8FDB\u884C md5 \u7136\u540E\u8FDB\u884C hash\uFF0C\u987A\u65F6\u9488\u5F97\u5230\u7B2C\u4E00\u4E2A\u8282\u70B9\u5C31\u662F\u6240\u6C42</li></ul><hr><h2 id="_7-\u96C6\u7FA4\u5BB9\u9519\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7-\u96C6\u7FA4\u5BB9\u9519\u65B9\u5F0F" aria-hidden="true">#</a> 7. \u96C6\u7FA4\u5BB9\u9519\u65B9\u5F0F</h2><h3 id="_1-failover-cluster" tabindex="-1"><a class="header-anchor" href="#_1-failover-cluster" aria-hidden="true">#</a> 1) Failover Cluster</h3><ul><li>\u5931\u8D25\u81EA\u52A8\u5207\u6362</li><li>dubbo \u7684\u9ED8\u8BA4\u5BB9\u9519\u65B9\u6848</li><li>\u5F53\u8C03\u7528\u5931\u8D25\u65F6\u81EA\u52A8\u5207\u6362\u5230\u5176\u4ED6\u53EF\u7528\u7684\u8282\u70B9\uFF0C\u5177\u4F53\u7684\u91CD\u8BD5\u6B21\u6570\u548C\u95F4\u9694\u65F6\u95F4\u53EF\u7528\u901A\u8FC7\u5F15\u7528\u670D\u52A1\u7684\u65F6\u5019\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u91CD\u8BD5\u6B21\u6570\u4E3A 1\uFF0C\u5373\u53EA\u8C03\u7528\u4E00\u6B21</li></ul><h3 id="_2-failback-cluster" tabindex="-1"><a class="header-anchor" href="#_2-failback-cluster" aria-hidden="true">#</a> 2) Failback Cluster</h3><ul><li>\u5931\u8D25\u81EA\u52A8\u6062\u590D</li><li>\u5728\u8C03\u7528\u5931\u8D25\uFF0C\u8BB0\u5F55\u65E5\u5FD7\u548C\u8C03\u7528\u4FE1\u606F\uFF0C\u7136\u540E\u8FD4\u56DE\u7A7A\u7ED3\u679C\u7ED9consumer\uFF0C\u5E76\u4E14\u901A\u8FC7\u5B9A\u65F6\u4EFB\u52A1\u6BCF\u96945\u79D2\u5BF9\u5931\u8D25\u7684\u8C03\u7528\u8FDB\u884C\u91CD\u8BD5</li></ul><h3 id="_3-failfast-cluster" tabindex="-1"><a class="header-anchor" href="#_3-failfast-cluster" aria-hidden="true">#</a> 3) Failfast Cluster</h3><ul><li>\u5FEB\u901F\u5931\u8D25</li><li>\u53EA\u4F1A\u8C03\u7528\u4E00\u6B21\uFF0C\u5931\u8D25\u540E\u7ACB\u523B\u629B\u51FA\u5F02\u5E38</li></ul><h3 id="_4-failsafe-cluster" tabindex="-1"><a class="header-anchor" href="#_4-failsafe-cluster" aria-hidden="true">#</a> 4) Failsafe Cluster</h3><ul><li>\u5931\u8D25\u5B89\u5168</li><li>\u8C03\u7528\u51FA\u73B0\u5F02\u5E38\uFF0C\u8BB0\u5F55\u65E5\u5FD7\u4E0D\u629B\u51FA\uFF0C\u8FD4\u56DE\u7A7A\u7ED3\u679C</li></ul><h3 id="_5-forking-cluster" tabindex="-1"><a class="header-anchor" href="#_5-forking-cluster" aria-hidden="true">#</a> 5) Forking Cluster</h3><ul><li>\u5E76\u884C\u8C03\u7528\u591A\u4E2A\u670D\u52A1\u63D0\u4F9B\u8005</li><li>\u901A\u8FC7\u7EBF\u7A0B\u6C60\u521B\u5EFA\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u5E76\u53D1\u8C03\u7528\u591A\u4E2Aprovider\uFF0C\u7ED3\u679C\u4FDD\u5B58\u5230\u963B\u585E\u961F\u5217\uFF0C\u53EA\u8981\u6709\u4E00\u4E2Aprovider\u6210\u529F\u8FD4\u56DE\u4E86\u7ED3\u679C\uFF0C\u5C31\u4F1A\u7ACB\u523B\u8FD4\u56DE\u7ED3\u679C</li></ul><h3 id="_6-broadcast-cluster" tabindex="-1"><a class="header-anchor" href="#_6-broadcast-cluster" aria-hidden="true">#</a> 6) Broadcast Cluster</h3><ul><li>\u5E7F\u64AD\u6A21\u5F0F</li><li>\u9010\u4E2A\u8C03\u7528\u6BCF\u4E2Aprovider\uFF0C\u5982\u679C\u5176\u4E2D\u4E00\u53F0\u62A5\u9519\uFF0C\u5728\u5FAA\u73AF\u8C03\u7528\u7ED3\u675F\u540E\uFF0C\u629B\u51FA\u5F02\u5E38\u3002</li></ul>',50),c=[o];function t(h,s){return i(),l("div",null,c)}var b=e(d,[["render",t],["__file","dubbo.html.vue"]]);export{b as default};