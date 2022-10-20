import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.5aebcaaa.js";var p="/assets/img_7.07ca23b7.png",e="/assets/img_6.70a543dd.png";const o={},c=t('<h1 id="_275-h-\u6307\u6570-ii" tabindex="-1"><a class="header-anchor" href="#_275-h-\u6307\u6570-ii" aria-hidden="true">#</a> \u{1F315} 275. H \u6307\u6570 II</h1><p>\u96BE\u5EA6: \u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+p+`" alt="img_7.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> citations<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u4E8C\u5206\uFF0C\u627E\u5230\u6700\u5927\u7684 h\uFF0C\u4F7F\u5F97 [len - h] &gt;= h</span>
        <span class="token comment">// \u5373\uFF0C\u627E\u5230\u6700\u5C0F\u7684 i\uFF0C\u4F7F\u5F97 [i] &gt;= len - i, h = len - i</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> citations<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>citations<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">mySol</span><span class="token punctuation">(</span>citations<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> len <span class="token operator">-</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> len <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">==</span> right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> len <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> len <span class="token operator">-</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">int</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> len <span class="token operator">-</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+e+'" alt="img_6.png"></p>',10),i=[c];function l(u,r){return s(),a("div",null,i)}var v=n(o,[["render",l],["__file","275.html.vue"]]);export{v as default};