import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_3.a91ec395.png",e="/assets/img_2.dfa6726e.png";const o={},c=p('<h1 id="_135-\u5206\u53D1\u7CD6\u679C" tabindex="-1"><a class="header-anchor" href="#_135-\u5206\u53D1\u7CD6\u679C" aria-hidden="true">#</a> \u{1F315} \u{1F317} 135. \u5206\u53D1\u7CD6\u679C</h1><p>\u96BE\u5EA6: \u{1F315} \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_3.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">candy</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ratings<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// 2 \u6B21\u8D2A\u5FC3 - \u4E00\u6B21 \u53EA\u548C\u5DE6\u8FB9\u7684\u5B69\u5B50\u6BD4\u8F83\u5927\u5C0F\uFF1B\u4E00\u6B21\u53EA\u548C\u53F3\u8FB9\u7684\u5B69\u5B50\u6BD4\u8F83\u5927\u5C0F\uFF0C\u53D6\u8F83\u5927\u503C\uFF0C\u6700\u540E\u6C42\u548C</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> ratings<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5148\u4FDD\u8BC1\u6BCF\u4E2A\u5B69\u5B50\u624B\u4E2D\u81F3\u5C11\u4E00\u4E2A\u7CD6\u679C</span>
        <span class="token comment">// \u53EA\u548C \u5DE6\u8FB9\u5B69\u5B50\u6BD4\u8F83\uFF0C\u5224\u65AD cur \u662F\u5426\u9700\u8981\u589E\u52A0\u7CD6\u679C\u6570</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>ratings<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> ratings<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u4FDD\u8BC1\u6BD4\u5DE6\u8FB9\u5B69\u5B50\u7CD6\u679C\u6570\u591A</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u53EA\u548C \u53F3\u8FB9\u5B69\u5B50\u6BD4\u8F83</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>ratings<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> ratings<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u904D\u5386\u6C42\u7CD6\u679C\u603B\u6570</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+e+'" alt="img_2.png"></p>',10),i=[c];function l(u,r){return s(),a("div",null,i)}var m=n(o,[["render",l],["__file","135.html.vue"]]);export{m as default};