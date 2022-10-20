import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_1.7a80e524.png",e="/assets/img.e7f3b2d6.png",o="/assets/img_2.57227ec5.png",c="/assets/img_2.5348cbb4.png";const l={},i=p('<h1 id="_42-\u63A5\u96E8\u6C34" tabindex="-1"><a class="header-anchor" href="#_42-\u63A5\u96E8\u6C34" aria-hidden="true">#</a> \u{1F315} 42. \u63A5\u96E8\u6C34</h1><p>\u96BE\u5EA6: \u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_1.png"></p><hr><h3 id="\u89E3\u6CD5-1-\u5355\u5411\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1-\u5355\u5411\u904D\u5386" aria-hidden="true">#</a> \u89E3\u6CD5 1 - \u5355\u5411\u904D\u5386</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">trap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> height<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u7AD6\u7740\u76F8\u52A0\uFF0C\u6C42\u6BCF\u4E2A\u4E0B\u6807\u5904\u80FD\u63A5\u591A\u5C11\u96E8\u6C34</span>
        <span class="token comment">// \u6BCF\u4E2A\u4E0B\u6807\u5904\u53EF\u63A5\u96E8\u6C34\uFF0C\u53D6\u51B3\u4E8E\u8BE5\u4E0B\u6807\u4E24\u4FA7\u7684\u6700\u5927\u503C &amp; \u81EA\u8EAB\u9AD8\u5EA6</span>
        <span class="token comment">// \u5DE6\u53F3\u4E24\u8FB9\u8F83\u5C0F\u503C - \u81EA\u8EAB\u9AD8\u5EA6 \u5373\u4E3A\u8BE5\u5904\u53EF\u63A5\u96E8\u6C34\u91CF</span>
        <span class="token comment">// \u5DE6\u53F3\u6DFB\u52A0\u54E8\u5175\u8282\u70B9 0 \u65B9\u4FBF\u8FD0\u7B97</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> height<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> left <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> right <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// \u4ECE\u5DE6\u5230\u53F3\u904D\u5386\uFF0C\u6C42\u5DE6\u4FA7\u6700\u5927\u503C</span>
        <span class="token keyword">int</span> leftMax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            leftMax <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftMax<span class="token punctuation">,</span> height<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            left<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> leftMax<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u4ECE\u53F3\u5230\u5DE6\u904D\u5386\uFF0C\u6C42\u53F3\u4FA7\u6700\u5927\u503C</span>
        <span class="token keyword">int</span> rightMax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rightMax <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>rightMax<span class="token punctuation">,</span> height<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            right<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> rightMax<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u6700\u540E\u4E00\u6B21\u904D\u5386\uFF0C\u6C42\u6BCF\u4E2A\u4E0B\u6807\u5904\u80FD\u63A5\u7684\u96E8\u6C34</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> min <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>left<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> right<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>height<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res <span class="token operator">+=</span> <span class="token punctuation">(</span>min <span class="token operator">-</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+e+`" alt="img.png"></p><hr><h3 id="\u89E3\u6CD5-2-\u5355\u8C03\u6808" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-\u5355\u8C03\u6808" aria-hidden="true">#</a> \u89E3\u6CD5 2 - \u5355\u8C03\u6808</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">trap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> height<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u5355\u8C03\u6808 - \u6784\u9020 \u975E\u4E25\u683C\u9012\u51CF\u6808</span>
        <span class="token comment">// \u753B\u56FE\u5C31\u51FA\u6765\u4E86</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> height<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// stack \u975E\u7A7A</span>
                <span class="token keyword">int</span> cur <span class="token operator">=</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> tmpPeek <span class="token operator">=</span> height<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">&lt;</span> tmpPeek<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">==</span> tmpPeek<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u66FF\u6362\u539F\u8282\u70B9\uFF0C\u4E0B\u6807\u66F4\u6B63\u4E3A ++</span>
                    stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u9700\u8981\u53D6\u51FA\u5143\u7D20\uFF0C\u6C42\u96E8\u6C34\uFF0C\u96E8\u6C34\u662F\u4E00\u884C\u884C\u6C42\u7684</span>
                    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> cur <span class="token operator">&gt;</span> height<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">int</span> bottom <span class="token operator">=</span> height<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u6700\u4F4E\u4F4D</span>
                        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token comment">// \u53D6\u51FA\u5F53\u524D\u5217\u540E\uFF0C\u8FD8\u5B58\u5728\u5DE6\u8FB9\u754C</span>
                            <span class="token keyword">int</span> leftIndex <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token keyword">int</span> width <span class="token operator">=</span> i <span class="token operator">-</span> leftIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u5DE6\u8FB9\u754C\u7531 leftIndex \u51B3\u5B9A\uFF0C\u800C\u975E pop \u51FA\u6765\u7684\u5143\u7D20\u7684\u4E0B\u6807</span>
                            <span class="token keyword">int</span> hi <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> height<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token keyword">int</span> square <span class="token operator">=</span> width <span class="token operator">*</span> <span class="token punctuation">(</span>hi <span class="token operator">-</span> bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>
                            res <span class="token operator">+=</span> square<span class="token punctuation">;</span>
                            <span class="token comment">// System.out.println(width + &quot;  &quot; + hi + &quot;  &quot; + bottom + &quot;  &quot; + square);</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-2" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-2" aria-hidden="true">#</a> \u8F93\u51FA 2</h3><p><img src="`+o+`" alt="img_2.png"></p><hr><h3 id="\u89E3\u6CD5-3-\u4F18\u5148\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-3-\u4F18\u5148\u961F\u5217" aria-hidden="true">#</a> \u89E3\u6CD5 3 - \u4F18\u5148\u961F\u5217</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">trap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> height<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u501F\u52A9 \u4F18\u5148\u961F\u5217 - &lt;\u4E0B\u6807\uFF0C\u9AD8\u5EA6&gt;</span>
        <span class="token comment">// \u521D\u59CB\u538B\u5165\u5DE6\u53F3\u8FB9\u754C\u503C</span>
        <span class="token comment">// \u6BCF\u6B21\u5F39\u51FA\u8F83\u5C0F\u7684\u5143\u7D20\uFF0C\u5224\u65AD\u80FD\u5426\u5F80\u5DE6\u53F3\u4E24\u4FA7\u6CE8\u6C34\uFF0C\u9700\u8981\u6570\u7EC4\u53BB\u91CD\uFF0C\u538B\u5165\u5DE6\u53F3\u4E24\u4FA7\u5143\u7D20</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> height<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">// \u7279\u6B8A\u60C5\u51B5\u7279\u5224</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// len &gt; 2</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// \u5DE6\u53F3\u4E24\u4E2A\u65B9\u5411</span>
        <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> visit <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">PriorityQueue</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u6839\u636E\u9AD8\u5EA6\u5EFA\u7ACB\u5C0F\u6839\u5806</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u538B\u5165\u5DE6\u53F3\u4E24\u4FA7\u5143\u7D20</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> height<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> height<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        visit<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        visit<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5FAA\u73AF</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cur <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u521D\u59CB\u95E8\u7968\uFF1A</span>
            <span class="token comment">// \u8FB9\u754C\u503C\u6709\u6548 &amp;&amp; \u6CA1\u6709\u88AB\u8BBF\u95EE\u8FC7</span>
            <span class="token comment">// \u6210\u529F\u6CE8\u6C34\u95E8\u7968\uFF1A</span>
            <span class="token comment">// \u9AD8\u5EA6 &lt; cur[1]</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> index <span class="token operator">=</span> cur<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> j<span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>visit<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>height<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&lt;</span> cur<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        res <span class="token operator">+=</span> cur<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> height<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u53EF\u4EE5\u5F80\u5DE6 | \u53F3 \u65B9\u5411\u6CE8\u6C34\uFF0C\u4F7F\u4E4B\u8FBE\u5230\u5F53\u524D\u6700\u5C0F\u9AD8\u5EA6</span>
                        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>index<span class="token punctuation">,</span> cur<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6CE8\u6C34\u540E\u9AD8\u5EA6\u4E3A cur[1]</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token comment">// \u65E0\u9700\u6CE8\u6C34\uFF0C\u538B\u5165\u5B9E\u9645\u9AD8\u5EA6</span>
                        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>index<span class="token punctuation">,</span> height<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    visit<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> 
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-3" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-3" aria-hidden="true">#</a> \u8F93\u51FA 3</h3><p><img src="`+c+'" alt="img_2.png"></p>',22),u=[i];function k(r,d){return s(),a("div",null,u)}var b=n(l,[["render",k],["__file","42.html.vue"]]);export{b as default};
