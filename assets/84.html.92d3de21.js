import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_4.18e8a28d.png",e="/assets/img_3.ed793b52.png";const o={},c=p('<h1 id="_84-\u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62" tabindex="-1"><a class="header-anchor" href="#_84-\u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62" aria-hidden="true">#</a> \u{1F315} 84. \u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62</h1><p>\u96BE\u5EA6: \u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="'+t+`" alt="img_4.png"></h2><h3 id="\u89E3\u6CD5-\u5355\u8C03\u6808" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-\u5355\u8C03\u6808" aria-hidden="true">#</a> \u89E3\u6CD5 \u5355\u8C03\u6808</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">largestRectangleArea</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> heights<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u501F\u52A9\u6808 - \u6784\u9020 \u4E25\u683C\u9012\u589E\u6808</span>
        <span class="token comment">// \u6DFB\u52A0\u865A\u62DF\u8282\u70B9\uFF0C\u4FDD\u8BC1\u6BCF\u4E2A\u67F1\u5B50\u7684\u957F\u5EA6\u90FD\u4F1A\u88AB\u8BA1\u7B97\u5230</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>heights<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// \u904D\u5386</span>
        len <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// stack \u975E\u7A7A</span>
                <span class="token keyword">int</span> cur <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> tmpPeek <span class="token operator">=</span> array<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">&gt;</span> tmpPeek<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">==</span> tmpPeek<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4FDD\u8BC1\u5355\u8C03\u9012\u589E</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> cur <span class="token operator">&lt;=</span> array<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">int</span> hi <span class="token operator">=</span> array<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                        <span class="token comment">// \u5F39\u51FA\u540E\u5224\u65AD\u662F\u5426\u4E3A\u7A7A</span>
                        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">int</span> leftIndex <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token keyword">int</span> width <span class="token operator">=</span> i <span class="token operator">-</span> leftIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                            <span class="token keyword">int</span> square <span class="token operator">=</span> hi <span class="token operator">*</span> width<span class="token punctuation">;</span>
                            res <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> square<span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token comment">// System.out.println(hi + &quot;  &quot; + i + &quot;  &quot; + leftIndex);</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span> 
                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+e+'" alt="img_3.png"></p>',9),i=[c];function l(u,k){return s(),a("div",null,i)}var m=n(o,[["render",l],["__file","84.html.vue"]]);export{m as default};