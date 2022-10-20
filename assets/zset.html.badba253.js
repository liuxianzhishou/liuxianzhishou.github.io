import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as e,c as o,a as n,b as c,d as s,e as l}from"./app.5aebcaaa.js";const i={},u=n("h1",{id:"zskiplist",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#zskiplist","aria-hidden":"true"},"#"),s(" \u{1F337} zSkipList")],-1),r={href:"https://github.com/redis/redis/blob/7.0/src/server.h",target:"_blank",rel:"noopener noreferrer"},k=s("\u6E90\u7801"),d=l(`<h2 id="_1-\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 1. \u6570\u636E\u7ED3\u6784</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// \u8DF3\u8868\u8282\u70B9\u7C7B</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">zskiplistNode</span> <span class="token punctuation">{</span>
    sds ele<span class="token punctuation">;</span> <span class="token comment">// \u503C</span>
    <span class="token keyword">double</span> score<span class="token punctuation">;</span> <span class="token comment">// \u6743\u91CD</span>
    <span class="token keyword">struct</span> <span class="token class-name">zskiplistNode</span> <span class="token operator">*</span>backward<span class="token punctuation">;</span> <span class="token comment">// \u540E\u7F6E\u8282\u70B9\u6307\u9488</span>
    <span class="token keyword">struct</span> <span class="token class-name">zskiplistLevel</span> <span class="token punctuation">{</span> <span class="token comment">// \u5F53\u524D\u5C42</span>
        <span class="token keyword">struct</span> <span class="token class-name">zskiplistNode</span> <span class="token operator">*</span>forward<span class="token punctuation">;</span> <span class="token comment">// \u524D\u7F6E\u8282\u70B9\u6307\u9488</span>
        <span class="token keyword">unsigned</span> <span class="token keyword">long</span> span<span class="token punctuation">;</span> <span class="token comment">// \u8DE8\u5EA6</span>
    <span class="token punctuation">}</span> level<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> zskiplistNode<span class="token punctuation">;</span>

<span class="token comment">// \u8DF3\u8868</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">zskiplist</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">zskiplistNode</span> <span class="token operator">*</span>header<span class="token punctuation">,</span> <span class="token operator">*</span>tail<span class="token punctuation">;</span> <span class="token comment">// \u5934\u3001\u5C3E\u8282\u70B9</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">long</span> length<span class="token punctuation">;</span> <span class="token comment">// \u8282\u70B9\u6570</span>
    <span class="token keyword">int</span> level<span class="token punctuation">;</span> <span class="token comment">// \u6700\u5927\u5C42\u6570</span>
<span class="token punctuation">}</span> zskiplist<span class="token punctuation">;</span>

<span class="token comment">// \u6709\u5E8F\u96C6\u5408 = dict + zskiplist</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">zset</span> <span class="token punctuation">{</span>
    dict <span class="token operator">*</span>dict<span class="token punctuation">;</span>
    zskiplist <span class="token operator">*</span>zsl<span class="token punctuation">;</span>
<span class="token punctuation">}</span> zset<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-zskiplist" tabindex="-1"><a class="header-anchor" href="#_2-zskiplist" aria-hidden="true">#</a> 2. zskiplist</h2><ul><li><strong>\u8DF3\u8868\u7279\u70B9</strong>\uFF1A <ul><li>\u67E5\u627E\u3001\u589E\u52A0\u3001\u5220\u9664 \u590D\u6742\u5EA6 O(logN)\uFF0C\u65E0\u7EF4\u62A4\u5E73\u8861\u64CD\u4F5C\uFF0C\u5BF9\u8DF3\u8868\u7684\u4FEE\u6539\u53EA\u53D1\u751F\u5728 <strong>\u5C40\u90E8</strong></li><li>\u5B9E\u73B0\u6BD4 <strong>\u7EA2\u9ED1\u6811</strong> \u8981\u7B80\u5355\u4E00\u4E9B</li><li>\u6700\u5E95\u5C42\u5B58\u653E\u6240\u6709\u6709\u5E8F\u8282\u70B9\uFF0C\u53EF\u5FEB\u901F <mark>\u8303\u56F4\u67E5\u8BE2</mark></li><li>Redis \u7684 zskiplist \u8FD8\u989D\u5916\u4FDD\u5B58\u4E86 <code>span</code> \u904D\u5386\uFF0C\u53EF\u5FEB\u901F\u5F97\u5230\u67D0\u4E2A \u8282\u70B9\u7684\u6392\u540D</li></ul></li></ul><h3 id="_1-\u968F\u673A\u5C42\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u968F\u673A\u5C42\u6570" aria-hidden="true">#</a> 1) \u968F\u673A\u5C42\u6570</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// \u83B7\u53D6\u8282\u70B9\u6240\u5904\u7684\u5C42\u6570</span>
<span class="token comment">// ZSKIPLIST_MAXLEVEL = 32</span>
<span class="token comment">// </span>
<span class="token comment">// \u6240\u6709\u8282\u70B9\u80AF\u5B9A\u4F1A\u5728 \u7B2C\u4E00\u5C42 \u51FA\u73B0</span>
<span class="token comment">// \u7B2C 2 \u5C42\u7684\u6982\u7387 = 0.5\uFF1B\u7B2C 3 \u5C42\u7684\u6982\u7387\u4E3A 0.25\uFF1B...\uFF1B\u7B2C 32 \u5C42\u7684\u6982\u7387\u4E3A 1/2^31</span>
<span class="token keyword">int</span> <span class="token function">zslRandomLevel</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">int</span> threshold <span class="token operator">=</span> ZSKIPLIST_P<span class="token operator">*</span>RAND_MAX<span class="token punctuation">;</span>
    <span class="token keyword">int</span> level <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> threshold<span class="token punctuation">)</span> <span class="token comment">// \u968F\u673A\u6570 \u5904\u4E8E \u6982\u7387\u8303\u56F4\u5185\uFF0C\u53EF\u4EE5\u8FDB\u5165\u4E0A\u4E00\u5C42</span>
        level <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>level<span class="token operator">&lt;</span>ZSKIPLIST_MAXLEVEL<span class="token punctuation">)</span> <span class="token operator">?</span> level <span class="token operator">:</span> ZSKIPLIST_MAXLEVEL<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u521B\u5EFA\u8DF3\u8868" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u8DF3\u8868" aria-hidden="true">#</a> 2) \u521B\u5EFA\u8DF3\u8868</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>zskiplist <span class="token operator">*</span><span class="token function">zslCreate</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> j<span class="token punctuation">;</span>
    zskiplist <span class="token operator">*</span>zsl<span class="token punctuation">;</span>

    zsl <span class="token operator">=</span> <span class="token function">zmalloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token operator">*</span>zsl<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7533\u8BF7\u5185\u5B58\u7A7A\u95F4</span>
    zsl<span class="token operator">-&gt;</span>level <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u521D\u59CB\u5C42\u6570\u4E3A 1</span>
    zsl<span class="token operator">-&gt;</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u8282\u70B9\u6570\u4E3A 0</span>
    zsl<span class="token operator">-&gt;</span>header <span class="token operator">=</span> <span class="token function">zslCreateNode</span><span class="token punctuation">(</span>ZSKIPLIST_MAXLEVEL<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A \u5C42\u6570\u4E3A 32\uFF0C\u6743\u91CD\u4E3A 0\uFF0C\u503C\u4E3A null \u7684\u5934\u8282\u70B9</span>
    <span class="token comment">// \u5934\u8282\u70B9\u521D\u59CB\u5316 - \u6BCF\u5C42\u8282\u70B9\u8FDB\u884C\u521D\u59CB\u5316</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> ZSKIPLIST_MAXLEVEL<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        zsl<span class="token operator">-&gt;</span>header<span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>forward <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> <span class="token comment">// \u524D\u7F6E\u8282\u70B9\u6307\u9488\u4E3A null</span>
        zsl<span class="token operator">-&gt;</span>header<span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>span <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u8DE8\u5EA6\u4E3A 0</span>
    <span class="token punctuation">}</span>
    zsl<span class="token operator">-&gt;</span>header<span class="token operator">-&gt;</span>backward <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    zsl<span class="token operator">-&gt;</span>tail <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> zsl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u63D2\u5165\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-\u63D2\u5165\u8282\u70B9" aria-hidden="true">#</a> 3) \u63D2\u5165\u8282\u70B9</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>zskiplistNode <span class="token operator">*</span><span class="token function">zslInsert</span><span class="token punctuation">(</span>zskiplist <span class="token operator">*</span>zsl<span class="token punctuation">,</span> <span class="token keyword">double</span> score<span class="token punctuation">,</span> sds ele<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    zskiplistNode <span class="token operator">*</span>update<span class="token punctuation">[</span>ZSKIPLIST_MAXLEVEL<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">*</span>x<span class="token punctuation">;</span> <span class="token comment">// \u8282\u70B9\u8DEF\u5F84</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">long</span> rank<span class="token punctuation">[</span>ZSKIPLIST_MAXLEVEL<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u7ECF\u8FC7\u7684\u8282\u70B9\u8DE8\u5EA6</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> level<span class="token punctuation">;</span>

    <span class="token function">serverAssert</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isnan</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    x <span class="token operator">=</span> zsl<span class="token operator">-&gt;</span>header<span class="token punctuation">;</span> <span class="token comment">// \u5934\u8282\u70B9</span>
    <span class="token comment">// \u641C\u7D22\u63D2\u5165\u8282\u70B9</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> zsl<span class="token operator">-&gt;</span>level<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/* store rank that is crossed to reach the insert position */</span>
        rank<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">==</span> <span class="token punctuation">(</span>zsl<span class="token operator">-&gt;</span>level<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> rank<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5F80\u53F3\u4E0B\u89D2\u67E5\u627E</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>x<span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>forward <span class="token operator">&amp;&amp;</span>
                <span class="token punctuation">(</span>x<span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>forward<span class="token operator">-&gt;</span>score <span class="token operator">&lt;</span> score <span class="token operator">||</span>
                    <span class="token punctuation">(</span>x<span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>forward<span class="token operator">-&gt;</span>score <span class="token operator">==</span> score <span class="token operator">&amp;&amp;</span>
                    <span class="token function">sdscmp</span><span class="token punctuation">(</span>x<span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>forward<span class="token operator">-&gt;</span>ele<span class="token punctuation">,</span>ele<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8FD9\u91CC\u8FD8\u6BD4\u8F83\u4E86 \u503C \u7684\u5927\u5C0F\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u51FA\u73B0 \u6743\u91CD\u76F8\u7B49 \u65F6 O(N) \u7684\u590D\u6742\u5EA6</span>
        <span class="token punctuation">{</span>
            rank<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> x<span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>span<span class="token punctuation">;</span>
            x <span class="token operator">=</span> x<span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>forward<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        update<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    level <span class="token operator">=</span> <span class="token function">zslRandomLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u751F\u6210\u968F\u673A\u5C42\u6570</span>
    <span class="token comment">// \u65B0\u751F\u6210\u7684\u8282\u70B9\u5C42\u6570 &gt; \u76EE\u524D\u6700\u5927\u5C42\u6570\uFF0C\u9700\u8981\u5C06\u5F53\u524D\u8282\u70B9\u66F4\u65B0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">&gt;</span> zsl<span class="token operator">-&gt;</span>level<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> zsl<span class="token operator">-&gt;</span>level<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> level<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rank<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            update<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> zsl<span class="token operator">-&gt;</span>header<span class="token punctuation">;</span>
            update<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>span <span class="token operator">=</span> zsl<span class="token operator">-&gt;</span>length<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        zsl<span class="token operator">-&gt;</span>level <span class="token operator">=</span> level<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    x <span class="token operator">=</span> <span class="token function">zslCreateNode</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span>score<span class="token punctuation">,</span>ele<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u8981\u63D2\u5165\u7684\u65B0\u8282\u70B9</span>
    <span class="token comment">// \u4E0B\u5C42\u8282\u70B9\u63D2\u5165</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> level<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x<span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>forward <span class="token operator">=</span> update<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>forward<span class="token punctuation">;</span>
        update<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>forward <span class="token operator">=</span> x<span class="token punctuation">;</span>

        <span class="token comment">/* update span covered by update[i] as x is inserted here */</span>
        x<span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>span <span class="token operator">=</span> update<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>span <span class="token operator">-</span> <span class="token punctuation">(</span>rank<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> rank<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        update<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>span <span class="token operator">=</span> <span class="token punctuation">(</span>rank<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> rank<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* increment span for untouched levels */</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> level<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> zsl<span class="token operator">-&gt;</span>level<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        update<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-&gt;</span>level<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>span<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    x<span class="token operator">-&gt;</span>backward <span class="token operator">=</span> <span class="token punctuation">(</span>update<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> zsl<span class="token operator">-&gt;</span>header<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token constant">NULL</span> <span class="token operator">:</span> update<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token operator">-&gt;</span>level<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>forward<span class="token punctuation">)</span>
        x<span class="token operator">-&gt;</span>level<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>forward<span class="token operator">-&gt;</span>backward <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        zsl<span class="token operator">-&gt;</span>tail <span class="token operator">=</span> x<span class="token punctuation">;</span>
    zsl<span class="token operator">-&gt;</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(m,b){const a=t("ExternalLinkIcon");return e(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[k,c(a)])])]),d])}var w=p(i,[["render",v],["__file","zset.html.vue"]]);export{w as default};