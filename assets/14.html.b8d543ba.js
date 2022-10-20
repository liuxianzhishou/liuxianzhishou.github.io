import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.5aebcaaa.js";var p="/assets/img_10.916e5838.png",e="/assets/img_9.0afc6d55.png";const o={},c=t('<h1 id="_14-\u6700\u957F\u516C\u5171\u524D\u7F00" tabindex="-1"><a class="header-anchor" href="#_14-\u6700\u957F\u516C\u5171\u524D\u7F00" aria-hidden="true">#</a> \u{1F317} 14. \u6700\u957F\u516C\u5171\u524D\u7F00</h1><p>\u96BE\u5EA6: \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+p+`" alt="img_10.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">longestCommonPrefix</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// </span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token class-name">String</span> first <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> cols <span class="token operator">=</span> first<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cols <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> cols<span class="token punctuation">;</span> j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u904D\u5386\u5230\u5F53\u524D\u5B57\u7B26\u4E32\u4E0B\u6807\u65F6\uFF0C\u5224\u65AD\u6240\u6709\u5B57\u7B26\u4E32\u8BE5\u4E0B\u6807\u662F\u5426\u4E00\u81F4</span>
            <span class="token keyword">char</span> cur <span class="token operator">=</span> first<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6709\u7684\u5B57\u7B26\u4E32\u5DF2\u7ECF\u904D\u5386\u5B8C\uFF0C\u53CA\u65F6\u9000\u51FA</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">!=</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+e+'" alt="img_9.png"></p>',10),i=[c];function l(u,r){return s(),a("div",null,i)}var m=n(o,[["render",l],["__file","14.html.vue"]]);export{m as default};