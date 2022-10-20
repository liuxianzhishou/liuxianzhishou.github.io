import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_15.fbfa40cd.png",e="/assets/img_14.85e0b034.png";const o={},c=p('<h1 id="\u5251\u6307-offer-21-\u8C03\u6574\u6570\u7EC4\u987A\u5E8F\u4F7F\u5947\u6570\u4F4D\u4E8E\u5076\u6570\u524D\u9762" tabindex="-1"><a class="header-anchor" href="#\u5251\u6307-offer-21-\u8C03\u6574\u6570\u7EC4\u987A\u5E8F\u4F7F\u5947\u6570\u4F4D\u4E8E\u5076\u6570\u524D\u9762" aria-hidden="true">#</a> \u{1F315} \u5251\u6307 Offer 21. \u8C03\u6574\u6570\u7EC4\u987A\u5E8F\u4F7F\u5947\u6570\u4F4D\u4E8E\u5076\u6570\u524D\u9762</h1><p>\u96BE\u5EA6: \u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_15.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">exchange</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u53CC\u6307\u9488</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// len &gt; 1</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// left \u5DE6\u8FB9\u7684\u5168\u90E8\u662F\u5947\u6570\uFF0Cleft \u4E3A\u5076\u6570\uFF0C\u7B49\u5F85\u53F3\u8FB9\u7684\u5947\u6570\u548C\u5176\u66FF\u6362</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> cur <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>cur <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                left <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>right <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u627E\u5230\u5947\u6570</span>
            <span class="token keyword">int</span> cur <span class="token operator">=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>cur <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                left <span class="token operator">++</span><span class="token punctuation">;</span>
                right <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                right <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> tmp <span class="token operator">=</span> nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+e+'" alt="img_14.png"></p>',10),i=[c];function l(u,r){return s(),a("div",null,i)}var v=n(o,[["render",l],["__file","21.html.vue"]]);export{v as default};
