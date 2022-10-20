import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.5aebcaaa.js";var p="/assets/img_10.cf715d72.png",e="/assets/img_9.3d74de35.png";const o={},c=t('<h1 id="_150-\u9006\u6CE2\u5170\u8868\u8FBE\u5F0F\u6C42\u503C" tabindex="-1"><a class="header-anchor" href="#_150-\u9006\u6CE2\u5170\u8868\u8FBE\u5F0F\u6C42\u503C" aria-hidden="true">#</a> \u{1F317} 150. \u9006\u6CE2\u5170\u8868\u8FBE\u5F0F\u6C42\u503C</h1><p>\u96BE\u5EA6: \u{1F317}</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><p><img src="'+p+`" alt="img_10.png"></p><hr><h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">evalRPN</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tokens<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u601D\u8DEF\uFF1A</span>
        <span class="token comment">// \u501F\u52A9 \u6808</span>
        <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> str <span class="token operator">:</span> tokens<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u8FD9\u662F\u4E00\u4E2A\u8FD0\u7B97\u7B26\uFF0C\u9700\u8981\u8FDB\u884C\u8BA1\u7B97</span>
                <span class="token keyword">int</span> b <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> a <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    res <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    res <span class="token operator">=</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    res <span class="token operator">=</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    res <span class="token operator">=</span> a <span class="token operator">/</span> b<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u8FD9\u662F\u4E00\u4E2A\u6570\u503C</span>
                <span class="token keyword">int</span> cur <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h3><p><img src="`+e+'" alt="img_9.png"></p>',10),l=[c];function u(i,k){return s(),a("div",null,l)}var v=n(o,[["render",u],["__file","150.html.vue"]]);export{v as default};