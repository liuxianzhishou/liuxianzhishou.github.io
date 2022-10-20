import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5aebcaaa.js";var t="/assets/img_30.b368ed08.png",i="/assets/img_29.e0f29997.png";const c={},o=e('<h1 id="_319-\u706F\u6CE1\u5F00\u5173" tabindex="-1"><a class="header-anchor" href="#_319-\u706F\u6CE1\u5F00\u5173" aria-hidden="true">#</a> \u{1F315}\u{1F317} 319. \u706F\u6CE1\u5F00\u5173</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_30.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">bulbSwitch</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u627E\u89C4\u5F8B</span>
        <span class="token comment">// \u706F\u6CE1 k \u4EC0\u4E48\u65F6\u5019\u4F1A\u53D1\u751F\u72B6\u6001\u5207\u6362\uFF1F</span>
        <span class="token comment">// \u5047\u8BBE n == 16, k == 15 \u2208 [1, 16]</span>
        <span class="token comment">// 1: off --&gt; on</span>
        <span class="token comment">// 3: on --&gt; off</span>
        <span class="token comment">// 5: off --&gt; on</span>
        <span class="token comment">// 15: on --&gt; off</span>

        <span class="token comment">// \u5047\u8BBE n == 16, k == 16 \u2208 [1, 16]</span>
        <span class="token comment">// 1: off --&gt; on</span>
        <span class="token comment">// 2: on --&gt; off</span>
        <span class="token comment">// 4: off --&gt; on</span>
        <span class="token comment">// 8: on --&gt; off</span>
        <span class="token comment">// 16: off --&gt; on</span>

        <span class="token comment">// \u53EF\u4EE5\u770B\u51FA\uFF0Ck \u5728 [1, n] \u8303\u56F4\u5185\uFF0C\u6709\u591A\u5C11\u4E2A\u7EA6\u6570\uFF0C\u5C31\u53D1\u751F\u591A\u5C11\u6B21\u5207\u6362\uFF0C\u5F53\u7EA6\u6570\u4E3A \u5947\u6570 \u65F6\uFF0C\u6700\u7EC8\u72B6\u6001\u4E3A \u4EAE</span>
        <span class="token comment">// \u4EC0\u4E48\u60C5\u51B5\u4E0B k \u7684\u7EA6\u6570\u4E3A \u5947\u6570 \u4E2A\uFF1F</span>
        <span class="token comment">// k \u4E3A\u5B8C\u5168\u5E73\u65B9\u6570\u65F6</span>
        <span class="token comment">// \u2234\u9898\u610F\u53EF\u4EE5\u6362\u6210\uFF1A[1, n] \u4E2D\u6709\u591A\u5C11\u4E2A \u5B8C\u5168\u5E73\u65B9\u6570\uFF1F</span>
        <span class="token comment">// \u5373 {1*1, 2*2, ..., ?*?} &lt;= n\uFF0C\u6C42 ? \u7684\u503C</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+i+'" alt="img_29.png"></p>',10),l=[o];function p(d,m){return s(),a("div",null,l)}var v=n(c,[["render",p],["__file","319.html.vue"]]);export{v as default};
