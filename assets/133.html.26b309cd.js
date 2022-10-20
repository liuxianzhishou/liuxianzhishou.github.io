import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_1.0635c1ac.png",e="/assets/img.68d46c31.png",c="/assets/img_2.1bf7c650.png";const o={},l=p('<h1 id="_133-\u514B-\u56FE" tabindex="-1"><a class="header-anchor" href="#_133-\u514B-\u56FE" aria-hidden="true">#</a> \u{1F315}\u{1F315}\u{1F315} 133. \u514B-\u56FE</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F315}\u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_1.png"></p><hr><h3 id="\u89E3\u6CD5-1-dfs" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1-dfs" aria-hidden="true">#</a> \u89E3\u6CD5 1 - dfs</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/*
// Definition for a Node.
class Node {
    public int val;
    public List&lt;Node&gt; neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList&lt;Node&gt;();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList&lt;Node&gt;();
    }
    public Node(int _val, ArrayList&lt;Node&gt; _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">cloneGraph</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u5C31\u662F\u904D\u5386 node \u7684\u6240\u6709\u8282\u70B9\uFF0C\u5C06\u6240\u6709\u8282\u70B9\u7684\u503C\u590D\u5236\u6210\u4E00\u4E2A\u65B0\u8282\u70B9\uFF0Cneighbors \u540C\u6837\u590D\u5236\u6210\u65B0\u7684\u5404\u4E2A\u8282\u70B9</span>
        <span class="token comment">// \u9700\u8981\u6CE8\u610F\u7684\uFF0C\u5DF2\u7ECF\u590D\u5236\u8FC7\u7684\u8282\u70B9\u4E0D\u9700\u8981\u518D\u6B21\u590D\u5236\uFF0C\u9020\u6210\u6B7B\u5FAA\u73AF</span>
        <span class="token comment">// \u6DF1\u5EA6\u4F18\u5148</span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">mySol</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// node != null</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5DF2\u7ECF\u5B8C\u6210\u8BE5\u8282\u70B9\u7684\u590D\u5236\uFF0C\u76F4\u63A5\u8FD4\u56DE\u590D\u5236\u7684\u65B0\u8282\u70B9</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Node</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5148\u590D\u5236\u539F\u8282\u70B9\u7684\u503C</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> newNode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u590D\u5236\u503C\u540E\uFF0C\u76F4\u63A5\u8FD4\u56DE\uFF0C\u9632\u6B62\u51FA\u73B0\u5FAA\u73AF</span>
        
        <span class="token comment">// \u904D\u5386\u90BB\u63A5\u70B9\uFF0C\u8FD9\u4E9B\u4E5F\u9700\u8981\u5B8C\u6210\u5BF9\u5E94\u7684\u590D\u5236</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Node</span> cur <span class="token operator">:</span> node<span class="token punctuation">.</span>neighbors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u5B8C\u6210\u90BB\u63A5\u70B9\u7684\u590D\u5236\uFF0C\u9012\u5F52</span>
                list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">mySol</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u90BB\u63A5\u70B9\u6240\u6709\u4E5F\u5DF2\u5B8C\u6210\u590D\u5236\u8FC7\u7A0B\uFF0C\u5373\u6DF1\u62F7\u8D1D\uFF0C\u66F4\u65B0</span>
        newNode<span class="token punctuation">.</span>neighbors <span class="token operator">=</span> list<span class="token punctuation">;</span>
        <span class="token keyword">return</span> newNode<span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u6DF1\u62F7\u8D1D\u7684\u65B0\u8282\u70B9</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+e+`" alt="img.png"></p><hr><h3 id="\u89E3\u6CD5-2-bfs" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-bfs" aria-hidden="true">#</a> \u89E3\u6CD5 2 - bfs</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/*
// Definition for a Node.
class Node {
    public int val;
    public List&lt;Node&gt; neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList&lt;Node&gt;();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList&lt;Node&gt;();
    }
    public Node(int _val, ArrayList&lt;Node&gt; _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">cloneGraph</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u5E7F\u5EA6\u4F18\u5148 - \u8F85\u52A9 \u961F\u5217</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> node<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Node</span> cur <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Node</span> cloneCur<span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// map \u4E2D\u5DF2\u7ECF\u6709 cur \u7684\u590D\u5236\u8282\u70B9</span>
                    cloneCur <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u9700\u8981\u6784\u9020</span>
                    cloneCur <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> cloneCur<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// \u5B8C\u6210\u503C\u590D\u5236\u540E\uFF0C\u53CA\u65F6\u66F4\u65B0 map\uFF0C\u4E0D\u9700\u8981\u7B49\u5230\u5B8C\u6210\u90BB\u63A5\u8868\u7684\u590D\u5236\uFF0C\u539F\u56E0\u662F map \u4E2D\u5B58\u653E\u7684\u53EA\u662F node</span>
                <span class="token comment">// \u5B8C\u6210\u540E\u9762\u7684\u90BB\u63A5\u8868\u7684\u590D\u5236\u4E4B\u540E\uFF0C\u53EF\u4EE5\u4E4B\u540E\u66F4\u65B0\uFF0Cmap \u4E2D\u627E\u5230\u7684 node \u8FD8\u662F\u4E4B\u524D\u7684\u590D\u5236\u8282\u70B9</span>
                <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Node</span> tmp <span class="token operator">:</span> cur<span class="token punctuation">.</span>neighbors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Node</span> cloneTmp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> cloneTmp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u590D\u5236\u8282\u70B9</span>
                        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cloneTmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                cloneCur<span class="token punctuation">.</span>neighbors <span class="token operator">=</span> list<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-2" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-2" aria-hidden="true">#</a> \u8F93\u51FA 2</h3><p><img src="`+c+'" alt="img_2.png"></p>',16),i=[l];function u(d,k){return s(),a("div",null,i)}var m=n(o,[["render",u],["__file","133.html.vue"]]);export{m as default};
