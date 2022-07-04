import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.06693945.js";const t={},l=e(`<h1 id="linkedlist" tabindex="-1"><a class="header-anchor" href="#linkedlist" aria-hidden="true">#</a> \u{1F94F} LinkedList</h1><h2 id="_1-\u7C7B\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_1-\u7C7B\u6CE8\u91CA" aria-hidden="true">#</a> 1. \u7C7B\u6CE8\u91CA</h2><ol><li>\u5B9E\u73B0\u4E86 <code>List</code> \u63A5\u53E3 &amp; <code>Deque</code> \u63A5\u53E3</li><li>\u4E3A\u53CC\u5411\u94FE\u8868\u7ED3\u6784</li><li>\u5141\u8BB8\u6240\u6709\u5143\u7D20\uFF0C\u5305\u62EC <code>null</code> \u503C</li><li>\u975E\u7EBF\u7A0B\u5B89\u5168</li><li>Iterator \u4E3A <code>fail-fast</code></li></ol><hr><h2 id="_2-\u7C7B\u56FE" tabindex="-1"><a class="header-anchor" href="#_2-\u7C7B\u56FE" aria-hidden="true">#</a> 2. \u7C7B\u56FE</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractSequentialList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span>
<span class="token comment">// ......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-\u5C5E\u6027" aria-hidden="true">#</a> 3. \u5C5E\u6027</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">transient</span> <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5F53\u94FE\u8868\u4E3A\u7A7A\u65F6\uFF0Cfirst == last == null
     * \u94FE\u8868\u975E\u7A7A\u65F6\uFF0Cfirst \u53D8\u4E3A\u771F\u6B63\u7684\u5934\u7ED3\u70B9
     * Invariant: (first == null &amp;&amp; last == null) ||
     *            (first.prev == null &amp;&amp; first.item != null)
     */</span>
    <span class="token keyword">transient</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> first<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5C3E\u8282\u70B9
     * Invariant: (first == null &amp;&amp; last == null) ||
     *            (last.next == null &amp;&amp; last.item != null)
     */</span>
    <span class="token keyword">transient</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> last<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-\u5185\u90E8\u8282\u70B9\u7C7B" tabindex="-1"><a class="header-anchor" href="#_4-\u5185\u90E8\u8282\u70B9\u7C7B" aria-hidden="true">#</a> 4. \u5185\u90E8\u8282\u70B9\u7C7B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * Unlinks non-null node x.
     */</span>
    <span class="token class-name">E</span> <span class="token function">unlink</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// assert x != null;</span>
        <span class="token keyword">final</span> <span class="token class-name">E</span> element <span class="token operator">=</span> x<span class="token punctuation">.</span>item<span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> next <span class="token operator">=</span> x<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> prev <span class="token operator">=</span> x<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>prev <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            first <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            prev<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
            x<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            last <span class="token operator">=</span> prev<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            next<span class="token punctuation">.</span>prev <span class="token operator">=</span> prev<span class="token punctuation">;</span>
            x<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        x<span class="token punctuation">.</span>item <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        modCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> element<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_5-\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_5-\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> 5. \u6784\u9020\u51FD\u6570</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * \u65E0\u53C2\u6784\u9020\u65B9\u6CD5
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Constructs a list containing the elements of the specified
     * collection, in the order they are returned by the collection&#39;s
     * iterator.
     *
     * <span class="token keyword">@param</span>  <span class="token parameter">c</span> the collection whose elements are to be placed into this list
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NullPointerException</span></span> if the specified collection is null
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addAll</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_6-\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> 6. \u5E38\u7528\u65B9\u6CD5</h2><ul><li><code>addFirst()</code> , <code>addLast()</code> , <code>offerFirst()</code> , <code>offerLast()</code> , <code>push()</code> , <code>poll()</code> \u65B9\u6CD5\u5747\u6765\u81EA <code>Deque</code> \u63A5\u53E3</li><li>\u800C <code>Stack</code> \u7684 <code>push()</code> &amp; <code>poll()</code> \u4E0D\u6765\u81EA <code>Vector</code> \u63A5\u53E3\uFF0C\u800C\u662F\u81EA\u5DF1\u7C7B\u72EC\u6709</li></ul>`,17),p=[l];function c(i,o){return s(),a("div",null,p)}var r=n(t,[["render",c],["__file","LinkedList.html.vue"]]);export{r as default};
