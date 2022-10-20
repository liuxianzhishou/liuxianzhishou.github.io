import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_25.1cf41333.png",e="/assets/img_23.a1a5a673.png",o="/assets/img_24.f7e9b42c.png";const c={},l=p('<h1 id="\u5251\u6307-offer-14-i-\u526A\u7EF3\u5B50" tabindex="-1"><a class="header-anchor" href="#\u5251\u6307-offer-14-i-\u526A\u7EF3\u5B50" aria-hidden="true">#</a> \u{1F315}\u{1F317} \u5251\u6307 Offer 14- I. \u526A\u7EF3\u5B50</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_25.png"></p><hr><h3 id="\u89E3\u6CD5-1-\u7ECF\u9A8C\u516C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1-\u7ECF\u9A8C\u516C\u5F0F" aria-hidden="true">#</a> \u89E3\u6CD5 1 - \u7ECF\u9A8C\u516C\u5F0F</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">cuttingRope</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u7ECF\u9A8C\u516C\u5F0F\uFF0C\u5C3D\u53EF\u80FD\u5206\u4E3A 3 \u7684\u957F\u5EA6</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> lef <span class="token operator">=</span> n <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>lef <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>lef <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+e+`" alt="img_23.png"></p><hr><h3 id="\u89E3\u6CD5-2-dp" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-dp" aria-hidden="true">#</a> \u89E3\u6CD5 2 - dp</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">cuttingRope</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// dp[i] - \u5C06\u957F\u5EA6 i \u7684\u7EF3\u5B50\u5206\u6210\u591A\u6BB5\u80FD\u591F\u5F62\u6210\u7684\u6700\u5927\u957F\u5EA6</span>
        <span class="token comment">// \u5982\u679C\u5C1D\u8BD5\u5BF9 dp[i] \u8FDB\u884C\u5207\u5206 2 \u6BB5\uFF0C\u90A3\u4E48\u5DE6\u534A\u6700\u5927\u957F\u5EA6\u4E3A max{dp[k], k}\uFF0C\u53F3\u534A\u6BB5\u540C\u7406</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// j - \u5DE6\u534A\u6BB5\u7684\u957F\u5EA6\uFF0C\u6700\u5927\u957F\u5EA6\u4E3A\u603B\u533A\u95F4\u7684\u4E00\u534A\uFF0C\u518D\u5927\u4E86\u5C31\u548C\u4E4B\u524D\u7684\u91CD\u590D\u4E86</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j<span class="token punctuation">]</span><span class="token punctuation">,</span> i <span class="token operator">-</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-2" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-2" aria-hidden="true">#</a> \u8F93\u51FA 2</h3><p><img src="`+o+'" alt="img_24.png"></p>',16),i=[l];function u(k,r){return s(),a("div",null,i)}var v=n(c,[["render",u],["__file","14-1.html.vue"]]);export{v as default};