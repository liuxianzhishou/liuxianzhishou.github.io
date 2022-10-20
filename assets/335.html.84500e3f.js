import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_37.bc85d49f.png",e="/assets/img_38.e720c9bb.png";const o={},c=p('<h1 id="_335-\u8DEF\u5F84\u4EA4\u53C9" tabindex="-1"><a class="header-anchor" href="#_335-\u8DEF\u5F84\u4EA4\u53C9" aria-hidden="true">#</a> \u{1F315}\u{1F315} 335. \u8DEF\u5F84\u4EA4\u53C9</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_37.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSelfCrossing</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> distance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u6570\u5B66\u5F52\u7EB3\u6CD5 - \u627E\u89C4\u5F8B</span>
        <span class="token comment">// \u53D1\u73B0\u53EA\u6709 3 \u79CD\u60C5\u51B5\u4F1A\u51FA\u73B0\u76F8\u4EA4\u7684\u60C5\u51B5</span>
        <span class="token comment">// 1) \u5982 \u4F8B1 \u6240\u793A </span>
        <span class="token comment">// == &gt; [i - 1] &lt;= [i - 3] &amp;&amp; [i] &gt;= [i - 2]</span>
        <span class="token comment">// 2) \u5982 \u4F8B2 \u4E2D\uFF0C\u5C06\u7B2C\u56DB\u6761\u7EBF\u622A\u6B62 \u7EB5\u5750\u6807 0\uFF0C\u7B2C\u4E94\u6B65\u7EE7\u7EED\u5F80\u4E0A\u4E0E (0, 0) \u91CD\u5408</span>
        <span class="token comment">// ==&gt; [i - 1] == [i - 3] &amp;&amp; [i] + [i - 4] &gt;= [i - 2]</span>
        <span class="token comment">// 3) \u5982 \u4F8B3 \u4E2D\uFF0C\u7EE7\u7EED\u5F80\u4E0A\u8D70\uFF0C\u8D70\u4E0D\u5230 1 \u7136\u540E \u5DE6\u8F6C</span>
        <span class="token comment">// ==&gt; [i - 1] + [i - 5] &gt;= [i - 3] &amp;&amp; [i - 4] + [i] &gt;= [i - 2]</span>
        <span class="token comment">// \u5411\u53F3 &amp; \u5411\u4E0A \u65B9\u5411\u4E3A\u6B63\uFF0C\u524D\u9762\u7B26\u5408\u4E3A +\uFF1B\u5411\u4E0B &amp; \u5411\u5DE6\u65B9\u5411\u4E3A\u8D1F\uFF0C\u7B26\u5408 -</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> distance<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// len &gt;= 4</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">]</span> 
                <span class="token operator">&amp;&amp;</span> distance<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// System.out.println(&quot;aa  &quot; + i);</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">4</span> 
                <span class="token operator">&amp;&amp;</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">]</span> 
                <span class="token operator">&amp;&amp;</span> distance<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// System.out.println(&quot;bb  &quot; + i);</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">5</span> 
                <span class="token operator">&amp;&amp;</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">]</span> 
                <span class="token operator">&amp;&amp;</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">]</span> 
                <span class="token operator">&amp;&amp;</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>distance<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// System.out.println(&quot;cc  &quot; + i);</span>
                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>distance<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> distance<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// System.out.println(&quot;dd  &quot; + i);</span>
                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+e+'" alt="img_38.png"></p>',10),i=[c];function l(u,r){return s(),a("div",null,i)}var m=n(o,[["render",l],["__file","335.html.vue"]]);export{m as default};