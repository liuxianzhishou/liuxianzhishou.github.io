import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5aebcaaa.js";var i="/assets/img_23.58e5aa5f.png",t="/assets/img_22.033c0709.png";const c={},l=e('<h1 id="_292-nim-\u6E38\u620F" tabindex="-1"><a class="header-anchor" href="#_292-nim-\u6E38\u620F" aria-hidden="true">#</a> \u{1F317} 292. Nim \u6E38\u620F</h1><p>\u96BE\u5EA6: \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+i+`" alt="img_23.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">canWinNim</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u5217\u4E3E\u60C5\u51B5\uFF0C\u53EF\u4EE5\u770B\u51FA</span>
        <span class="token comment">// n == 1 true</span>
        <span class="token comment">// n == 2 true</span>
        <span class="token comment">// n == 3 true</span>
        <span class="token comment">// n == 4 false</span>
        <span class="token comment">// n == 5 true</span>
        <span class="token comment">// n == 6 true</span>
        <span class="token comment">// n == 7 true</span>
        <span class="token comment">// n == 8 false</span>
        <span class="token comment">// \u6EE1\u8DB3\u516C\u5F0F dp[i] = !dp[i - 1] | !dp[i - 2] | !dp[i - 3] </span>
        <span class="token comment">// \u5373\uFF0C\u62FF\u8D70 1-3 \u9897\u77F3\u5934\u540E\uFF0C\u4FDD\u8BC1\u5BF9\u65B9\u4E3A false \u90A3\u4E48\u5DF1\u65B9\u53EF\u4EE5\u4E3A true</span>
        <span class="token comment">// \u53E6\u5916\uFF0C\u53EF\u4EE5\u770B\u51FA\uFF0C\u53EA\u8981\u662F 4 \u7684\u500D\u6570\u5DF1\u65B9\u5C31\u8F93</span>
        <span class="token keyword">return</span> n <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+t+'" alt="img_22.png"></p>',10),p=[l];function o(r,d){return s(),a("div",null,p)}var v=n(c,[["render",o],["__file","292.html.vue"]]);export{v as default};
