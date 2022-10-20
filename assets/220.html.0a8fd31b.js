import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_3.997e0d03.png",e="/assets/img_2.5bf30929.png",o="/assets/img_4.1054319a.png";const c={},l=p('<h1 id="_220-\u5B58\u5728\u91CD\u590D\u5143\u7D20-iii" tabindex="-1"><a class="header-anchor" href="#_220-\u5B58\u5728\u91CD\u590D\u5143\u7D20-iii" aria-hidden="true">#</a> \u{1F315}\u{1F315} 220. \u5B58\u5728\u91CD\u590D\u5143\u7D20 III</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_3.png"></p><hr><h3 id="\u89E3\u6CD5-1-\u6ED1\u52A8\u7A97\u53E3-treeset" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1-\u6ED1\u52A8\u7A97\u53E3-treeset" aria-hidden="true">#</a> \u89E3\u6CD5 1 - \u6ED1\u52A8\u7A97\u53E3 + TreeSet</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">containsNearbyAlmostDuplicate</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">,</span> <span class="token keyword">int</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u6ED1\u52A8\u7A97\u53E3 - \u4FDD\u8BC1 abs(i - j) &lt;= k</span>
        <span class="token comment">// \u5728\u6ED1\u52A8\u7A97\u53E3\u5185\u7EF4\u62A4\u6709\u5E8F\u96C6\u5408 - \u501F\u52A9 TreeSet</span>
        <span class="token comment">// \u5F53\u904D\u5386\u5230\u5F53\u524D\u70B9\u65F6\uFF0C\u627E\u5230\u6709\u5E8F\u96C6\u5408\u4E2D\u662F\u5426\u5B58\u5728 [x - t, x + t] \u8303\u56F4\u5185\u7684\u503C</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">long</span> cur <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token class-name">Long</span> floor <span class="token operator">=</span> set<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u6BD4 cur \u5C0F\uFF0C\u4F46\u6700\u63A5\u8FD1\u4E8E cur \u7684\u503C</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>floor <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> cur <span class="token operator">-</span> floor <span class="token operator">&lt;=</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> 
            <span class="token class-name">Long</span> ceil <span class="token operator">=</span> set<span class="token punctuation">.</span><span class="token function">ceiling</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u6BD4 cur \u5927\uFF0C\u4F46\u6700\u63A5\u8FD1\u4E8E cur \u7684\u503C</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>ceil <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> ceil <span class="token operator">-</span> cur <span class="token operator">&lt;=</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u8BF4\u660E\u5DF2\u7ECF\u662F\u7A97\u53E3\u4E86\uFF0C\u9700\u8981\u5220\u9664\u524D\u9762\u7684\u503C</span>
                set<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span>nums<span class="token punctuation">[</span>i <span class="token operator">-</span> k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+e+`" alt="img_2.png"></p><hr><h3 id="\u89E3\u6CD5-2-\u6876\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-\u6876\u6392\u5E8F" aria-hidden="true">#</a> \u89E3\u6CD5 2 - \u6876\u6392\u5E8F</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">containsNearbyAlmostDuplicate</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">,</span> <span class="token keyword">int</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u6876\u6392\u5E8F</span>
        <span class="token comment">// \u5F53\u904D\u5386\u5230\u67D0\u4E2A\u70B9\u65F6\uFF0C\u9700\u8981\u5224\u65AD\u662F\u5426\u6709\u503C\u5B58\u5728\u4E8E\u533A\u95F4 [x - t, x + t]</span>
        <span class="token comment">// \u90A3\u4E48\u53EF\u4EE5\u901A\u8FC7\u5C06 [x, x + t] \u8303\u56F4\u5185\u7684\u6240\u6709\u503C\u6620\u5C04\u5230\u4E00\u4E2A\u6876\u91CC\uFF0C</span>
        <span class="token comment">// \u82E5\u662F\u6876\u4E2D\u5DF2\u7ECF\u6709\u5143\u7D20\uFF0C\u8BF4\u660E\u6EE1\u8DB3\u6761\u4EF6</span>
        <span class="token comment">// \u82E5\u662F\u76F8\u90BB\u6876\u4E2D\u6709\u5143\u7D20\uFF0C\u4E14 x - prev || next - x \u6EE1\u8DB3\u533A\u95F4\u6761\u4EF6\uFF0C\u8BF4\u660E\u4E5F\u6EE1\u8DB3\u8981\u6C42</span>
        <span class="token comment">// \u5982\u4F55\u5C06 [x, x + t] \u6620\u5C04\u5230\u4E00\u4E2A\u6876\u4E2D\uFF0C\u5373\u6876\u4E2D\u5B58\u653E\u5143\u7D20\u7684\u6B65\u957F\u4E3A\u591A\u5C11\uFF1F</span>
        <span class="token comment">// \u53EF\u4EE5\u5047\u8BBE\uFF0Cx == 0\uFF0C</span>
        <span class="token comment">// \u5219 [0, t] \u5728 buchet[0] \u5904\uFF0C[t + 1, 2t] \u5728 bucket[1] \u5904</span>
        <span class="token comment">// [-t - 1, -1] \u5728 bucket[-1] \u5904 </span>
        <span class="token comment">// \u56E0\u6B64\uFF0Cstep = t + 1</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">// \u4E3A\u9632\u6B62\u6876\u6570\u7EC4\u8FC7\u957F\uFF0C\u56E0\u6B64\u91C7\u7528 HashMap \u5B9E\u73B0\u6876 \u4E0B\u6807 - \u503C</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9632\u6B62 \u4E24\u4E2A int \u76F8\u51CF\u8D85\u8303</span>
        <span class="token keyword">long</span> step <span class="token operator">=</span> t <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">long</span> cur <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">long</span> index <span class="token operator">=</span> <span class="token function">getIndex</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> step<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// System.out.println(cur + &quot;  &quot; + index);</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> 
            <span class="token comment">// \u67E5\u627E\u76F8\u90BB\u6876</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">long</span> prev <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">-</span> prev <span class="token operator">&lt;=</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">long</span> next <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>next <span class="token operator">-</span> cur <span class="token operator">&lt;=</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// \u5C06\u5F53\u524D\u503C\uFF0C\u653E\u5165\u5BF9\u5E94\u6876\u4E2D</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u5220\u9664\u65E7\u8FB9\u754C\u5143\u7D20</span>
                map<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span>nums<span class="token punctuation">[</span>i <span class="token operator">-</span> k<span class="token punctuation">]</span><span class="token punctuation">,</span> step<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">long</span> <span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token class-name">Long</span> cur<span class="token punctuation">,</span> <span class="token keyword">long</span> step<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> cur<span class="token operator">/</span>step<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>cur <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span>step <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u533A\u95F4\u53F3\u79FB\u4E00\u4F4D\uFF0C\u7136\u540E\u51CF\u4E00</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-2" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-2" aria-hidden="true">#</a> \u8F93\u51FA 2</h3><p><img src="`+o+'" alt="img_4.png"></p>',16),i=[l];function u(k,r){return s(),a("div",null,i)}var v=n(c,[["render",u],["__file","220.html.vue"]]);export{v as default};