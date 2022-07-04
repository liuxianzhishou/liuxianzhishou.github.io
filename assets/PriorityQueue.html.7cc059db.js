import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.06693945.js";const p={},t=e(`<h1 id="priorityqueue" tabindex="-1"><a class="header-anchor" href="#priorityqueue" aria-hidden="true">#</a> \u26BE PriorityQueue</h1><h2 id="_1-\u7C7B\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_1-\u7C7B\u6CE8\u91CA" aria-hidden="true">#</a> 1. \u7C7B\u6CE8\u91CA</h2><ol><li>\u590D\u6742\u5EA6</li></ol><ul><li>O(log N): <code>offer</code> &amp; <code>poll</code> &amp; <code>remove()</code> &amp; <code>add</code></li><li>O(N) : <code>remove(Object)</code> &amp; <code>contains(Object)</code></li><li>O(1) : <code>peek</code> &amp; <code>element</code> &amp; <code>size</code></li></ul><ol start="2"><li>\u975E\u7EBF\u7A0B\u5B89\u5168</li></ol><hr><h2 id="_2-\u7C7B\u56FE" tabindex="-1"><a class="header-anchor" href="#_2-\u7C7B\u56FE" aria-hidden="true">#</a> 2. \u7C7B\u56FE</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span>
<span class="token comment">// ......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-\u5C5E\u6027" aria-hidden="true">#</a> 3. \u5C5E\u6027</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">7720805057305804111L</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEFAULT_INITIAL_CAPACITY <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5E73\u8861\u4E8C\u53C9\u5806
     * queue[n] \u7236\u8282\u70B9\u7684\u5DE6\u53F3\u5B50\u8282\u70B9\u5206\u522B\u4E3A queue[2 * n + 1] &amp; queue[2 * n + 2]
     * \u9ED8\u8BA4\u5C0F\u6839\u5806\uFF0C\u6839\u636E\u81EA\u7136\u987A\u5E8F\u6392\u5217
     */</span>
    <span class="token keyword">transient</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> queue<span class="token punctuation">;</span> <span class="token comment">// non-private to simplify nested class access</span>

    <span class="token doc-comment comment">/**
     * The number of elements in the priority queue.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * The comparator, or null if priority queue uses elements&#39;
     * natural ordering.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> comparator<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * The number of times this priority queue has been
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>structurally modified<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>.  See AbstractList for gory details.
     */</span>
    <span class="token keyword">transient</span> <span class="token keyword">int</span> modCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// non-private to simplify nested class access</span>
    
    <span class="token doc-comment comment">/**
     * \u6570\u7EC4\u6700\u5927\u957F\u5EA6
     * \u51CF\u53BB\u5BF9\u8C61\u5934 [8\u5B57\u8282] \u7684\u957F\u5EA6
     * \u6709\u4E9B JVM \u8FD8\u4F1A\u7ED9\u6570\u7EC4\u7559\u51FA\u4E00\u5B9A\u957F\u5EA6\uFF0C\u56E0\u6B64\u53EF\u80FD\u9020\u6210 OOM
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MAX_ARRAY_SIZE <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE <span class="token operator">-</span> <span class="token number">8</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> 4. \u6784\u9020\u51FD\u6570</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * \u65E0\u53C2\u6784\u9020\u51FD\u6570\uFF0C\u521D\u59CB\u5BB9\u91CF = 11 &amp; \u9ED8\u8BA4\u6392\u5E8F
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">PriorityQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>DEFAULT_INITIAL_CAPACITY<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6307\u5B9A\u5BB9\u91CF\u5927\u5C0F &amp; \u9ED8\u8BA4\u6392\u5E8F
     *
     * <span class="token keyword">@param</span> <span class="token parameter">initialCapacity</span> the initial capacity for this priority queue
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IllegalArgumentException</span></span> if <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">initialCapacity</span></span><span class="token punctuation">}</span> is less
     *         than 1
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">PriorityQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u521D\u59CB\u5BB9\u91CF = 11 &amp; \u6307\u5B9A\u6392\u5E8F\u65B9\u5F0F
     *
     * <span class="token keyword">@param</span>  <span class="token parameter">comparator</span> the comparator that will be used to order this
     *         priority queue.  If <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token keyword">null</span></span></span><span class="token punctuation">}</span>, the <span class="token punctuation">{</span><span class="token keyword">@linkplain</span> <span class="token reference"><span class="token class-name">Comparable</span></span>
     *         natural ordering<span class="token punctuation">}</span> of the elements will be used.
     * <span class="token keyword">@since</span> 1.8
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">PriorityQueue</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> comparator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>DEFAULT_INITIAL_CAPACITY<span class="token punctuation">,</span> comparator<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6307\u5B9A\u5BB9\u91CF\u5927\u5C0F &amp; \u6307\u5B9A\u6392\u5E8F\u65B9\u5F0F
     *
     * <span class="token keyword">@param</span>  <span class="token parameter">initialCapacity</span> the initial capacity for this priority queue
     * <span class="token keyword">@param</span>  <span class="token parameter">comparator</span> the comparator that will be used to order this
     *         priority queue.  If <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token keyword">null</span></span></span><span class="token punctuation">}</span>, the <span class="token punctuation">{</span><span class="token keyword">@linkplain</span> <span class="token reference"><span class="token class-name">Comparable</span></span>
     *         natural ordering<span class="token punctuation">}</span> of the elements will be used.
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IllegalArgumentException</span></span> if <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">initialCapacity</span></span><span class="token punctuation">}</span> is
     *         less than 1
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">PriorityQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> comparator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>initialCapacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>comparator <span class="token operator">=</span> comparator<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Creates a <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">PriorityQueue</span></span></span><span class="token punctuation">}</span> containing the elements in the
     * specified collection.  If the specified collection is an instance of
     * a <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">SortedSet</span></span><span class="token punctuation">}</span> or is another <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">PriorityQueue</span></span></span><span class="token punctuation">}</span>, this
     * priority queue will be ordered according to the same ordering.
     * Otherwise, this priority queue will be ordered according to the
     * <span class="token punctuation">{</span><span class="token keyword">@linkplain</span> <span class="token reference"><span class="token class-name">Comparable</span></span> natural ordering<span class="token punctuation">}</span> of its elements.
     *
     * <span class="token keyword">@param</span>  <span class="token parameter">c</span> the collection whose elements are to be placed
     *         into this priority queue
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">ClassCastException</span></span> if elements of the specified collection
     *         cannot be compared to one another according to the priority
     *         queue&#39;s ordering
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NullPointerException</span></span> if the specified collection or any
     *         of its elements are null
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">PriorityQueue</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token keyword">instanceof</span> <span class="token class-name">SortedSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">SortedSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> ss <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SortedSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> c<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>comparator <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> ss<span class="token punctuation">.</span><span class="token function">comparator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">initElementsFromCollection</span><span class="token punctuation">(</span>ss<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token keyword">instanceof</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> pq <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> c<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>comparator <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> pq<span class="token punctuation">.</span><span class="token function">comparator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">initFromPriorityQueue</span><span class="token punctuation">(</span>pq<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>comparator <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token function">initFromCollection</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Creates a <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">PriorityQueue</span></span></span><span class="token punctuation">}</span> containing the elements in the
     * specified priority queue.  This priority queue will be
     * ordered according to the same ordering as the given priority
     * queue.
     *
     * <span class="token keyword">@param</span>  <span class="token parameter">c</span> the priority queue whose elements are to be placed
     *         into this priority queue
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">ClassCastException</span></span> if elements of <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">c</span></span><span class="token punctuation">}</span> cannot be
     *         compared to one another according to <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">c</span></span><span class="token punctuation">}</span>&#39;s
     *         ordering
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NullPointerException</span></span> if the specified priority queue or any
     *         of its elements are null
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">PriorityQueue</span><span class="token punctuation">(</span><span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>comparator <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> c<span class="token punctuation">.</span><span class="token function">comparator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">initFromPriorityQueue</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Creates a <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">PriorityQueue</span></span></span><span class="token punctuation">}</span> containing the elements in the
     * specified sorted set.   This priority queue will be ordered
     * according to the same ordering as the given sorted set.
     *
     * <span class="token keyword">@param</span>  <span class="token parameter">c</span> the sorted set whose elements are to be placed
     *         into this priority queue
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">ClassCastException</span></span> if elements of the specified sorted
     *         set cannot be compared to one another according to the
     *         sorted set&#39;s ordering
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NullPointerException</span></span> if the specified sorted set or any
     *         of its elements are null
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">PriorityQueue</span><span class="token punctuation">(</span><span class="token class-name">SortedSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>comparator <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> c<span class="token punctuation">.</span><span class="token function">comparator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">initElementsFromCollection</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_5-\u5E38\u89C1\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-\u5E38\u89C1\u65B9\u6CD5" aria-hidden="true">#</a> 5. \u5E38\u89C1\u65B9\u6CD5</h2><h3 id="_1-\u63D2\u5165\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_1-\u63D2\u5165\u5143\u7D20" aria-hidden="true">#</a> 1. \u63D2\u5165\u5143\u7D20</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * Inserts the specified element into this priority queue.
     *
     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">true</span></span></span><span class="token punctuation">}</span> (as specified by <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Collection</span><span class="token punctuation">#</span><span class="token field">add</span></span><span class="token punctuation">}</span>)
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">ClassCastException</span></span> if the specified element cannot be
     *         compared with elements currently in this priority queue
     *         according to the priority queue&#39;s ordering
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NullPointerException</span></span> if the specified element is null
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">offer</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u8FD9\u91CC\u8BF4\u660E\uFF0C\u63D2\u5165\u5143\u7D20\u9700\u975E\u7A7A
     *
     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">true</span></span></span><span class="token punctuation">}</span> (as specified by <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Queue</span><span class="token punctuation">#</span><span class="token field">offer</span></span><span class="token punctuation">}</span>)
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">ClassCastException</span></span> if the specified element cannot be
     *         compared with elements currently in this priority queue
     *         according to the priority queue&#39;s ordering
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NullPointerException</span></span> if the specified element is null
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">offer</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        modCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> size<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
            <span class="token function">grow</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        size <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            <span class="token function">siftUp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * \u589E\u52A0 capacity
     *
     * <span class="token keyword">@param</span> <span class="token parameter">minCapacity</span> the desired minimum capacity
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">grow</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> oldCapacity <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">// oldCapacity &lt; 64 =&gt; 2 * n + 2</span>
        <span class="token comment">// \u5426\u5219 =&gt; 1.5 * n</span>
        <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> oldCapacity <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>oldCapacity <span class="token operator">&lt;</span> <span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">?</span>
                                         <span class="token punctuation">(</span>oldCapacity <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">:</span>
                                         <span class="token punctuation">(</span>oldCapacity <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// overflow-conscious code</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> MAX_ARRAY_SIZE <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            newCapacity <span class="token operator">=</span> <span class="token function">hugeCapacity</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">hugeCapacity</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>minCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// overflow</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">OutOfMemoryError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>minCapacity <span class="token operator">&gt;</span> MAX_ARRAY_SIZE<span class="token punctuation">)</span> <span class="token operator">?</span>
            <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE <span class="token operator">:</span>
            MAX_ARRAY_SIZE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u5220\u9664\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_2-\u5220\u9664\u5143\u7D20" aria-hidden="true">#</a> 2. \u5220\u9664\u5143\u7D20</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * Removes a single instance of the specified element from this queue,
     * if it is present.  More formally, removes an element <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">e</span></span><span class="token punctuation">}</span> such
     * that <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">o<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span></span></span><span class="token punctuation">}</span>, if this queue contains one or more such
     * elements.  Returns <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">true</span></span></span><span class="token punctuation">}</span> if and only if this queue contained
     * the specified element (or equivalently, if this queue changed as a
     * result of the call).
     *
     * <span class="token keyword">@param</span> <span class="token parameter">o</span> element to be removed from this queue, if present
     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">true</span></span></span><span class="token punctuation">}</span> if this queue changed as a result of the call
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexOf</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">removeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Removes the ith element from queue.
     *
     * Normally this method leaves the elements at up to i-1,
     * inclusive, untouched.  Under these circumstances, it returns
     * null.  Occasionally, in order to maintain the heap invariant,
     * it must swap a later element of the list with one earlier than
     * i.  Under these circumstances, this method returns the element
     * that was previously at the end of the list and is now at some
     * position before i. This fact is used by iterator.remove so as to
     * avoid missing traversing elements.
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">E</span> <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// assert i &gt;= 0 &amp;&amp; i &lt; size;</span>
        modCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> s <span class="token operator">=</span> <span class="token operator">--</span>size<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> i<span class="token punctuation">)</span> <span class="token comment">// \u5220\u9664\u7684\u6B63\u597D\u662F\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
            queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">E</span> moved <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> queue<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u6682\u5B58\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
            queue<span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u6700\u540E\u4E00\u4E2A\u5143\u7D20\u4E0B\u6807\u5904 = null</span>
            <span class="token function">siftDown</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> moved<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> moved<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">siftUp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> moved<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> moved<span class="token punctuation">)</span>
                    <span class="token keyword">return</span> moved<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
        
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> s <span class="token operator">=</span> <span class="token operator">--</span>size<span class="token punctuation">;</span>
        modCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token class-name">E</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">E</span> x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> queue<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token function">siftDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,21),o=[t];function c(i,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","PriorityQueue.html.vue"]]);export{k as default};
