import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5aebcaaa.js";var t="/assets/img.ec9ff686.png",i="/assets/img_1.9a4e6c5b.png";const c={},p=e('<h1 id="_237-\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_237-\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" aria-hidden="true">#</a> \u{1F315} \u{1F317} 237. \u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9</h1><p>\u96BE\u5EA6: \u{1F315} \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u5E0C\u671B\u5220\u9664cur\uFF0C\u82E5\u77E5\u9053 prev, \u53EF\u4EE5\u5C06 prev.next \u6307\u5411 next</span>
        <span class="token comment">// \u7531\u4E8E\u76EE\u524D\u4E0D\u77E5\u9053\u4E0A\u4E00\u4E2A\u8282\u70B9\uFF0C\u53EF\u4EE5\u5C06 cur \u5F53\u6210 prev\uFF0Ccur.next = next</span>
        <span class="token comment">// \u7136\u540E\u5220\u9664 next \u8282\u70B9\uFF0C\u5C06 next \u8282\u70B9\u79FB\u5230 cur \u8282\u70B9\uFF0Cnext \u8282\u70B9\u4E3A cur \u8282\u70B9</span>
        <span class="token keyword">int</span> val <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+i+'" alt="img_1.png"></p>',10),o=[p];function l(d,r){return s(),a("div",null,o)}var m=n(c,[["render",l],["__file","237.html.vue"]]);export{m as default};
