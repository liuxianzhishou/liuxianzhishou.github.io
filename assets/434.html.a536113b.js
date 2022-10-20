import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5aebcaaa.js";var p="/assets/img_7.b6ea6080.png",t="/assets/img_6.ec9a77bb.png";const o={},c=e('<h1 id="_434-\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570" tabindex="-1"><a class="header-anchor" href="#_434-\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570" aria-hidden="true">#</a> \u{1F317} 434. \u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570</h1><p>\u96BE\u5EA6: \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+p+`" alt="img_7.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">countSegments</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u4E00\u6B21\u904D\u5386</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                index <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">==</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> res<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// [index] != &#39; &#39;</span>
            res <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                index <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+t+'" alt="img_6.png"></p>',10),i=[c];function l(r,u){return s(),a("div",null,i)}var v=n(o,[["render",l],["__file","434.html.vue"]]);export{v as default};