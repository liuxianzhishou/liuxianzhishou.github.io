import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5aebcaaa.js";var p="/assets/img_5.168e8f28.png";const t={},o=e(`<h1 id="aqs" tabindex="-1"><a class="header-anchor" href="#aqs" aria-hidden="true">#</a> \u{1F535} AQS</h1><h2 id="_1-\u7C7B\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_1-\u7C7B\u6CE8\u91CA" aria-hidden="true">#</a> 1. \u7C7B\u6CE8\u91CA</h2><ol><li><p><strong>\u6982\u8FF0</strong></p><ul><li>\u4E3A\u963B\u585E\u9501 &amp; \u540C\u6B65\u5668\uFF08\u4E3E\u4F8B\uFF1A\u4FE1\u53F7\u91CF\uFF09\u63D0\u4F9B\u4E86\u4E00\u79CD\u6846\u67B6\uFF0C\u5B83\u4F9D\u8D56\u4E8E\u4E00\u4E2A FIFO \u7B49\u5F85\u961F\u5217</li><li>\u8BE5\u7C7B\u501F\u52A9\u4E00\u4E2A\u539F\u5B50\u7C7B int \u6765\u8868\u793A\u72B6\u6001\uFF0C\u53EF\u4EE5\u6210\u4E3A\u591A\u79CD\u540C\u6B65\u5668\u7684\u57FA\u7840</li><li>\u8BE5\u7C7B\u7684\u5B50\u7C7B\u5FC5\u987B\u5B9E\u73B0\u672C\u7C7B\u7684 protected \u65B9\u6CD5\u6765\u6539\u53D8\u8FD9\u4E2A\u72B6\u6001\u503C</li></ul></li><li><p><strong>\u4E24\u79CD\u6A21\u5F0F</strong></p><ul><li><code>exclusive</code> \u72EC\u5360\u6A21\u5F0F <ul><li>\u53EA\u80FD\u6709\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u53D6</li></ul></li><li><code>shared</code> \u5171\u4EAB\u6A21\u5F0F <ul><li>\u53EF\u4EE5\u88AB\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u83B7\u53D6</li></ul></li></ul></li></ol><hr><h2 id="_2-\u7C7B\u56FE" tabindex="-1"><a class="header-anchor" href="#_2-\u7C7B\u56FE" aria-hidden="true">#</a> 2. \u7C7B\u56FE</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractQueuedSynchronizer</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractOwnableSynchronizer</span> 
    <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span>
