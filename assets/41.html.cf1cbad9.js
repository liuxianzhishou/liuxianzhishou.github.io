import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var e="/assets/img_3.d13bbf79.png",t="/assets/img_2.50bf87b3.png";const o={},c=p('<h1 id="_41-\u7F3A\u5931\u7684\u7B2C\u4E00\u4E2A\u6B63\u6570" tabindex="-1"><a class="header-anchor" href="#_41-\u7F3A\u5931\u7684\u7B2C\u4E00\u4E2A\u6B63\u6570" aria-hidden="true">#</a> \u{1F315}\u{1F315} 41. \u7F3A\u5931\u7684\u7B2C\u4E00\u4E2A\u6B63\u6570</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+e+`" alt="img_3.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">firstMissingPositive</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u5BF9\u4E8E len \u957F\u5EA6\u7684\u6570\u7EC4\uFF0C\u6CA1\u6709\u51FA\u73B0\u7684\u6700\u5C0F\u6B63\u6574\u6570\u533A\u95F4\u2208 [1, len + 1]</span>
        <span class="token comment">// \u5373\uFF0C\u5982\u679C\u5728\u6570\u7EC4\u4E2D\uFF0C1 \u4ECE\u6CA1\u6709\u51FA\u73B0\u8FC7\uFF0C\u90A3\u4E48 res = 1</span>
        <span class="token comment">// \u5982\u679C\u6570\u7EC4\u4E2D\uFF0C[1, len] \u5168\u90E8\u5747\u51FA\u73B0\uFF0C\u90A3\u4E48 res = len + 1</span>
        <span class="token comment">// \u73B0\u5728\u8981\u505A\u7684\u5C31\u662F\uFF0C\u904D\u5386\u6570\u7EC4\u5143\u7D20\uFF0C</span>
        <span class="token comment">// \u5982\u679C \u5143\u7D20 i \u2208 [1, len] \uFF0C\u90A3\u4E48\u53EF\u4EE5\u5C06\u6570\u7EC4\u7684 (i - 1) \u4E0B\u6807\u505A\u4E00\u4E2A\u6807\u8BB0</span>
        <span class="token comment">// \u51CF\u4E00\u662F\u4E3A\u4E86\u8BA9 \u6570\u7EC4\u4E0B\u6807[0, len - 1] \u6620\u5C04\u5230 [1, len + 1] </span>
        <span class="token comment">// \u8868\u793A\u8BE5\u4E0B\u6807\u5904\u503C\u5DF2\u7ECF\u5B58\u5728</span>
        <span class="token comment">// \u6700\u540E\u518D\u904D\u5386\u4E00\u6B21\u6570\u7EC4\uFF0C\u54EA\u4E2A\u4F4D\u7F6E\u6CA1\u6709\u505A\u6807\u8BB0\uFF0C\u5219\u8BF4\u660E\u8FD9\u4E2A\u662F\u7F3A\u5931\u7684\u6700\u5C0F\u6B63\u6574\u6570</span>
        <span class="token comment">// \u95EE\u9898\u5728\u4E8E\uFF1A</span>
        <span class="token comment">// \u5982\u4F55\u4E0D\u5360\u7528\u989D\u5916\u7A7A\u95F4\uFF0C\u5BF9\u6570\u7EC4\u505A\u6807\u8BB0\uFF0C\u540C\u65F6\u8FD8\u4E0D\u80FD\u5BF9\u6570\u7EC4\u8BE5\u5904\u7684\u503C\u505A\u51FA\u6539\u53D8\uFF0C\u4ECE\u800C\u5F71\u54CD\u5BF9\u8BE5\u5904\u503C\u7684\u5224\u65AD\uFF1F</span>
        <span class="token comment">// \u53EF\u4EE5\u901A\u8FC7\u5BF9\u8BE5\u4E0B\u6807\u7684\u503C\u6DFB\u52A0 \u8D1F\u53F7 \u4F5C\u4E3A\u6807\u8BB0\uFF0C</span>
        <span class="token comment">// \u5982\u679C\u8981\u8FD9\u6837\u505A\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u4FDD\u8BC1\u904D\u5386\u5F00\u59CB\u524D\uFF0C\u6240\u6709\u5143\u7D20\u503C\u672C\u8EAB\u7684\u8D1F\u53F7\u4E0D\u80FD\u5BF9\u6570\u7EC4\u4EA7\u751F\u5F71\u54CD</span>
        <span class="token comment">// \u6240\u4EE5\u9700\u8981\u63D0\u524D\u904D\u5386\u4E00\u6B21\uFF0C\u5BF9\u6570\u7EC4\u5143\u7D20\u8FDB\u884C\u9884\u5904\u7406</span>
        <span class="token comment">// \u5C06\u6240\u6709\u7684\u8D1F\u53F7\u5143\u7D20\uFF0C\u5B83\u80AF\u5B9A\u4E0D\u5728\u6240\u9700\u6B63\u6570\u8303\u56F4\u5185\uFF0C\u56E0\u6B64\u53EF\u4EE5\u53D6\u4E00\u4E2A\u533A\u95F4\u5916\u7684\u6B63\u6570\u503C\u505A\u66FF\u6362\uFF0C\u5BF9\u7ED3\u679C\u65E0\u5F71\u54CD</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">// \u521D\u6B21\u904D\u5386\uFF0C\u6570\u636E\u9884\u5904\u7406</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u518D\u6B21\u904D\u5386\uFF0C\u5BF9\u6EE1\u8DB3\u6761\u4EF6\u7684\u503C\uFF0C\u5728\u5BF9\u5E94\u4E0B\u6807\u5904\u505A\u6807\u8BB0</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> cur <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53BB\u6389\u8D1F\u53F7\u5F71\u54CD\uFF0C\u9632\u6B62\u524D\u9762\u7684\u6570\u5BF9\u5E94\u7684\u5C31\u662F\u8BE5\u5904\u4E0B\u6807\uFF0C\u5C06\u5176\u6DFB\u52A0\u4E86\u8D1F\u53F7</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> cur <span class="token operator">&lt;=</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> index <span class="token operator">=</span> cur <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u7406\u5E94\u7ED9 index \u5904\u7684\u503C\u6253\u4E0A\u8D1F\u53F7\u6807\u8BB0</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u786E\u4FDD\u4E4B\u524D\u6CA1\u6709\u76F8\u540C\u7684\u503C\u7ED9\u8BE5\u5904\u4E0B\u6807\u5DF2\u7ECF\u505A\u8FC7\u6807\u8BB0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u6700\u540E\u904D\u5386\uFF0C\u627E\u5230 res</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5982\u679C\u90FD\u51FA\u73B0\u8FC7\uFF0C\u5219</span>
        <span class="token keyword">return</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+t+'" alt="img_2.png"></p>',10),l=[c];function i(u,r){return s(),a("div",null,l)}var m=n(o,[["render",i],["__file","41.html.vue"]]);export{m as default};
