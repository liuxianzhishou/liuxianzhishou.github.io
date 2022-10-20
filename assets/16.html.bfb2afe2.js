import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var e="/assets/img_3.eba57520.png",t="/assets/img_2.4d87f04e.png",o="/assets/img_4.0d0bc708.png";const c={},l=p('<h1 id="\u5251\u6307-offer-16-\u6570\u503C\u7684\u6574\u6570\u6B21\u65B9" tabindex="-1"><a class="header-anchor" href="#\u5251\u6307-offer-16-\u6570\u503C\u7684\u6574\u6570\u6B21\u65B9" aria-hidden="true">#</a> \u{1F315}\u{1F317} \u5251\u6307 Offer 16. \u6570\u503C\u7684\u6574\u6570\u6B21\u65B9</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+e+`" alt="img_3.png"></p><hr><h3 id="\u89E3\u6CD5-1-\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1-\u8FED\u4EE3" aria-hidden="true">#</a> \u89E3\u6CD5 1 - \u8FED\u4EE3</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">myPow</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u5FEB\u901F\u5E42</span>
        <span class="token comment">// \u8FED\u4EE3</span>
        <span class="token keyword">long</span> len <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span>x<span class="token punctuation">,</span> <span class="token operator">-</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">double</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">long</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5FEB\u901F\u5E42</span>
        <span class="token keyword">double</span> res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> cur <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>len <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res <span class="token operator">*=</span> cur<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            cur <span class="token operator">*=</span> cur<span class="token punctuation">;</span>
            len <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+t+`" alt="img_2.png"></p><hr><h3 id="\u89E3\u6CD5-2-\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-\u9012\u5F52" aria-hidden="true">#</a> \u89E3\u6CD5 2 - \u9012\u5F52</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">myPow</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u5FEB\u901F\u5E42</span>
        <span class="token comment">// \u8FED\u4EE3</span>
        <span class="token keyword">long</span> len <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span>x<span class="token punctuation">,</span> <span class="token operator">-</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">double</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">long</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> mid <span class="token operator">=</span> len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x <span class="token operator">*</span> <span class="token function">mySol</span><span class="token punctuation">(</span>x <span class="token operator">*</span> x<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>x <span class="token operator">*</span> x<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-2" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-2" aria-hidden="true">#</a> \u8F93\u51FA 2</h3><p><img src="`+o+'" alt="img_4.png"></p>',16),i=[l];function u(r,k){return s(),a("div",null,i)}var m=n(c,[["render",u],["__file","16.html.vue"]]);export{m as default};