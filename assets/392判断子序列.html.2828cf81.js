import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_19.668a8f85.png",e="/assets/img_21.688935b0.png",o="/assets/img_20.135ff827.png",c="/assets/img_13.1573eedd.png";const l={},i=p('<h1 id="_392-\u5224\u65AD\u5B50\u5E8F\u5217" tabindex="-1"><a class="header-anchor" href="#_392-\u5224\u65AD\u5B50\u5E8F\u5217" aria-hidden="true">#</a> \u{1F315}\u{1F315} 392. \u5224\u65AD\u5B50\u5E8F\u5217</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_19.png"></p><hr><h3 id="\u89E3\u6CD5-1-\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1-\u53CC\u6307\u9488" aria-hidden="true">#</a> \u89E3\u6CD5 1 - \u53CC\u6307\u9488</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSubsequence</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">String</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u53CC\u6307\u9488</span>
        <span class="token keyword">int</span> rows <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> cols <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>m <span class="token operator">&lt;</span> rows <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;</span> cols<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">==</span> t<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                m <span class="token operator">++</span><span class="token punctuation">;</span>
                n <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                n <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> m <span class="token operator">==</span> rows<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+e+`" alt="img_21.png"></p><hr><h3 id="\u89E3\u6CD5-2-dp" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-dp" aria-hidden="true">#</a> \u89E3\u6CD5 2 - dp</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSubsequence</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">String</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// dp[i][j] = dp[i][j - 1], dp[i - 1][j - 1]</span>
        <span class="token keyword">int</span> rows <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> cols <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span>rows <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>cols <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// \u521D\u59CB\u5316</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> cols<span class="token punctuation">;</span> j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// dp</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> rows<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> cols<span class="token punctuation">;</span> j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> m <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> n <span class="token operator">=</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">==</span> t<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">|=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">|=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dp<span class="token punctuation">[</span>rows<span class="token punctuation">]</span><span class="token punctuation">[</span>cols<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-2" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-2" aria-hidden="true">#</a> \u8F93\u51FA 2</h3><p><img src="`+o+`" alt="img_20.png"></p><hr><h3 id="\u89E3\u6CD5-3-\u8FDB\u9636\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-3-\u8FDB\u9636\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u6CD5 3 - \u8FDB\u9636\u95EE\u9898</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSubsequence</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">String</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u8FDB\u9636\u95EE\u9898</span>
        <span class="token comment">// \u5E38\u89C4\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u540C\u65F6\u904D\u5386 s &amp; t \u76F4\u5230\u4E00\u65B9\u622A\u6B62\uFF0C\u6700\u5DEE\u60C5\u51B5\u4E0B\u904D\u5386 t \u7684\u957F\u5EA6</span>
        <span class="token comment">// \u5982\u679C t \u4E0D\u53D8\uFF0Cs \u9700\u8981\u7ECF\u5E38\u548C t \u5339\u914D\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u9884\u5148\u5BF9 t \u8FDB\u884C\u4E00\u4E9B\u524D\u7F6E\u5904\u7406\uFF0C\u4F7F\u5F97\u5224\u65AD\u65F6\u53EF\u4EE5\u8DF3\u8DC3\u7740\u5339\u914D\uFF0C\u53EA\u9700\u904D\u5386 s \u7684\u957F\u5EA6</span>
        <span class="token comment">// \u90A3\u4E48\u5982\u4F55\u505A\uFF1F</span>
        <span class="token comment">// \u5047\u8BBE\u904D\u5386 s \u7684 cur \u65F6\u5BF9\u5E94 t \u7684\u4E0B\u6807\u4E3A index\uFF0C\u6211\u4EEC\u60F3\u8981\u5FEB\u901F\u5F97\u5230 s \u4E0B\u4E00\u4E2A\u5B57\u7B26 next \u5BF9\u5E94 t \u6240\u5728\u4E0B\u6807</span>
        <span class="token comment">// \u56E0\u6B64\u9700\u8981\u5B58\u50A8 t \u7684\u4EFB\u610F\u4E0B\u6807\u5904\u5230\u4EFB\u610F\u5B57\u7B26\u7684\u4E0B\u6807</span>
        <span class="token comment">// \u4F8B s = bac\uFF0C t = ababc</span>
        <span class="token comment">// s \u60F3\u8981 b\uFF0C\u6211\u4EEC\u9700\u8981\u5FEB\u901F\u5F97\u5230 t \u4E2D\u7B2C\u4E00\u4E2A b \u6240\u5728\u4E0B\u6807\uFF0C \u4E3A 1</span>
        <span class="token comment">// s \u60F3\u8981\u4E0B\u4E00\u4E2A\u5B57\u7B26 a\uFF0C\u6211\u4EEC\u5728 t \u5F53\u524D\u4E0B\u6807 1 \u5904\u5FEB\u901F\u5F97\u5230\u4ECE\u8FD9\u91CC\u51FA\u53D1\uFF0C\u540E\u7EED\u7684\u7B2C\u4E00\u4E2A a \u6240\u5728\u4E0B\u6807\uFF0C\u5373 2</span>
        <span class="token comment">// s \u60F3\u8981\u4E0B\u4E00\u4E2A\u5B57\u7B26 c\uFF0C\u6211\u4EEC\u5728 t \u4E0B\u6807 2 \u5904\u5FEB\u901F\u5F97\u5230\u4ECE 2 \u4EE5\u540E\u7684\u7B2C\u4E00\u4E2A c \u6240\u5728\u4E0B\u6807\uFF0C\u5373 4</span>
        <span class="token comment">// s \u904D\u5386\u5B8C\u6210\uFF0C\u6EE1\u8DB3\u6761\u4EF6</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5BF9 t \u8FDB\u884C\u9884\u5904\u7406</span>
        t <span class="token operator">=</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> t<span class="token punctuation">;</span> <span class="token comment">// \u7531\u4E8E s \u7684\u9996\u4E2A\u5B57\u7B26\u5E76\u4E0D\u4E00\u5B9A\u5BF9\u5E94 t \u7684\u9996\u4E2A\u5B57\u7B26\uFF0C\u6211\u4EEC\u9700\u8981\u627E\u5230 s \u9996\u5B57\u7B26\u5BF9\u5E94 t \u7684\u9996\u5B57\u7B26\u4F4D\u7F6E</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u56E0\u6B64\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u5165\u53E3\u5B57\u7B26\uFF0C\u8FD9\u4E2A\u5165\u53E3\u5B57\u7B26\uFF0C\u542B\u6709\u5230 s \u7684 26 \u79CD\u4EFB\u610F\u8D77\u59CB\u5B57\u7B26\u7684\u8DEF\u5F84\u4E0B\u6807</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5982\u679C\u5916\u5C42\u904D\u5386 t \u7684\u4E0B\u6807\uFF0C\u590D\u6742\u5EA6\u4E3A O(N)\uFF0C\u5185\u5C42\u627E [a - z] \u6240\u6709\u53EF\u80FD\u60C5\u51B5\u5B57\u7B26\u7684\u4E0B\u6807\uFF0C\u4ECD\u9700\u8981\u904D\u5386\u4E00\u904D t\uFF0C\u590D\u6742\u5EA6\u4E3A O(N)</span>
        <span class="token comment">// \u82E5\u5916\u5C42\u904D\u5386 [a - 1] \u6240\u6709\u53EF\u80FD\u60C5\u51B5\u7684\u5B57\u7B26\uFF0C\u590D\u6742\u5EA6\u4E3A O(26)\uFF0C\u5185\u5C42\u904D\u5386 t \u7684\u4E0B\u6807\uFF0C\u627E\u8BE5\u4E0B\u6807\u5904\u4E0B\u4E00\u4E2A\u5B57\u7B26\u7684\u4E0B\u6807\uFF0C\u590D\u6742\u5EA6\u4E3A O(N)</span>
        <span class="token comment">// \u6240\u4EE5\u91C7\u7528 \u5916\u5C42\u904D\u5386 \u5B57\u7B26\uFF0C\u5185\u5C42\u904D\u5386 t \u7684\u65B9\u5F0F\u586B\u5145 arr[]</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">char</span> c <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span> c <span class="token operator">&lt;=</span> <span class="token char">&#39;z&#39;</span><span class="token punctuation">;</span> c <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5F53\u524D\u8981\u5BFB\u627E\u7684\u4E0B\u6807\u4E3A c</span>
            <span class="token keyword">int</span> y <span class="token operator">=</span> c <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5BF9\u5E94 arr \u7684\u7EB5\u5750\u6807</span>
            <span class="token keyword">int</span> val <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u5982\u679C\u4ECE t \u7684\u67D0\u4E2A\u4E0B\u6807\u4E4B\u540E\u4E0D\u4F1A\u51FA\u73B0 c\uFF0C\u5219 val == -1 \u8868\u793A\u6CA1\u6709</span>
            <span class="token comment">// \u4ECE\u540E\u5F80\u524D\u904D\u5386</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">char</span> cur <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span> 
                <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">==</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u5F53\u524D\u4E0B\u6807\u5904\u7684\u5B57\u7B26\u4E0E\u60F3\u8981\u5BFB\u627E\u7684\u5B57\u7B26\u5339\u914D\uFF0C\u90A3\u4E48\u518D\u5F80\u524D\u9047\u5230\u8BE5\u5B57\u7B26\uFF0C\u4E0B\u6807\u66F4\u65B0\u4E3A\u5F53\u524D\u4E0B\u6807</span>
                    val <span class="token operator">=</span> i<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u904D\u5386 s</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// t \u7684\u521D\u59CB\u4E0B\u6807\uFF0C\u5BF9\u5E94 &#39; &#39;\uFF0C\u91CC\u9762\u5B58\u653E\u4E86 26 \u79CD\u5B57\u7B26\u7684\u5165\u53E3\u4E0B\u6807</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u60F3\u8981\u67E5\u627E\u7684\u5B57\u7B26</span>
            <span class="token comment">// \u5230 t \u4E2D\u67E5\u627E\uFF0C\u521D\u59CB\u65F6\u4ECE \u4E0B\u6807 0 \u7684 &#39; &#39; \u5165\u53E3\u627E\u5230\u521D\u59CB\u4E0B\u6807</span>
            index <span class="token operator">=</span> arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span>c <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u8BF4\u660E t \u4ECE\u5F53\u524D\u4E0B\u6807\u67E5\u627E\uFF0C\u5F80\u540E\u4E0D\u5B58\u5728 s \u60F3\u8981\u7684\u5B57\u7B26 c</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-3" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-3" aria-hidden="true">#</a> \u8F93\u51FA 3</h3><p><img src="`+c+'" alt="img_13.png"></p>',22),u=[i];function k(r,d){return s(),a("div",null,u)}var b=n(l,[["render",k],["__file","392\u5224\u65AD\u5B50\u5E8F\u5217.html.vue"]]);export{b as default};
