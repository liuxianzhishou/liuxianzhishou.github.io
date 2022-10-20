import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.5aebcaaa.js";var p="/assets/img_11.b9f28691.png",e="/assets/img_10.92329462.png",o="/assets/img_12.f1edc058.png",c="/assets/img_13.0ed47728.png";const i={},l=t('<h1 id="_287-\u5BFB\u627E\u91CD\u590D\u6570" tabindex="-1"><a class="header-anchor" href="#_287-\u5BFB\u627E\u91CD\u590D\u6570" aria-hidden="true">#</a> \u{1F315}\u{1F317} 287. \u5BFB\u627E\u91CD\u590D\u6570</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+p+`" alt="img_11.png"></p><hr><h3 id="\u89E3\u6CD5-1-\u4E0D\u7B26\u5408\u9898\u610F" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1-\u4E0D\u7B26\u5408\u9898\u610F" aria-hidden="true">#</a> \u89E3\u6CD5 1 - \u4E0D\u7B26\u5408\u9898\u610F</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findDuplicate</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u539F\u5730\u4EA4\u6362</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// [0, len - 1] \u6B63\u597D\u6BCF\u4E2A\u4E0B\u6807\u5B58\u653E\u4E00\u4E2A\u6570\uFF0C\u6709\u4E2A\u4E0B\u6807\u5B58\u5728 2 \u4E2A\u6570</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">==</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                index <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u8BF4\u660E\u8981\u4EA4\u6362\u76842\u4E2A\u503C\u76F8\u7B49</span>
                    <span class="token keyword">return</span> nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> index<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> len<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> tmp <span class="token operator">=</span> nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+e+`" alt="img_10.png"></p><hr><h3 id="\u89E3\u6CD5-2-\u4E8C\u5206" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-\u4E8C\u5206" aria-hidden="true">#</a> \u89E3\u6CD5 2 - \u4E8C\u5206</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findDuplicate</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u9898\u76EE\u4E2D\u8981\u6C42\u4E0D\u53EF\u4EE5\u4FEE\u6539\u539F\u6570\u7EC4\uFF0C\u90A3\u4E48\u539F\u5730\u4EA4\u6362\u7981\u7528</span>
        <span class="token comment">// \u4E8C\u5206 - [1, len - 1] \u4E2D\u6709\u4E00\u4E2A\u6570\u51FA\u73B0\u4E86 2 \u6B21\uFF0C\u90A3\u4E48\u6BCF\u6B21\u9009\u62E9\u4E00\u4E2A\u53EF\u80FD\u7684\u7ED3\u679C\uFF0C\u5224\u65AD\u662F\u5DE6\u8FB9\u91CD\u590D\u8FD8\u662F\u53F3\u8FB9\u91CD\u590D\uFF0C\u76F4\u5230\u8FB9\u754C</span>
        <span class="token comment">// \u539F\u5730\u4EA4\u6362\u53EF\u8FBE\u5230 O(n) \u590D\u6742\u5EA6\uFF0C\u800C \u4E8C\u5206\u590D\u6742\u5EA6\u4E3A O(nlogn) \u5178\u578B\u7684\u4E3A\u4E86\u9898\u610F\uFF0C\u65F6\u95F4\u6362\u7A7A\u95F4\uFF0C\u5B9E\u9645\u5DE5\u4F5C\u4E2D\u4E0D\u5E38\u7528</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u82E5\u5DE6\u4FA7\u4E0D\u91CD\u590D\u4E14\u4E0D\u5B58\u5728\u7F3A\u5931\u7684\u6570\uFF0C[1, mid] \u7406\u5E94\u6709 mid \u4E2A\u6570</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                count <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// System.out.println(left + &quot;  &quot; + right + &quot;  &quot; + mid + &quot;  &quot; + count);</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">==</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5DE6\u4FA7\u4E0D\u91CD\u590D\uFF0C\u5F80\u53F3\u4FA7\u627E</span>
            <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">&lt;</span> mid<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u5DE6\u4FA7\u4E0D\u91CD\u590D\uFF0C\u4F46\u5B58\u5728\u7F3A\u5931\uFF0C\u5373\u67D0\u4E2A\u6570\u4E0D\u6B62\u51FA\u73B0\u4E86 2 \u6B21\uFF0C\u53EF\u80FD\u51FA\u73B0\u591A\u6B21\uFF0C\u4F46\u8FD8\u662F\u8981\u5F80\u53F3\u8FB9\u627E</span>
            <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-2" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-2" aria-hidden="true">#</a> \u8F93\u51FA 2</h3><p><img src="`+o+`" alt="img_12.png"></p><hr><h3 id="\u89E3\u6CD53-\u8F6C\u6362\u4E3A\u73AF\u5F62\u94FE\u8868\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD53-\u8F6C\u6362\u4E3A\u73AF\u5F62\u94FE\u8868\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u6CD53 - \u8F6C\u6362\u4E3A\u73AF\u5F62\u94FE\u8868\u95EE\u9898</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findDuplicate</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u5047\u8BBE [3, 1, 3, 4, 2] </span>
        <span class="token comment">// \u901A\u8FC7 \u4E0B\u6807 -&gt; \u503C \u7684\u65B9\u5F0F\u4E32\u6210\u94FE\u8868\uFF0C\u5373</span>
        <span class="token comment">// 0 -&gt; 3</span>
        <span class="token comment">// 1 -&gt; 1</span>
        <span class="token comment">// 2 -&gt; 3</span>
        <span class="token comment">// 3 -&gt; 4</span>
        <span class="token comment">// 4 -&gt; 2</span>
        <span class="token comment">// \u90A3\u4E48\u94FE\u8868\u8FDE\u63A5\u987A\u5E8F\u4E3A </span>
        <span class="token comment">// 3 -&gt; 4 -&gt; 2 -&gt; 3 \u5F62\u6210\u4E86\u4EE5 3 \u4E3A\u73AF\u5165\u53E3\u7684\u73AF\uFF0C\u5165\u53E3\u73AF\u7684\u503C\u5C31\u662F\u91CD\u590D\u7684\u5143\u7D20\u503C</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// [1, len - 1]</span>
        <span class="token comment">// \u5FEB\u6162\u6307\u9488\u627E\u73AF</span>
        <span class="token keyword">int</span> slow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> fast <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slow <span class="token operator">=</span> nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span><span class="token punctuation">;</span>
            fast <span class="token operator">=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">;</span>
            fast <span class="token operator">=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// System.out.println(fast + &quot;  &quot; + slow);</span>
        <span class="token comment">// x == z \u8BF4\u660E\u4ECE\u76F8\u9047\u4F4D\u7F6E\u5F00\u59CB\u8D70\u5230\u73AF\u5165\u53E3\u7684\u8DDD\u79BB == \u4ECE\u8D77\u59CB\u70B9\u5F00\u59CB\u8D70\u5230\u73AF\u5165\u53E3\u7684\u8DDD\u79BB</span>
        slow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">!=</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slow <span class="token operator">=</span> nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span><span class="token punctuation">;</span>
            fast <span class="token operator">=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> slow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-3" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-3" aria-hidden="true">#</a> \u8F93\u51FA 3</h3><p><img src="`+c+'" alt="img_13.png"></p>',22),u=[l];function k(r,d){return s(),a("div",null,u)}var b=n(i,[["render",k],["__file","287.html.vue"]]);export{b as default};
