import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5aebcaaa.js";var t="/assets/img_50.395f819e.png",p="/assets/img_49.3cd06d50.png";const c={},i=e('<h1 id="_371-\u4E24\u6574\u6570\u4E4B\u548C" tabindex="-1"><a class="header-anchor" href="#_371-\u4E24\u6574\u6570\u4E4B\u548C" aria-hidden="true">#</a> \u{1F315}\u{1F317} 371. \u4E24\u6574\u6570\u4E4B\u548C</h1><p>\u96BE\u5EA6: \u{1F315} \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_50.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u4F4D\u8FD0\u7B97</span>
        <span class="token comment">// \u9996\u5148\u6700\u7B80\u5355\u7684 a &amp; b \u5747\u4E3A\u4E00\u4F4D\u4E8C\u8FDB\u5236\u6570\uFF0C\u6EE1\u8DB3</span>
        <span class="token comment">// a    b   | y  c</span>
        <span class="token comment">// 0    0   | 0  0</span>
        <span class="token comment">// 0    1   | 1  0 </span>
        <span class="token comment">// 1    0   | 1  0</span>
        <span class="token comment">// 1    1   | 0  1</span>
        <span class="token comment">// \u5373 y = a ^ b; c = (a &amp; b) &lt;&lt; 1</span>
        <span class="token comment">// \u6269\u5C55\u5230\u591A\u4F4D\u8FD0\u7B97\uFF0C\u4F8B\uFF0Ca = 11(1011), b = 7(0111), y = 18(1 0010)\uFF0C\u9A8C\u8BC1\uFF1A</span>
        <span class="token comment">// a = 1011, b = 0111, \u6C42 a + b</span>
        <span class="token comment">// --&gt; c = ((a &amp; b) &lt;&lt; 1) = (0011) &lt;&lt; 1 = (0110)</span>
        <span class="token comment">// --&gt; y = a ^ b = (1100)</span>
        <span class="token comment">// --&gt; \u6C42 c + y</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>a <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> y <span class="token operator">=</span> a <span class="token operator">^</span> b<span class="token punctuation">;</span>
            a <span class="token operator">=</span> c<span class="token punctuation">;</span>
            b <span class="token operator">=</span> y<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+p+'" alt="img_49.png"></p>',10),o=[i];function l(r,d){return s(),a("div",null,o)}var k=n(c,[["render",l],["__file","371.html.vue"]]);export{k as default};
