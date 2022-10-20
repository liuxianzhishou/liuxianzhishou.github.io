import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.5aebcaaa.js";var t="/assets/img_15.7f1e75ee.png",e="/assets/img_14.5099b704.png",o="/assets/img_16.7853a6ee.png",c="/assets/img_17.5883cfb0.png";const i={},l=p('<h1 id="_268-\u4E22\u5931\u7684\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#_268-\u4E22\u5931\u7684\u6570\u5B57" aria-hidden="true">#</a> \u{1F317} 268. \u4E22\u5931\u7684\u6570\u5B57</h1><p>\u96BE\u5EA6: \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_15.png"></p><hr><h3 id="\u89E3\u6CD5-1-\u539F\u5730-hash" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-1-\u539F\u5730-hash" aria-hidden="true">#</a> \u89E3\u6CD5 1 - \u539F\u5730 hash</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u904D\u5386</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">==</span> index <span class="token operator">||</span> nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">==</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                index <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> index<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u518D\u6B21\u904D\u5386\uFF0C\u6C42\u7F3A\u5931</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> i<span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-1" aria-hidden="true">#</a> \u8F93\u51FA 1</h3><p><img src="`+e+`" alt="img_14.png"></p><hr><h3 id="\u89E3\u6CD5-2-\u4F4D\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-2-\u4F4D\u8FD0\u7B97" aria-hidden="true">#</a> \u89E3\u6CD5 2 - \u4F4D\u8FD0\u7B97</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// [0, n] \u4E2D\u53EA\u6709\u4E00\u4E2A\u5143\u7D20\u6CA1\u6709\u51FA\u73B0\uFF0C\u90A3\u4E48\u518D\u52A0\u4E0A [0, n]\u540E\uFF0C\u53D8\u4E3A [0, n] \u4E2D\u53EA\u6709\u4E00\u4E2A\u6570\u51FA\u73B0\u8FC7\u4E00\u6B21</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> tmp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tmp <span class="token operator">^=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tmp <span class="token operator">^=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> tmp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-2" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-2" aria-hidden="true">#</a> \u8F93\u51FA 2</h3><p><img src="`+o+`" alt="img_16.png"></p><hr><h3 id="\u89E3\u6CD5-3-\u6570\u5B66" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5-3-\u6570\u5B66" aria-hidden="true">#</a> \u89E3\u6CD5 3 - \u6570\u5B66</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// [0, n] \u6240\u6709\u5143\u7D20\u548C == (len + 1) * len / 2</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> len <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA-3" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-3" aria-hidden="true">#</a> \u8F93\u51FA 3</h3><p><img src="`+c+'" alt="img_17.png"></p>',22),u=[l];function r(k,d){return s(),a("div",null,u)}var b=n(i,[["render",r],["__file","268.html.vue"]]);export{b as default};