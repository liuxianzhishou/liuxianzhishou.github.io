import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.5aebcaaa.js";var p="/assets/img.d99eac33.png",e="/assets/img_1.116491a1.png",o="/assets/img_2.6ef9a9aa.png";const c={},l=t('<h1 id="_841-\u94A5\u5319\u548C\u623F\u95F4" tabindex="-1"><a class="header-anchor" href="#_841-\u94A5\u5319\u548C\u623F\u95F4" aria-hidden="true">#</a> \u{1F315} \u{1F317} 841. \u94A5\u5319\u548C\u623F\u95F4</h1><p>\u96BE\u5EA6: \u{1F315} \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+p+`" alt="img.png"></p><hr><h3 id="\u89E3\u6CD5-1-\u9012\u5F52-\u6DF1\u5EA6\u4F18\u5148" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1-\u9012\u5F52-\u6DF1\u5EA6\u4F18\u5148" aria-hidden="true">#</a> \u89E3\u6CD5 1 - \u9012\u5F52- \u6DF1\u5EA6\u4F18\u5148</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">canVisitAllRooms</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> rooms<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u7C7B\u4F3C\u56DE\u6EAF\uFF0C\u521D\u59CB\u8282\u70B9\u53EF\u4EE5\u8303\u56F4\u4E3A [0, len - 1]</span>
        <span class="token comment">// \u4ECE\u521D\u59CB\u8282\u70B9\u8FDB\u5165\uFF0C\u627E\u5230\u94A5\u5319\uFF0C\u4E14\u8BE5\u6761\u8DEF\u5F84\u4E4B\u524D\u6CA1\u6709\u8D70\u8FC7\uFF0C\u5219\u53EF\u4EE5\u7EE7\u7EED\u63A2\u7D22</span>
        <span class="token comment">// \u82E5\u5DF2\u7ECF\u8D70\u8FC7\uFF0C\u5219\u8BE5\u6761\u8DEF\u63A2\u7D22\u5931\u8D25</span>
        <span class="token comment">// \u6C42\u7684\u4E0D\u662F\u80FD\u4E0D\u80FD\u4E00\u6761\u8DEF\u5F84\u8D70\u5B8C\u6240\u6709\u623F\u95F4\uFF0C\u800C\u662F\u6240\u6709\u8DEF\u5F84\u603B\u548C\u80FD\u4E0D\u80FD\u8986\u76D6\u6240\u6709\u623F\u95F4</span>
        <span class="token comment">// \u521A\u5F00\u59CB\u53EA\u80FD\u8FDB\u5165 0 \u53F7\u623F\u95F4</span>
        <span class="token comment">// \u6DF1\u5EA6\u4F18\u5148\u641C\u7D22</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> rooms<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        path<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>rooms<span class="token punctuation">,</span> len<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> rooms<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">,</span> <span class="token keyword">int</span> cur<span class="token punctuation">,</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BE5\u6761\u8DEF\u5F84\u4E0B\u6240\u6709\u623F\u95F4\u5DF2\u7ECF\u8D70\u8FC7\u4E00\u904D</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// path.size() &lt; len</span>
        <span class="token comment">// \u5230\u8FBE cur \u623F\u95F4\u540E\uFF0C\u627E\u8BE5\u623F\u95F4\u7684\u94A5\u5319\u96C6</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> rooms<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// size &gt; 0</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> next <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                path<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">mySol</span><span class="token punctuation">(</span>rooms<span class="token punctuation">,</span> len<span class="token punctuation">,</span> next<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// \u987A\u7740 next \u5F80\u4E0B\u8D70\uFF0C\u7ED3\u679C\u6210\u529F\u4E86</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// path.remove(next); // \u6B64\u65F6\u4E0D\u9700\u8981\u56DE\u6EAF\uFF0C\u56E0\u4E3A\u7EDF\u8BA1\u7684\u5C31\u662F\u6240\u6709\u8DEF\u5F84\u4E0B\u8D70\u8FC7\u7684\u623F\u95F4</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u623F\u95F4\u4E0B\uFF0C\u4E0B\u4E00\u4E2A\u80FD\u8D70\u7684\u623F\u95F4\u5747\u8FDB\u884C\u4E86\u5C1D\u8BD5\uFF0C\u524D\u9762\u4E0D\u80FD return true\uFF0C\u6B64\u65F6\u5C31 return false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+e+`" alt="img_1.png"></p><hr><h3 id="\u89E3\u6CD5-2-\u5E7F\u5EA6\u4F18\u5148" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-\u5E7F\u5EA6\u4F18\u5148" aria-hidden="true">#</a> \u89E3\u6CD5 2 - \u5E7F\u5EA6\u4F18\u5148</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">canVisitAllRooms</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> rooms<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u6A2A\u5411\u641C\u7D22 - \u5E7F\u5EA6\u4F18\u5148</span>
        <span class="token comment">// \u501F\u52A9 queue</span>
        <span class="token keyword">int</span> amount <span class="token operator">=</span> rooms<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u5C42\u53EF\u63A2\u7D22\u623F\u95F4\u6570</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> cur <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u6240\u5904\u7684\u623F\u95F4\u53F7</span>
                <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> rooms<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5728\u5F53\u524D\u623F\u95F4\u6240\u80FD\u62FF\u5230\u7684\u94A5\u5319\u96C6</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">int</span> next <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// System.out.println(cur + &quot;   &quot; + next);</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> amount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// \u6240\u6709\u623F\u95F4\u7684\u94A5\u5319\u5DF2\u7ECF\u96C6\u9F50</span>
                        <span class="token punctuation">}</span>
                        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+o+'" alt="img_2.png"></p>',16),i=[l];function u(k,r){return s(),a("div",null,i)}var v=n(c,[["render",u],["__file","841.html.vue"]]);export{v as default};