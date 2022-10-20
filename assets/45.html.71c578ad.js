import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_3.a103dc0f.png",e="/assets/img_2.20b4a750.png",o="/assets/img_4.89b959a6.png";const c={},l=p('<h1 id="_45-\u8DF3\u8DC3\u6E38\u620F-ii" tabindex="-1"><a class="header-anchor" href="#_45-\u8DF3\u8DC3\u6E38\u620F-ii" aria-hidden="true">#</a> \u{1F315} \u{1F317} 45. \u8DF3\u8DC3\u6E38\u620F II</h1><p>\u96BE\u5EA6: \u{1F315} \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_3.png"></p><hr><h3 id="\u89E3\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1" aria-hidden="true">#</a> \u89E3\u6CD5 1</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">jump</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// dp[i]</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>dp<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> maxIndex <span class="token operator">=</span> i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>maxIndex <span class="token operator">&gt;=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> maxIndex<span class="token punctuation">;</span> j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dp<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+e+`" alt="img_2.png"></p><hr><h3 id="\u89E3\u6CD5-2-\u6362\u79CD\u601D\u8DEF\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-\u6362\u79CD\u601D\u8DEF\u4F18\u5316" aria-hidden="true">#</a> \u89E3\u6CD5 2 - \u6362\u79CD\u601D\u8DEF\u4F18\u5316</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">jump</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u8D2A\u5FC3\u7B97\u6CD5</span>
        <span class="token comment">// \u6BCF\u6B21\u66F4\u65B0\u4ECE\u5F53\u524D\u8282\u70B9\u51FA\u53D1\u80FD\u591F\u5230\u8FBE\u7684\u6700\u8FDC\u8DDD\u79BB</span>
        <span class="token comment">// \u8BB0\u5F55\u4E0A\u6B21\u66F4\u65B0\u6B65\u6570\u65F6\uFF0C\u80FD\u5230\u8FBE\u7684\u6700\u8FDC\u8DDD\u79BB\uFF0C\u8FBE\u5230\u8FB9\u754C\uFF0C\u5219\u9700\u8981\u589E\u52A0\u6B65\u6570</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u5728 i \u5904\u80FD\u591F\u5230\u8FBE\u7684\u6700\u8FDC\u8DDD\u79BB</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u521D\u59CB\u9700\u8981\u8DF3 0 \u6B65</span>
        <span class="token keyword">int</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u4E0A\u6B21\u66F4\u65B0\u8DF3\u8DC3\u6B21\u6570\uFF0C\u80FD\u591F\u5230\u8FBE\u7684\u6700\u8FDC\u8DDD\u79BB\uFF0C\u8D85\u8FC7\u5219\u9700\u8981\u589E\u52A0\u6B65\u6570</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> curMax <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> i<span class="token punctuation">;</span> <span class="token comment">// \u4ECE\u5F53\u524D\u4F4D\u7F6E\u51FA\u53D1\uFF0C\u80FD\u5230\u8FBE\u7684\u6700\u8FDC\u8DDD\u79BB</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> curMax<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> curMax<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> res <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// \u5224\u65AD\u662F\u5426\u9700\u8981\u66F4\u65B0\u8DF3\u8DC3\u6B21\u6570</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res <span class="token operator">++</span><span class="token punctuation">;</span>
                end <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+o+'" alt="img_4.png"></p>',16),i=[l];function u(k,r){return s(),a("div",null,i)}var v=n(c,[["render",u],["__file","45.html.vue"]]);export{v as default};