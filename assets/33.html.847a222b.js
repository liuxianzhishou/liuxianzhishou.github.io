import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.5aebcaaa.js";var p="/assets/img_3.02e12717.png",e="/assets/img_2.674a4dd4.png";const o={},c=t('<h1 id="_33-\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_33-\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4" aria-hidden="true">#</a> \u{1F315} \u{1F317} 33. \u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4</h1><p>\u96BE\u5EA6: \u{1F315} \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+p+`" alt="img_3.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u4E8C\u5206</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">mySol</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// System.out.println(nums[left] + &quot;  &quot; + nums[right]);</span>
        <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// left &lt; right</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u504F\u5DE6\u7684 mid</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> 
        <span class="token comment">// \u5224\u65AD\u533A\u95F4\u662F\u5426\u6709\u65CB\u8F6C\u70B9</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5355\u589E</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>target <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53F3\u533A\u95F4</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// mid \u53F3\u4FA7\u6709\u65CB\u8F6C\u70B9\uFF0C\u610F\u5473\u7740\u5DE6\u4FA7\u5355\u589E</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>target <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// target &lt; [mid]</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>target <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">// target &lt; [left]</span>
                    <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// mid \u5DE6\u4FA7\u6709\u65CB\u8F6C\u70B9\uFF0C\u610F\u5473\u7740\u53F3\u4FA7\u5355\u589E</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>target <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>target <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5DE6</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">mySol</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+e+'" alt="img_2.png"></p>',10),u=[c];function l(i,k){return s(),a("div",null,u)}var m=n(o,[["render",l],["__file","33.html.vue"]]);export{m as default};
