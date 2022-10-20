import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5aebcaaa.js";var p="/assets/img_3.f6992daa.png",t="/assets/img_2.e4c33db4.png";const o={},c=e('<h1 id="_25-k-\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#_25-k-\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868" aria-hidden="true">#</a> \u{1F315} 25. K \u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868</h1><p>\u96BE\u5EA6: \u{1F315}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+p+`" alt="img_3.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode() <span class="token punctuation">{</span><span class="token punctuation">}</span>
 *     ListNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span>
 *     ListNode(int val, ListNode next) <span class="token punctuation">{</span> this.val = val; this.next = next; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseKGroup</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u6BCF\u627E\u5230 k \u4E2A\u8282\u70B9\uFF0C\u5C06\u5176\u548C\u540E\u9762\u7684\u8282\u70B9\u62C6\u5206\uFF0C\u8FD9 k \u4E2A\u8282\u70B9\u5355\u72EC\u7FFB\u8F6C\uFF0C\u7136\u540E\u548C\u524D\u540E\u7684\u672C\u6765\u8282\u70B9\u4E32\u8D77\u6765</span>
        <span class="token class-name">ListNode</span> res <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u4FDD\u5B58\u7B2C\u4E00\u4E2A\u7FFB\u8F6C\u540E\u7684\u5934\u7ED3\u70B9\uFF0C\u4F5C\u4E3A res</span>
        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> l <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> r <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>r <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                r <span class="token operator">=</span> r<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>r <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>res <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// \u8BF4\u660E\u957F\u5EA6\u4E00\u6B21\u4E5F\u6CA1\u6709\u53CD\u8F6C\u8FC7</span>
                        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// \u5C06 r \u548C\u540E\u9762\u7684\u8282\u70B9\u62C6\u5206</span>
            <span class="token class-name">ListNode</span> next <span class="token operator">=</span> r<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            r<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5982\u679C\u4E0D\u662F\u7B2C\u4E00\u6B21\u62C6\u5206\uFF0C\u90A3\u4E48\u8FD8\u9700\u8981\u5C06 l \u548C\u540E\u9762\u7684\u8282\u70B9\u62C6\u5206</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>pre <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pre<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">ListNode</span> tt <span class="token operator">=</span> l<span class="token punctuation">;</span> <span class="token comment">// \u53CD\u8F6C\u540E\u7684\u5C3E\u8282\u70B9\u4E3A\u53CD\u8F6C\u524D\u7684\u5934\u7ED3\u70B9\uFF0C\u5934\u7ED3\u70B9\u76EE\u524D\u5DF2\u77E5</span>
            <span class="token class-name">ListNode</span> hh <span class="token operator">=</span> <span class="token function">reverse</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53CD\u8F6C\u90E8\u5206\u7684\u5C3E\u8282\u70B9</span>
            <span class="token comment">// \u8FDB\u884C\u62FC\u63A5</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>pre <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pre<span class="token punctuation">.</span>next <span class="token operator">=</span> hh<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            tt<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
            <span class="token comment">// \u4FEE\u6539\u53D8\u91CF\u5BF9\u5E94\u7684\u8282\u70B9</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>res <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res <span class="token operator">=</span> hh<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            pre <span class="token operator">=</span> tt<span class="token punctuation">;</span>
            l <span class="token operator">=</span> next<span class="token punctuation">;</span>
            r <span class="token operator">=</span> l<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">ListNode</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">ListNode</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+t+'" alt="img_2.png"></p>',10),l=[c];function i(u,r){return s(),a("div",null,l)}var v=n(o,[["render",i],["__file","25.html.vue"]]);export{v as default};
