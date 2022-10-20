import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5aebcaaa.js";var t="/assets/img_11.2c8665e5.png",i="/assets/img_10.c62fc3df.png";const c={},p=e('<h1 id="_382-\u94FE\u8868\u968F\u673A\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_382-\u94FE\u8868\u968F\u673A\u8282\u70B9" aria-hidden="true">#</a> \u{1F315}\u{1F317} 382. \u94FE\u8868\u968F\u673A\u8282\u70B9</h1><p>\u96BE\u5EA6: \u{1F315}\u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+t+`" alt="img_11.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
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
    <span class="token comment">// \u601D\u8DEF\uFF1A</span>
    <span class="token comment">// \u84C4\u6C34\u6C60\u89E3\u6CD5</span>
    <span class="token comment">// \u8981\u60F3\u6BCF\u4E2A\u8282\u70B9\u88AB\u9009\u4E2D\u7684\u6982\u7387\u4E00\u6837\uFF0C\u90A3\u4E48\uFF0C\u5047\u8BBE\u603B\u8282\u70B9\u6570\u4E3A n\uFF0C\u6BCF\u4E2A\u8282\u70B9\u88AB\u9009\u4E2D\u7684\u6982\u7387\u5747\u4E3A 1/n</span>
    <span class="token comment">// \u73B0\u5728\u7684\u76EE\u6807\u662F\u600E\u4E48\u5F97\u5230 1/n?</span>
    <span class="token comment">// \u5047\u8BBE\u6700\u7EC8\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u4E3A k</span>
    <span class="token comment">// \u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 1/k * k/(k + 1) * ... * (n - 1)/n = 1/n \u5F97\u5230</span>
    <span class="token comment">// \u90A3\u4E48\u600E\u4E48\u89E3\u91CA\u4E0A\u5F0F\u7684\u542B\u4E49\uFF1F</span>
    <span class="token comment">// 1/k \u8868\u793A\u5728 k \u4E2A\u8282\u70B9\u4E2D\uFF0C\u67D0\u4E2A\u8282\u70B9\u6070\u597D\u88AB\u9009\u4E2D\u7684\u6982\u7387</span>
    <span class="token comment">// k/(k + 1) \u8868\u793A\u5728 (k + 1) \u4E2A\u8282\u70B9\u4E2D\uFF0C\u67D0\u4E2A\u8282\u70B9\u4E0D\u88AB\u9009\u4E2D\u7684\u6982\u7387</span>
    <span class="token comment">// \u95EE\uFF1Ak \u524D\u9762\u7684\u8282\u70B9\u662F\u5426\u88AB\u9009\u4E2D\u6709\u5F71\u54CD\u5417\uFF1F\u4E3A\u4EC0\u4E48\u5F0F\u5B50\u4ECE 1/k \u5F00\u59CB\u8BA1\u7B97\uFF0C\u524D\u9762\u7684\u4F8B\u5982 1/2, 2/3 \u8FD9\u4E9B\u4E3A\u4EC0\u4E48\u4E0D\u7528\u8003\u8651\uFF1F</span>
    <span class="token comment">// \u7B54\uFF1A</span>
    <span class="token comment">// \u8981\u4FDD\u8BC1\u6700\u7EC8\u9009\u4E2D\u7684\u8282\u70B9\u4E3A k\uFF0C\u90A3\u4E48\u8BF4\u660E\u540E\u9762\u7684\u8282\u70B9\u4E00\u5B9A\u4E0D\u88AB\u9009\u4E2D\uFF0C\u624D\u80FD\u5BFC\u81F4\u6700\u540E\u4FDD\u7559\u7684\u7ED3\u679C\u662F k\uFF0C\u5426\u5219\u4E00\u65E6\u5176\u4E2D\u67D0\u4E2A\u88AB\u9009\u4E2D\uFF0C\u7ED3\u679C\u91CC\u9762\u53D1\u751F\u66FF\u6362</span>
    <span class="token comment">// \u800C\u524D\u9762\u7684\u8282\u70B9\u65E0\u8BBA\u662F\u5426\u9009\u4E2D\uFF0C\u5047\u8BBE\u524D\u9762\u67D0\u4E2A\u8282\u70B9 m \u88AB\u9009\u4E2D\uFF0C\u4E4B\u540E k \u88AB\u9009\u4E2D\u662F\u4E00\u5B9A\u7684\uFF0C\u90A3\u4E48\u7ED3\u679C\u4F1A\u88AB\u66FF\u6362\u4E3A k</span>
    <span class="token comment">// \u5047\u8BBE\u524D\u9762\u67D0\u4E2A\u8282\u70B9 m \u6CA1\u6709\u88AB\u9009\u4E2D\uFF0C\u4E4B\u540E k \u88AB\u9009\u4E2D\uFF0C\u7ED3\u679C\u4ECD\u7136\u4F1A\u88AB\u66FF\u6362\u4E3A k</span>
    <span class="token comment">// \u56E0\u6B64\u53EF\u4EE5\u770B\u51FA\uFF0C\u6982\u7387 1/n \u53EA\u4E0E k \u53CA\u4EE5\u540E\u7684\u8282\u70B9\u6709\u5173\uFF0C\u524D\u9762\u7684\u65E0\u5173\uFF0C\u56E0\u6B64\u524D\u9762\u7684\u6982\u7387\u6052\u4E3A 1</span>
    <span class="token class-name">ListNode</span> head<span class="token punctuation">;</span>
    <span class="token class-name">Random</span> r<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> head<span class="token punctuation">;</span>
        r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> tmp <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0, count) \u56E0\u6B64 count == 1 \u65F6\u53EA\u80FD\u9009\u4E2D 0 \u8FD9\u4E2A\u6570</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>tmp <span class="token operator">==</span> count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u53EF\u4EE5\u9009\u62E9\u67D0\u4E2A\u4E0B\u6807\u4F5C\u4E3A\u662F\u5426\u88AB\u9009\u4E2D\u7684\u6807\u51C6\uFF0C\u8FD9\u91CC\u4EE5 [0, count) \u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9 count - 1 \u4E3A\u9776\u6D92</span>
                res <span class="token operator">=</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">;</span> 
            <span class="token punctuation">}</span>
            count <span class="token operator">++</span><span class="token punctuation">;</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(head);
 * int param_1 = obj.getRandom();
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+i+'" alt="img_10.png"></p><hr><h3 id="\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u9636" aria-hidden="true">#</a> \u8FDB\u9636</h3><ol><li>\u5982\u679C\u94FE\u8868\u975E\u5E38\u5927\u4E14\u957F\u5EA6\u672A\u77E5\uFF0C\u8BE5\u600E\u4E48\u5904\u7406\uFF1F \u4F60\u80FD\u5426\u5728\u4E0D\u4F7F\u7528\u989D\u5916\u7A7A\u95F4\u7684\u60C5\u51B5\u4E0B\u89E3\u51B3\u6B64\u95EE\u9898\uFF1F <ul><li>\u91C7\u7528 \u84C4\u6C34\u6C60 \u89E3\u6CD5</li></ul></li><li>\u82E5\u94FE\u8868\u8282\u70B9\u6570\u8F83\u5C11\uFF0C\u4E14\u9891\u7E41\u8C03\u7528 \u968F\u673A\u83B7\u53D6\u94FE\u8868\u8282\u70B9\u51FD\u6570\uFF1F <ul><li>\u5728\u521D\u59CB\u5316\u65F6\uFF0C\u5C06\u94FE\u8868\u8282\u70B9\u653E\u5165 ArrayList \u4E2D\uFF0C\u901A\u8FC7\u968F\u673A\u6570\u5FEB\u901F\u5B9A\u4F4D\u5230\u968F\u673A\u503C</li></ul></li></ol>',13),l=[p];function o(u,d){return s(),a("div",null,l)}var m=n(c,[["render",o],["__file","382.html.vue"]]);export{m as default};
