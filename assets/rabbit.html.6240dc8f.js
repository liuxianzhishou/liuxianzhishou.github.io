import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,e as r}from"./app.5aebcaaa.js";const h={},l=r('<h1 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> \u{1F357} RabbitMQ</h1><h2 id="_1-\u6D88\u606F\u961F\u5217\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u6D88\u606F\u961F\u5217\u7684\u4F5C\u7528" aria-hidden="true">#</a> 1. \u6D88\u606F\u961F\u5217\u7684\u4F5C\u7528</h2><h3 id="_1-\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u4F5C\u7528" aria-hidden="true">#</a> 1) \u4F5C\u7528</h3><ol><li>\u5F02\u6B65</li><li>\u524A\u5CF0</li><li>\u89E3\u8026</li></ol><h3 id="_2-\u5E26\u6765\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u5E26\u6765\u7684\u95EE\u9898" aria-hidden="true">#</a> 2) \u5E26\u6765\u7684\u95EE\u9898</h3><ol><li>\u7CFB\u7EDF\u590D\u6742\u6027\u589E\u52A0</li><li>\u6570\u636E\u4E00\u81F4\u6027 <ul><li>\u5982\u4F55\u4FDD\u8BC1\u6D88\u606F\u4E00\u5B9A\u80FD\u6BD4\u6D88\u8D39\uFF1F <ul><li>\u5206\u5E03\u5F0F\u4E8B\u52A1</li></ul></li></ul></li><li>\u53EF\u7528\u6027</li></ol><hr><h2 id="_2-\u5E38\u89C1\u6D88\u606F\u961F\u5217\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u89C1\u6D88\u606F\u961F\u5217\u5BF9\u6BD4" aria-hidden="true">#</a> 2. \u5E38\u89C1\u6D88\u606F\u961F\u5217\u5BF9\u6BD4</h2><hr><h2 id="_3-\u6D88\u606F\u961F\u5217\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-\u6D88\u606F\u961F\u5217\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> 3. \u6D88\u606F\u961F\u5217\u5E38\u89C1\u95EE\u9898</h2><h3 id="_1-\u987A\u5E8F\u6D88\u8D39" tabindex="-1"><a class="header-anchor" href="#_1-\u987A\u5E8F\u6D88\u8D39" aria-hidden="true">#</a> 1) \u987A\u5E8F\u6D88\u8D39</h3><h3 id="_2-\u6D88\u606F\u4E0D\u4E22\u5931" tabindex="-1"><a class="header-anchor" href="#_2-\u6D88\u606F\u4E0D\u4E22\u5931" aria-hidden="true">#</a> 2) \u6D88\u606F\u4E0D\u4E22\u5931</h3><h3 id="_3-\u91CD\u590D\u6D88\u8D39" tabindex="-1"><a class="header-anchor" href="#_3-\u91CD\u590D\u6D88\u8D39" aria-hidden="true">#</a> 3) \u91CD\u590D\u6D88\u8D39</h3><h3 id="_4-\u6D88\u606F\u9AD8\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#_4-\u6D88\u606F\u9AD8\u53EF\u7528" aria-hidden="true">#</a> 4) \u6D88\u606F\u9AD8\u53EF\u7528</h3><h3 id="_5-\u5EF6\u8FDF\u6D88\u8D39" tabindex="-1"><a class="header-anchor" href="#_5-\u5EF6\u8FDF\u6D88\u8D39" aria-hidden="true">#</a> 5) \u5EF6\u8FDF\u6D88\u8D39</h3><hr><h2 id="rabbitmq-\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#rabbitmq-\u7EC4\u6210" aria-hidden="true">#</a> RabbitMQ \u7EC4\u6210</h2><h3 id="publisher" tabindex="-1"><a class="header-anchor" href="#publisher" aria-hidden="true">#</a> Publisher</h3><ul><li>\u751F\u4EA7\u8005</li></ul><h3 id="consumer" tabindex="-1"><a class="header-anchor" href="#consumer" aria-hidden="true">#</a> Consumer</h3><ul><li>\u6D88\u8D39\u8005</li></ul><h3 id="broker" tabindex="-1"><a class="header-anchor" href="#broker" aria-hidden="true">#</a> Broker</h3><ul><li>\u4E00\u4E2A RabbitMQ \u5B9E\u4F8B\u5C31\u662F\u4E00\u4E2A Broker</li></ul><h3 id="exchange" tabindex="-1"><a class="header-anchor" href="#exchange" aria-hidden="true">#</a> Exchange</h3><ul><li>\u4EA4\u6362\u673A\uFF0C\u7528\u4E8E\u63A5\u6536 Publisher \u53D1\u9001\u7684\u6D88\u606F\uFF0C\u5E76\u51B3\u5B9A\u5C06\u6D88\u606F<mark>\u8DEF\u7531</mark>\u7ED9\u54EA\u6761\u961F\u5217</li><li>\u5206\u53D1\u7B56\u7565\uFF1A <ul><li><strong>Direct</strong><ul><li>\u6D88\u606F\u4E2D\u7684 routing key \u82E5\u4E0E Binding \u4E2D\u7684 routing key \u5B8C\u5168\u4E00\u81F4\uFF0C\u5219\u5C06\u6D88\u606F\u53D1\u9001\u5230\u5BF9\u5E94\u7684\u961F\u5217\u4E2D</li></ul></li><li><strong>Fanout</strong><ul><li>\u6D88\u606F\u53D1\u9001\u7ED9\u6240\u6709\u7ED1\u5B9A\u7684\u961F\u5217</li><li>\u8F6C\u53D1\u6D88\u606F\u6700\u5FEB</li></ul></li><li><strong>Topic</strong><ul><li>\u5C06 routing key \u548C\u67D0\u4E2A\u6A21\u5F0F\u5339\u914D</li><li>\u53EA\u80FD\u8BC6\u522B\u901A\u914D\u7B26 <code>#</code> &amp; <code>*</code></li></ul></li></ul></li></ul><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3><ul><li>\u7ED1\u5B9A\u5173\u7CFB\uFF0C\u7528\u4E8E\u6D88\u606F\u961F\u5217 &amp; \u4EA4\u6362\u673A \u4E2D\u7684\u5173\u8054</li></ul><h3 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h3><ul><li>\u6D88\u606F\u961F\u5217\uFF0C\u7528\u4E8E\u4FDD\u5B58\u6D88\u606F\uFF0C\u76F4\u5230\u53D1\u9001\u7ED9 \u6D88\u8D39\u8005</li><li>\u4E00\u4E2A\u6D88\u606F \u53EF\u653E\u5165 \u4E00\u4E2A | \u591A\u4E2A \u6D88\u606F\u961F\u5217\u4E2D</li></ul><h3 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> Message</h3><ul><li>\u6D88\u606F\u5934 &amp; \u6D88\u606F\u4F53 \u7EC4\u6210</li><li>\u6D88\u606F\u5934\uFF1A <ul><li>routing key</li><li>\u4F18\u5148\u7EA7</li><li>...</li></ul></li></ul><hr><h2 id="rabbitmq-\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#rabbitmq-\u7279\u70B9" aria-hidden="true">#</a> RabbitMQ \u7279\u70B9</h2><ol><li><strong>\u5FAE\u79D2\u7EA7</strong>\uFF0C\u5EF6\u8FDF\u4F4E</li><li>\u57FA\u4E8E <code>erlang</code> \u5F00\u53D1\uFF0C\u5E76\u53D1\u80FD\u529B\u8F83\u5F3A</li></ol>',34),d=[l];function n(t,s){return e(),i("div",null,d)}var c=a(h,[["render",n],["__file","rabbit.html.vue"]]);export{c as default};
