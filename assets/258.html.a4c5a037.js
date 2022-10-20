import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5aebcaaa.js";var t="/assets/img_7.40141d62.png",p="/assets/img_6.7f64d7e9.png";const c={},i=e('<h1 id="_258-\u5404\u4F4D\u76F8\u52A0" tabindex="-1"><a class="header-anchor" href="#_258-\u5404\u4F4D\u76F8\u52A0" aria-hidden="true">#</a> \u{1F315}\u{1F317} 258. \u5404\u4F4D\u76F8\u52A0</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_7.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">addDigits</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u627E\u89C4\u5F8B</span>
        <span class="token comment">// \u539F\u6570 0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20  21  ...</span>
        <span class="token comment">// \u6570\u6839 0  1  2  3  4  5  6  7  8  9  1    2   3   4   5   6   7   8   9   1   2   3   ...</span>
        <span class="token comment">// \u53EF\u4EE5\u770B\u51FA\uFF0C\u9664 0 \u5916\uFF0C1 - 9 \u5FAA\u73AF</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">9</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">9</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> num <span class="token operator">%</span> <span class="token number">9</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+p+'" alt="img_6.png"></p>',10),o=[i];function l(r,d){return s(),a("div",null,o)}var k=n(c,[["render",l],["__file","258.html.vue"]]);export{k as default};
