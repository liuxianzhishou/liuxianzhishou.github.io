import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.5aebcaaa.js";var p="/assets/img_5.2093c9d5.png",e="/assets/img_4.6a366102.png";const o={},i=t('<h1 id="_427-\u5EFA\u7ACB\u56DB\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#_427-\u5EFA\u7ACB\u56DB\u53C9\u6811" aria-hidden="true">#</a> \u{1F315} 427. \u5EFA\u7ACB\u56DB\u53C9\u6811</h1><p>\u96BE\u5EA6: \u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+p+`" alt="img_5.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/*
// Definition for a QuadTree node.
class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;

    
    public Node() {
        this.val = false;
        this.isLeaf = false;
        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
    }
    
    public Node(boolean val, boolean isLeaf) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
    }
    
    public Node(boolean val, boolean isLeaf, Node topLeft, Node topRight, Node bottomLeft, Node bottomRight) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
};
*/</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">construct</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> grid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u9012\u5F52</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> grid<span class="token punctuation">,</span> <span class="token keyword">int</span> i1<span class="token punctuation">,</span> <span class="token keyword">int</span> i2<span class="token punctuation">,</span> <span class="token keyword">int</span> j1<span class="token punctuation">,</span> <span class="token keyword">int</span> j2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6 - {i1, i2, j1, j2} \u533A\u57DF\u5185\u5168\u4E3A 0 | 1 --&gt; \u53F6\u5B50\u8282\u70B9</span>
        <span class="token comment">// System.out.println(i1 + &quot;  &quot; + i2 + &quot;  &quot; + j1 + &quot;  &quot; + j2);</span>
        <span class="token keyword">int</span> tmp <span class="token operator">=</span> grid<span class="token punctuation">[</span>i1<span class="token punctuation">]</span><span class="token punctuation">[</span>j1<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> only <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> i1<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> i2<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>only<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> j1<span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> j2<span class="token punctuation">;</span> j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> tmp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    only <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>only<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BF4\u660E tmp \u6CA1\u6709\u6539\u53D8\uFF0C\u5168\u4E3A \u540C\u4E00\u4E2A\u503C</span>
            <span class="token keyword">boolean</span> b <span class="token operator">=</span> <span class="token punctuation">(</span>tmp <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">true</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53F6\u5B50\u8282\u70B9</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u975E\u53F6\u5B50\u8282\u70B9\uFF0C\u8FD8\u9700\u8981\u8FDB\u4E00\u6B65\u62C6\u5206</span>
        <span class="token class-name">Node</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> midi <span class="token operator">=</span> i1 <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i2 <span class="token operator">-</span> i1<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> midj <span class="token operator">=</span> j1 <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>j2 <span class="token operator">-</span> j1<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span>topLeft <span class="token operator">=</span> <span class="token function">mySol</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i1<span class="token punctuation">,</span> midi<span class="token punctuation">,</span> j1<span class="token punctuation">,</span> midj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span>topRight <span class="token operator">=</span> <span class="token function">mySol</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i1<span class="token punctuation">,</span> midi<span class="token punctuation">,</span> midj <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span>bottomLeft <span class="token operator">=</span> <span class="token function">mySol</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> midi <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> i2<span class="token punctuation">,</span> j1<span class="token punctuation">,</span> midj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span>bottomRight <span class="token operator">=</span> <span class="token function">mySol</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> midi <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> i2<span class="token punctuation">,</span> midj <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+e+'" alt="img_4.png"></p>',10),c=[i];function l(u,r){return s(),a("div",null,c)}var v=n(o,[["render",l],["__file","427.html.vue"]]);export{v as default};