<span class="token comment">// .......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="img_5.png"></p><hr><h2 id="_3-\u5185\u90E8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-\u5185\u90E8\u7C7B" aria-hidden="true">#</a> 3. \u5185\u90E8\u7C7B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * \u7B49\u5F85\u961F\u5217\u7684\u8282\u70B9\u7C7B
     *
     * \u8BE5\u7B49\u5F85\u961F\u5217\u662F &quot;CLH&quot; (Craig, Landin, and Hagersten) \u7684\u53D8\u5F62
     * CLH \u901A\u5E38\u7528\u6765\u81EA\u65CB\uFF0C\u80FD\u786E\u4FDD\u65E0\u9965\u997F\u6027\uFF0C\u63D0\u4F9B\u5148\u6765\u5148\u670D\u52A1\u7684\u516C\u5E73\u6027
     * CLH \u9501\u4E5F\u662F\u4E00\u79CD\u57FA\u4E8E\u94FE\u8868\u7684\u53EF\u6269\u5C55\u3001\u9AD8\u6027\u80FD\u3001\u516C\u5E73\u7684\u81EA\u65CB\u9501\uFF0C
     * \u7533\u8BF7\u7EBF\u7A0B\u53EA\u5728\u672C\u5730\u53D8\u91CF\u4E0A\u81EA\u65CB\uFF0C\u5B83\u4E0D\u65AD\u8F6E\u8BE2\u524D\u9A71\u7684\u72B6\u6001\uFF0C\u5982\u679C\u53D1\u73B0\u524D\u9A71\u91CA\u653E\u4E86\u9501\u5C31\u7ED3\u675F\u81EA\u65CB
     *
     * \u6DFB\u52A0\u8282\u70B9\uFF0C\u8FD9\u4E2A\u8282\u70B9\u5C06\u6210\u4E3A\u65B0\u7684 tail\uFF0C\u5F39\u51FA\u8282\u70B9\uFF0C\u9700\u8981\u91CD\u65B0\u8BBE\u7F6E head 
     *
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>
     <span class="token code-section">*      <span class="token line"><span class="token code language-java"><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span>  prev <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>       <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span></span></span>
     * <span class="token line"><span class="token code language-java">head <span class="token operator">|</span>      <span class="token operator">|</span> <span class="token operator">&lt;</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token operator">&lt;</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span>     <span class="token operator">|</span>  tail</span></span>
     *      <span class="token line"><span class="token code language-java"><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span>       <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>       <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span></span></span>
     *</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
     *
     *
     * \u5F53\u4E00\u4E2A\u8282\u70B9\u88AB\u53D6\u6D88\uFF0C\u90A3\u4E48\u5B83\u7684\u7EE7\u4EFB\u8005\u8282\u70B9\u5C06\u88AB\u91CD\u65B0\u8FDE\u63A5\u5230\u4E00\u4E2A\u6CA1\u6709\u88AB\u53D6\u6D88\u7684\u524D\u9A71\u8005\u8EAB\u540E
     * \u865A\u62DF\u7684\u53CC\u5411\u961F\u5217\u5373\u4E0D\u5B58\u5728\u961F\u5217\u5B9E\u4F8B\uFF0C\u4EC5\u5B58\u5728\u7ED3\u70B9\u4E4B\u95F4\u7684\u5173\u8054\u5173\u7CFB
     */</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Node</span> SHARED <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6807\u8BC6\u5171\u4EAB\u9501</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Node</span> EXCLUSIVE <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u6807\u8BC6\u72EC\u5360\u9501</span>

        <span class="token doc-comment comment">/** \u8868\u793A\u5F53\u524D\u7ED3\u70B9\u5DF2\u53D6\u6D88\u8C03\u5EA6\u3002\u5F53\u8D85\u65F6\u6216\u88AB\u4E2D\u65AD\uFF08\u54CD\u5E94\u4E2D\u65AD\u7684\u60C5\u51B5\u4E0B\uFF09\uFF0C\u4F1A\u89E6\u53D1\u53D8\u66F4\u4E3A\u6B64\u72B6\u6001\uFF0C\u8FDB\u5165\u8BE5\u72B6\u6001\u540E\u7684\u7ED3\u70B9\u5C06\u4E0D\u4F1A\u518D\u53D8\u5316\u3002 */</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> CANCELLED <span class="token operator">=</span>  <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/** \u8868\u793A\u540E\u7EE7\u7ED3\u70B9\u5728\u7B49\u5F85\u5F53\u524D\u7ED3\u70B9\u5524\u9192\u3002\u540E\u7EE7\u7ED3\u70B9\u5165\u961F\u65F6\uFF0C\u4F1A\u5C06\u524D\u7EE7\u7ED3\u70B9\u7684\u72B6\u6001\u66F4\u65B0\u4E3A SIGNAL\u3002 */</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> SIGNAL    <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/** \u8868\u793A\u7ED3\u70B9\u7B49\u5F85\u5728 Condition \u4E0A\uFF0C\u5F53\u5176\u4ED6\u7EBF\u7A0B\u8C03\u7528\u4E86 Condition \u7684 signal() \u65B9\u6CD5\u540E\uFF0CCONDITION \u7ED3\u70B9\u5C06\u4ECE\u7B49\u5F85\u961F\u5217\u8F6C\u79FB\u5230\u540C\u6B65\u961F\u5217\u4E2D */</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> CONDITION <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/** \u5171\u4EAB\u6A21\u5F0F\u4E0B\uFF0C\u524D\u7EE7\u7ED3\u70B9\u4E0D\u4EC5\u4F1A\u5524\u9192\u5176\u540E\u7EE7\u7ED3\u70B9\uFF0C\u540C\u65F6\u4E5F\u53EF\u80FD\u4F1A\u5524\u9192\u540E\u7EE7\u7684\u540E\u7EE7\u7ED3\u70B9\u3002 */</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> PROPAGATE <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * \u5728Node\u8282\u70B9\u4E2D\u4E00\u822C\u901A\u8FC7 waitStatus \u83B7\u5F97\u8282\u70B9\u4E0D\u540C\u7684\u72B6\u6001
         */</span>
        <span class="token keyword">volatile</span> <span class="token keyword">int</span> waitStatus<span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * \u524D\u9A71\u8282\u70B9
         */</span>
        <span class="token keyword">volatile</span> <span class="token class-name">Node</span> prev<span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * \u540E\u7EE7\u8282\u70B9
         */</span>
        <span class="token keyword">volatile</span> <span class="token class-name">Node</span> next<span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * \u5C06\u8282\u70B9\u5165\u961F\u7684\u7EBF\u7A0B\uFF0C\u521B\u5EFA\u65F6\u88AB\u521D\u59CB\u5316\uFF0C\u4F7F\u7528\u4E4B\u540E\u53D8\u4E3A null
         */</span>
        <span class="token keyword">volatile</span> <span class="token class-name">Thread</span> thread<span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * \u6761\u4EF6\u961F\u5217\u4E2D\u7B49\u5F85\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF0C\u5728\u5171\u4EAB\u6A21\u5F0F\u4E0B\u4E3A SHARED
         * \u53EA\u6709\u5728\u72EC\u5360\u6A21\u5F0F\u4E0B\uFF0C\u624D\u4F1A\u6709\u6761\u4EF6\u961F\u5217
         */</span>
        <span class="token class-name">Node</span> nextWaiter<span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * Returns true if node is waiting in shared mode.
         */</span>
        <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">isShared</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> nextWaiter <span class="token operator">==</span> SHARED<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * \u8FD4\u56DE\u5F53\u524D\u8282\u70B9\u7684\u524D\u9A71\u8282\u70B9\uFF0C\u82E5\u524D\u9A71\u8282\u70B9\u4E3A\u7A7A\uFF0C\u629B\u5F02\u5E38
         *
         * <span class="token keyword">@return</span> the predecessor of this node
         */</span>
        <span class="token keyword">final</span> <span class="token class-name">Node</span> <span class="token function">predecessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NullPointerException</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> p <span class="token operator">=</span> prev<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span>
                <span class="token keyword">return</span> p<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">// Used to establish initial head or SHARED marker</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> thread<span class="token punctuation">,</span> <span class="token class-name">Node</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>     <span class="token comment">// Used by addWaiter</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>nextWaiter <span class="token operator">=</span> mode<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>thread <span class="token operator">=</span> thread<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> thread<span class="token punctuation">,</span> <span class="token keyword">int</span> waitStatus<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Used by Condition</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>waitStatus <span class="token operator">=</span> waitStatus<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>thread <span class="token operator">=</span> thread<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-\u5C5E\u6027" aria-hidden="true">#</a> 4. \u5C5E\u6027</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * \u7B49\u5F85\u961F\u5217\u961F\u5934\uFF0C\u61D2\u521D\u59CB\u5316
     * \u53EA\u6709 setHead \u65B9\u6CD5\u624D\u4F1A\u5BF9\u5176\u8FDB\u884C\u4FEE\u6539
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token keyword">volatile</span> <span class="token class-name">Node</span> head<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7B49\u5F85\u961F\u5217\u961F\u5C3E\uFF0C\u61D2\u521D\u59CB\u5316
     * \u53EA\u6709\u901A\u8FC7 enq \u65B9\u6CD5\u6DFB\u52A0\u65B0\u7B49\u5F85\u8282\u70B9\u65F6\u624D\u4F1A\u5BF9\u5176\u8FDB\u884C\u4FEE\u6539
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token keyword">volatile</span> <span class="token class-name">Node</span> tail<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u540C\u6B65\u72B6\u6001\uFF0C\u5728\u5B50\u7C7B\u91CD\u5199\u5404\u79CD try() \u65F6\u4F1A\u8FDB\u884C state \u7684 get() &amp; set()
     * \u5728\u4E0D\u540C\u5B50\u7C7B\u4E2D\uFF0C\u53EF\u5145\u5F53\u4E0D\u540C\u4F5C\u7528\uFF0C\u4F8B\uFF1A
     * Rel \u4E2D\u8868\u793A \u91CD\u5165\u6B21\u6570
     * Semaphore \u4E2D\u8868\u793A \u8FD8\u53EF\u4EE5\u901A\u884C\u7684\u4EE4\u724C\u6570
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> state<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u5F53\u524D\u72B6\u6001
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u8BBE\u7F6E\u5F53\u524D\u72B6\u6001
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">int</span> newState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state <span class="token operator">=</span> newState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * CAS \u4FEE\u6539 state \u503C
     *
     * <span class="token keyword">@param</span> <span class="token parameter">expect</span> the expected value
     * <span class="token keyword">@param</span> <span class="token parameter">update</span> the new value
     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">true</span></span></span><span class="token punctuation">}</span> if successful. False return indicates that the actual
     *         value was not equal to the expected value.
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token keyword">int</span> expect<span class="token punctuation">,</span> <span class="token keyword">int</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> stateOffset<span class="token punctuation">,</span> expect<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Queuing utilities</span>

    <span class="token doc-comment comment">/**
     * \u5C0F\u4E8E\u8FD9\u4E2A\u503C\uFF0C\u5355\u4F4D\u4E3A\u7EB3\u79D2\uFF0C\u65F6\uFF0C\u66F4\u503E\u5411\u4E8E\u81EA\u65CB\uFF0C\u5927\u4E8E\u8FD9\u4E2A\u503C\uFF0C\u66F4\u503E\u5411\u4E8E park() \u963B\u585E\u7EBF\u7A0B
     */</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> spinForTimeoutThreshold <span class="token operator">=</span> <span class="token number">1000L</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_5-\u6A21\u7248\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-\u6A21\u7248\u65B9\u6CD5" aria-hidden="true">#</a> 5. \u6A21\u7248\u65B9\u6CD5</h2><blockquote><p>\u6A21\u7248\u65B9\u6CD5\u88AB final \u4FEE\u9970\uFF0C\u4E0D\u53EF\u88AB\u91CD\u5199</p></blockquote><h3 id="_1-acquire-int-arg" tabindex="-1"><a class="header-anchor" href="#_1-acquire-int-arg" aria-hidden="true">#</a> 1) acquire(int arg)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * \u72EC\u5360\u6A21\u5F0F\u4E0B\u83B7\u53D6\u9501\uFF0C\u4E0D\u54CD\u5E94\u4E2D\u65AD
     *
     * <span class="token keyword">@param</span> <span class="token parameter">arg</span> the acquire argument.  This value is conveyed to
     *        <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">tryAcquire</span></span><span class="token punctuation">}</span> but is otherwise uninterpreted and
     *        can represent anything you like.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. \u5F53\u524D\u5C1D\u8BD5\u83B7\u53D6\u9501\u5931\u8D25</span>
        <span class="token comment">// 2. \u5C06\u5F53\u524D\u7EBF\u7A0B\u5C01\u88C5\u6210\u4E00\u4E2A\u72EC\u5360\u8282\u70B9\uFF0C\u5E76\u5C06\u5176\u52A0\u5165 CLH \u961F\u5C3E\u6210\u529F</span>
        <span class="token comment">// 3. \u81EA\u65CB\uFF0C\u53EA\u6709 \u524D\u7F6E\u8282\u70B9\u4E3A\u5934\u8282\u70B9 &amp;&amp; \u5F53\u524D\u5C1D\u8BD5\u83B7\u9501\u6210\u529F \u624D\u8FD4\u56DE\uFF0C\u82E5\u8FD4\u56DE true\uFF0C\u8BF4\u660E\u5F53\u524D\u7EBF\u7A0B\u88AB\u4E2D\u65AD</span>
        <span class="token comment">// \u6EE1\u8DB3\u4EE5\u4E0A\u6761\u4EF6\u540E\uFF0C\u4E2D\u65AD\u5F53\u524D\u7EBF\u7A0B</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">acquireQueued</span><span class="token punctuation">(</span><span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token punctuation">.</span>EXCLUSIVE<span class="token punctuation">)</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token function">selfInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * \u5C06\u8282\u70B9\u52A0\u5165 CLH \u961F\u5C3E\uFF0CCAS \u4FDD\u8BC1\u540C\u6B65
     *
     * <span class="token keyword">@param</span> <span class="token parameter">mode</span> Node.EXCLUSIVE for exclusive, Node.SHARED for shared
     * <span class="token keyword">@return</span> the new node
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Node</span> pred <span class="token operator">=</span> tail<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pred <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5C3E\u8282\u70B9\u975E\u7A7A\uFF0C\u5728\u5C3E\u8282\u70B9\u540E\u6DFB\u52A0 node \u4F5C\u4E3A\u65B0\u7684\u5C3E\u8282\u70B9</span>
            node<span class="token punctuation">.</span>prev <span class="token operator">=</span> pred<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetTail</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pred<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
                <span class="token keyword">return</span> node<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5C3E\u8282\u70B9\u4E3A\u7A7A\uFF0C\u6267\u884C enq\uFF0C\u5C06 node \u8282\u70B9\u63D2\u5165\u5230\u961F\u5217</span>
        <span class="token function">enq</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * CAS tail field. Used only by enq.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSetTail</span><span class="token punctuation">(</span><span class="token class-name">Node</span> expect<span class="token punctuation">,</span> <span class="token class-name">Node</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">compareAndSwapObject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> tailOffset<span class="token punctuation">,</span> expect<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * \u5C06 node \u8282\u70B9\u63D2\u5165\u5230\u961F\u5217
     * <span class="token keyword">@param</span> <span class="token parameter">node</span> the node to insert
     * <span class="token keyword">@return</span> node&#39;s predecessor
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">enq</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> t <span class="token operator">=</span> tail<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u4E4B\u524D\u6CA1\u6709\u4EFB\u4F55\u8282\u70B9 - \u521D\u59CB\u5316</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetHead</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    tail <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// head == tail == new Node()</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                node<span class="token punctuation">.</span>prev <span class="token operator">=</span> t<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetTail</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    t<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
                    <span class="token keyword">return</span> t<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * CAS head field. Used only by enq.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSetHead</span><span class="token punctuation">(</span><span class="token class-name">Node</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">compareAndSwapObject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> headOffset<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u53EA\u6709 \u524D\u7F6E\u8282\u70B9\u4E3A\u5934\u8282\u70B9 &amp;&amp; \u5C1D\u8BD5\u83B7\u9501\u6210\u529F \u624D\u8FD4\u56DE\uFF0C\u82E5\u8FD4\u56DE true\uFF0C\u8BF4\u660E\u5F53\u524D\u7EBF\u7A0B\u88AB\u4E2D\u65AD\uFF1B\u82E5 false\uFF0C\u8BF4\u660E\u672A\u88AB\u4E2D\u65AD
     *
     * <span class="token keyword">@param</span> <span class="token parameter">node</span> the node
     * <span class="token keyword">@param</span> <span class="token parameter">arg</span> the acquire argument
     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">true</span></span></span><span class="token punctuation">}</span> if interrupted while waiting
     */</span>
    <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">acquireQueued</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Node</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> failed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">boolean</span> interrupted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">final</span> <span class="token class-name">Node</span> p <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">predecessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// p \u4E3A\u524D\u7F6E\u8282\u70B9</span>
                <span class="token comment">// \u524D\u7F6E\u8282\u70B9\u4E3A\u5934\u8282\u70B9 &amp;&amp; \u5C1D\u8BD5\u83B7\u9501\u6210\u529F</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> head <span class="token operator">&amp;&amp;</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">setHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// help GC</span>
                    failed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> interrupted<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                
                <span class="token comment">// \u524D\u7F6E\u8282\u70B9\u72B6\u6001\u4E3A signal &amp;&amp; \u963B\u585E\u5F53\u524D\u7EBF\u7A0B &amp;&amp; \u5F53\u524D\u7EBF\u7A0B\u88AB\u4E2D\u65AD</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldParkAfterFailedAcquire</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">parkAndCheckInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    interrupted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>failed<span class="token punctuation">)</span>
                <span class="token function">cancelAcquire</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// \u9700\u8981\u88AB\u5B50\u7C7B\u91CD\u5199\u7684\u65B9\u6CD5</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * \u6839\u636E\u524D\u7F6E\u8282\u70B9\u72B6\u6001\u5224\u65AD\u5F53\u524D\u8282\u70B9\u662F\u5426\u9700\u8981 park \u963B\u585E\uFF0C\u53EA\u6709\u524D\u7F6E\u8282\u70B9\u72B6\u6001\u4E3A signal \u65F6\uFF0C\u624D\u4F1A\u8FD4\u56DE true
     *
     * <span class="token keyword">@param</span> <span class="token parameter">pred</span> node&#39;s predecessor holding status
     * <span class="token keyword">@param</span> <span class="token parameter">node</span> the node
     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">true</span></span></span><span class="token punctuation">}</span> if thread should block
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">shouldParkAfterFailedAcquire</span><span class="token punctuation">(</span><span class="token class-name">Node</span> pred<span class="token punctuation">,</span> <span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> ws <span class="token operator">=</span> pred<span class="token punctuation">.</span>waitStatus<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ws <span class="token operator">==</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>SIGNAL<span class="token punctuation">)</span>
            <span class="token comment">/*
             * \u524D\u7F6E\u8282\u70B9\u6B63\u7B49\u5F85\u88AB signal \u5524\u9192\uFF0C\u56E0\u6B64\u5F53\u524D\u8282\u70B9\u540C\u6837\u9700\u8981\u963B\u585E
             */</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ws <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">/*
             * \u524D\u7F6E\u8282\u70B9\u56E0\u4E3A\u67D0\u4E9B\u539F\u672C\u88AB cancel\uFF0C\u56E0\u6B64\u9700\u8981\u518D\u5F80\u524D\u7EE7\u7EED\u67E5\u627E\uFF0C\u76F4\u5230\u9047\u5230\u975E cancel \u6389\u7684\u8282\u70B9\uFF0C\u5C06\u5176\u540E\u7F6E\u8282\u70B9\u8BBE\u4E3A\u5F53\u524D\u8282\u70B9
             */</span>
            <span class="token keyword">do</span> <span class="token punctuation">{</span>
                node<span class="token punctuation">.</span>prev <span class="token operator">=</span> pred <span class="token operator">=</span> pred<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>pred<span class="token punctuation">.</span>waitStatus <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pred<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">/*
             * \u524D\u7F6E\u8282\u70B9\u72B6\u6001 == 0 | 3\uFF0C\u6B64\u65F6\u9700\u8981\u8BBE\u7F6E\u524D\u7F6E\u8282\u70B9\u72B6\u6001\u4E3A signal\uFF0C\u8868\u793A\u524D\u7F6E\u8282\u70B9\u7B49\u5F85\u88AB\u5524\u9192
             */</span>
            <span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> ws<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>SIGNAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
        
    <span class="token doc-comment comment">/**
     * Convenience method to park and then check if interrupted
     *
     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">true</span></span></span><span class="token punctuation">}</span> if interrupted
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">parkAndCheckInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u963B\u585E\u5F53\u524D\u7EBF\u7A0B</span>
        <span class="token keyword">return</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">interrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u7EBF\u7A0B\u662F\u5426\u88AB\u4E2D\u65AD\uFF0C\u540C\u65F6\u6E05\u7A7A\u4E2D\u65AD\u6807\u5FD7\u4F4D</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * CAS waitStatus field of a node.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">,</span>
                                                         <span class="token keyword">int</span> expect<span class="token punctuation">,</span>
                                                         <span class="token keyword">int</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> waitStatusOffset<span class="token punctuation">,</span> expect<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * \u53D6\u6D88\u5F53\u524D\u8282\u70B9\u7684 acquire \u8FC7\u7A0B
     *
     * <span class="token keyword">@param</span> <span class="token parameter">node</span> the node
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">cancelAcquire</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>

        node<span class="token punctuation">.</span>thread <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token class-name">Node</span> pred <span class="token operator">=</span> node<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>pred<span class="token punctuation">.</span>waitStatus <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// \u524D\u7F6E\u8282\u70B9\u5904\u4E8E cancel \u72B6\u6001</span>
            node<span class="token punctuation">.</span>prev <span class="token operator">=</span> pred <span class="token operator">=</span> pred<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>

        <span class="token class-name">Node</span> predNext <span class="token operator">=</span> pred<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>waitStatus <span class="token operator">=</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>CANCELLED<span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u8282\u70B9\u72B6\u6001\u4E3A cancel </span>

        <span class="token comment">// \u5F53\u524D\u8282\u70B9\u5C31\u662F tail \u90A3\u4E48\u8BBE\u7F6E tail \u8282\u70B9\u4E3A\u4E0A\u4E00\u4E2A\u8282\u70B9\uFF0CCAS \u5220\u9664\u5F53\u524D\u8282\u70B9</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> tail <span class="token operator">&amp;&amp;</span> <span class="token function">compareAndSetTail</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> pred<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">compareAndSetNext</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> predNext<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> ws<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>pred <span class="token operator">!=</span> head <span class="token operator">&amp;&amp;</span>
                <span class="token punctuation">(</span><span class="token punctuation">(</span>ws <span class="token operator">=</span> pred<span class="token punctuation">.</span>waitStatus<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>SIGNAL <span class="token operator">||</span>
                 <span class="token punctuation">(</span>ws <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> ws<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>SIGNAL<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
                pred<span class="token punctuation">.</span>thread <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Node</span> next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> next<span class="token punctuation">.</span>waitStatus <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
                    <span class="token function">compareAndSetNext</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> predNext<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">unparkSuccessor</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            node<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span> <span class="token comment">// help GC</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * \u4E2D\u65AD\u5F53\u524D\u7EBF\u7A0B
     */</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">selfInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-acquireinterruptibly-int-arg" tabindex="-1"><a class="header-anchor" href="#_2-acquireinterruptibly-int-arg" aria-hidden="true">#</a> 2) acquireInterruptibly(int arg)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * \u72EC\u5360\u6A21\u5F0F\u4E0B\u83B7\u53D6\u9501\uFF0C\u652F\u6301\u4E2D\u65AD
     *
     * <span class="token keyword">@param</span> <span class="token parameter">arg</span> the acquire argument.  This value is conveyed to
     *        <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">tryAcquire</span></span><span class="token punctuation">}</span> but is otherwise uninterpreted and
     *        can represent anything you like.
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">InterruptedException</span></span> if the current thread is interrupted
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">acquireInterruptibly</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">interrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u7EBF\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u540C\u65F6\u6E05\u7A7A\u4E2D\u65AD\u6807\u5FD7\u4F4D\uFF0C\u629B\u51FA\u5F02\u5E38</span>
        <span class="token comment">// \u5F53\u524D\u7EBF\u7A0B\u5C1D\u8BD5\u83B7\u9501\u5931\u8D25</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token function">doAcquireInterruptibly</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5F53\u524D\u7EBF\u7A0B\u88AB\u4E2D\u65AD\u65F6\uFF0C\u7ACB\u5373\u629B\u51FA\u5F02\u5E38\uFF0C\u56E0\u6B64\u4E3A \u652F\u6301\u4E2D\u65AD\u6A21\u5F0F
     * <span class="token keyword">@param</span> <span class="token parameter">arg</span> the acquire argument
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">doAcquireInterruptibly</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token punctuation">.</span>EXCLUSIVE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> failed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">final</span> <span class="token class-name">Node</span> p <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">predecessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> head <span class="token operator">&amp;&amp;</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">setHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// help GC</span>
                    failed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldParkAfterFailedAcquire</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">parkAndCheckInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>failed<span class="token punctuation">)</span>
                <span class="token function">cancelAcquire</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-acquireshared-int-arg" tabindex="-1"><a class="header-anchor" href="#_3-acquireshared-int-arg" aria-hidden="true">#</a> 3) acquireShared(int arg)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * \u5171\u4EAB\u6A21\u5F0F\u4E0B\u83B7\u53D6\u53D8\u91CF\uFF0C\u5FFD\u7565\u4E2D\u65AD
     *
     * <span class="token keyword">@param</span> <span class="token parameter">arg</span> the acquire argument.  This value is conveyed to
     *        <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">tryAcquireShared</span></span><span class="token punctuation">}</span> but is otherwise uninterpreted
     *        and can represent anything you like.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">acquireShared</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">tryAcquireShared</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token function">doAcquireShared</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// \u7B49\u5F85\u5B50\u7C7B\u91CD\u5199</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> <span class="token function">tryAcquireShared</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Acquires in shared uninterruptible mode.
     * <span class="token keyword">@param</span> <span class="token parameter">arg</span> the acquire argument
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">doAcquireShared</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token punctuation">.</span>SHARED<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5728 CLH \u961F\u5217\u5C3E\u90E8\u6DFB\u52A0 \u5171\u4EAB\u8282\u70B9\uFF0C\u8FD4\u56DE\u5F53\u524D\u8282\u70B9</span>
        <span class="token keyword">boolean</span> failed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">boolean</span> interrupted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">final</span> <span class="token class-name">Node</span> p <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">predecessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// \u524D\u7F6E\u8282\u70B9\u4E3A \u5934\u8282\u70B9</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u5F53\u524D\u7EBF\u7A0B\u518D\u6B21\u5C1D\u8BD5\u83B7\u9501</span>
                    <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token function">tryAcquireShared</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">setHeadAndPropagate</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u5934\u8282\u70B9\uFF0C\u5524\u9192\u5934\u8282\u70B9\u7684\u4E00\u4E2A\u540E\u7EE7\u7ED3\u70B9</span>
                        p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// help GC</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>interrupted<span class="token punctuation">)</span>
                            <span class="token function">selfInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        failed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        <span class="token keyword">return</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldParkAfterFailedAcquire</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">parkAndCheckInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    interrupted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>failed<span class="token punctuation">)</span>
                <span class="token function">cancelAcquire</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * \u8BBE\u7F6E\u5934\u8282\u70B9\uFF0C\u5524\u9192\u5934\u8282\u70B9\u7684\u4E00\u4E2A\u540E\u7EE7\u7ED3\u70B9
     *
     * <span class="token keyword">@param</span> <span class="token parameter">node</span> the node
     * <span class="token keyword">@param</span> <span class="token parameter">propagate</span> the return value from a tryAcquireShared
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">setHeadAndPropagate</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span> propagate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> h <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// \u6682\u5B58\u539F\u5934\u8282\u70B9</span>
        <span class="token function">setHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u8282\u70B9\u8BBE\u4E3A\u5934\u8282\u70B9</span>

        <span class="token comment">// \u6EE1\u8DB3\u4EE5\u4E0B\u4EFB\u4E00\u6761\u4EF6\uFF0C\u4F1A\u5C1D\u8BD5\u5524\u9192\u5176\u540E\u7EED\u8282\u70B9</span>
        <span class="token comment">// 1. propagate &gt; 0</span>
        <span class="token comment">// 2. \u539F \u5934\u8282\u70B9\u4E3A\u7A7A</span>
        <span class="token comment">// 3. \u539F \u5934\u8282\u70B9\u72B6\u6001 &lt; 0 --&gt; \u5904\u4E8E signal | condition | propagate \u72B6\u6001</span>
        <span class="token comment">// 4. \u5F53\u524D \u5934\u8282\u70B9\u4E3A\u7A7A</span>
        <span class="token comment">// 5. \u5F53\u524D \u5934\u8282\u70B9\u72B6\u6001 &lt; 0</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>propagate <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> h <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> h<span class="token punctuation">.</span>waitStatus <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token punctuation">(</span>h <span class="token operator">=</span> head<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> h<span class="token punctuation">.</span>waitStatus <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> s <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// \u540E\u7EED\u8282\u70B9</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> s<span class="token punctuation">.</span><span class="token function">isShared</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token function">doReleaseShared</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5524\u9192\u5934\u8282\u70B9\u7684\u4E00\u4E2A\u540E\u7EE7\u7ED3\u70B9</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * \u8BBE\u7F6E\u5934\u8282\u70B9
     *
     * <span class="token keyword">@param</span> <span class="token parameter">node</span> the node
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">setHead</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head <span class="token operator">=</span> node<span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>thread <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * \u5524\u9192\u5934\u8282\u70B9\u7684\u4E00\u4E2A\u540E\u7EE7\u7ED3\u70B9
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">doReleaseShared</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> h <span class="token operator">=</span> head<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> h <span class="token operator">!=</span> tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> ws <span class="token operator">=</span> h<span class="token punctuation">.</span>waitStatus<span class="token punctuation">;</span>
                <span class="token comment">// \u5934\u8282\u70B9\u72B6\u6001\u4E3A signal</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ws <span class="token operator">==</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>SIGNAL<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u5C1D\u8BD5\u5C06\u5934\u8282\u70B9\u72B6\u6001\u8BBE\u7F6E\u4E3A 0\uFF0C\u8BBE\u7F6E\u5931\u8D25\uFF0C\u8DF3\u8FC7\u5F53\u524D\u5FAA\u73AF</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>SIGNAL<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token keyword">continue</span><span class="token punctuation">;</span>   
                    <span class="token comment">// \u8BBE\u7F6E\u6210\u529F\uFF0C\u5524\u9192\u4E00\u4E2A\u5934\u8282\u70B9\u7684\u540E\u7EE7\u7ED3\u70B9         </span>
                    <span class="token function">unparkSuccessor</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ws <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>PROPAGATE<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// \u5934\u8282\u70B9\u72B6\u6001 == 0 &amp;&amp; \u8BBE\u7F6E\u5934\u8282\u70B9\u72B6\u6001\u4E3A PROPAGATE \u5931\u8D25\uFF0C\u8DF3\u51FA\u5F53\u524D\u5FAA\u73AF\uFF0C\u91CD\u8BD5</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// head == null || head == tail \u7684\u60C5\u51B5\u4E0B</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">==</span> head<span class="token punctuation">)</span>                   <span class="token comment">// loop if head changed</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * \u5524\u9192\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684 \u540E\u7EE7\u7ED3\u70B9\uFF0C\u5982\u679C\u80FD\u627E\u5230\u7684\u8BDD
     *
     * <span class="token keyword">@param</span> <span class="token parameter">node</span> the node
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">unparkSuccessor</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> ws <span class="token operator">=</span> node<span class="token punctuation">.</span>waitStatus<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ws <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// \u8981\u5524\u9192\u540E\u7EE7\u7ED3\u70B9\uFF0C\u90A3\u4E48\u5F53\u524D\u8282\u70B9\u72B6\u6001\u5FC5\u5B9A &gt;= 0\uFF0C\u82E5\u5426\uFF0CCAS \u8BBE\u7F6E\u5176\u72B6\u6001\u4E3A 0</span>
            <span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> ws<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

        <span class="token class-name">Node</span> s <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token comment">// \u540E\u7EE7\u7ED3\u70B9 == null || \u540E\u7EE7\u7ED3\u70B9\u72B6\u6001\u4E3A cancel</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> s<span class="token punctuation">.</span>waitStatus <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token comment">// \u4ECE\u540E\u5F80\u524D\u627E\u5230\u9996\u4E2A\u975E cancel \u72B6\u6001\u7684\u8282\u70B9</span>
            <span class="token comment">// \u8FD9\u91CC\u4E0D\u80FD\u4ECE s \u5F80\u540E\u627E\uFF0C\u56E0\u4E3A s == null\uFF0C\u90A3\u4E48\u80AF\u5B9A\u65E0\u6CD5\u6267\u884C null.next </span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span> t <span class="token operator">=</span> tail<span class="token punctuation">;</span> t <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> t <span class="token operator">!=</span> node<span class="token punctuation">;</span> t <span class="token operator">=</span> t<span class="token punctuation">.</span>prev<span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token punctuation">.</span>waitStatus <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
                    s <span class="token operator">=</span> t<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u627E\u5230\u6EE1\u8DB3\u6761\u4EF6\u7684\u540E\u7EE7\u7ED3\u70B9\uFF0C\u89E3\u9664\u5176\u963B\u585E\u72B6\u6001</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">unpark</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>thread<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-acquiresharedinterruptibly-int-arg" tabindex="-1"><a class="header-anchor" href="#_4-acquiresharedinterruptibly-int-arg" aria-hidden="true">#</a> 4) acquireSharedInterruptibly(int arg)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * \u5171\u4EAB\u6A21\u5F0F\u4E0B\u7684\u83B7\u9501\uFF0C\u54CD\u5E94\u4E2D\u65AD
     * <span class="token keyword">@param</span> <span class="token parameter">arg</span> the acquire argument.
     * This value is conveyed to <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">tryAcquireShared</span></span><span class="token punctuation">}</span> but is
     * otherwise uninterpreted and can represent anything
     * you like.
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">InterruptedException</span></span> if the current thread is interrupted
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">acquireSharedInterruptibly</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">interrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">tryAcquireShared</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token function">doAcquireSharedInterruptibly</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Acquires in shared interruptible mode.
     * <span class="token keyword">@param</span> <span class="token parameter">arg</span> the acquire argument
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">doAcquireSharedInterruptibly</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token punctuation">.</span>SHARED<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> failed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">final</span> <span class="token class-name">Node</span> p <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">predecessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token function">tryAcquireShared</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">setHeadAndPropagate</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// help GC</span>
                        failed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        <span class="token keyword">return</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// \u5F53\u524D\u7EBF\u7A0B\u53D1\u751F\u4E2D\u65AD\uFF0C\u7ACB\u5373\u629B\u51FA\u5F02\u5E38</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldParkAfterFailedAcquire</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">parkAndCheckInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>failed<span class="token punctuation">)</span>
                <span class="token function">cancelAcquire</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-release-int-arg" tabindex="-1"><a class="header-anchor" href="#_5-release-int-arg" aria-hidden="true">#</a> 5) release(int arg)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * \u5728\u72EC\u5360\u6A21\u5F0F\u4E0B\u91CA\u653E\u5171\u4EAB\u53D8\u91CF  
     *
     * <span class="token keyword">@param</span> <span class="token parameter">arg</span> the release argument.  This value is conveyed to
     *        <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">tryRelease</span></span><span class="token punctuation">}</span> but is otherwise uninterpreted and
     *        can represent anything you like.
     * <span class="token keyword">@return</span> the value returned from <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">tryRelease</span></span><span class="token punctuation">}</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">release</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5C1D\u8BD5\u91CA\u653E\u9501\u6210\u529F</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">tryRelease</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> h <span class="token operator">=</span> head<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> h<span class="token punctuation">.</span>waitStatus <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token function">unparkSuccessor</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5524\u9192\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684 \u540E\u7EE7\u7ED3\u70B9</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// \u72EC\u5360\u6A21\u5F0F\u4E0B\uFF0C\u5C1D\u8BD5\u91CA\u653E\u9501\uFF0C\u7B49\u5F85\u5B50\u7C7B\u91CD\u5199</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryRelease</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-releaseshared-int-arg" tabindex="-1"><a class="header-anchor" href="#_6-releaseshared-int-arg" aria-hidden="true">#</a> 6) releaseShared(int arg)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * Releases in shared mode.  Implemented by unblocking one or more
     * threads if <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">tryReleaseShared</span></span><span class="token punctuation">}</span> returns true.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">arg</span> the release argument.  This value is conveyed to
     *        <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">tryReleaseShared</span></span><span class="token punctuation">}</span> but is otherwise uninterpreted
     *        and can represent anything you like.
     * <span class="token keyword">@return</span> the value returned from <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">tryReleaseShared</span></span><span class="token punctuation">}</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">releaseShared</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">tryReleaseShared</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">doReleaseShared</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// \u5171\u4EAB\u6A21\u5F0F\u4E0B\u7684\u5C1D\u8BD5\u91CA\u653E\u9501\uFF0C\u9700\u8981\u5B50\u7C7B\u91CD\u5199</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryReleaseShared</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * \u5524\u9192\u5934\u8282\u70B9\u7684\u4E00\u4E2A\u540E\u7EE7\u7ED3\u70B9
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">doReleaseShared</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> h <span class="token operator">=</span> head<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> h <span class="token operator">!=</span> tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> ws <span class="token operator">=</span> h<span class="token punctuation">.</span>waitStatus<span class="token punctuation">;</span>
                <span class="token comment">// \u5934\u8282\u70B9\u72B6\u6001\u4E3A signal</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ws <span class="token operator">==</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>SIGNAL<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u5C1D\u8BD5\u5C06\u5934\u8282\u70B9\u72B6\u6001\u8BBE\u7F6E\u4E3A 0\uFF0C\u8BBE\u7F6E\u5931\u8D25\uFF0C\u8DF3\u8FC7\u5F53\u524D\u5FAA\u73AF</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>SIGNAL<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token keyword">continue</span><span class="token punctuation">;</span>   
                    <span class="token comment">// \u8BBE\u7F6E\u6210\u529F\uFF0C\u5524\u9192\u4E00\u4E2A\u5934\u8282\u70B9\u7684\u540E\u7EE7\u7ED3\u70B9         </span>
                    <span class="token function">unparkSuccessor</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ws <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>PROPAGATE<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// \u5934\u8282\u70B9\u72B6\u6001 == 0 &amp;&amp; \u8BBE\u7F6E\u5934\u8282\u70B9\u72B6\u6001\u4E3A PROPAGATE \u5931\u8D25\uFF0C\u8DF3\u51FA\u5F53\u524D\u5FAA\u73AF\uFF0C\u91CD\u8BD5</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// head == null || head == tail \u7684\u60C5\u51B5\u4E0B</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">==</span> head<span class="token punctuation">)</span>                   <span class="token comment">// loop if head changed</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),c=[o];function l(i,u){return s(),a("div",null,c)}var k=n(t,[["render",l],["__file","AbstractQueuedSynchronizer.html.vue"]]);export{k as default};
