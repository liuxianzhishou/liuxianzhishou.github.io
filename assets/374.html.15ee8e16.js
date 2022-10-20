import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5aebcaaa.js";var t="/assets/img_54.7e4adbc8.png",p="/assets/img_53.a3bed1ba.png";const o={},c=e('<h1 id="_374-\u731C\u6570\u5B57\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#_374-\u731C\u6570\u5B57\u5927\u5C0F" aria-hidden="true">#</a> \u{1F317} 374. \u731C\u6570\u5B57\u5927\u5C0F</h1><p>\u96BE\u5EA6: \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_54.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/** 
 * Forward declaration of guess API.
 * <span class="token keyword">@param</span>  <span class="token parameter">num</span>   your guess
 * <span class="token keyword">@return</span> 	     -1 if num is lower than the guess number
 *			      1 if num is higher than the guess number
 *               otherwise return 0
 * int guess(int num);
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token keyword">extends</span> <span class="token class-name">GuessGame</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">guessNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u6839\u636E\u9898\u610F\u5199\u51FA\u8868\u8FBE\u5F0F</span>
        <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token keyword">int</span> low<span class="token punctuation">,</span> <span class="token keyword">int</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>low <span class="token operator">==</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> low<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u4E8C\u5206\uFF0C\u9996\u5148\u5224\u65AD\u4E0E\u4E2D\u70B9\u7684\u5927\u5C0F</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> low <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span>high <span class="token operator">-</span> low<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> tmp <span class="token operator">=</span> <span class="token function">guess</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>tmp <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>tmp <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>low<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+p+'" alt="img_53.png"></p>',10),i=[c];function l(u,r){return s(),a("div",null,i)}var m=n(o,[["render",l],["__file","374.html.vue"]]);export{m as default};
