import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.5aebcaaa.js";var e="/assets/img_7.fcebeb34.png",p="/assets/img_6.a31d8279.png",i="/assets/img_8.2aabc85f.png";const c={},l=t('<h1 id="_341-\u6241\u5E73\u5316\u5D4C\u5957\u5217\u8868\u8FED\u4EE3\u5668" tabindex="-1"><a class="header-anchor" href="#_341-\u6241\u5E73\u5316\u5D4C\u5957\u5217\u8868\u8FED\u4EE3\u5668" aria-hidden="true">#</a> \u{1F315}\u{1F317} 341. \u6241\u5E73\u5316\u5D4C\u5957\u5217\u8868\u8FED\u4EE3\u5668</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+e+`" alt="img_7.png"></p><hr><h3 id="\u89E3\u6CD5-1-\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1-\u9012\u5F52" aria-hidden="true">#</a> \u89E3\u6CD5 1 - \u9012\u5F52</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * public interface NestedInteger <span class="token punctuation">{</span>
 *
 *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
 *     public boolean isInteger();
 *
 *     // @return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     public Integer getInteger();
 *
 *     // @return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return empty list if this NestedInteger holds a single integer
 *     public List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NestedInteger</span><span class="token punctuation">&gt;</span></span> getList();
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NestedIterator</span> <span class="token keyword">implements</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token comment">// \u601D\u8DEF\uFF1A</span>
    <span class="token comment">// \u53EF\u4EE5\u770B\u51FA\u662F\u5D4C\u5957\u7684 \u94FE\u8868 | \u6574\u6570 \u7684\u6570\u636E\u7ED3\u6784</span>
    <span class="token comment">// \u6700\u76F4\u63A5\u7684\u65B9\u6CD5\u5C31\u662F\uFF0C\u4E00\u6B21\u628A\u6240\u6709\u6574\u6570\u5143\u7D20\u5747\u5F97\u51FA\uFF0C\u653E\u5165\u4E00\u4E2A\u96C6\u5408\u4E2D\uFF0C\u7136\u540E\u4F9D\u6B21\u53D6\u51FA</span>
    <span class="token comment">// \u5D4C\u5957 \u7ED3\u6784\u4E2D\u53D6\u5143\u7D20\u76F8\u5F53\u4E8E \u9012\u5F52 - \u6DF1\u5EA6\u4F18\u5148\u904D\u5386</span>
    <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">NestedIterator</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">NestedInteger</span><span class="token punctuation">&gt;</span></span> nestedList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u521D\u59CB\u5316 list</span>
        <span class="token function">init</span><span class="token punctuation">(</span>nestedList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">NestedInteger</span><span class="token punctuation">&gt;</span></span> nestedList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">NestedInteger</span> cur<span class="token operator">:</span> nestedList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                list<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span><span class="token function">getInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u9012\u5F52</span>
                <span class="token function">init</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD4\u56DE\u6570\u7EC4\u4E2D\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u540C\u65F6\u5220\u9664\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
        <span class="token class-name">Integer</span> res <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">!</span>list<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your NestedIterator object will be instantiated and called as such:
 * NestedIterator i = new NestedIterator(nestedList);
 * while (i.hasNext()) v[f()] = i.next();
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+p+`" alt="img_6.png"></p><hr><h3 id="\u89E3\u6CD5-2-\u501F\u52A9\u6808" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-\u501F\u52A9\u6808" aria-hidden="true">#</a> \u89E3\u6CD5 2 - \u501F\u52A9\u6808</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * public interface NestedInteger <span class="token punctuation">{</span>
 *
 *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
 *     public boolean isInteger();
 *
 *     // @return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     public Integer getInteger();
 *
 *     // @return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return empty list if this NestedInteger holds a single integer
 *     public List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NestedInteger</span><span class="token punctuation">&gt;</span></span> getList();
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NestedIterator</span> <span class="token keyword">implements</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token comment">// \u601D\u8DEF\uFF1A</span>
    <span class="token comment">// \u4E4B\u524D\u7684\u505A\u6CD5\u662F\uFF0C\u4E00\u6B21\u6027\u628A\u6240\u6709\u5143\u7D20\u653E\u5165\u96C6\u5408\u4E2D\uFF0C\u82E5\u5143\u7D20\u8FC7\u591A\u53EF\u80FD\u51FA\u73B0\u5185\u5B58\u653E\u4E0D\u4E0B\u7684\u60C5\u51B5\uFF0C\u56E0\u6B64\u7406\u8BBA\u4E0A\u5E94\u8BE5\u662F\u60F0\u6027\u5904\u7406\u7684\u601D\u8DEF</span>
    <span class="token comment">// \u53EA\u6709\u5728\u60F3\u8981\u6C42\u4E0B\u4E00\u4E2A\u5143\u7D20\u65F6\uFF0C\u624D\u5904\u7406\u4E00\u5C0F\u90E8\u5206\u5143\u7D20</span>
    <span class="token comment">// \u501F\u52A9 \u8F85\u52A9\u6808 \u5B9E\u73B0</span>
    <span class="token comment">// \u6BCF\u6B21\u53EA\u53D6\u51FA\u961F\u5934\u5143\u7D20\uFF0C\u5982\u679C\u662F\u6574\u6570\uFF0C\u76F4\u63A5\u53D6\u51FA\uFF0C\u5982\u679C\u662F\u96C6\u5408\uFF0C\u5219\u8FDB\u884C\u62C6\u5206\uFF0C\u76F4\u5230\u80FD\u591F\u53D6\u51FA\u6574\u6570</span>
    <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">NestedInteger</span><span class="token punctuation">&gt;</span></span> stack<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">NestedIterator</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">NestedInteger</span><span class="token punctuation">&gt;</span></span> nestedList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>nestedList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">pollFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">peekFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u961F\u5934\u4E3A\u96C6\u5408\uFF0C\u9700\u8981\u62C6\u5206\uFF0C\u67E5\u770B\u5206\u89E3\u540E\u662F\u5426\u5B58\u5728\u6574\u6570</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">peekFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">NestedInteger</span><span class="token punctuation">&gt;</span></span> cur <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pollFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u961F\u5934\u7684\u96C6\u5408</span>
            <span class="token comment">// \u5C06\u96C6\u5408\u5143\u7D20\u4F9D\u6B21\u538B\u6808\u653E\u5165\u961F\u5934</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">addFirst</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your NestedIterator object will be instantiated and called as such:
 * NestedIterator i = new NestedIterator(nestedList);
 * while (i.hasNext()) v[f()] = i.next();
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-2" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-2" aria-hidden="true">#</a> \u8F93\u51FA 2</h3><p><img src="`+i+'" alt="img_8.png"></p>',16),o=[l];function u(d,r){return s(),a("div",null,o)}var m=n(c,[["render",u],["__file","341.html.vue"]]);export{m as default};
