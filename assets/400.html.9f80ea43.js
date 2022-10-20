import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_69.c6a29983.png",e="/assets/img_68.3c113e3a.png";const o={},c=p('<h1 id="_400-\u7B2C-n-\u4F4D\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#_400-\u7B2C-n-\u4F4D\u6570\u5B57" aria-hidden="true">#</a> \u{1F315}\u{1F315}\u{1F317} 400. \u7B2C N \u4F4D\u6570\u5B57</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F315}\u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_69.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findNthDigit</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u627E\u89C4\u5F8B</span>
        <span class="token comment">// \u4E00\u4F4D\u6570\u65F6\uFF0C\u5171\u6709 9 \u4E2A\u6570\uFF0C\u8D77\u59CB\u503C\u4E3A 1, \u5360 9 \u4F4D</span>
        <span class="token comment">// \u4E24\u4F4D\u6570\u65F6\uFF0C\u5171\u6709 90 \u4E2A\u6570\uFF0C\u8D77\u59CB\u503C\u4E3A 10, \u5360 180 \u4F4D</span>
        <span class="token comment">// \u4E09\u4F4D\u6570\u65F6\uFF0C\u5171\u6709 999 - 100 + 1 = 900 \u4E2A\u6570\uFF0C\u5360 900 * 3 \u4F4D</span>
        <span class="token comment">// n \u4F4D\u6570\u65F6\uFF0C\u5171\u6709 9 * 10^(n - 1) * n \u4F4D\u6570</span>
        <span class="token comment">// \u56E0\u6B64\u9996\u5148\u53EF\u4EE5\u786E\u5B9A n \u5C5E\u4E8E\u591A\u5C11\u4F4D\u6570 x\uFF0C \u5F97\u5230\u8BE5\u4F4D\u6570\u8D77\u59CB\u503C 10^x</span>
        <span class="token comment">// \u518D\u6B21\u786E\u5B9A n \u4F4D\u4E8E\u8BE5\u4F4D\u6570\u7684\u7B2C\u591A\u5C11\u4F4D n - \u524D\u9762\u51E0\u4F4D\u5360\u7528\u7684\u4F4D\u6570</span>
        <span class="token comment">// \u6839\u636E \u9664\u6570 - 1 \u5F97\u5230\u76EE\u6807\u503C\uFF0C\u6839\u636E \u4F59\u6570 \u5F97\u5230\u76EE\u6807\u503C\u7684\u7B2C\u591A\u5C11\u4F4D</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> n<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">long</span> num <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token keyword">long</span> prev <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u524D\u9762\u51E0\u4F4D\u5168\u90E8\u6240\u5360\u7684\u4F4D\u6570</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u662F\u51E0\u4F4D\u6570</span>
        <span class="token keyword">long</span> cur <span class="token operator">=</span> <span class="token number">9</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> len<span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u8F6E\u5168\u90E8\u5305\u542B\u6240\u5360\u7684\u4F4D\u6570</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>num <span class="token operator">&gt;</span> prev <span class="token operator">+</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BF4\u660E\u5F53\u524D\u8F6E\u6240\u5728\u7684\u4F4D\u6570\u4E0D\u662F\u76EE\u6807\u503C\u6240\u5728\u4F4D\u6570\uFF0C\u8FD8\u9700\u8981\u7EE7\u7EED\u589E\u52A0\u4F4D\u6570</span>
            prev <span class="token operator">+=</span> cur<span class="token punctuation">;</span>
            len <span class="token operator">++</span><span class="token punctuation">;</span>
            cur <span class="token operator">=</span> <span class="token number">9</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> len<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// System.out.println(prev + &quot;  len: &quot; + len + &quot; cur: &quot; + cur);</span>
        <span class="token comment">// \u786E\u5B9A\u5F53\u524D\u4F4D\u6570\uFF0C\u8BA1\u7B97\u504F\u79FB\u91CF</span>
        <span class="token keyword">int</span> orig <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BE5\u4F4D\u6570\u7684\u521D\u59CB\u503C</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>prev <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u9488\u5BF9\u8BE5\u4F4D\u6570\u521D\u59CB\u503C\u7684\u4E0B\u6807\uFF0C\u4ECE 0 \u5F00\u59CB</span>
        <span class="token keyword">int</span> offset <span class="token operator">=</span> count <span class="token operator">/</span> len<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u5BF9\u4E8E\u8BE5\u4F4D\u6570\u8D77\u59CB\u503C\u7684\u504F\u79FB\u91CF</span>
        <span class="token keyword">int</span> real <span class="token operator">=</span> orig <span class="token operator">+</span> offset<span class="token punctuation">;</span> <span class="token comment">// \u8BE5\u4F4D\u6570\u6240\u5728\u7684\u5B9E\u9645\u503C</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>real<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> count <span class="token operator">%</span> len<span class="token punctuation">;</span> <span class="token comment">// \u5728\u8BE5\u4F4D\u6570\u4E0B\u9488\u5BF9\u4E8E\u6700\u9AD8\u4F4D\u7684\u504F\u79FB\u91CF - \u4ECE 0 \u5F00\u59CB</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>real<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u540E\u53EF\u4EE5\u65B9\u4FBF\u5F97\u5230\u7B2C index \u4F4D\u6240\u5728\u7684\u503C</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+e+'" alt="img_68.png"></p>',10),l=[c];function i(u,r){return s(),a("div",null,l)}var m=n(o,[["render",i],["__file","400.html.vue"]]);export{m as default};
