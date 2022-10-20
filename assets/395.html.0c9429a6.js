import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_18.dc860f1e.png",e="/assets/img_17.2f4b3aff.png",o="/assets/img_19.312451ac.png";const c={},l=p('<h1 id="_395-\u81F3\u5C11\u6709-k-\u4E2A\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32" tabindex="-1"><a class="header-anchor" href="#_395-\u81F3\u5C11\u6709-k-\u4E2A\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32" aria-hidden="true">#</a> \u{1F315}\u{1F315} 395. \u81F3\u5C11\u6709 K \u4E2A\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_18.png"></p><hr><h3 id="\u89E3\u6CD5-1-\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1-\u9012\u5F52" aria-hidden="true">#</a> \u89E3\u6CD5 1 - \u9012\u5F52</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">longestSubstring</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u5C06 s \u5206\u89E3\u6210\u5C0F\u5B57\u7B26\u4E32</span>
        <span class="token comment">// \u904D\u5386 s\uFF0C\u627E\u5230\u7EDF\u8BA1\u6240\u6709\u5B57\u7B26\u5404\u81EA\u51FA\u73B0\u6B21\u6570\uFF0C\u5982\u679C\u67D0\u4E2A\u5B57\u7B26 x \u51FA\u73B0\u6B21\u6570\u5C0F\u4E8E k\uFF0C\u8BF4\u660E\u5305\u542B x \u7684\u5B57\u7B26\u4E32\u5747\u65E0\u6548</span>
        <span class="token comment">// \u56E0\u6B64\u53EF\u4EE5\u4EE5 x \u4E3A\u5355\u4F4D\uFF0C\u5C06 s \u5207\u5206\u6210\u4E00\u4E2A\u4E2A\u4E0D\u5305\u542B x \u7684\u5C0F\u5B57\u7B26\u4E32\u6570\u7EC4</span>
        <span class="token comment">// \u904D\u5386\u5C0F\u5B57\u7B26\u4E32\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5C0F\u5B57\u7B26\u4E32\uFF0C\u518D\u6B21\u7EDF\u8BA1\u8BE5\u5C0F\u5B57\u7B26\u4E32\u4E2D\u6240\u6709\u5B57\u7B26\u5404\u81EA\u51FA\u73B0\u6B21\u6570\uFF0C...\uFF0C\u4EE5\u6B64\u9012\u5F52</span>
        <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>k <span class="token operator">&gt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// k &lt;= len</span>
        <span class="token comment">// \u7EDF\u8BA1\u6240\u6709\u5B57\u7B26\u51FA\u73B0\u6B21\u6570</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token operator">:</span> str<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> index <span class="token operator">=</span> c <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u627E\u51FA\u4E0D\u6EE1\u8DB3 k \u6B21\u7684\u5B57\u7B26</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> len<span class="token punctuation">;</span> <span class="token comment">// \u5982\u679C\u4E0D\u5B58\u5728\u4E0D\u6EE1\u8DB3 k \u6B21\u7684\u5B57\u7B26\uFF0C\u8BF4\u660E\u6574\u4E2A\u5B57\u7B26\u4E32\u6709\u6548</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">26</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">char</span> c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// \u4EE5 c \u8FDB\u884C\u62C6\u5206</span>
                <span class="token keyword">int</span> tmp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> num <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> cur<span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    tmp <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> <span class="token function">mySol</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> tmp<span class="token punctuation">;</span> <span class="token comment">// \u627E\u5230\u4E00\u4E2A\u4E0D\u6EE1\u8DB3\u6761\u4EF6\u7684\u5C31\u5207\u5206\uFF0C\u5F97\u5230\u7ED3\u679C\u76F4\u63A5\u8FD4\u56DE\uFF0C\u800C\u65E0\u9700\u518D\u6B21\u5BFB\u627E\u5176\u4ED6\u4E0D\u6EE1\u8DB3\u6761\u4EF6\u7684\u5B57\u7B26\u8FDB\u884C\u5207\u5206</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+e+`" alt="img_17.png"></p><hr><h3 id="\u89E3\u6CD5-2-\u6ED1\u52A8\u7A97\u53E3" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-\u6ED1\u52A8\u7A97\u53E3" aria-hidden="true">#</a> \u89E3\u6CD5 2 - \u6ED1\u52A8\u7A97\u53E3</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">longestSubstring</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u5982\u679C\u662F\u5355\u7EAF\u7684\u6ED1\u52A8\u7A97\u53E3\uFF0C\u5047\u8BBE\u5F53\u524D\u65F6\u523B\u4E0B\u6EE1\u8DB3\u8981\u6C42\uFF0C\u5411\u53F3\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\u540E\uFF0C\u4E0D\u6EE1\u8DB3\u8981\u6C42\uFF0C\u90A3\u4E48\u6B64\u65F6\uFF0C\u6307\u9488\u5982\u4F55\u6ED1\u52A8\u7684\u4E0D\u786E\u5B9A\u7684</span>
        <span class="token comment">// \u5047\u8BBE\u5411\u5DE6\u6ED1\u52A8\uFF0C\u9700\u8981\u53BB\u6389\u5DE6\u8FB9\u754C\u6240\u5728\u5B57\u7B26\u548C\u51CF\u53BB\u6B21\u6570</span>
        <span class="token comment">// \u5047\u8BBE\u5411\u53F3\u6ED1\u52A8\uFF0C\u65E0\u6CD5\u4FDD\u8BC1\u5411\u53F3\u4E4B\u540E\u80FD\u6EE1\u8DB3\u53F3\u8FB9\u754C\u7684\u5143\u7D20\u8FBE\u5230\u6B21\u6570\uFF0C\u4E14\u6574\u4F53\u6EE1\u8DB3\u6761\u4EF6\uFF1B\u5F53\u7136\u4E5F\u65E0\u6CD5\u4FDD\u8BC1\u4E00\u5B9A\u65E0\u6CD5\u6EE1\u8DB3\u6761\u4EF6</span>
        <span class="token comment">// \u56E0\u6B64\uFF0C\u8FD9\u6837\u662F\u65E0\u6CD5\u8FDB\u884C\u7A97\u53E3\u6ED1\u52A8\u7684</span>

        <span class="token comment">// \u800C\u5982\u679C\u5728\u4E00\u4E2A\u5927\u524D\u63D0\u4E0B\uFF0C\u5373\uFF0C\u56FA\u5B9A\u5F53\u524D\u6ED1\u52A8\u7A97\u53E3\u4E2D\u80FD\u591F\u51FA\u73B0\u5B57\u7B26\u7684\u79CD\u7C7B\u6570\uFF0C\u518D\u8FDB\u884C\u6ED1\u52A8</span>
        <span class="token comment">// \u5047\u8BBE\u5F53\u524D\u65F6\u523B\u4E0B\u6EE1\u8DB3\u8981\u6C42\uFF0C\u5411\u53F3\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\u540E\uFF1A</span>
        <span class="token comment">// \u5982\u679C\u5143\u7D20\u5728\u79CD\u7C7B\u6570\u8303\u56F4\u5185\uFF0C\u5411\u53F3\u6ED1\u52A8\u7A97\u53E3</span>
        <span class="token comment">// \u82E5\u5143\u7D20\u6DFB\u52A0\u540E\u8D85\u51FA\u79CD\u7C7B\u6570\u8303\u56F4\uFF0C\u5411\u5DE6\u6ED1\u52A8\u7A97\u53E3</span>
        <span class="token comment">// \u4ECE\u800C\u4FDD\u8BC1\u4E86\u7A97\u53E3\u6ED1\u52A8\u7684\u786E\u5B9A\u6027</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// \u53EA\u6709 26 \u4E2A\u5C0F\u5199\u5B57\u6BCD\uFF0C\u56E0\u6B64\u5B57\u7B26\u79CD\u7C7B\u6570\u2208[1, 26]</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token keyword">var</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">var</span> <span class="token operator">&lt;=</span> <span class="token number">26</span><span class="token punctuation">;</span> <span class="token keyword">var</span> <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u7EDF\u8BA1\u53EA\u80FD\u51FA\u73B0 var \u79CD\u5B57\u7B26\u7684\u60C5\u51B5\u4E0B\uFF0C\u6EE1\u8DB3\u6761\u4EF6\u7684\u6700\u957F\u5B57\u4E32\u957F\u5EA6</span>
            <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u5B57\u7B26\u603B\u6570</span>
            <span class="token keyword">int</span> qualCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u6EE1\u8DB3\u51FA\u73B0\u6B21\u6570\u8FBE\u5230 k \u6B21\u7684\u5B57\u7B26\u603B\u6570</span>
            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u5B58\u653E\u6BCF\u4E2A\u5B57\u7B26\u7684\u51FA\u73B0\u6B21\u6570</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u5DE6\u53F3\u6307\u9488</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> j <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> index <span class="token operator">=</span> c <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
                arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token comment">// \u5224\u65AD\u662F\u5426\u9700\u8981\u66F4\u65B0 count &amp; qualCount</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    count <span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// \u53EA\u6709\u4ECE 0 - 1 \u65F6\u66F4\u7EC6</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">==</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    qualCount <span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// \u6BCF\u6B21\u5411\u53F3\u6DFB\u52A0\u4E00\u4E2A\u5B57\u7B26\u540E\uFF0C\u5224\u65AD\u5F53\u524D\u7A97\u53E3\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6</span>
                <span class="token comment">// \u5982\u679C\u4E0D\u6EE1\u8DB3\uFF0C\u9700\u8981\u7F29\u51CF\u5DE6\u7A97\u53E3</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">char</span> left <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">int</span> tmpIndex <span class="token operator">=</span> left <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>tmpIndex<span class="token punctuation">]</span> <span class="token operator">==</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        qualCount <span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>tmpIndex<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        count <span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    arr<span class="token punctuation">[</span>tmpIndex<span class="token punctuation">]</span> <span class="token operator">--</span><span class="token punctuation">;</span>
                    i <span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// \u79CD\u7C7B\u6570\u6EE1\u8DB3\u8981\u6C42\uFF0C\u5224\u65AD\u662F\u5426\u6240\u6709\u5B57\u7B26\u5747\u8FBE\u5230 k \u6B21</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">==</span> qualCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    res <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                j <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-2" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-2" aria-hidden="true">#</a> \u8F93\u51FA 2</h3><p><img src="`+o+'" alt="img_19.png"></p>',16),i=[l];function u(k,r){return s(),a("div",null,i)}var v=n(c,[["render",u],["__file","395.html.vue"]]);export{v as default};
