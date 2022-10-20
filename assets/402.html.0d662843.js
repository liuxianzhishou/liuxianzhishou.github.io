import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_1.f72d8f7f.png",o="/assets/img.74cbf413.png";const c={},e=p('<h1 id="_402-\u79FB\u6389-k-\u4F4D\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#_402-\u79FB\u6389-k-\u4F4D\u6570\u5B57" aria-hidden="true">#</a> \u{1F315}\u{1F315} 402. \u79FB\u6389 K \u4F4D\u6570\u5B57</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_1.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">removeKdigits</span><span class="token punctuation">(</span><span class="token class-name">String</span> num<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u5355\u8C03\u6808</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>k <span class="token operator">&gt;=</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u5DF2\u7ECF\u79FB\u9664\u7684\u4F4D\u6570</span>
        <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> index <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> c <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> val <span class="token operator">=</span> c <span class="token operator">-</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u5F53\u524D\u4F4D\u7684\u503C</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> val <span class="token operator">&gt;=</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6BD4\u6808\u9876\u5143\u7D20\u5927\uFF0C\u538B\u6808</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u6BD4\u6808\u9876\u5143\u7D20\u5C0F\uFF0C\u9700\u8981\u5F39\u6808\uFF0C\u5F39\u51FA\u7684\u5143\u7D20\u5C31\u662F\u9700\u8981\u79FB\u9664\u7684\u5143\u7D20</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">&lt;</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    count <span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token comment">// \u5224\u65AD\u662F\u5426\u6EE1\u8DB3\u9700\u8981\u79FB\u9664\u7684\u5143\u7D20\u4E2A\u6570</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> 
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> 
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u53D6\u51FA\u6808\u4E2D\u5143\u7D20</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5220\u9664\u7684\u5143\u7D20\u4E0D\u591F\uFF0C\u4ECE\u540E\u5F80\u524D\u5220\u9664\u6808\u9876\u5143\u7D20</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>count <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                count <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sb<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5C06\u540E\u7EED\u5143\u7D20\u6DFB\u52A0\u5230 sb \u540E\u9762</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u53BB\u6389 sb \u7684\u524D\u5BFC 0</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> tmp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                tmp <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// System.out.println(str + &quot;  &quot; + tmp);</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>tmp <span class="token operator">==</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u6700\u591A\u4FDD\u7559 len - k \u4E2A\u5143\u7D20</span>
        <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>tmp <span class="token operator">+</span> len <span class="token operator">-</span> k<span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+o+'" alt="img.png"></p>',10),l=[e];function i(u,k){return s(),a("div",null,l)}var v=n(c,[["render",i],["__file","402.html.vue"]]);export{v as default};